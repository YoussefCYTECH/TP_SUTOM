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

[![](https://mermaid.ink/img/pako:eNp9kT1rAzEMhv-K0NIhd-3uIVDSpUMgkKGLF3FWegZ_XG2ZNIT89_rqJDQ31JPw8-gVSGccomFUmPmrcBj4zdJnIq8D1LdxloP06_U2SsnwuntXYIPh7-dRvGvOHfXVW7WOR2uRtfoT9nKMyfyXM3N4CKj0BneOTpyeMkiynKEEsQ5GhqMNeTl0P8TEbehI-cOGDkiE_SRX9S70C30T_VSEgYKBMhmqZZ5pa7s97NBz8mRNXeZ5ZhplZM8aVS0NH6g40ajDpapUJO5PYUAlqXCHLfe6e1QHcrn-srES07Yd6PdOlx-yu4ti)](https://mermaid.live/edit#pako:eNp9kT1rAzEMhv-K0NIhd-3uIVDSpUMgkKGLF3FWegZ_XG2ZNIT89_rqJDQ31JPw8-gVSGccomFUmPmrcBj4zdJnIq8D1LdxloP06_U2SsnwuntXYIPh7-dRvGvOHfXVW7WOR2uRtfoT9nKMyfyXM3N4CKj0BneOTpyeMkiynKEEsQ5GhqMNeTl0P8TEbehI-cOGDkiE_SRX9S70C30T_VSEgYKBMhmqZZ5pa7s97NBz8mRNXeZ5ZhplZM8aVS0NH6g40ajDpapUJO5PYUAlqXCHLfe6e1QHcrn-srES07Yd6PdOlx-yu4ti)



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
