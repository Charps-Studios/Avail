const Discord = require('discord.js');
const fse = require('fs-extra');

const config = require('../../config.json');

module.exports = {
  command: function(message, args) {

    if(args[0]) { //If parsing command or group
      //If it's a command
      fse.readdir('commands', (err, folders) => {
        folders.forEach(folder => { //For each folder
          fse.readdir(`commands/${folder}`, (err, files) => {
            files.forEach(file => { //For each file in
              let req = require(`../${folder}/${file}`);

              if (req.memberName.toLowerCase() == args[0].toLowerCase()) {
                //Makes membername start with upper case.
                message.channel.send(`${req.memberName.slice(0, 1).toUpperCase() + req.memberName.slice(-req.memberName.length + 1)} - ${req.description}\nExamples: \n${req.example}`);
              }
            });
          });
        });
      });

      //If it's a group
      fse.readdir('commands', (err, folders) => {
        folders.forEach(folder => { //For each folder
          if (folder == args[0].toLowerCase()) { //If correct folder
            let commands = [];

            fse.readdir(`commands/${folder}`, (err, files) => {
              files.forEach(file => { //For each file in specified folder
                commands = commands.concat(file.replace('.js', ''));
              });

              let asString = commands.toString();

              let embed = new Discord.MessageEmbed()
                .setColor('#7900C3')
                .setTitle(`Commands in ${folder.slice(0, 1).toUpperCase() + folder.slice(-folder.length + 1)}`) //Makes it start with uppercase
                .setDescription(`\`${asString.replace(/,/g, '\` \`')}\``)
                .setFooter(`To find what a command does, do ${config.prefix}help <command>`)
                .setTimestamp();
              message.channel.send(embed);
            });
          }
        });
      });
    } else {
      let groups = [];

      fse.readdir('commands', (err, files) => {
        files.forEach(file => {
          groups = groups.concat(file.slice(0, 1).toUpperCase() + file.slice(-file.length + 1)); //Adds to array, starts with upper case.
        });
        let asString = groups.toString();

        let embed = new Discord.MessageEmbed()
          .setColor('#7900C3')
          .setTitle('Command Groups')
          .setDescription(`\`${asString.replace(/,/g, '\` \`')}\``)
      	   .setFooter(`To find commands in groups, do ${config.prefix}help <group>`)
          .setTimestamp();
        message.channel.send(embed);
      });
    }
  },
  memberName: "Help",
  description: "Tells user information about commands and groups of commands.",
  example: `${config.prefix}help - Gets all command groups\n${config.prefix}help <command group> - Gets commands in a group\n${config.prefix}help <command> - Tells you what a command does`
}
