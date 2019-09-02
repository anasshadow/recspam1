const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618079138376450198")
setInterval(function() {
channel.send(`لا لا لا لا لال ال ا تم الدعس hi hi`);
}, 3)
})

client.login(process.env.BOT_TOKEN);
