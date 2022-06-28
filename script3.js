/// les boucles 
/* répéter une action de façon défini ou indéfini*/


//Boucle for qui initialise un compteur que l'on a nommé i et qui démarra à 0 rt e termine à 5
// i++ correspond à i=i+1

for (var i=0; i<5; i++) //affiche une alerte i fois
{
    alert("test")
}

/**
 * EXO 1 : Afficher les nombre de 1 à 100 dans la console
 * 
 */

for(var i=0;i<100;i++)
{ 
    console.error(i)
}

/**
 * EXO 2 : Afficher les nombre de 100 à 200 dans la console
 */

 for(var i=100;i<200;i++)
 { 
     console.error(i)
 }


/**
 * EXO 3 : Afficher les table multiplication de 2 dans la console
 */


 for(var i=1;i<11;i++)
 { 
     console.error("2*"+i+ "="+i*2)
 }

 // double boucle //

 for(var i=0;i<9;i++)
 { 
     console.error("boucle 1" + i)

     for(var j=0;j<3;j++)
 { 
     console.error("je rentre danans la boucle 2" + j)
 }
 }

 /*EXO 3 : Afficher toutes les table multiplication dans la console*/


 for(var i=1;i<10;i++)
 { 
     console.error("table" + i)

     for(var j=0;j<10;j++)
 { 
     console.error(i+"*"+j+"="+i*j)
 }
 }
