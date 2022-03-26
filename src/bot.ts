import { Client, Intents, Interaction } from "discord.js";
import Game from "./game";
import auth from "../config/auth.json";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
    if (client.user) {
        console.log(`Logged in as ${client.user.tag}!`);
    }
});

client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
    }

    if (interaction.commandName === "play") {
        await interaction.reply("Starting a new game of Wordle...");
        const wordleGame = new Game(interaction.user.id);
        wordleGame.start();
    }
});

client.login(auth.token);
