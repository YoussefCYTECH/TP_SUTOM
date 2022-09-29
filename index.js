const express = require('express')
const app = express()
const port = 3000

app.use(express.static("www"))
app.use('/', express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Fonctions de redirections :

app.get('/mot', (req, res) => {

    var fs = require('fs');
    var text_array = fs.readFileSync('data/liste_francais_utf8.txt').toString().split("\n");
    var mot = text_array[1];
    mot = "vendredi"; //Pour test

/*
    const d = new Date();
    let day = d.getDay();
    let word = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"][day]*/

    res.send(mot);
})
