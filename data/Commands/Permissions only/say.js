module.exports = {
    name: "say",
    code: `
    $channelSendMessage[$mentionedChannels[1];{newEmbed: {author:$userTag:$authorAvatar}{description:$noMentionMessage
    }{color:RANDOM}{footer:This message was sent by $username || }{timestamp}}]
    $onlyIf[$mentionedChannels[1]!=;Please Mention a channel]
    $onlyIf[$noMentionMessage[1]!=;Please type a message]
    $argsCheck[>1;Usage is $getServerVar[prefix]say mentioned a Channel Please and then your message]
    $onlyPerms[managechannel;You can't do that]
    $onlyBotPerms[viewchannel; {newEmbed: {title:Permissions Error}{description: I need viewchannel permissions for this command to work}{color:RED}}]`
}