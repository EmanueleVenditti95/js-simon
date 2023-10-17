// Visualizzare in pagina 5 numeri casuali:
// - definire una funzione per generare 5 numeri casuali dentro un Array
let arrayRandomNumbers = getArrayOfRandomNumbers(1, 100, 5);
console.log(arrayRandomNumbers)

// - stampare i numeri in pagina tramite un alert
alertMessage("I tuoi numeri sono" + ' ' + arrayRandomNumbers + '.Ricordali!');

// Timer di 30 secondi in cui i numeri non devono essere visibili:
// - far scomparire i numeri
// - far partire un timer di 30 secondi
let seconds = 30
const idInterval = setInterval(timer, 1000);
function timer() {
    seconds--
    console.log(seconds)
    if (seconds <= 0) {clearInterval(idInterval)};
}



// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt():
// - definire una funzione che,tramite prompt, chiede un numero all'utente
// - ripeterla x 5 volte

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati:
// - controllare se e quanti numeri,di quelli inseriti dall'utente, siano presenti nell'array di numeri casuali
// - stampare il punteggio


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

