module.exports = [{
 name: "report-bug",
    aliases: ['r-bug'],
code: `
$description[1;I have just log the but that your have reported] <@!$authorID>
$channelSendMessage[921747147332911164;<@&921749374902624276>  {newEmbed: {title:Bug Reported}{description: 
A new Bug has be reporte
Name of the user that report the bug:<@!$authorID> 
Name of server the bug came from:$serverName
And the Bug that has be Reported is:$message}{color:RANDOM}}]
$color[1;RANDOM]
$onlyif[$message!=;PLs give me a message]

`
}, {
    name: "Request",
code: `$description[1;I have log the request that your have just ask for]<@!$authorID>
$channelSendMessage[921747147332911164;<@&921749374902624276> {newEmbed: {title:Request}{description:
A new request has come in
Name of the Requester:<@!$authorID> 
Name of server the REquest  came from:$serverName
And the Request that has be Requested:$message} {color:RANDOM}}]
$color[1;RANDOM]
$onlyif[$message!=;PLs give me a message]`
}]
/*
How to find your webhookID/Token
url: https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA
Your ID: 793312378162642975
Your Token: paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA
*/
