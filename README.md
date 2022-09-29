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

[![](https://mermaid.ink/img/pako:eNp1kTFrAzEMhf-K0NIhSbt7yNKuhcKthmDOSs5gy61s9xpC_nt98R300laTeO_ze2BdsI-WUGGij0Lc04szJzFBM9R59o447_b7juSTRIFjS1-PQw6-AU3fVWLT2DVyl7JZYp7GKPbfhMmE1dPqLuabN2eShwRZHCUonJ2HgWB0nH7V9VFIQfT2kKZ1bpxWWDXeEU2GHxEdsXV8AqYR_o5awJtS3q3JM7MMbjGQBONs_e3L5GnMAwXSqOpq6WiKzxo1XytqSo7dmXtUWQptsSXOx0F1ND5VlazLUV7bBW-HvH4DphiXhQ)](https://mermaid.live/edit#pako:eNp1kTFrAzEMhf-K0NIhSbt7yNKuhcKthmDOSs5gy61s9xpC_nt98R300laTeO_ze2BdsI-WUGGij0Lc04szJzFBM9R59o447_b7juSTRIFjS1-PQw6-AU3fVWLT2DVyl7JZYp7GKPbfhMmE1dPqLuabN2eShwRZHCUonJ2HgWB0nH7V9VFIQfT2kKZ1bpxWWDXeEU2GHxEdsXV8AqYR_o5awJtS3q3JM7MMbjGQBONs_e3L5GnMAwXSqOpq6WiKzxo1XytqSo7dmXtUWQptsSXOx0F1ND5VlazLUV7bBW-HvH4DphiXhQ)



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
