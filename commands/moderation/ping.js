const config = require('../../config.json');

module.exports = {
  command: function(message, args) {
    message.channel.send("Getting bot ping...").then(m =>{
      var ping = m.createdTimestamp - message.createdTimestamp;
      m.edit(`**Latency**: ${ping}`);
    });
  },
  memberName: "Ping",
  description: "Gives ping/latency.",
  example: `${config.prefix}ping`
}
