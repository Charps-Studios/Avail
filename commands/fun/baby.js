const config = require('../../config.json');

module.exports = {
  command: function(message, args) {
    let jokes = [
      `How do you stop a baby from crawling around in circles? \nNail it’s other hand to the floor.`,
      `What is the difference between a baby and an onion? \nYou don't cry when you chop up the baby.`,
      `What do you call a dead baby pinned to your wall? \nArt.`,
      `What is red and hangs around trees? \nbaby hit by a snow blower. \n\nWhat is green and hangs around trees? \nSame baby 3 weeks later. `,
      `What do you call a dead baby with no arms and no legs in the middle of the ocean? \nFucked.`,
      `What is red and goes round and round? \nA baby in a garbage disposal.`,
      `What’s the difference between a baby and a pizza? \nA pizza doesn’t scream when you put it in the oven. `,
      `What is cold, blue and doesn’t move? \nThe baby in the freezer.`,
      `What’s got four wheels, smokes and squeals? \nA bus load of babies on fire.`,
      `What is more fun than throwing a baby off a cliff? \nCatching it with a pitchfork.`,
      `What’s the difference between a soccer ball and a baby? \nI’ve never kicked a soccer ball over 50 yards.`,
      `What do babies and baseballs have in common? \nThe neighbor gets angry when you throw them through their window.`,
      `What’s the difference between a dead baby and a peanut butter cup? \nThe dead baby won’t stick to the roof of your mouth.`,
      `What’s the difference between 100 dead babies and a Ferrari? \nI don’t keep a Ferrari in my garage.`,
      `What is grosser than ten dead babies nailed to a tree? \nOne dead baby nailed to ten trees.`
    ];

    message.channel.send(jokes[Math.floor(Math.random() * (15 - 0) + 0)]);
  },
  memberName: "Baby",
  description: "Tells you a dead baby joke.",
  example: `${config.prefix}baby`
}
