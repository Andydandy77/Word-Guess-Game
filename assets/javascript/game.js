// object code for game
    var game = {

        bandNames: ["The Doors", "Jefferson Airplane", "Jimi Hendrix", "The Grateful Dead", 
                   "The Beatles", "Santana", "The Beach Boys", "Led Zeppelin", "Pink Floyd", "Steppenwolf", "The Rolling Stones", 
                   "The Animals", "The Yardbirds", "The Who", "Simon and Garfunkel", "Bob Dylan", "Creedence Clearwater Revival", "David Bowie", ],
        bandName: [],
        bandNameString: "",
        displayedWord: [],
        displayedWordString: "",
        guessesLeft: 15,
        wins: 0,
        guessedLetters: "",
        revealedLetters: 0,
        regex: /,/gi,
        gameOver: false,
        

        // generateGame randomly generates one of the band name choosing from an array.
        // updates value to displayedWord, resets guessedLetters and guessesLeft
        generateGame : function() {

            console.log(this.bandNames);
            
            
            $("#pic").remove();
            $("#playAgain").css("display" ,"none");
            this.guessesLeft = 15;
            this.guessedLetters = "";
            this.displayedWord = [];
            this.revealedLetters = 0;
            this.bandName = [];
            this.gameOver = false;
            this.displayedWordString =  "";
            this.bandNameString = "";


            


            
            var index = Math.floor(Math.random() * this.bandNames.length);
            this.bandNameString = this.bandNames[index];
            this.bandNames.splice(index, 1);
            for (var i = 0; i < this.bandNameString.length; i++) {
                this.bandName.push(this.bandNameString.charAt(i));
            }
            console.log(this.bandNameString);



            for (var i = 0; i < this.bandName.length; i++) {
                if(this.bandName[i] === ' ') {
                    this.displayedWord.push(' ');
                    this.revealedLetters++;
                } else {
                    this.displayedWord.push('-');

                }
            }
           
            
            this.displayedWordString = this.displayedWord.toString().replace(this.regex, '  ');
         

             document.getElementById("displayedWord").innerHTML = this.displayedWordString;
             document.getElementById("guesses").innerHTML = this.guessesLeft;
             document.getElementById("letters").innerHTML = this.guessedLetters;
             document.getElementById("wins").innerHTML = this.wins;




        },



        // Takes in the onkey event key
        guess : function(letter) {

            // Checks whether the key pressed matches
            if(!this.guessedLetters.includes(letter)) {
                if(this.bandName.includes(letter.toLowerCase()) || this.bandName.includes(letter.toUpperCase())) {
                    for(var i = 0; i < this.bandName.length; i++) {
                        if(letter === this.bandName[i].toLowerCase()) {
                            this.displayedWord[i] = this.bandName[i];
                            this.revealedLetters++;
                        }

                    }

                }

                this.displayedWordString = this.displayedWord.toString().replace(this.regex, ' ');
                console.log(this.displayedWordString);
                document.getElementById("displayedWord").innerHTML = this.displayedWordString;
                this.updateGuessedLetters(letter);
                document.getElementById("letters").innerHTML = this.guessedLetters;
                this.updateNumberGuesses();
                document.getElementById("guesses").innerHTML = this.guessesLeft;

                // Checks whether the user has guessed all the correct letters, and updates the number of wins
                if(this.revealedLetters === this.bandName.length){
                    this.updateNumberWins();
                   
                    document.getElementById("wins").innerHTML = this.wins;
                    this.gameOver = true;
                    
                } else if (this.guessesLeft === 0) {
                    this.gameOver = true;
                    this.bandNames.push(this.bandNameString);
                }

            } else {
                alert("You already guessed that letter! Try Again!");
            }
        },

        // this returns the update string of guesses left
        // If this is the first guess, it doesn't include the preceding ','
        updateGuessedLetters : function(letter) {

            if (this.guessesLeft === 15) {
                this.guessedLetters += letter;
            } else {
                this.guessedLetters += ", " + letter;
            }
            
        },

        // This returns the updated numbers of guesses left
        updateNumberGuesses : function() {
            this.guessesLeft--;

        },

        // This returns the updated number of wins
        updateNumberWins : function() {
            this.wins++;
        }

    
    };


    alert("New Game!")
    game.generateGame();
       
            document.onkeyup = function(event) {

                game.guess(event.key.toLowerCase());
                if (game.gameOver) {
                        game.displayedWordString = game.bandNameString;
                        document.getElementById("displayedWord").innerHTML = game.displayedWordString;
                        var photo = "";
                        var song = "";
                        var result = game.displayedWordString;
                        if(result === "Jimi Hendrix") {
                            photo = "jimi";
                            song = "jimi.mp3"
                        } else if (result === "The Doors") {
                            photo = "doors"
                            song = "riders.mp3"
                        } else if (result === "Jefferson Airplane") {
                            photo = "jeff"
                            song = "jeff.mp3"
                        } else if (result === "The Grateful Dead") {
                            photo = "dead"
                            song = "dead.mp3"
                        } else if (result === "The Beatles") {
                            photo = "beatles"
                            song = "beatles.mp3"
                        } else if (result === "Santana") {
                            photo = "santana"
                            song = "santana.mp3"
                        } else if (result === "The Beach Boys") {
                            photo = "beach"
                            song = "beach.mp3"
                        } else if (result === "Pink Floyd") {
                            photo = "pink"
                            song = "pink.mp3"
                        } else if (result === "Steppenwolf") {
                            photo = "step"
                            song = "step.mp3"
                        } else if (result === "The Rolling Stones") {
                            photo = "stones"
                            song = "stones.mp3"
                        } else if (result === "The Animals") {
                            photo = "animals"
                            song = "animals.mp3"
                        } else if (result === "The Yardbirds") {
                            photo = "yard"
                            song = "yard.mp3"
                        } else if (result === "The Who") {
                            photo = "who"
                            song = "who.mp3"
                        } else if (result === "Simon and Garfunkel") {
                            photo = "simon"
                            song = "simon.mp3"
                        } else if (result === "Bob Dylan") {
                            photo = "bob"
                            song = "bob.mp3"
                        } else if (result === "Creedence Clearwater Revival") {
                            photo = "ccr"
                            song = "ccr.mp3"
                        } else if (result === "David Bowie") {
                            photo = "bowie"
                            song = "bowie.mp3"
                        } else if (result === "Led Zeppelin") {
                            photo = "led"
                            song = "led.mp3"
                        }
                        var bandPhoto = $("<img>");
                        bandPhoto.attr("src" , "assets/images/" + photo + ".jpg");
                        bandPhoto.attr("id", "pic");
                        $("#bandPic").append(bandPhoto);

                        var audio = new Audio("assets/songs/" + song);
                        console.log(audio);
                        audio.play();

                        $("#playAgain").css("display", "block");


                        $("#playAgain").on("click", function() {

                            if(game.gameOver) {
                                if(game.bandNames == null) {
                                    alert("You guessed every single band! Congratulations!");
                                } else {
                                    audio.pause();
                                    game.generateGame();

                                }
                            } 

                        });
                        
        
            };
            
        }
        
    


      




