const express = require('express');
const path = require('path');
const seedrandom = require('seedrandom');
const date = new Date;
const { readFileSync, promises: fsPromises } = require('fs');
//const os = require('node:os');
const app = express()
const port = process.env.PORT || 3000


app.use(express.static("www"))
app.use('/', express.static('static'));

app.listen(port, () => {
    console.log(`MOTUS main API listening on port ${port}`)
})



//Pour le mot aléatoire :

function random_item(items) {
    var seed = seedrandom(date.toDateString())()
    return items[Math.floor(seed * items.length)]
}

app.get('/word', (req, res) => {

    const d = new Date();
    let day = d.getDay();
    var text_array = readFileSync('data/liste_francais_utf8.txt').toString().split("\n");

    var word = random_item(text_array);
    word = "vendredi"; //Pour test plus vite

    res.send(word);
})



app.get('/proxy', (req, res) => {

    //Probleme avec os
    out = 'MOTUS APP working on os.hostname port ' + port;

    res.send(out);
})
