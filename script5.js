function mafonction(){
    alert("vous avez cliqué sur le boutton ! ");
    document.getElementById("montexte").value="LA VALEUR QUI M INTERESSE  !"
    document.getElementById("monboutton").value="BOUTTON CLIQUE   !"
    document.getElementById("madiv").innerHTML="ma div a ete changé ! "
 }
 
 console.error(document.getElementById("montexte"))
 console.error(document.getElementById("monboutton"))
 console.error(document.getElementById("madiv"))
 
 /**
  * 
  * 1. RECUPERER UN OBJET DE LA PAGE HTML 
  * document
  * RECUPERER UN DES CHAMP DE CETTE OBJET
  * getElementById("identifiantcorrespondant")
  * Modifier le html
  * .laproprietehtml = valeur // on affecte une valeur a cette propriete
  * Modifier le html d'une div on utilier innerHTML
  */

 /**
 * EXO 1 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT BIENVENUE SUR LE BOUTTON*/
/*2 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT CE QUI ECRIT SUR LE BOUTON
   3 Lorsqu on clique sur le bouton on affiche dans la div le contenue du champs texte
   4 on affiche dans la div le contenue du "Le texte contient : " champs texte
   5  on affiche dans la div le contenue du "Le prix est  : " champs texte La TVA est champs texte*1.2
 */
 

  function fonction_click(){
    alert("Bienvenue sur le boutton! ");
    alert(document.getElementById("boutton").value);
    document.getElementById("div").innerHTML = document.getElementById("texte").value;
    document.getElementById("div").innerHTML = "le texte contient : " + document.getElementById("texte").value;
    price_tva=parseInt( document.getElementById("texte").value)*0.2
    document.getElementById("div").innerHTML = "le prix contient : " + parseInt( document.getElementById("texte").value) + "la TVA est " + price_tva



   
  }


  /* // EXO 1 & 2 & 3 
   function alert2(){
    alert("Bienvenue sur le boutton ! ")
    alert(    document.getElementById("boutton").value     )
    document.getElementById("madiv").innerHTML=document.getElementById("montexte").value
    document.getElementById("madiv").innerHTML="Le texte contient : " +  document.getElementById("montexte").value
    RESULT=parseInt(document.getElementById("montexte").value) *0.2
    document.getElementById("madiv").innerHTML="Le prix est  : " +  parseInt(document.getElementById("montexte").value) + "La TVA est   " + RESULT*/


// EXO 2*/


/**
* EXO 6
* ECRIRE une fonction qui affiche dans la div ce qu il y a dans le champs texte .
* Cette fonction se declenche au moment ou vous tapez du texte dans le champs texte
*/


  function fonction_affich() {

    document.getElementById("div").innerHTML = document.getElementById("texte").value;

  }
  
document.getElementById("monboutton").addEventListener(  "click", mafonction )
document.getElementById("texte").addEventListener(  "input", fonction_affich )

document.getElementById("boutton").addEventListener(  "click", fonction_click  )


/*EXO 7
 *  * CREEZ UNE FONCTION QUI AFFICHE  DANS LA DIV UN NUMERO QUI S INCREMENTE DE 1 A CHAQUE FOIS QUE LON CLIQUE SUR LE BOUTON*/

document.getElementById("boutton2").addEventListener(  "click", mafonction3  )

function mafonction3() {

  nbre_click=0

  nbre_click= (parseInt(document.getElementById("div").innerHTML)) + 1;

    document.getElementById("div").innerHTML = nbre_click;
}




/*  * EXO 8
*  * CREEZ UNE FONCTION QUI AFFICHE DANS LA DIV SI L AGE DANS LE TEXTE EST > 18 OU < EN ECRIVANT MAJEUR OU MINEUR
*/

document.getElementById("boutton3").addEventListener(  "click", mafonction4  )

function mafonction4() {

  age = parseInt(document.getElementById("texte2").value);
  if (age<18) {
    document.getElementById("div2").innerHTML = "vous êtes mineur";
}
 else{
  document.getElementById("div2").innerHTML = "vous êtes majeur";
}
}
  


// exo9 
//creer un champs texte un bouton et une div
//dans le chanps texte on insert un nombre 
//lorsque qu'on click
//dans la div on a la table de multiplication correspondante

document.getElementById("nombre").addEventListener(  "click", mafonction5  )

function mafonction5(){

 nombre=parseInt(document.getElementById("texte3").value);

  //document.getElementById("div3").innerHTML = "Table de " + nombre;

  document.getElementById("div3").innerHTML = "Table de " + nombre;
  

 for(var i=1;i<11;i++)
 { 
  
  document.getElementById("div3").innerHTML+= "<br />"+ nombre + "*" + i + "=" + (i*nombre)
 }

}

/**
 * EXO 1 : LES IF ?
 * 
 * EXO 2 : CREEZ UN CHAMP TEXTE, UN BOUTON, UNE DIV 
 * SI J ECRIS DANS LE CHAMPS TEXTE LE NOMBRE 5
 * JE VAIS AVOIR LE RESULTAT 1 + 2 + 3 + 4 + 5 = 
 */

 document.getElementById("somme_boutton").addEventListener( "click", mafonction6  )

 function mafonction6() {

  nombre=parseInt(document.getElementById("somme_texte").value);
  document.getElementById("div4").innerHTML= "SOMME:";
 

 somme=0

  for (i=1;i<=nombre;i++) {

    somme = somme + i

    document.getElementById("div4").innerHTML+= + i + "+";

  }
 
  document.getElementById("div4").innerHTML+= "=" + somme;
 
 
 }
 
 /*EXO 3 : CREEZ UN CHAMP TEXTE, UN BOUTON, UNE DIV 
 * SI J ECRIS DANS LE CHAMPS TEXTE LE NOMBRE 5
 * JE VAIS AVOIR LE RESULTAT 1*2*3*4*5 =*/

 document.getElementById("multi_boutton").addEventListener( "click", mafonction7  )

 function mafonction7() {

  nombre=parseInt(document.getElementById("multi_texte").value);
  document.getElementById("div5").innerHTML= "PRODUIT:";
 if (isNaN(nombre)) {
  return;
 }

 produit=1

  for (i=1;i<=nombre;i++) {

    produit = produit*i

    document.getElementById("div5").innerHTML+= + i + "*";

  }
 
     document.getElementById("div5").innerHTML+= "=" + produit;
 
 
 }


 
 /* exo1*/
 
