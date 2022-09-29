# SUTOM, a motus app

## Description 

The famous Motus app running with micro services

 ## How to USE
 
 use with standard node command
 
 ```
 npm install
 node index.js
 ```

then go to http://localhost:3000


# Author
Youssef AGOUSSAL ING3 IA1
Cy Tech Cergy


# TODO
- Mot aléatoire chaque jour et non fixe
- visuels améliorés
- Passer le js jquery dans static (ou module)

sequenceDiagram
    Server-->>+Client: Mot du jour
    Client->>+Server: Tentatives du joueur
    Client-->>-localStorage: Score, user, moyenne d'essais


            

