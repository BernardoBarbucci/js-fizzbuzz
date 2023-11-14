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
    startButton.value = 'Thanks!';
    // sovrascrivere(togliere??) gli elementi figli dell'elemento cardBoard
    cardBoard.innerHTML = '';
    // cycle for
    for (let i = 1; i <= 100; i++) {
        // creo un element nuovo da ripetere x volte
        let windowElement = document.createElement('p');
        // numero relativo alla propria casella 
        windowElement.textContent = i;
        windowElement.style.fontSize = '.8rem';
        windowElement.style.margin = '10px';
        windowElement.style.width = '5rem';
        windowElement.style.height = '2rem';
        windowElement.style.border = '2px solid white';
        windowElement.style.borderRadius = '5px';
        windowElement.style.background = 'linear-gradient(135deg, #153677, #4e085f)'
        windowElement.style.textAlign = 'center';
        
        // FizzBuzz = verifica e cambia il nome se è un multiplo di 15 + diventa bold e verde e di 2rem
            // FizzBuzz = verifica e cambia il nome se è un multiplo di 3 + diventa bold e blu e di 2rem
            // Buzz: verifica e cambia il nome se è un multiplo di 5 + diventa bold e rosso e di 2rem
        if (i % 15 === 0){
        windowElement.textContent = 'FizzBuzz';
        windowElement.style.fontWeight = 'Bold';
        windowElement.style.fontSize = '1.2rem';
        windowElement.style.color = 'Green';
        windowElement.style.width = '6rem';
        windowElement.style.border = '2px solid red';
        } else if (i % 3 === 0) {
        windowElement.textContent = 'Fizz';
        windowElement.style.fontWeight = 'Bold';
        windowElement.style.fontSize = '1.2rem';
        windowElement.style.color = 'Blue';
        } else if (i % 5 === 0) {
        windowElement.textContent = 'Buzz';
        windowElement.style.fontWeight = 'Bold';
        windowElement.style.fontSize = '1.2rem';
        windowElement.style.color = 'Red';
        }
        // appendBimbo
        cardBoard.appendChild(windowElement);
    }
})