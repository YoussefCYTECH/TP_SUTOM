const express = require('express')
const app = express()
const port = 8082
const { readFileSync, promises: fsPromises } = require('fs')
var fs = require('fs')

const loki_uri = process.env.LOKI || "http://127.0.0.1:4100";
const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");
const options = {
    transports: [
        new LokiTransport({
            host: loki_uri
        })
    ]
};
const logger = createLogger(options);

app.use(express.static("www"))
app.use('/', express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.listen(port, () => {
    console.log(`MOTUS Score API listening on port ${port}`)
})


// Recoit le nom du user connecté et le nombre d'essais pour gagner
app.use('/win_game', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Player won the game' } })
    var json = JSON.parse(readFileSync('data/score.json').toString());

    // Si c'est la 1ere fois qu'il joue on l'initialise
    if (!json[req.body.user]) {
        json[req.body.user] = { score: 0, average_tries: 0 };
    }
    json[req.body.user].score = json[req.body.user].score + 1
    json[req.body.user].average_tries = (json[req.body.user].average_tries * (json[req.body.user].score - 1) + parseInt(req.body.attempts)) / json[req.body.user].score

    fs.writeFile("data/score.json", JSON.stringify(json, null, '\t'), function (err) {
        if (err) {
            console.log(err);
        }
    });

    //On met aussi à jour la date de la derniere partie
    const d = new Date().toLocaleDateString("en");
    var json_user = JSON.parse(readFileSync('data/user.json').toString());
    json_user[req.body.user].last_game = d

    fs.writeFile("data/user.json", JSON.stringify(json_user, null, '\t'), function (err) {
        if (err) {
            console.log(err);
        }
    });

    res.send("ok")
})

// Recoit le nom du user connecté et doit mettre à jour la date de derniere partie dans la BDD
app.use('/lose_game', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Player lost the game' } })
    
    const d = new Date().toLocaleDateString("en");
    var json_user = JSON.parse(readFileSync('data/user.json').toString());
    json_user[req.body.user].last_game = d

    fs.writeFile("data/user.json", JSON.stringify(json_user, null, '\t'), function (err) {
        if (err) {
            console.log(err);
        }
    });

    res.send("ok")
})



app.use('/print_score', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Getting score'} })
    var json = JSON.parse(readFileSync('data/score.json').toString());

    if (!json[req.body.user]) {
        res.send({ score: 0, average: 0 })
    }
    else {
        score = json[req.body.user].score
        average = json[req.body.user].average_tries

        res.send({ score, average })
    }
})


app.use('/get_leaderboard', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Getting leaderboard'} })
    var json = JSON.parse(readFileSync('data/score.json').toString());
    res.send(json)
})
