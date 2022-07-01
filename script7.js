


// lorsqu'on clique sur le boutton GO le texte de la div devient rouge 

document.getElementById("monboutton").addEventListener(  "click", couleur  )

function couleur(){
document.getElementById("madiv").style.color = "red";}

//lorsqu'on clique sur le boutton go le fond change de couleur de façon aléatoire
//bleu rouge jaune violet

//creer un tableau qui contient les couleurs
//creer une variable aleatoire qui nous donne un chiffre de 0 à 3 en utilisant la fonction entierAleatoire
//qui va etre associer au éléments du tableau


function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   //Utilisation
   //La variable contient un nombre aléatoire compris entre 1 et 10
   var entier = entierAleatoire(1, 100);
   console.log(entier)

document.getElementById("monboutton").addEventListener(  "click", couleurbody  )

function couleurbody(){
   
let tableau =["blue","red","yellow","violet"]
let n =  entierAleatoire(0, 3);
console.log(n)
document.getElementById("body").style.background = tableau[n];

}