    module.exports = ({
    name: "sinfo",
    code: `
    $title[1;Server Info]
    $description[1;

> Server Owner
     The server owner is <@$ownerID>

> Server Name
     The server name is $serverName

> Server Verification Level
   The Server Verification Level is: $serverVerificationLevel

> Member Count
   This server has this many members $membersCount Members
   and out of those members there are this many bots $botCount Bots

> Boosts Count
    The server has $serverBoostCount boosts

> Role Count
    THis server has this many Roles $roleCount Roles
   
> Channel Count
    The server has this many channels $channelCount Channel]
    $footer[1;This command will be update]
    $color[1;RANDOM]`
})

