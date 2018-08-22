    // c
    var game = {

        bandNames: ["The Doors", "Jefferson Airplane", "Jimi Hendrix", "The Grateful Dead", 
                    "The Beatles", "Santana", "The Beach Boys", "Led Zeppelin", "Pink Floyd", "Steppenwolf", "The Rolling Stones", 
                    "The Animals", "The Yardbirds", "The Who", "Simon and Garfunkel", "Bob Dylan", "Creedence Clearwater Revival", "David Bowie", ],
        bandName: [],
        bandNameString: "",
        displayedWord: [],
        guessesLeft: 15,
        wins: 0,
        guessedLetters: "",
        revealedLetters: 0,

        // generateGame randomly generates one of the band name choosing from an array.
        // updates value to displayedWord, resets guessedLetters and guessesLeft
        generateGame : function() {

            this.guessesLeft = 15;
            this.guessedLetters = "";
            this.displayedWord = [];
            
            this.bandNameString = this.bandNames[Math.floor(Math.random() * this.bandNames.length)];
            for (var i = 0; i < this.bandNameString.length; i++) {
                this.bandName.push(this.bandNameString.charAt(i));
            }

            for (var i = 0; i < this.bandName.length; i++) {
                this.displayedWord.push('-');
            }
            

           // console.log(this.displayedWord);
            //console.log(this.bandNameString);
            //console.log(this.displayedWord.toString());
            
            document.getElementById("displayedWord").innerHTML = (this.displayedWord.toString()).replace(',','');
             document.getElementById("guesses").innerHTML = "" + this.guessesLeft;
            document.getElementById("letters").innerHTML = "" + this.guessesLetters;


        },



        // Takes in the onkey event key
        guess : function(letter) {

            // Checks whether the key pressed matches
            if(this.bandName.includes(letter.toLowerCase)) {
                for(var i = 0; i < this.bandName.length; i++) {
                    if(letter === this.bandName[i]) {
                        this.displayedWord[i] = letter;
                        this.revealedLetters++;
                    }

                }

            }

            // Checks whether the user has guessed all the correct letters, and updates the number of wins
            if(this.revealedLetters === this.bandName.length){
                this.wins = this.updateNumberWins();
            }

            console.log(this.displayedWord);
            console.log(this.bandNameString);
            console.log(this.displayedWord.toString());
            console.log(this.guessesLeft);
            console.log(this.guessedLetters);


            //  document.getElementById("displayedWord").innerHTML = this.displayedWord.toString();
            // this.guessedLetters = this.updateGuessedLetters(letter);
            //  document.getElementById("letters").innerHTML = this.guessesLetters;
            // this.guessesLeft = this.updateNumberGuesses();
            //  document.getElementById("guesses").innerHTML = this.guessesLeft;
        },

        // this returns the update string of guesses left
        // If this is the first guess, it doesn't include the preceding ','
        updateGuessedLetters : function(letter) {

            if (this.guessesLeft === 15) {
                this.guessedLetters += letter;
            } else {
                this.guessedLetters += ", " + letter;
            }
            return this.guessedLetters;
            
        },

        // This returns the updated numbers of guesses left
        updateNumberGuesses : function() {


            return (--this.guessesleft);

        },

        // This returns the updated number of wins
        updateNumberWins : function() {
            return (++this.wins);
        }

    
    };

    //for(var i = 0; i < 10; i++) {


        game.generateGame();
        console.log(game.guessesLeft);
        console.log(game.guessedLetters);


        // while(game.guessesLeft != 0 || game.revealedLetters != game.bandName.length) {

        for(var i = 0; i < 15; i++) {
            document.onkeyup = function(event) {

                game.guess(event.key.toLowerCase());


            };
        }
        
   // }


      




