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


// TODO trouver comment passer les vars de session de auth.js ici
//const user = "Youssef"


// Fonctions de redirections :


app.use('/win_game', (req, res) => {
    var json = JSON.parse(readFileSync('data/score.json').toString());

    json[req.body.user].score = json[req.body.user].score + 1
    json[req.body.user].average_tries = (json[req.body.user].average_tries * (json[req.body.user].score - 1) + parseInt(req.body.attempts)) / json[req.body.user].score


    fs.writeFile("data/score.json", JSON.stringify(json, null,'\t'), function (err) {
        if (err) {
            console.log(err);
        }
    });

    res.redirect('')
    res.send("ok")
})

app.use('/print_score', (req, res) => {
    var json = JSON.parse(readFileSync('data/score.json').toString());

    score = json[req.body.user].score
    average = json[req.body.user].average_tries

    res.send({ score, average })
})
