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



const {Client} = require('discord.js')
const RainClient = require("rainbow-role")
const rain = new RainClient("!", "Developer", 10, 5, false)


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
