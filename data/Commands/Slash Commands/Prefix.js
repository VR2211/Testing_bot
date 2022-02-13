module.exports = {
type:"interaction",
prototype: "slash",
name: "prefix", 
 code: `$interactionReply[;{newEmbed: {title:Prefix}{description:My Gobal Prefix is t!
And The Server Prefix is $getServerVar[prefix;;prefix]

To get help do t!help or do $getServerVar[prefix;$clientID;prefix]}};;;;no]`
 }