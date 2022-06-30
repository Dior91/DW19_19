/**
 * Fonction qui
 * 1 prend en parametre un nombre et qui va renvoyer vrai si il est positif  ou faux si il est negatif*/

 function vraifaux(nbre){
    if (nbre>0){
        return "vrai"
    }
else {
    return"faux"
    }
   
 }

 console.log(vraifaux(45))
 console.log(vraifaux(-50))



 /* 2 prend en parametre un nombre et qui va renvoyer vrai si il est pair  ou faux si il est impair-*/

function pairimp(nbre){
    if (nbre%2==0){
        return "vrai"
    }
else {
    return"faux"
    }
   
 }

 console.log(pairimp(45))
 console.log(pairimp(50))





 /* 3 prend en parametre une chaine de caracter et qui va renvoyer vrai si il est = à votre prenom*/

function prenom(nom){

    let monprenom = "dior"

    if (nom==monprenom){
        return "vrai"
    }
else {
    return"faux"
    }
   
 }

 console.log(prenom("dior"))
 console.log(prenom("maissa"))


 /* 4 prend en parametre une chaine de caracter et qui va renvoyer vrai si il est = au deuxieme parametre
 */

 function prenom(nom1,nom2){


    if (nom1==nom2){
        return "vrai"
    }
else {
    return"faux"
    }
   
 }

 console.log(prenom("dior","dior"))
 console.log(prenom("maissa","dior"))