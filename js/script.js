var palindromeElement = document.getElementById('palindrome');
var palCheckElement = document.getElementById('pal-check');

function isPal(pal) {

    var letters = []
    for (var i = 0; i < pal.length; i++) {
        letters.push(pal.charAt(i).toLowerCase());
    }
    console.table(letters);

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

palCheckElement.addEventListener('click', function () {
    var palMessageElement = document.getElementById('pal-message')
    var palindromeValue = palindromeElement.value;
    var palMessage = 'La parola '
    if (isPal(palindromeValue)) {
        palMessage += 'è palindroma';
    } else {
        palMessage += 'non è palindroma';
    }

    palMessageElement.innerHTML = palMessage
})