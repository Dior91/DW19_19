
/**
 * 
 * CREATION DE VARIABLE
 * x=3
 * 
 * 
 */

 let x=3
 var y=2
 const z=7 
 // a="test3"
 function test(){
     let a="test"
 }
 let a="test2"
 
 test()
 console.log(a) // AFFICHE ?
 
 
 /**
  * CREEZ UNE FONCTION QUI AURA DEUX PARAMETRE QUI VA CALCULER LA MOYENNE DE 2 NOMBRE
  * MOYENNE(12,14)
  * CREEZ UNE FONCTION QUI AURA DEUX PARAMETRE QUI VA CALCULER LA MOYENNE DE 3 NOMBRE
  * CREEZ UNE FONCTION QUI AURA DEUX PARAMETRE QUI VA CALCULER LA MOYENNE DE 4 NOMBRE
  */





// ceer une fonction qui va calculer la moyenne de 2 nombres

function moyenne(nbre1,nbre2){
let moy = (nbre1+nbre2)/2
return moy
}
 console.log(moyenne(5,7))
 moyenne(4,8)
 moyenne(78,56)

//ceer une fonction qui va calculer la moyenne de 3 nombres


function moyenne2(nbre1,nbre2,nbre3){
    let moy = (nbre1+nbre2+nbre3)/3
    console.error(moy)
    }
     moyenne2(5,7,10)
     moyenne2(4,8,46)
     moyenne2(78,56,23)
    



//ceer une fonction qui va calculer la moyenne de 4 nombres

function moyenne3(nbre1,nbre2,nbre3,nbre4){
    let moy = (nbre1+nbre2+nbre3+nbre4)/4
    console.error(moy)
    }
     moyenne3(5,7,10,11)
     moyenne3(4,8,46,15)
     moyenne3(78,56,23,64)
    

/**
 * Fonction qui me retourne la moyenne d'un nombre de note indefinie
 * moyenne4(12,14,13,10) => 12
 * moyenneindef(     ) => moyenne des 50 nombres X
 * envoyer un tableau en parametre
 * [  ,    ,    ,   ]
 */

//moyenneindef( tab )

let tab = [12,13,14,10,12];
console.log(tab[2])
console.table(tab) 


function moyenneindef(tab){
  let result=0
  for (let i=0; i<tab.length ; i++   ){
      result=result+tab[i]
  }
  result=result/tab.length
  return result
}
console.log(moyenneindef([12,14]))

/**
 * 1 CREEZ UNE FONCTION PRENANT EN PARAMETRE UN TABLEAU
 * QUI VA RETOURNER LE MEME TABLEAU
 * Afficher le tableau
 * 
 * 2 FAIRE PAREIL QUE LA 1 EN ECHANGEANT LES DEUX PREMIERES VALEUR DU TABLEAU
 * ET VOUS RENVOYER LE NOUVEAU TABLEAU
 * ET VOUS L AFFICHER
 */


 function tableau(tab){

    return tab
  }

  console.table(tableau([25,56,23,54]))


  function inverse(tab){
    let temp = tab[0]
    tab[0] = tab[1]
    tab[1]=temp

    return tab
  }

  console.table(inverse([25,69,15,43]))

  /**
 * Fonction qui vont prendre en parametre un tableau qui retourne
 *  EXO 1 : le nombre d'éléments dans un tableau*/
 
 
   function nbre_element(tab) {
      return tab.length
   }
    
   console.log(nbre_element([15,14,47,6,7,3]))

 /*  EXO 2 : la somme des éléments d'un tableau*/

 function somme(tab) {
    let result=0
  for (let i=0; i<tab.length ; i++   ){
      result=result+tab[i]
  }
  
  return result
    
 }
  
 console.log(somme([15,14,47,6,7,3]))


 /*  EXO 3 : 'élément maximum d'un tableau*/

function max(tab) {
    valeurMax = tab[0]
    for (let i=0; i<tab.length ; i++   ) {

        if (tab[i]> valeurMax)
        {
            valeurMax = tab[i]
        }

    }
      return valeurMax
  }
  
  
    
 
  
 console.log(max([15,14,47,6,7,3]))




 /* EXO 4 : l'élément minimum d'un tableau*/


function min(tab) {
    valeurMin = tab[0]
    for (let i=0; i<tab.length ; i++   ) {

        if (tab[i]< valeurMin)
        {
            valeurMin = tab[i]
        }

    }
     return valeurMin
  }
  
  
 console.log(min([15,14,47,6,7,3]))



 /**  EXO 5 : Trouver le premier élément supérieur à 500*/

 //parcourir le tableau avec une boucle for
 //mettre une condition 
 //comparer les elements et s'arrêter dès q'un element est superieur à 500
 // retourner cet element
 

 function sup500(tab) {
 
    
    for (let i=0; i<tab.length ; i++   ) {

        if (tab[i]> 500)
        {
         return tab[i]
        }

    }
    
  }
  
  
 console.log(sup500([15,14,570,670,580,3]))

 function sup500(tab,n) {
 
    
  for (let i=0; i<tab.length ; i++   ) {

      if (tab[i]> n)
      {
       return tab[i]
      }

  }
  
}


console.log(sup500([15,14,570,670,580,3],600))


 
 /*  BONUS : Copier les premiers éléments d'un tableau dont la somme fait au moins 500
 */
  function sommeSup500(tab) {
  let result=0
  for (let i=0; i<tab.length ; i++   ){
    result=result+tab[i]

    if (result> 500){
      return tab[i] = a
    }
 } 
 

}

console.log(sommeSup500([15,14,570,670,580,3]))
