const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
  command: function(message, args) {
    if(!message.member.permissions.toArray().includes('MUTE_MEMBERS')) {
      let embed = new Discord.MessageEmbed()
        .setColor('#7900C3')
        .setTitle(`You don't have the permission(s) to use this command`) //Makes it start with uppercase
        .setDescription(`You need to have the permission to mute members.`)
        .setTimestamp();
      message.channel.send(embed);
      return;
    };
    message.member.voice.channel.members.forEach(member => {
        member.voice.setMute(true);
    });
  },
  memberName: "MuteAll",
  description: "Mutes all participants in a call",
  example: `${config.prefix}muteall`
}
