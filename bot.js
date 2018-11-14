// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('pastebin.com');
    if (command === 'invite') return msg.channel.send(process.env.INVITE);
    if (command === 'serverinfo')
    const embed = new Discord.RichEmbed()
    .setTitle(`${msg.guild.name}`)
    .setColor(0x17bec6)
    .addField(`Owner`, `${msg.guild.owner.user.tag} (${msg.guild.owner.id})`)
    .addField(`Members`, `${msg.guild.memberCount}`)
    .addField(`Region`, `${msg.guild.region}`)
    .addField(`ID`, `${msg.guild.id}`)
    .addField(`Channels`, `${msg.guild.channels.size}`)
    .addField(`Created at`, `Created at date: WIP`)

    msg.channel.send({embed});
  }
    if (command === 'help') return msg.author.send('Note: All commands need to have prefix | guide = shows a guide on how to use the bot | invite = shows invite for the bot | info = shows info about the bot');
    if (command === 'info') return msg.channel.send(process.env.INFO);
    if (command === 'eval')
        if(msg.author.id !== "480791584829341700") return;
  let evall = msg.content.split(' ')[0];
  let evalstuff = msg.content.split(" ").slice(1).join(" ")
  try {
      const code = msg.content.split(" ").slice(1).join(" ")
      let evaled = eval(code);

      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled);

        msg.channel.send(`:inbox_tray: Input: \n \`\`\`${evalstuff}\`\`\` \n :outbox_tray: Output: \n  \`\`\`${(evaled)}\`\`\``)
    } catch (err) {
        msg.channel.send(`:inbox_tray: Input: \n \`\`\`${evalstuff}\`\`\` \n :outbox_tray: Output: \n  \`\`\`${(err)}\`\`\``)
    };




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
