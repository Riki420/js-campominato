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



//creo gli array dove andrò poi ad inserire i valori del COM e del PLAYER
var listBombs = [];
var listUser = [];
var listDupli = [];
var userNum;
var possibilita = 5;  //! DA CAMBIARE PER AVERE UN DETERMINATO NUMERO DI TENTATIVI  84
var find = false;

//genero i 16 numeri casuali per il COM con un ciclo while
var i = 0;
while(i < (16 + 1)){
    var comNum = Math.floor(Math.random() * (100 - 16) + 1);
    if(!listBombs.includes(comNum)){
      listBombs.push(comNum);

    }
    i++;
}
//stampo in console l'array delle bombe
console.log('Array BOMBS: ' + listBombs);


//chiedo il numero all'utente per 100 - 16 volte
var l = 0;
while (l < possibilita && find == false) {

    //prompt per l'utente
  userNum = parseInt(prompt('Inserisci un numero da 1 a 100'));
  console.log('Numero inserito: ' + userNum);
  if(userNum)
  listUser.push(userNum);
  
    //se il numero inserito è presente nelle bombe perdi la partita, altrimenti continua fino alla vittoria
  for (var i = 0; i < listBombs.length; i++) {
    if (userNum == listBombs[i]) {
      find = true;
    }
  }
  l++;
}

//stampo in console e in pagina il risultato della partita
if (find == true) {
    console.log("Sei finito su una bomba, sei caduto soldato");
    var message = "Sei finito su una bomba, sei caduto soldato";
    document.getElementById('display').innerHTML = message;
  } else if(find == false){
    console.log("Missione compiuta, l'addestramento è finito soldato");
    var message = "Missione compiuta, l'addestramento è finito soldato";
    document.getElementById('display').innerHTML = message;
}

// ? Nel caso in cui ci fossero numeri uguali, richiedi il numero
  //creo una funzione per non far ripetere all'utente gli stessi numeri
 