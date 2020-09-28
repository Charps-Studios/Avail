const Discord = require('discord.js');
const fse = require('fs-extra');

const config = require('./config.json');

const client = new Discord.Client({disableEveryone: true});

client.on('ready', async () => { //Find out what this all means
  console.log('Ready');
});

client.on('message', async message => {

  let processed = message.content.trim();

  if (!message.guild) return;
  if(message.author.bot) return; //If sent by bot, don't process.

  if (message.content.toLowerCase().includes('lol')) { //If lol
    message.delete();
    message.channel.send(`> ${message.content.replace(new RegExp(/lol/g, 'gi'), 'mdr')}\n${message.author.username}`);

    let randomNum = Math.floor(Math.random() * (8 - 0) + 0);
    let quip
    switch(randomNum) {
      case 0:
        quip = 'Please refrain from using the word **lol**.';
        break;
      case 1:
        quip = 'Stop saying **lol**, I will slap you.';
        break;
      case 2:
        quip = 'You will die in your sleep if you don\'t :duck:ing stop.';
        break;
      case 4:
        quip = 'Stop.';
        break;
      case 5:
        quip = 'Stfu, no more **lol**s, alright?!';
        break;
      case 6:
        quip = '**LOL**, IS A SWEAR WORD.';
        break;
      case 7:
        quip = 'STOP IT!';
        break;
      case 8:
        quip = 'Die.';
        break;
    }
    let exampleEmbed = new Discord.MessageEmbed()
      .setColor('#7900C3')
      .setTitle(quip)
      .setDescription(`\'Lol\' is not permited on ${message.guild.name}`)
      //.setFooter(``)
      .setTimestamp();
    message.author.send(exampleEmbed);
    return;
  } //Punishment if says no.

  if(!processed.startsWith(config.prefix)) return; //If doesn't start with prefix, don't process.
  /*if(processed.replace(config.prefix, '').startsWith(' ')) { //If space between prefix and command
    processed.slice(config.prefix.length, config.prefix.length + 2); //Removes space between prefix and command.
    console.log(processed);
  };*/

  let args = processed.replace(config.prefix, '').split(' '); //Messag without prefix, split into array of args.

  fse.readdir('commands', (err, folders) => {
    folders.forEach(folder => { //For each folder
      fse.readdir(`commands/${folder}`, (err, files) => {
        files.forEach(file => { //For each file in folder
          if (require(`./commands/${folder}/${file}`).memberName == args[0].toLowerCase()) {
            console.log(file);
            require(`./commands/${folder}/${file}`).command(message, args.slice(1)); //Sending the args without command name (member name).
          }
        });
      });
    });
  });
});
client.login(config.token);
