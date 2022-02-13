module.exports = ({
  name: "withdraw",
  code:`
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;;economy];$replaceText[$message[1];all;$getGlobalUserVar[Bank;;economy;$authorID];1]];;economy]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy];$replaceText[$message[1];all;$getGlobalUserVar[Bank;;economy;$authorID];1]];;economy]

$title[1;$username Bank withdraw]
$description[1;$username withdraw $replaceText[$$message[1];all;$getGlobalUserVar[Bank;;economy];1] $getServerVar[custom;;economy] from there Bank to they Cash!]
$footer[1;withdarw]
$color[1;$randomText[0072FC;24ED56]]
$addTimestamp[1]


$onlyIf[$replaceText[$message[1];all;$getGlobalUserVar[Bank;;economy];1]=<$getGlobalUserVar[Bank;;economy];You don't have enough money to withdraw]
$onlyIf[$getGlobalUserVar[Bank;;economy]>$message;You don't have enough money to withdraw]
$argsCheck[1;Correct usage: $getServerVar[prefix]withdraw <amount or all>]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix;;prefix]begin]
`
})
