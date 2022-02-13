module.exports = ({
name: "setprefix",
code: ` 
$title[1;Success!]
$changeNickname[840319225889554453;
$getServerVar[prefix;;prefix] | AIOB Alpha]
 $description[1;My new prefix is **$message**] 
$color[1;#00ffff]
$setServerVar[prefix;$message;;prefix]
$onlyPerms[admin;Only admins can do this]
$onlyBotPerms[changenickname;managenicknames; {newEmbed: {title:Permissions Error}{description: I need change nickname and manage nicknames permissions for this command to work}{color:RED}}]`
})