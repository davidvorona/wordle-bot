class Game {
    userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    start() {
        console.log("Starting a new game of Wordle for user", + this.userId);
    }
}

export default Game;
