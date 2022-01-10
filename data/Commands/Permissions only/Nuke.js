module.exports = ({
 name: "nuke",
 code: `
$deleteChannel[$channelID]
$cloneChannel
$wait[5s]
$sendMessage[{newEmbed:{description:$username Nuked This Channel} {title:Nuked} {image:https://media.tenor.com/images/04dc5750f44e6d94c0a9f8eb8abf5421/tenor.gif} {color:RANDOM}};no]
 $onlyPerms[managechannel;Only coo people with managechannels can use this command]
 $onlyBotPerms[viewchannel;managechannel; {newEmbed: {title:Permissions Error}{description: I need View channels and Manage channels permissions for this command to work}{color:RED}}]`
})