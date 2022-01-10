module.exports = ({
  name: "withdraw",
  code:`
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank];$replaceText[$message[1];all;$getGlobalUserVar[Bank;$authorID];1]]]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash];$replaceText[$message[1];all;$getGlobalUserVar[Bank;$authorID];1]]]

$title[1;$username Bank withdraw]
$description[1;$username withdraw $replaceText[$$message[1];all;$getGlobalUserVar[Bank];1] $getServerVar[custom] from there Bank to they Cash!]
$footer[1;withdarw]
$color[1;$randomText[0072FC;24ED56]]
$addTimestamp[1]


$onlyIf[$replaceText[$message[1];all;$getGlobalUserVar[Bank];1]=<$getGlobalUserVar[Bank];You don't have enough money to withdraw]
$onlyIf[$getGlobalUserVar[Bank]>$message;You don't have enough money to withdraw]
$argsCheck[1;Correct usage: $getServerVar[prefix]withdraw <amount or all>]
$onlyIf[$getGlobalUserVar[acc]==true;You need to have an acc do $getServerVar[prefix]begin]
`
})
