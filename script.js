let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('resultText').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('restartButton').style.display = 'inline';
        document.getElementById('guessButton').disabled = true;
    } else if (userGuess < randomNumber) {
        document.getElementById('resultText').textContent = "Too low! Try again.";
    } else {
        document.getElementById('resultText').textContent = "Too high! Try again.";
    }
});

document.getElementById('restartButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('resultText').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessButton').disabled = false;
    this.style.display = 'none';
});