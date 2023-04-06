/**
 * Randomly choose and return a member from a provided array.
 * @param {Array} array - Array to randomly choose a member from.
 * @returns member - Randomly chosen member of the array.
 */
function randomChoice(array) {
    let index = Math.floor(Math.random() * array.length);
    let member = array[index];
    return member;
}

class Interface {
    constructor(board) {
        this.board = board;
        this.rs = require("readline-sync");
        this.possibilities = ["A1", "A2", "A3",
                              "B1", "B2", "B3",
                              "C1", "C2", "C3"];
    }

    /**
     * Display a message. We wrap console.log() here to permit future API/interface changes (such as moving to a webpage).
     * @param {String} message - Message to display.
     */
    display(message) {
        console.log(message);
    }

    /**
     * Prompt player to press a key prior to playing the game.
     */
    prompt_onLoad() {
        this.rs.keyInPause("Press any key to start the game. ");
        this.runMain();
    }

    /**
     * Prompt the player for a set of coordinates.
     */
    prompt_coordinates() {
        const options = {
            limit: this.possibilities,
            limitMessage: `That is not a valid target. Possible targets are: ${this.possibilities}.`,
        }
        let coordinateString = this.rs.question("Enter a location to strike, ie. 'A2'. ", options);
        this.board.processGuess(coordinateString);
    }

    /**
     * Upon completion of a single match, prompt the player if they want to play again.
     */
    prompt_playAgain() {
        let response = this.rs.keyInYNStrict("You have destroyed all battleships. Would you like to play again? ");
        if (response) {
            this.board.resetBoard();
            this.runMain();
        } else {
            process.exit(0);
        }
    }

    /**
     * Run a single match.
     */
    runMain() {
        while (this.board.shipsSunk < 2) {
            this.prompt_coordinates();
        }
    }
}

class Board {
    constructor() {
        this.interface = new Interface(this);
        this.shipsSunk = 0;

        // 0 will indicate no miss, 1 will indicate a miss, false indicates a ship
        // that has not been hit, true indicates a ship that has been hit (and sunk).
        this.grid = {
            1: {
                A: 0,
                B: 0,
                C: 0,
            },
            2: {
                A: 0,
                B: 0,
                C: 0,
            },
            3: {
                A: 0,
                B: 0,
                C: 0,
            },
        }
    this.populateBoard();
    }

    /**
     * Process a guess to see if it is a hit or a miss.
     * @param {String} string - String of format [Letter][Number], where [Letter] is A-C, and [Number] is 1-3.
     */
    processGuess(string) {
        let x = string[1];
        let y = string[0];

        // This is an empty square.
        if (this.grid[x][y] === 0) {
            this.grid[x][y] = 1;
            this.interface.display("You have missed!");
        } else if (this.grid[x][y] === 1) {
            this.interface.display("You have already picked this location. Miss! ");
        
        // This is a ship.
        } else if (this.grid[x][y] === true) {
            this.interface.display("You have already picked this location, a sunken ship. Miss! ");
        } else if (this.grid[x][y] === false) {
            if (this.shipsSunk === 0) {
                this.shipsSunk = 1;
                this.interface.display("Hit. You have sunk a battleship. One ship remaining. ");
            } else if (this.shipsSunk === 1) {
                this.interface.prompt_playAgain();
            }
        }                
    }

    /**
     * Populate the board with ships.
     */
    populateBoard() {
        let shipsLeft = 2;
        while (shipsLeft > 0) {
            let x = randomChoice(Object.keys(this.grid));
            let y = randomChoice(Object.keys(this.grid[x]));

            if (this.grid[x][y] === 0) {
                // Square is empty, put a ship there.
                this.grid[x][y] = false;
                shipsLeft--;
            } else {
                // Square already has a ship; find a different square.
                continue;
            }
        }
    }

    /**
     * Reset the board for a new game.
     */
    resetBoard() {
        this.grid = {
            1: {
                A: 0,
                B: 0,
                C: 0,
            },
            2: {
                A: 0,
                B: 0,
                C: 0,
            },
            3: {
                A: 0,
                B: 0,
                C: 0,
            },
        }
    this.populateBoard();
    this.shipsSunk = 0;
    }
}

/**
 * Run the program.
 */
function main() {
    const board = new Board();
    board.interface.prompt_onLoad();
}

main();