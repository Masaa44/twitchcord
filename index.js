const DiscordClient = require('./source/client/discord/discordClient');
const TwitchClient = require('./source/client/twitch/twitchClient');
const TwitchCord = require('./source/client/twitchcord');

const discordClient = new DiscordClient();
const twitchClient = new TwitchClient();
const twitchCord = new TwitchCord(discordClient, twitchClient);

discordClient.connect();
twitchClient.connect();

twitchCord.start();

