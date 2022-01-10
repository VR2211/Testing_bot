module.exports = ({
  name: "meme",
  code: `$djsEval[( async () => {
const Discord = require('discord.js')
const Fetch = require('node-fetch')
const Response = await Fetch('https://api.darkboy.me/getmeme')
    const Json = await Response.json()

    const Embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(Json.title)
    .setImage(Json.image)
    .setFooter(Json.up + ' 👍 | ' +Json.comments + '💬')
    .setTimestamp()

    message.channel.send(Embed)})()]`
})