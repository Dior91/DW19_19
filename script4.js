// Les fonctions 

//parseInt: 

// creation de la fonction
function mafonction(){
    console.error("je teste ma fonction!")

}

mafonction()

// exo1: creer une foction qui affiche une allerte Hello world

function fonction_alerte() {
    alert("Hello World!")
}

fonction_alerte()


/* EXO 2 : 1. Recuperer l'age de l'utilisateur via la commande prompt
2. Affichez l'age de l'utilisateur dans la console
3. Affiche quel age aura l'utilisateur dans 2 ans dans la console
Si 25 est inséré dans la console il sera écrit
L'utilisateur aura 27 ans dans 2 ans
*/

function affich_age() {

age = prompt("veuillez entrer votre age?");

console.error("l'utilisateur a " + age + "ans");

age2 = parseInt(age) + 2;

console.error ("l'utilisateur aura " + age2 + " dans 2 ans");


}

affich_age()

//fonction avec des parametres

function afficher(prenom) {
    // description
      console.error("Bonjour " + prenom)
    }
    // appel
    afficher("Yoel")
    afficher("Robert")
    afficher("Axel")

    // exo1 ecrire une fonction avec un parametre numerique puis afficher ce nombre en ajoutant 2

    function numb(nombre){
       console.error(nombre+2)
    }

numb(2)
numb(6)
numb(8)

// exo2 fonction avec parametre numerique qui affiche si nombre est positif ou negatif
function numb2(chiffre) {

 if (chiffre>0) {
    console.error("le nombre est positif");
 }
 if (chiffre<0)
 {
    console.error("le nombre est negatif")
 }
 
}

numb2(15)
numb2(-5)

//exo3 fonction avec parametre numerique qui affiche si nombre est pair ou impair

function nbre_pair(nbre) {

if (nbre%2 ==  0) {
    console.error("le nombre est pair");
 }
 else
 {
    console.error("le nombre est impair")
 }
 
}
 nbre_pair(13)
 nbre_pair(24)

