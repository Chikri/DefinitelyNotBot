const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Booted');
});

client.on('message', message => {
    if (message.content === '^ping') {
    	message.channel.send('PONG!');
  	}
});


client.on('message', message => {
    if (message.content === '^bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === '^help') {
    	message.reply('not set yet');
  	}
  });

client.on('message', message => {
    if (message.content === '^info') {
    	message.reply('Bot Creator is Chikri#7857');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
