class CardDeck {
    constructor(game) {
        this.game = game;
        this.interface = game.interface;
        this.dealer = game.dealer;

        this.cards = require("./cardList");
        this.keyList = Object.keys(this.cards);
        this.currentDeck = [];
    }

    shuffle() {
        this.currentDeck = [];
        let tempKeyList = this.keyList;
        for (let i=0; i<tempKeyList.length-1; i++) {
            let index = Math.floor(Math.random()*52);
            let key = tempKeyList.slice(index);
            this.currentDeck.push(key);
        }
    }

    dealCard(player) {
        let key = this.currentDeck.shift();
        player.addCard(key);
    }

    dealEach() {
        for (let i=0; i<=1; i++) {
            for (let player of Object.values(this.game.players)) {
                this.dealCard(player);
            }
            this.dealCard(this.game.dealer);
        }
    }
}

class Player {
    constructor(game, playerName) {
        this.game = game;
        this.interface = game.interface;
        this.dealer = game.dealer;
        this.playerName = playerName;
        this.deck = game.deck;

        this.purse = 100;
        this.pot = 0;

        this.hand = [];
        this.handValue = 0;
        this.softHand = false;

        this.finished = false;
        this.standing = false;
        this.busted = false;
    }

    reset() {
        this.hand = [];
        this.handValue = 0;
        this.pot = 0;
        this.finished = false;
        this.standing = false;
        this.busted = false;
        this.softHand = false;
    }

    addCard(key) {
        let cardName = this.deck.cards[key].name;
        let string = `${this.name} is dealt ${cardName}.`;
        this.interface.display(string);
        this.hand.push(key);
        this.calculateHandValue();
        this.isBusted();
    }

    isBusted() {
        if (this.handValue > 21) {
            this.busted = true;
            this.finished = true;
            let string = `${this.name} has busted at ${this.handValue}.`;
            this.interface.display(string);
        }
    }

    calculateHandValue() {
        // Sort keys/cards to calculate aces last.
        let newKeyList = [];
        for (let key of this.hand) {
            if (key === "SA" ||
                key === "CA" ||
                key === "HA" ||
                key === "DA") {
                newKeyList.push(key);
            } else {
                newKeyList.unshift(key);
            }
        }

        let handValue = 0;
        this.softHand = false;
        for (let key of newKeyList) {
            let value = this.deck.cards[key].points;
            if (value === 0) {
                // This is an ace. Determine whether to add 1 or 11.
                if (21-handValue >= 11) {
                    handValue += 11;
                    this.softHand = true;
                } else {
                    handValue += 1;
                }
            } else {
                handValue += value;
            }
        }
        
        this.handValue = handValue;
    }

    bet(wager) {
        this.pot += wager;
        this.purse -= wager;
        this.dealer.callBet(wager, this);
    }

    stand() {
        this.standing = true;
        this.finished = true;
        let string = `${this.name} stands at ${this.handValue}.`;
        this.interface.display(string);
    }
}

class Dealer extends Player {
    constructor(game, playerName="Dealer") {
        super(game, playerName);
        this.purse = undefined;
        this.playerName = playerName;
    }

    callBet(wager, player) {
        player.pot += wager;
    }

    hitOrStand() {
        if (this.handValue < 17) {
            this.deck.dealCard(this);
        } else if (this.softHand) {
            this.deck.dealCard(this);
        } else {
            this.stand();
        }
    }
}

class Interface {
    constructor(game) {
        this.game = game;
        this.deck = game.deck;
        this.dealer = game.dealer;
        this.readlineSync = require("readline-sync");
    }

    runMain() {
        // Dealer hits on soft 17 for an additional 0.22% house edge, and more-importantly,
        // additional implementation difficulty.
        this.display("--- DEALER HITS ON SOFT 17 ---\n");
        while (this.game.isHandFinished() === false) {
            for (let player of Object.values(this.game.players)) {
                this.runRound(this.game.round, player);
            }
            this.game.round++;
        }
        this.game.endHand();
    }

    runRound(roundNumber, player) {
        this.displayHand(this.dealer);
        if (player.name != "Dealer") {
            this.display("---");
            this.displayHand(player);
            this.prompt_bet(player);

            if (player.standing) {
                this.display(`${player.name}, it is your turn, but you have stood.`);
            } else {
                this.display(`${player.name}, it is your turn.`);
                let choice_dd = false;
                if (roundNumber === 1) {
                    choice_dd = this.prompt_doubleDown(player);
                }

                if (!choice_dd) {
                    this.prompt_hitOrStand();
                }
            }
        } else {
            this.dealer.hitOrStand();
        }
    }

    display(text) {
        // Wrapping console.log() for now to make future, alternate 
        // display methods easier to implement.
        console.log(text);
    }

    displayHand(player) {
        this.display(`${player.name} is holding: `);
        for (let key of player.hand) {
            let cardName = this.deck.cards[key];
            this.display(cardName);
        }

        let handValue = player.calculateHandValue();
        let valueString = "";
        if (player.softHand) {
            valueString = `${player.name} holds cards totalling a SOFT ${handValue}.`;
        } else {
            valueString = `${player.name} holds cards totalling ${handValue}.`;
        }
        this.display(valueString);
    }

    prompt_doubleDown(player) {
        let dd_choice = false;
        if (player.name !== "Dealer") {
            if (player.purse >= (player.pot/2)) {
                this.display("'Double down' means that you will double your bet, and get only one more card.");
                this.display(`It will cost ${(player.pot/2)} to double down, and you have ${player.purse} remaining.`);
                dd_choice = this.readlineSync.keyInYNStrict(`${player.name}, do you want to double down? `);
                if (dd_choice) {player.bet((player.pot/2))};
            }
        }
        return dd_choice;
    }

    prompt_hitOrStand(player) {
        if (player.name !== "Dealer") {
            let hitOrStand = this.readlineSync.keyInYNStrict(`${player.name}, do you want to hit? `);
            if (hitOrStand) {
                this.deck.addCard(player);
            } else {
                player.stand();
            }
        }
    }

    isBetPermitted(player) {
        if (player.name !== "Dealer") {
            if (!player.busted) {
                if (this.dealer.standing) {
                    if (player.handValue <= this.dealer.handValue) {
                        if (player.handValue < 21) {
                            this.prompt_bet(player);
                        } else {
                            player.finished = true;
                            this.game.isGameFinished();
                        }
                    } else {
                        player.finished = true;
                        this.game.isGameFinished();
                    }
                } else {
                    this.prompt_bet(player);
                }
            }
        } else {
            player.finished = true;
            this.game.isGameFinished();
        }
    }

    prompt_bet(player) {
        if (player.name !== "Dealer") {
            this.display(`The pot stands at $${player.pot}, and you have $${player.purse} remaining.`);
            let wager = 0;
            do {
                wager = this.readlineSync.questionInt(`${player.name}, how many whole dollars do you want to increase your bet by? (Enter 0 to not bet): `);
                if (wager > player.purse) {this.display(`You only have $${player.purse} to bet.`)};
            } while (wager > player.purse);
            player.bet(wager);
        }
    }

    prompt_playAgain(player) {
        if (player.name !== "Dealer") {
            let playAgain = this.readlineSync.keyInYNStrict(`${player.name}, do you want to play again? `);
            if (!playAgain) {
                this.game.removePlayer(player);
            }
        }
    }

    prompt_createPlayer() {
        if (Object.keys(this.game.players).length < 2) {
            let createPlayer = false;
            createPlayer = this.readlineSync.keyInYNStrict("Do you want to make a new player? ");
            if (createPlayer) {
                let playerName = this.readlineSync.question("What is your name? ");
                this.game.createPlayer(playerName);
            } else {
                if (Object.keys(this.game.players).length === 0) {this.game.endGame()};
            }
        }
    }
}

class Game {
    constructor() {
        this.interface = new Interface(this);
        this.dealer = new Dealer(this);
        this.deck = new CardDeck(this);
        this.players = {};
        this.firstHand = true;

        this.round = 0;
    }

    createPlayer(playerName) {
        let player = new Player(this, playerName);
        this.players[playerName] = player;
    }

    removePlayer(player) {
        delete this.players[player.name];
    }

    endHand() {
        for (let player of Objects.values(this.players)) {
            let winnings = 0;
            let string = "";
            if (player.busted) {
                winnings = 0;
                string = `${player.name} busted, losing. Their purse is ${player.purse}.`;
            } else if (this.dealer.busted) {
                winnings = player.pot;
                string = `${player.name} won ${winnings}. Their purse is ${player.purse + winnings}.`;
            } else if (player.handValue > this.dealer.handValue) {
                winnings = player.pot;
                string = `${player.name} won ${winnings}. Their purse is ${player.purse + winnings}.`;
            } else if (player.handValue < this.dealer.handValue) {
                winnings = 0;
                string = `${player.name} lost. Their purse is ${player.purse}.`;
            } else if (player.handValue === this.dealer.handValue) {
                winnings = Math.ceil(player.pot/2);
                string = `${player.name} has tied, earning ${winnings}. Their purse is ${player.purse + winnings}.`;
            }
            this.interface.display(string);
            player.purse += winnings;

            this.interface.prompt_playAgain(player);
        }

        if (Object.values(this.players).length < 2) {this.interface.prompt_createPlayer()};
        if (Object.values(this.players).length > 0) {
            this.startHand();
        } else {
            this.endGame();
        }
    }

    startHand() {
        this.dealer.reset();
        for (let player of Object.values(this.players)) {player.reset()};
        this.deck.shuffle();
        this.deck.dealEach();
        this.interface.runMain();
    }

    endGame() {
        this.interface.display("Game over. Thanks for playing!");
        process.exit(0);
    }

    isHandFinished() {
        let overallState = false;
        let states = [];

        for (let player of Object.values(this.players)) {
            states.push(player.finished);
        }

        states.push(this.dealer.finished);

        if (states.length === 3) {
            overallState = (states[0] && states[1] && states[2]);
        } else {
            overallState = (states[0] && states[1]);
        }
        return overallState;
    }

    startGame() {
        this.interface.prompt_createPlayer();
        this.interface.prompt_createPlayer();
        this.startHand();        
    }
}

function main() {
    game = new Game();
    game.startGame();
}

main();