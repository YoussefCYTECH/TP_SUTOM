const express = require('express')
const app = express()
const port = 3002
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
    console.log(`MOTUS Auth API listening on port ${port}`)
})


var session = require('express-session');
app.set('trust proxy', 1)
app.use(session({
    secret: "Random",
    saveUninitialized: true,
    resave: false
}));



// TODO sessions express par req.session
const user = "Youssef"


// Fonctions de redirections :
app.use('/session', (req, res) => {
    ZZ
    res.send("session variables : " + JSON.stringify(session))
})


app.use('/check_login', (req, res) => {
    var json = JSON.parse(readFileSync('data/user.json').toString());
    session = req.session

    //1 : Verifier que le user existe
    if (json.hasOwnProperty(req.body.user)) {
        console.log("Username found")

        //2 : verifier le password
        if (json[req.body.user].password == req.body.password) {
            console.log("Password correct")
            session.user = req.body.user;

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

        json[req.body.user] = { password: req.body.password };
        fs.writeFile("data/user.json", JSON.stringify(json, null,'\t'), function (err) {
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
