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

[![](https://mermaid.ink/img/pako:eNp9kUFrAjEQhf_KMJce1Paeg1DqxYMg7DVQwmZ0A9lJm0zYivjfmzUq7kI7p8m8L-8d3hnbYAkVJvrOxC1tnDlG02uGMh_eEctqvd4FyQne91sFji39vHbS-8o8pFXhFvXHlJp5LZ7M3oYQ7X8-ow4Tg6Lexb03J4ovCSQ6SpBZnIeOYHCc5qFNGyLV0ODtZxqflXkok-AZVM8wc2qIreMjMA3wp-Mzf13zlzVyQ--DS-wp9sbZ0sV51DRKRz1pVGW1dDDZi0bNl4KaLKE5cYtKYqYlVsdbdagOxqdyJeskxF3t91rz5RfhQZ6T)](https://mermaid.live/edit#pako:eNp9kUFrAjEQhf_KMJce1Paeg1DqxYMg7DVQwmZ0A9lJm0zYivjfmzUq7kI7p8m8L-8d3hnbYAkVJvrOxC1tnDlG02uGMh_eEctqvd4FyQne91sFji39vHbS-8o8pFXhFvXHlJp5LZ7M3oYQ7X8-ow4Tg6Lexb03J4ovCSQ6SpBZnIeOYHCc5qFNGyLV0ODtZxqflXkok-AZVM8wc2qIreMjMA3wp-Mzf13zlzVyQ--DS-wp9sbZ0sV51DRKRz1pVGW1dDDZi0bNl4KaLKE5cYtKYqYlVsdbdagOxqdyJeskxF3t91rz5RfhQZ6T)



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
