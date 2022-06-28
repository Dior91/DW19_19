// les conditions 

age=prompt("veuillez entrer votre âge ?");
age=parseInt(age);

// si age est > 18 alors on écris dans la console la personne est majeur 

if (age>18) {
    console.error("vous êtes majeur")
}
if (age<18) {
    console.error("vous êtes mineur")
}
if (age==18) { // tester l'égalité de la valeur 
    console.error("vous êtes piles majeur")
}

// == on veut tester l'égalité de la valeur entre les 2 informations
// ont veut tester l'égalité de la valeur et l'égalité du type entre les 2 informations

//exo1
// demander avec prompt un nombre à l'utilisateur
 //afficher dans la console si le nombre est positif ou negatif

nbre=prompt("veuillez entrer un nombre ?");
 nbre=parseInt(nbre);

 if (nbre>0) {
    console.error("le nombre est positif");
 }
 if (nbre<0)
 {
    console.error("le nombre est negatif")
 }
 if (nbre == 0) {
    
    console.error("le nombre est null")
 }
 

//exo2
// demander avec prompt un nombre à l'utilisateur
 //afficher dans la console si le nombre est pair ou impair

 nombre=prompt("veuillez entrer un nombre?");
 nombre=parseInt(nombre);

 if (nombre%2 ==  0) {
    console.error("le nombre est pair");
 }
 else
 {
    console.error("le nombre est impair")
 }

/*EXO 3
* Initialiser une variable avec votre prenom
* prenom=yoel
* vous demandez à l'utilisateur son prenom
* si le prenom == à votre prenom alors on ecrit dans la console
* sympa vous avez le même prenom que moi
* si non rien ...*/

monprenom = "dior";
votreprenom = prompt("veuillez entrer votre prenom")
if (monprenom == votreprenom) {
console.error("Sympa, vous avez le même prenom que moi")
}

else 
{
    console.error(votreprenom)
}

