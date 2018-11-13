// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('pastebin.com');
    or (command === 'invite') return msg.channel.send(process.env.INVITE);
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'help') return msg.author.send('Note: All commands need to have prefix | guide = shows a guide on how to use the bot | invite = shows invite for the bot | info = shows info about the bot');
    else if (command === 'info') return msg.channel.send(process.env.INFO);
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
