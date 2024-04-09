import express from "express";

import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const discordRouter = express.Router();


client.on("ready", (msg) => {
    discordRouter.post("/newEmailNotification", (req, res) => {
        const { email } = req.body;

        let guild = client.guilds.cache.get(process.env.DISCORD_CLIENT_GUILD);
        let channel = guild.channels.cache.get(process.env.DISCORD_CLIENT_CHANNELS);
        let embed = new EmbedBuilder().setTitle("Yeni bir email geldi!").addFields({ name: "Email", value: email, inline: true}).setColor("#f49542").setTimestamp().setFooter({text: "Launch Map Email Bot @ 2023"});
        channel.send({ embeds: [embed] });
        res.status(200).send("Data received");
    });
});
client.login(process.env.DISCORD_CLIENT);

export default discordRouter;