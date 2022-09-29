const express = require('express')
const app = express()
const port = 3000

app.use(express.static("www"))
app.use('/', express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Fonctions de redirections :

app.get('/word', (req, res) => {

    var fs = require('fs');
    var text_array = fs.readFileSync('data/liste_francais_utf8.txt').toString().split("\n");
    var word = text_array[1];
    word = "poulailler"; //Pour test

    res.send(word);
})
