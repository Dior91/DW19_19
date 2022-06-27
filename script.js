console.log("test");
/*
commentaires
nous allons apprendre
1. LES VARIABLES
1. LES CONDITIONS
3. LES BOUCLES 
4. LES FONCTIONS

*/
// les variables
/* 
1.pourquoi les variables? pour stocker les données  Ex: nom d'un jeu = "jeu du plus ou du moins";
2. une variable: le nom de la variable et la valeur de la variable: tiroir qui porte un nom
ex: tiroir A <= 10 valeur 
Les chaines de caracteres contient des guillemées
le numerique ne contient pas de guillemées
asdditionner les nombres ca fonctionne
additionner une chaine de caractere avec une autre fait la concetenation

*/

a=10 // 10 rentre dans la variable a
b=50 
c="80"
b=90 // b va contenir 90
console.error(a+parseInt(c))
console.error(typeof(c))
console.error(b)

// LES VARIABLES

SEL=100;
SUCRE=80;
console.error("nous avons du sel en q de" + SEL + ". Nous avons du seucre en q de" + SUCRE);


// VOTRE CODE INVERSE LES VARIABLES 
TEMP = SEL; // TEMP SERT DE MEMOIRE
SEL= SUCRE;
SUCRE= TEMP;
console.error("nous avons du sel en q de" + SEL + ". Nous avons du seucre en q de" + SUCRE);

/* EXO 2
1.Récuperer l'age de l'utilisateur via la commande prompt
2.afficher l'age de l'utilisateur dans la console
3.afficher quel age aura l'utilisateur dans 2 ans dans la console */

age = prompt("veuillez entrer votre age?");

console.error("l'utilisateur a " + age + "ans");

console.error(typeof(age))

age2 = parseInt(age) + 2;

console.error ("l'utilisateur aura " + age2 + " dans 2 ans");

/*exo 3
1 demander un prix d'un article via la commande prompt
2. afficher dans la console: l'article vaut 45 euros 
3. afficher dans la console l'article vaut 50 euros ttc*/

prix = prompt("veuillez entrer le prix de l'article?");
console.error("l'article vaut " + prix + "euros");

prixttc = (parseInt(prix))*1.2;

console.error("l'article vaut " + prixttc + "euros TTC");














