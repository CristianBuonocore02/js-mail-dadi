// Mail
// Crea una lista di email di invitati ad una festa.
//  Chiedi all’utente la sua email, 

// controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email




let listaEmail = ["maurop@libero.com", "kekko32@libero.com", "lucas32@gmail.com", "cristian02@gmail.com"]
let email = prompt("inserisci la tua mail")
let trovato = false

for (let i = 0; i < listaEmail.length; i++) {
    if (email === listaEmail[i]) {
        trovato = true
        break
    }
}

if (trovato) {
    console.log("sei stato invitato");
} else {
    console.log("non sei stato invitato");
}







// Gioco dei dadi - 

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda: 
// Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// facciamo una variabile

// soluzione es2

let giocatore = Math.floor(Math.random() * 6) + 1

let computer = Math.floor(Math.random() * 6) + 1

console.log("Il tuo numero è " + giocatore)

console.log("Il numero del computer è " + computer)

if (giocatore > computer) {
    console.log("Hai vinto!")
} else {
    console.log("Hai perso!");

}

// console.log(giocatore)







