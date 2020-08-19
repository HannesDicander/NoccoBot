module.exports = {
  name: 'drink',
  description: "Drink some nocco!",
  execute(message, args){
    message.channel.send('Drink some nocco!');
  }
}