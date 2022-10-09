const express = require('express')
const app = express()
const port = 3002
const { readFileSync, promises: fsPromises } = require('fs')
session = require('express-session');
var fs = require('fs')


app.use(express.static("www"))
app.use('/', express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.listen(port, () => {
    console.log(`MOTUS Auth API listening on port ${port}`)
})


app.set('trust proxy', 1)
app.use(session({
    secret: "jrjsdkdmq",
    saveUninitialized: true,
    resave: false
}));



// Fonctions de redirections :
app.use('/session', (req, res) => {
    if (typeof session === 'undefined') { res.send("session detruite") }
    else { res.send("session variables : " + JSON.stringify(session)) }
})

// Retourne le nom de l'utilisateur connecté :
app.use('/get_user', (req, res) => {
    if (typeof session === 'undefined' || typeof session.user === 'undefined') {
        res.send()
    }
    else {
        res.send({ user: session.user })
    } //Difference entre session et req.session ?
})
app.use('/logout', (req, res) => {
    delete session
    console.log('Logged out')
    res.redirect('http://localhost:3000/login');
})

// Return true if the 2 dates are the same, regardless of the time of the day
function sameDate(date1, date2) {
    date1 = new Date(date1)
    date2 = new Date(date2)

    if (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    ) { return true }
    else { return false }
}

// Retourne vrai si le joueur a deja joué aujourd'hui
app.use('/has_played', (req, res) => {

    const d = new Date().toLocaleDateString("en");//Date courante
    var json = JSON.parse(readFileSync('data/user.json').toString());
    last_game = new Date(json[session.user].last_game).toLocaleDateString("en")

    if (sameDate(d, last_game)) {
        res.send({ has_played: true })
    }
    else { //Si il a jamais joué, il rentrera aussi dans le else. Par défaut la date est mise à ""
        res.send({ has_played: false })
    }
})



const { createHash } = require('crypto');
function hash(string) { return createHash('sha256').update(string).digest('hex'); }

app.use('/check_login', (req, res) => {
    var json = JSON.parse(readFileSync('data/user.json').toString());
    session = req.session

    //1 : Verifier que le user existe
    if (json.hasOwnProperty(req.body.user)) {
        console.log("Username found")

        //2 : verifier le password
        if (json[req.body.user].password == hash(req.body.password)) {
            session.user = req.body.user;

            console.log('logged in')
            res.send({ user: session.user })
        }
        else {
            res.send({ status: 'fail', err: 'Invalid password, please try again' });
        }
    }
    else {
        res.send({ status: 'fail', err: 'Unknown username, please try again' });
    }
})

app.use('/register', (req, res) => {
    var json = JSON.parse(readFileSync('data/user.json').toString());
    session = req.session

    //1 : Verifier si le user existe pas deja
    if (!json.hasOwnProperty(req.body.user)) {

        json[req.body.user] = { password: hash(req.body.password), last_game: "" };
        fs.writeFile("data/user.json", JSON.stringify(json, null, '\t'), function (err) {
            if (err) {
                console.log(err);
            }
        });

        session.user = req.body.user;
        res.send({ user: session.user })

    }
    else {
        res.send({ status: 'fail', err: 'This username already exists, please try again' });
    }
})
