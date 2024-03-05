// TASK:Calcolare il prezzo del bigliettto

// 1 - Chiedere all'utente il numero di chilometri che intende percorrere
const userTripKm = parseInt(prompt('Ciao, dimmi quanti chilometri devi percorrere!!'))
console.log(userTripKm);
// 2 - Chiedere all'utente l'età del passeggiero
const userAge = parseInt(prompt('Ciao, dimmi quanti anni hai!!'))
console.log(userAge);
// 3 - Calcolare il prezzo del biglietto
    // 3a- Calcolo del prezzo in base ai chilometri inseriti dall'utente (considerando un valore di 0.21€ al km)
    const userPriceKM = userTripKm * 0.21
    console.log(userPriceKM);
    // 3b- Calcolo di un eventuale sconto del 20% ai minorenni
    // 3c- Calcolo di un eventuale sconto del 40% agli over 65
    // 3d- Calcolo del prezzo finale in base alle variabili indicate
// 4 - Stampare a schermo il risultato per l'utente