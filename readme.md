# Twitchcord

Twitchcord is an open source cross-platform twitch and discord tchat. You need to host the bot yourself by following the installation guide below.


## Installation

First of all, clone this project: `git clone https://github.com/Masaa44/twitchcord.git`
Once cloned, open a CLI, go to the twitchcord folder, then install the node modules with `npm install` or `yarn install`

## Create configuration

Copy the .env.dist file and rename it to `.env`.
Open your freshly .env file and set all environment variable:

`DISCORD_TOKEN`: 
Thats your discord bot token. 
You will need to create an application on the [discord developer portal](https://discord.com/developers/applications). Once created, go to the "bot" section then copy your token and past it inside the .env file.

`DISCORD_TWITCH_CHANNEL_ID`:
Thats your discord channel to mirror your twitch tchat. Create your own channel, copy the Id (you'll need to be developer to do that action) then past it inside the .env file

`TWITCH_OAUTH`:
Here thats the oauth token of the twitch bot. You can create a new twitch account with the name of your bot, then go to [twitch documentation](https://dev.twitch.tv/docs/authentication#user-access-tokens) to generate your oauth token (format: oauth:you_token)
You can get oauth token easily [here](https://twitchapps.com/tmi/) (developement mode only, for security reason, I will not be responsible of any problem on your twitch account !)

`TWITCH_CHANNEL`
Here's the name of your twitch channel where you want to mirror the chat on discord

## Start the bot
To start the bot, simply execute this command `node index`. Feel free to install process manager like [PM2](https://pm2.keymetrics.io/)
