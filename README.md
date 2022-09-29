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

[![](https://mermaid.ink/img/pako:eNp9kcGKAjEMhl8l5LIHnd17D4LoxYMgeC0sZRp3Cm3qtimuiO--na2KzmFzSvJ_-QPJBftoCRVm-i7EPa2d-UomaIYaK--IpVsstlFKhuVuo8CxpZ_3QYJvzEPqKjdrE6_UxGv2ZPZxisn-5zPq8GJQ1bu48-ZM6S2DJEcZCovzMBCcHOfp0n0fE7Wl0dvPPJaNeSjdhFvFcCxCYNhCOVpT06exe-AcA6VgnK1XvIyaRhkokEZVU0sHU7xo1HytqCkS92fuUUkqNMfmezs6qoPxuXbJOolp2z7z96DrL8q7iPQ)](https://mermaid.live/edit#pako:eNp9kcGKAjEMhl8l5LIHnd17D4LoxYMgeC0sZRp3Cm3qtimuiO--na2KzmFzSvJ_-QPJBftoCRVm-i7EPa2d-UomaIYaK--IpVsstlFKhuVuo8CxpZ_3QYJvzEPqKjdrE6_UxGv2ZPZxisn-5zPq8GJQ1bu48-ZM6S2DJEcZCovzMBCcHOfp0n0fE7Wl0dvPPJaNeSjdhFvFcCxCYNhCOVpT06exe-AcA6VgnK1XvIyaRhkokEZVU0sHU7xo1HytqCkS92fuUUkqNMfmezs6qoPxuXbJOolp2z7z96DrL8q7iPQ)



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
