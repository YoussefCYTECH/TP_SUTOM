const express = require('express')
const app = express()
const port = 8081
const { readFileSync, promises: fsPromises } = require('fs')
session = require('express-session');
var fs = require('fs')


const loki_uri = process.env.LOKI || "http://127.0.0.1:3100";
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
    console.log(`MOTUS Auth API listening on port ${port}`)
})


app.set('trust proxy', 1)
app.use(session({
    secret: "jrjsdkdmq",
    saveUninitialized: true,
    resave: false
}));



// Affiche le contenu intégral de la session
app.use('/session', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Displaying session content' } })
    if (typeof session === 'undefined') { res.send("session detruite") }
    else { res.send("session variables : " + JSON.stringify(session)) }
})

// Retourne le nom de l'utilisateur connecté :
app.use('/get_user', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Getting user' } })
    if (typeof session === 'undefined' || typeof session.user === 'undefined') {
        res.send()
    }
    else {
        res.send({ user: session.user })
    }
})

// Detruit la session et renvoit vers la connexion
app.use('/logout', (req, res) => {
    delete session
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Logged out' } })
    res.redirect('http://localhost:8080/login');
})





// Retourne vrai si 2 dates designent le même jour, peu importe l'heure
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

// Retourne le boolean vrai si le joueur a deja joué aujourd'hui, faux sinon
app.use('/has_played', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Checking if user has played' } })

    const d = new Date().toLocaleDateString("en");//Date courante
    var json = JSON.parse(readFileSync('data/user.json').toString());
    last_game = new Date(json[session.user].last_game).toLocaleDateString("en")

    if (sameDate(d, last_game)) {
        res.send({ has_played: true })
    }
    else { //Si il a jamais joué, il rentrera aussi dans le else. Par défaut la date est initialisée à "" à l'inscription
        res.send({ has_played: false })
    }
})



const { createHash } = require('crypto');
function hash(string) { return createHash('sha256').update(string).digest('hex'); }

// Connecte l'utilisateur si les données saisies correspondent à un utilisateur de la BDD (un fichier Json)
app.use('/check_login', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Checking login' } })

    var json = JSON.parse(readFileSync('data/user.json').toString());
    session = req.session

    //1 : Verifier que le user existe
    if (json.hasOwnProperty(req.body.user)) {
        logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Username found' } })

        //2 : verifier le password
        if (json[req.body.user].password == hash(req.body.password)) {
            session.user = req.body.user;

            logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Logged in' } })
            res.send({ user: session.user })
        }
        else {
            res.send({ status: 'fail', err: 'Mot de passe invalide, merci de réessayer' });
        }
    }
    else {
        res.send({ status: 'fail', err: 'Utilisateur inconnu, merci de réessayer' });
    }
})


// Inscrit l'utilisateur dans la BDD si il existe pas déjà
app.use('/register', (req, res) => {
    logger.info({ message: 'URL ' + req.url, labels: { 'url': req.url, 'why': 'Registering user' } })

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
        res.send({ status: 'fail', err: 'Cet utilisateur existe déjà, merci de réessayer' });
    }
})
