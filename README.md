# SUTOM, a motus app

## Description 

The famous Motus app running with micro services.\
RULES coming ..  

By Youssef AGOUSSAL ING3 IA1\
CY Tech Cergy

 ## How to USE
 
 use with standard node command
 
 ```
 npm install
 node index.js
 ```

then go to http://localhost:3000


# Author
Youssef AGOUSSAL ING3 IA1\
Cy Tech Cergy

## Sequence diagram
Full line = a request\
Dotted line = the response

[![](https://mermaid.ink/img/pako:eNp9kT9rw0AMxb-K0NIhdrt7MJR06RAIZOhiKMKnxAf3x73T1Q0h373n2A6Nh2oS9356T5wu2HrFWGHkr8Su5TdNp0C2cZBrazQ7Ket65yVFeN2_V6Cd4p_nTqyZmLtUZm4zTTxSK6_NH7OXwQf1n8-ow4NBVhdxb-jM4SmCBM0RkhNtoGMYtIvr0EPrA0-hHcUP7QogEba9zOgdKFf41ts-CQM5BalXlNs4quuxuoZlMcfD543JId8c6DTDS2GBloMlrfLPX0atQenYcoNVbhUfKRlpsHHXjFISfzi7FisJiQuclpgPhdWRTMyvrLT4sJuueTvq9ReehpoQ)](https://mermaid.live/edit#pako:eNp9kT9rw0AMxb-K0NIhdrt7MJR06RAIZOhiKMKnxAf3x73T1Q0h373n2A6Nh2oS9356T5wu2HrFWGHkr8Su5TdNp0C2cZBrazQ7Ket65yVFeN2_V6Cd4p_nTqyZmLtUZm4zTTxSK6_NH7OXwQf1n8-ow4NBVhdxb-jM4SmCBM0RkhNtoGMYtIvr0EPrA0-hHcUP7QogEba9zOgdKFf41ts-CQM5BalXlNs4quuxuoZlMcfD543JId8c6DTDS2GBloMlrfLPX0atQenYcoNVbhUfKRlpsHHXjFISfzi7FisJiQuclpgPhdWRTMyvrLT4sJuueTvq9ReehpoQ)



## Score API
- Which server are you gone use ?\
A nodeJS server, separate from the Motus API


- Which port are you gone use ?\
The port 3001


- Which API are you gone call ? which parameters ?\
The client will call the Score API with the parameter new_score,
which is the new score of the player after his new victory


- Can we handle more than one user ?\
Yes, by using the login and a database storing scores for each user


- What data do we want to store ?\
We want to store 2 integer variable 'score' 'average' and 1 string 'user'



# TODO
- [ ] Rendre le mot aléatoire chaque jour et non fixe
- [ ] Ameliorer les visuels
- [ ] Passer le fichier js jquery dans static (ou module)
- [ ] Rattraper TD Docker et Proxy
