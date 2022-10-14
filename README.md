# SUTOM, a motus app

## Description 

A french Motus app running with micro services.\ 

 ## How to USE
 
 use with docker: (It may take some time to download everything the first time)
 
 ```
 sudo docker-compose up
 ```
 
 To stop it :
 ```
 sudo docker-compose down
 ```

To restart after some changes (for devs):
 ```
sudo docker-compose build
sudo docker-compose up
```

then go to http://localhost:8080 for the motus app, or http://localhost:3000 for Grafana

Default player's accounts are login: 'sutom', password: 'sutom' and login: 'Thierry', password: 'motus'
You can create new players from the register page\
For development or testing purposes, you can modify the line 55 in index.js to choose a custom word of the day

# Author
Youssef AGOUSSAL and Rose MOUILLE ING3 IA1\
Cy Tech Cergy October 2022

## Sequence diagram of the MOTUS game
Full line = a request\
Dotted line = the response\
This diagram explains the relations between the 3 servers when the user plays the game


[![](https://mermaid.ink/img/pako:eNp9kstqwzAQRX9lmE0XsZO9FoHSQumiUAjdGYqwxrGKHqk0Ig0h_175IYrd0lmJuUd3rh5XbL0iFBjpM5Fr6VHLY5C2cZDrwWhyXO_3z07R1_YjCrCeU9z2bM2EFKXO1Gbil9DK6T5xPxrtjsTvKVKYgLm_sBlUJy39Mtn85NmdfVD_RBlkWBlkvcivRl4o3EXgoClCcqwN9ARn7eJ66KH1gcahJVgFkpnsiWe2EFAv-beTkkzjtjwqDv0_NkAJ9ZStodNOx57ms5XCCi0FK7XKb3YdtAa5p3xHKPJSUSeT4QYbd8uoTOwPF9ei4JCowjTmmJ8YRSdNzF1Smn14mf7B-B1u303Yryc)](https://mermaid.live/edit#pako:eNp9kstqwzAQRX9lmE0XsZO9FoHSQumiUAjdGYqwxrGKHqk0Ig0h_175IYrd0lmJuUd3rh5XbL0iFBjpM5Fr6VHLY5C2cZDrwWhyXO_3z07R1_YjCrCeU9z2bM2EFKXO1Gbil9DK6T5xPxrtjsTvKVKYgLm_sBlUJy39Mtn85NmdfVD_RBlkWBlkvcivRl4o3EXgoClCcqwN9ARn7eJ66KH1gcahJVgFkpnsiWe2EFAv-beTkkzjtjwqDv0_NkAJ9ZStodNOx57ms5XCCi0FK7XKb3YdtAa5p3xHKPJSUSeT4QYbd8uoTOwPF9ei4JCowjTmmJ8YRSdNzF1Smn14mf7B-B1u303Yryc)


## Score API
- Which server are you gone use ?\
A nodeJS server, separate from the Motus API


- Which port are you gone use ?\
The port 8082


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
- Motus API, port 8080 : main API managing the game
- Score API, port 8082 : API updating and sending the score of the user
- Auth API, port 8081 : API managing the user's logging process

## List of functionalities
Main functionalities: 
- Motus main game
- Functional login and register system: The maximum username's length allowed is 20 characters, and the password is hashed before being stored in database
- The player's score and average guess attempts is registered
  
Bonus functionalities:   
- A player can win or lose only once per day, then it is locked for him. The maximum tries allowed is set to max_attempts = 6 in motus.html
- Motus game : A misplaced character is displayed in orange only the number of times it appears in the word, not more
- Leaderboard page ordered by the highest score
- The player can only enter an existing french word

- Going to the login or register page while being connected redirects to the main game
- Going to the game or score page while being unauthentified redirects to the login page


## Improvement ideas
- Refactor all the text displayed to the client. Then implement a translation to different languages
  
- Authentification with OpenId :
Le seul serveur ayant accès aux variables de session serait index.js et non auth.js.
Lors de la connexion, le client envoie une demande de connexion à index. Index envoie compare les données du login à la bdd, si elles sont bonnes il demande à Auth de générer un token JWT contenant les données de l'utilisateur qu'il renvoit à index.js.
En meme temps, il envoie au client un code aléatoire. Seul index.js est capable de décoder ce code, afin de savoir si la connexion est bien authentifiée.\
Lorsque l'utilisateur souhaite mettre à jour son score, il passe alors par index.js, qui communique à score.js les données de l'utilisateur connecté. Score envoit enfin au client une confirmation de la mise à jour du score