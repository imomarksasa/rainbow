const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});



const RainClient = require("rainbow-role")
const rain = new RainClient($, DEVELOPER, 10, 60, false

rain.rainbow(client) // على حسب , اذا كنت معرفه client او bot

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
