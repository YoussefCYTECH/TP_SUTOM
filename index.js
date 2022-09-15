const express = require('express')
const app = express()
const port = 3000



// Importation des mots :

var fs = require('fs');
var text_array = fs.readFileSync('data/liste_francais_utf8.txt').toString().split("\n");


// Choix du mot du jour :

/*function getRandomInt(max) { //Changer en génération par date
    return Math.floor(Math.random() * max);
}
console.log(text_array.find(getRandomInt(text_array.length)));
var mot = text_array.find(getRandomInt(text_array.length));*/

var mot = text_array[1];
console.log(mot);

//global.mot = mot;




app.get('/mot', (req, res) => {
    res.send(mot);
    //res.render('index.html', {mot:mot});
})

app.use(express.static("www"))
app.use('/', express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})