const express = require('express')
const app = express()
const port = 3001

app.use(express.static("www"))
app.use('/', express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Fonctions de redirections :

app.get('/score', (req, res) => {

    var old_score=2; //Pour test

    

    //res.send(old_score);
})
