module.exports = ({
  name:"ban",
 code:` $username[$message] has been banned from the guild.
    $ban[$message;$guildID]
    $argsCheck[1;Just enter the User ID of who you want to ban.]
$onlyPerms[ban;Error do  not have the right permissions to use this command.]
$onlyBotPerms[ban; {newEmbed: {title:permissions Error}{description: I need ban permissions so l can ban someone}{color:RED}}]`
     })