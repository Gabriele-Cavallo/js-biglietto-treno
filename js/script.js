// TASK:Calcolare il prezzo del bigliettto

// 1 - Chiedere all'utente il numero di chilometri che intende percorrere
const userTripKm = parseInt(prompt('Ciao, dimmi quanti chilometri devi percorrere!!'))
// 2 - Chiedere all'utente l'età del passeggiero
const userAge = parseInt(prompt('Ciao, dimmi quanti anni hai!!'))
// 3 - Calcolare il prezzo del biglietto
    // 3a- Calcolo del prezzo in base ai chilometri inseriti dall'utente (considerando un valore di 0.21€ al km)
    const userPriceKM = userTripKm * 0.21
    // 3b- Calcolo di un eventuale sconto del 20% ai minorenni
    if (userAge < 18){
        userDiscount20 = userPriceKM - (userPriceKM * 20 / 100);
    }
    // 3c- Calcolo di un eventuale sconto del 40% agli over 65
    if (userAge > 65){
        userDiscount40 = userPriceKM - (userPriceKM * 40 / 100);
    }
    // 3d- Calcolo del prezzo finale in base alle variabili indicate
    let userMessage = 'Il prezzo del tuo bilgietto è di €'
    let finalPrice = userPriceKM;
    if (userAge < 18){
        finalPrice = userDiscount20;
    }else if(userAge > 65){
        finalPrice = userDiscount40;
    }
    finalPrice = finalPrice.toFixed(2);
// 4 - Stampare a schermo il risultato per l'utente
document.getElementById('price').innerHTML = `${userMessage} ${finalPrice}`;
