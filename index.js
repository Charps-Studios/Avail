const Discord = require('discord.js');
const fse = require('fs-extra');

const config = require('./config.json');

const client = new Discord.Client({disableEveryone: true});

client.on('ready', async () => { //Find out what this all means
  console.log('Ready');
  client.user.setActivity(`${config.prefix}help for help`);
});

client.on('message', async message => {
  let processed = message.content.trim();

  if (!message.guild) return;
  if(message.author.bot) return; //If sent by bot, don't process.

  require('./lol.js').check(message);
  require('./..js').check(message);

  if(!processed.startsWith(config.prefix)) return; //If doesn't start with prefix, don't process.

  let args = processed.slice(config.prefix.length).split(' '); //Messag without prefix, split into array of args.

  fse.readdir('commands', (err, folders) => {
    folders.forEach(folder => { //For each folder
      fse.readdir(`commands/${folder}`, (err, files) => {
        files.forEach(file => { //For each file in folder
          if (require(`./commands/${folder}/${file}`).memberName.toLowerCase() == args[0].toLowerCase()) {
            require(`./commands/${folder}/${file}`).command(message, args.slice(1)); //Sending the args without command name (member name).
          }
        });
      });
    });
  });
});
client.login(config.token);
