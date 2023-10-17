// Visualizzare in pagina 5 numeri casuali:
// - definire una funzione per generare 5 numeri casuali dentro un Array
let arrayRandomNumbers = getArrayOfRandomNumbers(1, 100, 5);
console.log(arrayRandomNumbers)

// - stampare i numeri in pagina tramite un alert
alertMessage("I tuoi numeri sono" + ' ' + arrayRandomNumbers + '.Ricordali!');

// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt():
// - dichiaro un array vuoto
 const arrayUserNumbers = [];

// - imposto un timeout dopo il quale verrà eseguita la funzione per chiedere i numeri all'utente e pusharli nell'array
setTimeout(getArrayOfUserNumbers, 3000)

function getArrayOfUserNumbers () {
    while (arrayUserNumbers.length < 5) {
        let userNumber = prompt('Inserisci numero');
        arrayUserNumbers.push(userNumber);
    }
    return arrayUserNumbers;
    }
    console.log(arrayUserNumbers);


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


