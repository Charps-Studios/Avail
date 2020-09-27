const Discord = require('discord.js');
const fse = require('fs-extra');

module.exports = {
  command: function(message, args) {
    console.log(args);

    if(!args[0]) { //If not parsing command or group
      let commands = [];
      let descriptions = [];

      fse.readdir('commands', (err, files) => {
        files.forEach(file => {
          commands = commands.concat(require(`./${file}`).memberName);
        });
        let asString = commands.toString();

        let exampleEmbed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Command')
          .setDescription(`\`${asString.replace(',', '\` \`')}\``)
          .setTimestamp();
        message.channel.send(exampleEmbed);
      });
    } else {
      fse.readdir('commands', (err, files) => {
        files.forEach(file => {
          if (require(`./${file}`).memberName == args[0]) {
            message.channel.send(`${require(`./${file}`).memberName} - ${require(`./${file}`).description}`);
          }
        });
      });
    }
  },
  memberName: "help",
  description: "Tells user information about commands and groups of commands."
}
