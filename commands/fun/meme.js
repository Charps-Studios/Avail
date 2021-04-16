const Discord = require('discord.js');

const config = require('../../config.json');

module.exports = {
  command: function(message, args) {
    message.channel.send("Getting meme...").then(m => {
      let reddit;
      if (args[0]) { //If parsing a reddit
        if(args[0].toLowerCase().startsWith('r/')) {
          reddit = args[0].slice(2).toLowerCase(); //Gets rid of r/
        } else {
          reddit = args[0].toLowerCase();
        }
      } else {
        reddit = 'dankmemes'
      }

      meme(reddit, function(err, data) {
        if (err) return console.error(err);

        const embed = new Discord.MessageEmbed()
          .setColor('#7900C3')
        	.setURL(`https://www.reddit.com/r/${data.subreddit}/`)
        	.setAuthor(`r/${data.subreddit}: ${data.author}`)
        	.setImage(data.url)
        	.setTimestamp();
        m.delete();
        message.channel.send(embed);
      });
    });
  },
  memberName: "Meme",
  description: "Sends a random meme.",
  example: `${config.prefix}meme\n${config.prefix}meme <subreddit>`
}
