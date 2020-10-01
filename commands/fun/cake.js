const config = require('../../config.json');

module.exports = {
  command: function(message, args) {
    message.channel.send(":cake: cake (:");
  },
  memberName: "Cake",
  description: "cake.",
  example: `${config.prefix}cake`
}
