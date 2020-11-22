const Discord = require('discord.js');

module.exports = {
  check: function(message) {
    if (message.content.toLowerCase().includes('lol')) {
      message.delete().catch( error => {
        console.log(error);
      });
      message.channel.send(`> ${message.content.replace(new RegExp(/lol/g, 'gi'), 'mdr')}\n${message.author.username}`);

      let quips = [
        'Please refrain from using the word **lol**.',
        'Stop saying **lol**, I will slap you.',
        'You will die in your sleep if you don\'t :duck:ing stop.',
        'Stop.',
        'Stfu, no more **lol**s, alright?!',
        '**LOL**, IS A SWEAR WORD.',
        'STOP IT!',
        'Die.'
      ];

      let embed = new Discord.MessageEmbed()
        .setColor('#7900C3')
        .setTitle(quips[Math.floor(Math.random() * (9 - 0) + 0)])
        .setDescription(`\'Lol\' is not permited on ${message.guild.name}`)
        .setFooter(`Commit die`)
        .setTimestamp();
      message.author.send(embed);
    }
  }
}
