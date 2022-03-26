import { Client, Intents, Interaction } from "discord.js";
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
});

client.login(auth.token);
