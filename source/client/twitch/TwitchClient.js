const { Client } = require('tmi.js');
const config = require('../../config');

class TwitchClient {
    constructor() {
        this.client = new Client({
            options: { debug: true, messagesLogLevel: "info" },
            connection: {
                reconnect: true,
                secure: true
            },
            identity: {
                username: 'TwitchCord',
                password: config.twitch.oauth_token
            },
            channels: [config.twitch.channel]
        });
    }

    connect() {
        this.client.connect()
        .then(console.info(`Connected to Twitch`))
        .catch(e => console.error('Error during twitch connection: ', e));
    }
}

module.exports = TwitchClient;