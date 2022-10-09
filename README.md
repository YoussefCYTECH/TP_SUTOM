# SUTOM, a motus app

## Description 

The famous Motus app running with micro services.\
RULES coming ..  

 ## How to USE
 
 use with standard node command
 
 ```
 node index.js
 node score.js
 node auth.js
 ```

then go to http://localhost:3000

## Dependencies
--> A verifier si un nouveau pc a besoin de les installer ou si elles sont installees dans les dossiers du site
 ```
 npm install express-session
 ```


# Author
Youssef AGOUSSAL and Rose MOUILLE ING3 IA1\
Cy Tech Cergy October 2022

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
The client will call the Score API with the parameters user 
(= the name of the user logged in) and attempts (attempts to find the word
of the day)


- Can we handle more than one user ?\
Yes, by using separate usernames and a database storing scores for each user


- What data do we want to store ?\
We want to store 2 integer variable 'score' 'average' and 2 string 'user' and
'password'

## List of API
- Motus API, port 3000 : main API managing the game
- Score API, port 3001 : API updating and sending the score of the user
- Auth API, port 3002 : API managing the user's logging process

# TODO
- [ ] Ameliorer/faire les visuels
- [ ] Passer le fichier js jquery dans static (ou module)
- [ ] Passer du json à une BDD postgres (optionnel ? Si on a le temps mais on dirait pas)
- [ ] Faire un footer commun pour toutes les pages (avec nos noms par exemple)
- [X] Trouver un moyen de passer les variables de session entre serveurs --> On demande le user à Auth, le stocke en variable JS le temps d'une page pour le renvoyer à Score
- [ ] Motus : n'afficher les lettres en orange que X fois, où X est le nombre de fois qu'il apparait dans le mot
- [ ] Pas oublier de repasser le mot en aléatoire avant le rendu final (actuellement le mot est Vendredi pour tester plus rapidement)
- [ ] Chiffrer le mot de passe coté html avant l'envoi pour plus de sécurité
- [ ] Empecher le joueur de rejouer un jour où il a deja gagné
- [ ] Rattraper le TP4 oAuth2 obligatoire pour le rendu ? (à demander au prof)
