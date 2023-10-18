// Visualizzare in pagina 5 numeri casuali:
// - definire una funzione per generare 5 numeri casuali dentro un Array
let arrayRandomNumbers = getArrayOfRandomNumbers(1, 100, 5);

// - stampare i numeri in pagina tramite un alert
alertMessage("I tuoi numeri sono" + ' ' + arrayRandomNumbers + '.Ricordali!');

// - stampare un alert per avvertire l'utente di aspettare 30 secondi
alertMessage('Ora clicca su ok e aspetta 30 secondi...')

// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt():
// - dichiaro un array vuoto
let arrayUserNumbers = [];

// - imposto un timeout dopo il quale verrà eseguita la funzione per chiedere i numeri all'utente e pusharli nell'array
setTimeout(getArrayOfUserNumbers, 30000);

function getArrayOfUserNumbers () {
    while (arrayUserNumbers.length < 5) {
        let userString = prompt('Inserisci numero');
        let userNumber = parseInt(userString)
        arrayUserNumbers.push(userNumber);
    }
    return arrayUserNumbers;
    }


setTimeout(function(){
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati:
// - controllare se e quanti numeri,di quelli inseriti dall'utente, siano presenti nell'array di numeri casuali, per calcolare il punteggio
let score = 0;
let arrayRightNumbers = [];

for (let i = 0; i < arrayUserNumbers.length; i++) {
    let currentNumber = arrayUserNumbers[i];

    if (arrayRandomNumbers.includes(currentNumber) && !arrayRightNumbers.includes(currentNumber)) {
        score += 1;
        arrayRightNumbers.push(currentNumber);
    } 
}

// - stampare il punteggio
if (score === 0) {
    alertMessage('Non hai ricordato nessun numero scarso!')
} else {
    alertMessage("Hai ricordato" + ' ' + score + ' ' + "numeri:" + ' ' + arrayRightNumbers)
}
}, 30000);


function getArrayOfRandomNumbers(minRange, maxRange, number) {
    const arrayRandomNumbers = [];
    while (arrayRandomNumbers.length < number) {
        let n = getRandomInt(minRange, maxRange);

        if (arrayRandomNumbers.includes(n) !== true) {
            arrayRandomNumbers.push(n);
        }
    }
    return arrayRandomNumbers;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max + 1);
}

function alertMessage(message) {
    alert(message);
}
