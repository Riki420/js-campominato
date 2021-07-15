//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                  //* JS_CAMPOMINATO                                  //
//                                                                                      //
//--------------------------------------------------------------------------------------//


/* 
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
*/

//* 1 Generare 16 numeri casuali compresi tra 1 e 100
//* 2 Riportare i 16 numeri in un array creato per raccogliere le bombe
//* 3 Chiedere all'utente un numero
//* 4 Se il numero è già stato scelto, continuo a chiedere il numero
//* 5 Verificare se il numero inserito è presente nell' array delle bombe, nel caso partita finita
//* 6 Verificare se il numero inserito non è presente tra i doppioni e le bombe, lo aggiungo nell'array dei numeri scelti


//****************************************************************************************




//--------------------------------------------------------------------------------------//
//                                //* INITIAL VARIABLES                                 //
//--------------------------------------------------------------------------------------//


//creo gli array dove andrò poi ad inserire i valori del COM e del PLAYER
var totalBombs = 16;
var totalNumbers = 100;
var listBombs = [];
var listUser = [];
var listDupli = [];
var userNum;
var possibilita = totalNumbers - totalBombs;
var find = false;
var difficult = ['facile', 'normale', 'difficile'];
var level;

//--------------------------------------------------------------------------------------//
//                              //* Scegli difficoltà                                   //
//--------------------------------------------------------------------------------------//

do{
  level = prompt('Scegli una difficoltà tra "facile", "normale", "difficile"');
} while(!level || !isInArray(level.toLowerCase().trim(), difficult));

switch(level.toLowerCase().trim()){
  case 'facile':
    totalNumbers = 100;
    break;
  case 'normale':
    totalNumbers = 80;
    break;
    case 'difficile':
    totalNumbers = 50;  
    break;
}





//--------------------------------------------------------------------------------------//
//                                   //* NUMERI BOMBA                                   //
//--------------------------------------------------------------------------------------//


//genero i 16 numeri casuali per il COM con un ciclo while
while(listBombs.length < totalBombs){
    var comNum = getRandomNumber(1,totalNumbers);

    //verifico che i numeri generati dal COM vengano inseriti solo se non doppioni
    if(!listBombs.includes(comNum)){  //se comNum non è in listBomb lo includo
      listBombs.push(comNum);
    }
}

//stampo in console l'array delle bombe
console.log('Array BOMBS: ' + listBombs);






//--------------------------------------------------------------------------------------//
//                        //* NUMERI UTENTE  -  INIZIO DEL GIOCO                        //
//--------------------------------------------------------------------------------------//

var userLost = false;

//chiedo il numero all'utente per 100 - 16 volte

while (!userLost && listUser.length < possibilita) {     
  var userNum = getUserNumber(1,totalNumbers);

  if(isInArray(userNum, listBombs)){       //se userNum è in listBombs perdi la partita
    userLost = true;
  } else{
    if(isInArray(userNum, listUser)){      //se un userNum è già stato scelto, crea alert
      alert('numero già scelto');
    } else{
      listUser.push(userNum);             //se invece non lo è push in listUser
    }
  }
}



//--------------------------------------------------------------------------------------//
//                            //* ALERT E RISULTATO PARTITA                             //
//--------------------------------------------------------------------------------------//


//stampo in console e in pagina il risultato della partita


if(userLost){
  alert('hai perso');
  document.getElementById('display').innerText = 'Hai perso la partita soldato';    //se userLost è true perdi la partita

} else{
  alert('hai vinto');
  document.getElementById('display').innerText = 'Hai vinto la partita soldato';    //se userLost è false vinci la partita
}

//variabili elementi
bombsElement = document.getElementById('bombs').innerHTML = listBombs;
userElement = document.getElementById('user').innerHTML = listUser;




//--------------------------------------------------------------------------------------//
//                                                                                      //
//                             //* DICHIARAZIONE FUNZIONI                               //
//                                                                                      //
//--------------------------------------------------------------------------------------//



 //funzione numeri random COM
function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//funzione per replicare un .includes()
function isInArray(needle, arr){
  var found = false;
  var i = 0;
  while(!found && i < arr.length){
    if(needle === arr[i]){
      found = true;
    }
    i++;
  }
  return found;
}



//funzione per chiedere i numeri all'utente
function getUserNumber(min,max){
  var number;
  do{
    number = parseInt(prompt('Inserisci un numero da ' +  min + ' a ' + totalNumbers));
  } while(!number || isNaN(number) || number < min || number > max);
  return parseInt(number);   
}