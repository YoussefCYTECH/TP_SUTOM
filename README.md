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

[![](https://mermaid.ink/img/pako:eNp9kT1vAjEMhv-K5YUBDvYMSBVdOiAhMXTJYl1ML1I-IHFEEeK_N9cAKjfUk-Xn9WvLvmIfDaPCzKfCoed3S1-JvA5QY-MsB-nW622UkuFt96HABsPfy0G8a5on6qpu3jpeVROv-R-z1Tkm85_PyOHFoNIH3Dm6cJplkGQ5QwliHQwMZxvydOi-j4nb0IHyp71v9Sx3E9Em-mMRBgoGytFQTfNIW9sjcIGekydr6gmvI9MoA3vWqGpq-EDFiUYdblVKReL-EnpUkgovsPneL47qQC7XKhsrMW3bW36_c_sB8wGHpA)](https://mermaid.live/edit#pako:eNp9kT1vAjEMhv-K5YUBDvYMSBVdOiAhMXTJYl1ML1I-IHFEEeK_N9cAKjfUk-Xn9WvLvmIfDaPCzKfCoed3S1-JvA5QY-MsB-nW622UkuFt96HABsPfy0G8a5on6qpu3jpeVROv-R-z1Tkm85_PyOHFoNIH3Dm6cJplkGQ5QwliHQwMZxvydOi-j4nb0IHyp71v9Sx3E9Em-mMRBgoGytFQTfNIW9sjcIGekydr6gmvI9MoA3vWqGpq-EDFiUYdblVKReL-EnpUkgovsPneL47qQC7XKhsrMW3bW36_c_sB8wGHpA)



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
