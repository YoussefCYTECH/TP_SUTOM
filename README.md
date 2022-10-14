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

then go to http://localhost:8080

Default player's account is login : 'sutom', password : 'sutom'.
You can create new players from the register page

# Author
Youssef AGOUSSAL and Rose MOUILLE ING3 IA1\
Cy Tech Cergy October 2022

## Sequence diagram of the MOTUS game
Full line = a request\
Dotted line = the response

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
- Motus main game
- Functional login and register system (maximum username's length allowed is 20 characters)
- The player's score and average guess attempts is registered
  
  
- A player can win or lose only once per day, then it is locked for him. The maximum tries allowed is set to max_attempts = 6 in motus.html
- Motus game : A misplaced character is displayed in orange only the number of times it appears in the word, not more
- Leaderboard page ordered by the highest score
- The player can only enter an existing word (IN PROGRESS)

- Going to the login or register page while being connected redirects to the main game
- Going to the game or score page while being unauthentified redirects to the login page

# TODO
- [ ] Pas oublier de repasser le mot en aléatoire avant le rendu final (actuellement le mot est Vendredi pour tester plus rapidement). ET SUPPRIMER NOS UTILISATEURS PERSOS
- [ ] METTRE DES LOGS
- [ ] DOCUMENTER
- [ ] Expliquer en quoi c'est du microservices, et leurs relations

## Improvement ideas
- Refactor all the text displayed to the client. Then implement a translation to different languages
