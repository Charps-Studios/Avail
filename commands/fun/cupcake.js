const config = require('../../config.json');

module.exports = {
  command: function(message, args) {
    message.channel.send(":cupcake: cupcake |:");
  },
  memberName: "Cupcake",
  description: "cupcake.",
  example: `${config.prefix}cupcake`
}
