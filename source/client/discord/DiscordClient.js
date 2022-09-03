const { Client, GatewayIntentBits, Partials } = require('discord.js');
const config = require('../../config');

class DiscordClient {
    constructor() {
        this.client = new Client({
            shards: "auto",
            intents: [
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent
            ],
            partials: [
                Partials.User,
                Partials.GuildMember,
                Partials.Message,
                Partials.Channel,
            ]
        });
    }

    connect() {
        this.client.login(config.discord.token).then(() => {
            console.info('Connected to Discord');
        }).catch((err) => {
            console.error('Error during discord connection: ', err);
        });
    }
}

module.exports = DiscordClient;