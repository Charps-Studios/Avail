module.exports = {
  command: function(message, args) {
    let randomNum = Math.floor(Math.random() * (3 - 0) + 0);

    switch(randomNum) {
      case 0:
        message.channel.send('What is blue and smells like red paint? \n Blue paint.');
        break;
      case 1:
        message.channel.send('I was wondering why the ball was getting bigger... Then it hit me.');
        break;
      case 2:
        message.channel.send('What do you call someone with no body and no nose? \n Nobody knows.');
        break;
      case 3:
        message.channel.send('Why couldn\'t the bicycle stand up byitself \n It was two tired.');
        break;
      case 4:
        message.channel.send(`Why can't a nose by 12 inches long? \n Because then it would be a foot.`);
    }
  },
  memberName: "joke",
  description: "Tells you a joke."
}
