// reset HTML function
function resetHTML(value) {
    value.innerHTML = '';
}

/****** Palindrome Section ******/

//  Var collect
var palindromeElement = document.getElementById('palindrome');
var palCheckElement = document.getElementById('pal-check');

// check if is pal
function isPal(pal) {

    var letters = []
    for (var i = 0; i < pal.length; i++) {
        letters.push(pal.charAt(i).toLowerCase());
    }

    var upperCounter = 0;
    var lowerCounter = pal.length - 1;
    var isPal = true;

    while (upperCounter <= lowerCounter && isPal) {

        if (letters[upperCounter] === letters[lowerCounter]) {
            upperCounter++;
            lowerCounter--;
        } else {
            isPal = false;
        }

    }
    return isPal;
}

// check button event
palCheckElement.addEventListener('click', function () {
    var palMessageElement = document.getElementById('pal-message')
    var palindromeValue = palindromeElement.value;
    var palMessage = 'La parola '
    if (isPal(palindromeValue)) {
        palMessage += 'è palindroma.';
    } else {
        palMessage += 'non è palindroma.';
    }

    palMessageElement.innerHTML = palMessage
})

/****** Even/odd Section ******/

//  Var collect
var evenOddSelectionElement = document.getElementById('even-odd');
var numberElement = document.getElementById('number');
var playEvenOddElement = document.getElementById('play-even-odd');
var playAgainElement = document.getElementById('play-again');
var sumResultElement = document.getElementById('sum-result');
var evenOddResultElement = document.getElementById('even-odd-result');

// cpu randomizer
function cpuRandomNum() {
    var random = Math.floor(Math.random() * 5) + 1;
    return random;
}

// sum function
function sum(num1, num2) {
    return num1 + num2;
}

// sum check function
function isSumEven(sum) {
    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// start game button event
playEvenOddElement.addEventListener('click', function () {
    var userSelection = parseInt(numberElement.value);
    var cpuNum = cpuRandomNum();
    var numbersSum = sum(userSelection, cpuNum);
    var sumTypeMessage = 'La somma è: ';
    var gameResultMessage = 'HAI VINTO!!';

    if (isSumEven(numbersSum) && evenOddSelectionElement.value === 'even') {
        sumTypeMessage += 'pari';
    } else if (isSumEven(numbersSum) && evenOddSelectionElement.value !== 'even') {
        sumTypeMessage += 'pari';
        gameResultMessage = 'HAI PERSO...';
    } else if (!isSumEven(numbersSum) && evenOddSelectionElement.value === 'odd') {
        sumTypeMessage += 'dispari'
    } else {
        sumTypeMessage += 'dispari';
        gameResultMessage = 'HAI PERSO...';
    }

    sumResultElement.innerHTML = sumTypeMessage;
    evenOddResultElement.innerHTML = gameResultMessage;
})

// play again event

playAgainElement.addEventListener('click', function () {
    resetHTML(sumResultElement);
    resetHTML(evenOddResultElement);
})