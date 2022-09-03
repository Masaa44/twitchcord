const config = require('../config');

class TwitchCord {
    constructor(discordClient, twitchClient) {
        this.discordClient = discordClient;
        this.twitchClient = twitchClient;
    }

    async start() {
        const discord = this.discordClient;
        const twitch =  this.twitchClient;

        discord.client.on('ready', async () => {
            this.channel = await discord.client.channels.fetch(config.discord.twitch_channel_id) || null;
            if(!this.channel) {
                console.error('Your discord channel to mirror twitch chat to is not set up correctly. Go to the .env file and set the DISCORD_TWITCH_CHANNEL_ID with the channel id of the channel you want to mirror twitch chat to.');
                proccess.exit(1);
            }
            console.info('TwitchCord is ready.');
        });

        discord.client.on('messageCreate', (message) => {
            if (message.author.bot) return;
            if (message.channel.type === 'dm') return;

            if(message.channel.id != config.discord.twitch_channel_id) return;

            try {
                twitch.client.say(`#${config.twitch.channel}`, `[Discord] ${message.author.username}: ${message.content}`);
            } catch (e) {
                console.error(e);
            }
        });

        twitch.client.on('message', async (channel, user, message, self) => {
            if (self) return;

            // Prevent mentions from twitch to discord
            if(message.includes('@here') || message.includes('@everyone')) return;

            // Prevent using commands from twitch ti discord
            if(message.startsWith('/') || message.startsWith('!') ) return;

            try {
                this.channel.send(`[Twitch] ${user['display-name']}: ${message}`);
            } catch (e) {
                console.error(e);
            }
        });
    }
}

module.exports = TwitchCord;