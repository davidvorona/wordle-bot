import { readFile, rand } from "./util";

const WORDS_FILE_PATH = "../assets/sgb-words.txt";

class Game {
    userId: string;

    word: string;

    constructor(userId: string) {
        this.userId = userId;
        this.word = Game.chooseWord();
    }

    static chooseWord() {
        const text = readFile(WORDS_FILE_PATH);
        const words = text.split("\n");
        const idx = rand(words.length);
        return words[idx];
    }

    start() {
        console.log("Starting a new game of Wordle for user", this.userId, "with word", `'${this.word}'.`);
    }
}

export default Game;
