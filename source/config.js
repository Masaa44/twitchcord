require('dotenv').config();

module.exports = {
    discord: {
        token: process.env.DISCORD_TOKEN,
        twitch_channel_id: process.env.DISCORD_TWITCH_CHANNEL_ID
    },
    twitch: {
        oauth_token: process.env.TWITCH_OAUTH,
        channel: process.env.TWITCH_CHANNEL,
    }
}