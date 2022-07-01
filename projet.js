function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   //Utilisation
   //La variable contient un nombre aléatoire compris entre 1 et 10
   var entier = entierAleatoire(1, 100);
   console.log(entier)
   /**
    * RECUPERER LA FONCTION
    * ET AFFICHER DANS LA LOG UN NOMBRE ENTRE 1 ET 10 .. ENTRE 1 ET 100 .. ENTRE 5 ET 15*/
   
   console.log(entierAleatoire(1,10))
   console.log(entierAleatoire(1,100))
   console.log(entierAleatoire(5,15))


    /* CREER UNE FONCTION QUI VA RENVOYER UN NOMBRE ENTRE 1 et un parametre de la fonction*/

   function alea(nbre){
    return entierAleatoire(1,nbre)
     }

    console.log(alea(19))

   
    /*EXO 1
    * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR 10 NOMBRE A L INTERIEUR . IL SERONT ALEATOIRE ENTRE 1 ET 100*/
     
    function tablal(){
        let tableau= new Array
        for(i=0;i<10;i++)
        {tableau[i] = entierAleatoire(1,100)}

        return tableau
    }

   console.table(tablal())

    /* 
    *  * EXO 2
    * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR ENTRE 1 ET 100 NOMBRE A L INTERIEUR  . IL SERONT ALEATOIRE ENTRE 1 ET 100
    * 
    */
    function tablal2(){
      let  tableau= new Array
      let n=entierAleatoire(1,100)
        for(i=0;i<n;i++)
        {tableau[i] = entierAleatoire(1,100)}

        return tableau
    }

   console.table(tablal2())

   /**
 * 1 .Vous avez deja fait une Fonction qui generer des nombre aleatoire dans un tableau 
 * EXO 1 Creer une fonction qui va utiliser la fonction deja creer precedemement en 1. vous aller renvoyer le nombre max du tableau*/

function maxtab(){
    let tableau = tablal2()
    let valeurMax = tableau[0]
    for (let i=0; i<tableau.length ; i++   ) {

        if (tableau[i]> valeurMax)
        {
            valeurMax = tableau[i]
        }

    }
     console.table(tableau) 
     return valeurMax

}


console.log(maxtab())

 

/*function maxtab(){
    let tableau = tablal2()
    let valeurMax = tableau[0]
    for (let i=0; i<tableau.length ; i++   ) {

        if (tableau[i]> valeurMax)
        {
            valeurMax = tableau[i]
        }

    }
     console.table(tableau) 
     return valeurMax

}


console.log(maxtab())*/

function max(tab) {
    let valeurMax = tab[0]
     for (let i=0; i<tab.length ; i++   ) {
 
         if (tab[i]> valeurMax)
         {
             valeurMax = tab[i]
         }
 
     }
       return valeurMax
   }
   
   
  console.log(max([15,14,47,6,7,3]))

  function maxtab(){
    let tableau = tablal2()
   console.table(tableau)
   let maxi = max(tableau)
   return maxi
    }

console.log(maxtab())

 /* EXO 2 reer une fonction qui va utiliser la fonction deja creer precedemement en 1. On va imaginer qu on a des âges. La fonction renvoie
 * le nombre de personne majeur > 18 ANS
 * 
*/

function majeur(){
    let table =  tablal2()
    console.table(table)
    let tableausup18=new Array
    let compteur=0
    for (let i=0; i<table.length; i++){
     if (table[i] > 18){
        compteur=compteur+1
        tableausup18[compteur]=table[i]
       }
     }
     console.log(compteur)
     console.log(tableausup18)

    }

    majeur()


 /*function nbmajeurs(){
    let toto=tabf()   // GENERER UN TABLEAU ALEATOIRE AVEC DES NOMBRES 1 ET 100

    console.table(toto)
    let tableausup18=new Array();

    let compteur=0
    // COMPTER LE NOMBRE AGE > 18

    // parcourir le tableau
    for(let i=0; i < toto.length; i ++ ) {

    // SI SUPERIEUR > 18 
       if (toto[i]>18) {
         compteur=compteur+1
         tableausup18[compteur]=toto[i]
       }
    }

    console.log(compteur);
    console.table(tableausup18)


}
nbmajeurs()


/* EXO 3. Creer une fonction qui va utiliser la fonction deja creer precedemement en 1.  On va imaginer qu on a des prix HT. La fonction renvoyé 
 * le tableau avec les même prix en TTC : prix * 1.2
 */
 
function prix(){
    let table =  tablal2()
    console.table(table)
    table2= new Array

    for (let i=0; i<table.length; i++){
        table2[i]=table[i]*1.2
    }
    return table2
}
console.table(prix())


 let tableau=['Axel',34,'Robert','etc','Yoel','Paul','Yoel','Paul'];
 let tableau2=['Axel',34,'dior','Robert','etc','Yoel','Paul','Yoel','Paul','dior'];
 let tableau3=['dior'];
console.table(tableau)
console.table(tableau2)

/**
 * EX 1 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU
 * QUI RENVOIE VRAI OU FAUX
 * VRAI SI IL TROUVE VOTRE PRENOM
 * FAUX SI IL NE LE TROUVE PAS*/

// fonction avec un parametre tableau
//parcourir le tableau avec la boucle for
//comparer les element avec une condition
//si un element est egal à mon prenom => retourne vrai 
//sinon => retourne faux

function trouveprenom(tab){
   let monprenom = "dior"
    for (let i=0; i<tab.length; i++)
    {
        if (tab[i]==monprenom)
        {
            return true
        }       
    }
    return false
       
}

console.log(trouveprenom(tableau))
console.log(trouveprenom(tableau2))

// autre solution 


function detecte_nom(tab){

    // PARCOURIR LE TABLEAU
    let compteur=0

    for (let i = 0 ; i < tab.length; i ++ ) {
       //LIRE CHAQUE ELEMENT DU TABLEAU

       if (tab[i]=="Yoel") {
           compteur++
       }
       

    }
    if (compteur > 0 ) {return true;} else {return false}
}



 
 /*EX 2 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
 * QUI RENVOIE VRAI OU FAUX
 * VRAI SI IL TROUVE LA CHAINE DE CARACTERE DANS LE TABLEAU
 * FAUX SI IL NE LE TROUVE PAS*/

 function trouve(tab,car)
 {

    for (let i=0; i<tab.length; i++)
    {
        if (tab[i]===car)
        {
            return true
        }
    }

    return false
}

console.log(trouve(tableau,'Yoel'))
console.log(trouve(tableau2,'bamba'))


 /*  EX 3 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
 * QUI RENVOIE LA PREMIERE POSITION / LA CLE / L INDICE DE L EMPLACEMENT DANS LE TABLEAU CORRESPONDANT
 * A LA CHAINE DE CARACTERE TROUVE. SI IL LA TROUVE PAS LA FONCTION RENVOIE 0
 */

function trouvecle(tab,car){
 
    for (let i=0; i<tab.length; i++)
    {
        if (tab[i] == car)
        {
            return i
        }

    }

    return 0
}

console.log(trouvecle(tableau, 'Yoel'))
console.log(trouvecle(tableau2, 'dior'))




 /* EX 4 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
 * QUI RENVOIE LA LE NOMBRE DE FOIS OU IL RETROUVE CETTE CHAINE DE CARACTERE
 */


 function comptevar(tab,car){
    let compteur=0
 
    for (let i=0; i<tab.length; i++)
    
    {
        if (tab[i] == car)

        {
            compteur=compteur+1
        }
    }

    return compteur 
}

console.log(comptevar(tableau, 'Yoel'))
console.log(comptevar(tableau2, 'Axel'))



