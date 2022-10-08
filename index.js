const express = require('express');
const path = require('path');
const seedrandom = require('seedrandom');
const date = new Date;
const { readFileSync, promises: fsPromises } = require('fs');
const app = express()
const port = process.env.PORT || 3000


app.use(express.static("www"))
app.use('/', express.static('static'));
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`MOTUS main API listening on port ${port}`)
})
app.get('/proxy', (req, res) => {
    out = 'MOTUS APP working on port ' + port;
    res.send(out);
})

app.get('/', (req, res) => {res.redirect('motus.html')})


var session = require('express-session');
app.set('trust proxy', 1)
app.use(session({
    secret: "Random",
    saveUninitialized: true,
    resave: false
}));

/*
// Verifie si le joueur est connecté
app.use((req, res, next) => {
    if (req.session.user) {
        console.log("debug1")
        console.log(req.session.user)
        next()
    } else {
        console.log("debug2")
        res.redirect('login.html')
    }
});*/

app.use('/login', (req, res) => {
    if (req.session.user!= null){
        res.redirect('/')
    }
    res.redirect('login.html')
});
app.use('/register', (req, res) => {
    if (req.session.user!= null){
        res.redirect('/')
    }
    res.redirect('login.html')
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
