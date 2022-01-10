module.exports = ({
  name: "deposit",
  code:`
$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash];$replaceText[$message[1];all;$getGlobalUserVar[Cash];1]]]

$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];$replaceText[$message[1];all;$getGlobalUserVar[Cash];1]]]

$title[1;$username Cash deposit]
$description[1;$username deposit $replaceText[$$message[1];all;$getGlobalUserVar[Cash];1] $getServerVar[custom] from there Cash to they Bank!]
$footer[1;deposit]
$color[1;$randomText[0072FC;24ED56]]
$addTimestamp[1]


$onlyIf[$replaceText[$message[1];all;$getGlobalUserVar[Cash];1]=<$getGlobalUserVar[Cash];You don't have enough Cash to deposit]
$onlyIf[$getGlobalUserVar[Cash]>$message;You don't have enough Cash to deposit]
$argsCheck[1;Correct usage: $getServerVar[prefix]deposit <amount or all>]
$onlyIf[$getGlobalUserVar[acc]==true;You need to have an acc do $getServerVar[prefix]begin]`
})
