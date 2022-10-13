const express = require('express');
const path = require('path');
const seedrandom = require('seedrandom');
const date = new Date;
const { readFileSync, promises: fsPromises } = require('fs');
const app = express()
const port = process.env.PORT || 8080

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
const logger =createLogger(options);


app.use(express.static("www"))
app.use('/', express.static('static'));
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => { console.log(`MOTUS main API listening on port ${port}`) })
app.get('/proxy', (req, res) => {
    out = 'MOTUS APP working on port ' + port;
    res.send(out);
})


// Redirections :
app.get('/', (req, res) => { res.redirect('motus.html') })
app.use('/login', (req, res) => { res.redirect('login.html') });
app.use('/register', (req, res) => { res.redirect('register.html') })
app.use('/score', (req, res) => { res.redirect('score.html') })


//Pour le mot aléatoire :

function random_item(items) {
    var seed = seedrandom(date.toDateString())()
    return items[Math.floor(seed * items.length)]
}

app.get('/word', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Asking word of the day'} })

    const d = new Date();
    let day = d.getDay();
    var text_array = readFileSync('data/liste_francais_utf8.txt').toString().split("\n");

    var word = random_item(text_array);
    word = "vendredi"; //Pour test plus vite
    //console.log(word)//Pour test plus vite

    res.send(word);
})
