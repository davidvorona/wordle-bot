import { TextBasedChannel, Interaction } from "discord.js";
import { readFile, rand } from "./util";

const WORDS_FILE_PATH = "../assets/sgb-words.txt";

class Game {
    interaction: Interaction;

    word: string;

    board: string;

    channel?: TextBasedChannel

    constructor(interaction: Interaction) {
        this.interaction = interaction;
        this.board = this.initBoard();
        if (interaction.channel) {
            this.channel = interaction.channel;
        }
        this.word = Game.chooseWord();
    }

    static chooseWord() {
        const text = readFile(WORDS_FILE_PATH);
        const words = text.split("\n");
        const idx = rand(words.length);
        return words[idx];
    }

    initBoard() {
        let str = "";
        for (let i = 0; i < 6; i++) {
            str += "XXXXX\n";
        }
        return str;
    }

    async start() {
        console.log(
            "Starting a new game of Wordle for user",
            this.interaction.user.id, "with word", `'${this.word}'.`
        );
        if (this.channel) {
            this.channel.send(this.board);
        }
    }
}

export default Game;
