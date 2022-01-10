module.exports = ({
  name: "clear",
  code:`
Cleared $noMentionMessage Messages.
$deleteIn[5s]
$clear[$noMentionMessage]
$onlyPerms[managemessages;You can't do that]
$onlyIf[$isNumber[$noMentionMessage]==true;]
$onlyBotPerms[managemessages; {newEmbed: {title:Permissions Error}{description: I need Manage messages permissions for this command to work}{color:RED}}]`
})