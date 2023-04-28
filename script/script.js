/*
creare una variabile della data e ora attuale
creare una variabile della data e ora del giorno successivo
fare la sottrazione tra i due numeri ottenuti per avere il tempo rimanente e stamparlo in console
inizializzare un contdown con la funzione
*/
const countDown = document.querySelector('#countdown');

const tomorrow = new Date('2023-04-28T09:30:00').getTime();

const IdInterval = setInterval(() => {
    const now = new Date().getTime();

    let timer = tomorrow - now;

    if (timer <= 0) {
        clearInterval(IdInterval);
        countDown.innerHTML = `0 ore 0 minuti 0 secondi! Inizia la correzione!`;

    } else {
        const seconds = Math.floor(timer / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
    
        countDown.innerHTML = `${hours} ore ${minutes % 60} minuti ${seconds % 60} secondi`;
    
        console.log(hours + ' ore ' + (minutes % 60) +  ' minuti '+ (seconds % 60) + ' secondi ');
    }

}, 1000);






