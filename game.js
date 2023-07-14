document.addEventListener("DOMContentLoaded", function() {
    var guessForm = document.getElementById("guess-form");
    var guessInput = document.getElementById("guess-input");
    var message = document.getElementById("message");

    var game = new NumberGuessGame(100);

    guessForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        var result = game.checkGuess(guess);

        if (result === "correct") {
            message.textContent = "Congratulations! You guessed the number in " + game.getGuessCount() + " attempts.";
            guessInput.disabled = true;
        } else if (result === "low") {
            message.textContent = "Too low! Try again.";
        } else {
            message.textContent = "Too high! Try again.";
        }

        guessInput.value = "";
    });
});
