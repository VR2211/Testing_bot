module.exports = {
type:"interaction",
    prototype: "slash",
name: "bot-info", 
 code: `$interactionReply[;{newEmbed: {author:$username[$clientid]:$useravatar[$clientid]} {description:
**About AIOB**

Gobal Prefix: a!
Server Prefix $getServerVar[prefix;$clientID;prefix]

**Bot Info**
• **Owner**: $usertag[$botownerid]
• **Discord API REST Latency**: $messagePing
• ** Ping**: $ping ms
• **Uptime**: $djsEval['$uptime[humanize]'.split(' ').slice(0,-1).join(' ');yes]
• **CreationDate**: $creationDate[840319225889554453;date]
• **Total commands**: $commandsCount
• ** Server Count **: $ServerCount
• ** Bot Version **: 0.9.0 
• ** Release date **: Soon to Come

**Hosting Info**
• **CPU Usage**: $cpu%
• **CPU Model**: $djsEval[require ('os').cpus()[0].model;yes] 
• **CPU Platform**: $djsEval[require ('os').platform();yes]
• **RAM Usage**: $roundTenth[$ram;2] MB

**Other Info**
• **Aoi.js Vesion**: $packageVersion
• **NodeJS Version**: $nodeversion
• **DataBase Ping**: $dbping ms
}{color:RANDOM}};{actionRow:{button:Support:5:https\\://discord.gg/4j8EyByVHc:false:<a:SOS:922509784639492096>}};;;;no]
`}