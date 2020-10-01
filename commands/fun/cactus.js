const config = require('../../config.json');

module.exports = {
  command: function(message, args) {
    message.channel.send(":cactus: prick ):");
  },
  memberName: "Cactus",
  description: "cacti.",
  example: `${config.prefix}cactus`
}
