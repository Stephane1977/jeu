  
let reponse =prompt("faites votre choix :pierre,feuille,ciseau");


let tableau  = [ "pierre","feuille","ciseau"]

/**
 * Math.random()génére un nombre 0.000 et 0.999
 */

var rand = Math.floor(Math.random()*tableau.length);
var rValue = tableau[rand];

//console.log(rValue,reponse);
//let response;
 //do {
    // response = prompt (`${possibility.joint(",")} ?`);
 //}while(possibility.includes(response)===false);//



if (rValue==="pierre"
&& reponse==="ciseau")
{
        
    
   console.log(rValue,reponse);
   prompt ("gagné")
   
}
if (rValue==="pierre"
&& reponse==="feuille"){
        
    
    console.log(rValue,reponse);
    prompt ("perdu")
    
}
if (rValue==="pierre"
&& reponse==="pierre"){

    
    console.log(rValue,reponse);

    prompt ("egalité")
}



if (rValue==="feuille"
&& reponse==="pierre"){
   
    
    console.log(rValue,reponse);

    prompt ("gagné")
}

if (rValue==="feuille"
&& reponse==="ciseau"){
        
    
    console.log(rValue,reponse);
    prompt ("perdu")
    
}

if (rValue==="feuille"
&& reponse==="feuille"){
        
   

    console.log(rValue,reponse);
    prompt ("perdu")
   
}

if (rValue==="ciseau"
&& reponse==="pierre"){
    
    
    console.log(rValue,reponse);
    prompt ("perdu")

  

}

if (rValue==="ciseau"
&& reponse==="feuille"){
        
   
    console.log(rValue,reponse);
    prompt ("gagné")
    
}

if (rValue==="ciseau"
&& reponse==="ciseau"){
        
    
    console.log(rValue,reponse);

    prompt ("perdu")
}
