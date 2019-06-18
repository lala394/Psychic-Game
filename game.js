class PsychicGame {
    constructor(sel) {
        this.wrapper_selector = sel;
        this.CompGuesses = "qwertyuiopasdfghjklzxcvbnm";
        this.wScore = 0;
        this.lScore = 0;
        this.Left = 9;
        this.SofarGuess = [];
        
        this.setCompGuess()
        this.createGamePrerequisites()
        this.setNecessaryEvents()
        this.Showstats()
    }

    setCompGuess(){
       this.compGuess = this.CompGuesses[parseInt(Math.random() * this.CompGuesses.length)]
    }

    createGamePrerequisites () {
        let h1 = document.createElement('h1')
        h1.innerHTML = 'The Psychic Game'

        let p1= document.createElement('p')
        p1.innerHTML = 'Guess what letter I\'m thinking of'

        let p2 = document.createElement('p')
        p2.innerHTML = 'Wins: '

        this.winScore = document.createElement('span')
        p2.appendChild(this.winScore)

        let p3 = document.createElement('p')
        p3.innerHTML = 'Losses: '

        this.lossesScore = document.createElement ('span')
        p3.appendChild(this.lossesScore)

        let p4 = document.createElement('p')
        p4.innerHTML = 'Guesses left: '

        this.guessesLeft = document.createElement ('span')
        p4.appendChild(this.guessesLeft)

        let p5 = document.createElement('p')
        p5.innerHTML = 'Your Guesses so far: '

        this.guessesSofar = document.createElement ('span')
        p5.appendChild(this.guessesSofar)

        let wrapper = document.querySelector(this.wrapper_selector)
        wrapper.appendChild(h1)
        wrapper.appendChild(p1)
        wrapper.appendChild(p2)
        wrapper.appendChild(p3)
        wrapper.appendChild(p4)
        wrapper.appendChild(p5)
    }

    Showstats() {
        this.winScore.innerHTML = this.wScore;
        this.lossesScore.innerHTML = this.lScore;
        this.guessesLeft.innerHTML = this.Left;
        this.guessesSofar.innerHTML = this.SofarGuess;
    }
    incrementWinscore() {
        this.wScore++;
    }
    incrementLosscore() {
        this.lScore++;
    }
    decrementGuess() {
        this.Left--;
    }
    pushGuesses (userGuess) {
        if (this.SofarGuess.indexOf(userGuess) != -1) {
            alert("You have typed this letter already")
        } else {
            this.SofarGuess.push(userGuess);
        }
    }
    resetgame() {
        this.Left = 9;
        this.SofarGuess = [];
        this.setCompGuess()
    }

    setNecessaryEvents(){
        let game = this
        document.onkeyup = function(event) {
        var userGuess = event.key

        if (userGuess == this.compGuess) {
            game.incrementWinscore();
            game.resetgame();
        }
        else {
            if (game.Left > 1) {
                game.decrementGuess();
                game.pushGuesses(userGuess);
            }
            else {
                 game.incrementLosscore();
                 game.resetgame();
            }
          }
          game.Showstats()
         }
       }
    }