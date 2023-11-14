// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
//  per i multipli di 3 stampi “Fizz” al posto del numero
//  per i multipli di 5 stampi “Buzz” al posto del numero
//  per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// 1 collegare input con id
const startButton = document.getElementById('startButton');
// 2 collegare cardBoard 
let cardBoard = document.getElementById('cardBoard');
// 3 eventlistener
startButton.addEventListener('click', function() {
    // cycle for
    for (let i = 1; i <= 100; i++) {
        // creo un element nuovo da ripetere x volte
        let windowElement = document.createElement('p');
        // problema risolto QUA: textContent non è una funzione ma una propietà, per questo non andava con let davanti!!!
        windowElement.textContent = i;
        // appendBimbo
        cardBoard.appendChild(windowElement);
    }
})