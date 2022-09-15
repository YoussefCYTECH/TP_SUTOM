
// Convert text data to array

const fs = require('fs');

fs.readFile('data/liste_francais_utf8.txt', (err, data) => {
    if (err) throw err;
    array_data = data.toString().split('\r\n');
    console.log(array_data);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(textArray.find(getRandomInt(textArray.length)));