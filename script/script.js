/*
creare una variabile della data e ora attuale
creare una variabile della data e ora del giorno successivo
fare la sottrazione tra i due numeri ottenuti per avere il tempo rimanente e stamparlo in console
inizializzare un contdown con la funzione
*/

const now = new Date().getTime();

const tomorrow = new Date('2023-04-28T09:30:00').getTime();


let timer = tomorrow - now;

const seconds = Math.floor(timer / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);

timer = hours + '' + minutes + '' + seconds;
console.log(timer);

console.log(hours + " Ore " + (minutes % 60) + " Minuti " + (seconds % 60) + " Secondi");

setInterval(() => {
    timer--
    console.log(timer);
}, 1000);






