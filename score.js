const express = require('express')
const app = express()
const port = 3001
const { readFileSync, promises: fsPromises } = require('fs')
var fs = require('fs')


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

app.use('/print_score', (req, res) => {
    var json = JSON.parse(readFileSync('data/score.json').toString());

    if (!json[req.body.user]) {
        res.send({ score: 0, average: 0 })
    }

    score = json[req.body.user].score
    average = json[req.body.user].average_tries

    res.send({ score, average })
})
