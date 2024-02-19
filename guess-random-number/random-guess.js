
		// Generate a Random Number
		let  crateRandom = Math.floor(Math.random() * 10 + 1);

		// Counting the number of guesses
		// made for correct Guess
		let guess = 1;

		document.getElementById("submitguess").onclick = function () {

			// Number guessed by user 
			let getGuess = document.getElementById("guessField").value;

			if (getGuess == crateRandom) {
				alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
				+ guess + " GUESS ");
				// alert("you guess "+ guess + "th time");
			}

			/* If guessed number is greater than actual number*/
			else if (getGuess > crateRandom) {
				guess++;
				alert("OOPS SORRY!! TRY A SMALLER NUMBER");
				// alert("you guess "+ guess + "th time");

			}
			else {
				guess++;
				// alert("you guess "+ guess + "th time");
					alert("OOPS SORRY!! TRY A GREATER NUMBER");

			} 

			
         

		}