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
    // sovrascrivere(togliere??) gli elementi figli dell'elemento cardBoard
    cardBoard.innerHTML = '';
    // cycle for
    for (let i = 1; i <= 100; i++) {
        // creo un element nuovo da ripetere x volte
        let windowElement = document.createElement('p');
        // numero relativo alla propria casella 
        windowElement.textContent = i;
        // Fizz: verifica e cambia il nome se è un multiplo di 3 + diventa bold e blu
        if (i % 3 === 0) {
            windowElement.textContent = 'Fizz';
            windowElement.style.fontWeight = 'Bold';
            windowElement.style.color = 'Blue';
        }
        // appendBimbo
        cardBoard.appendChild(windowElement);
    }
})