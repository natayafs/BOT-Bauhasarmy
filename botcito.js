const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Holi`);
 });
 
 client.on('message', (message) => {
   if(message.content.startsWith('ping')) {
     message.channel.send(`pong 🏓!!`);
   }
 
 });
 
 client.login('NzAxNDA4OTE5Njc4ODc3NzU2.XpxD9Q.qu5MS4WrU0oEeSehLaZvtjRqkII');