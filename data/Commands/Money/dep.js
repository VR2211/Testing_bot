module.exports = ({
  name: "deposit",
  code:`
$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;;economy];$replaceText[$message[1];all;$getGlobalUserVar[Cash;;economy];1]];;economy]

$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;;economy];$replaceText[$message[1];all;$getGlobalUserVar[Cash;;economy];1]];;economy]

$title[1;$username Cash deposit]
$description[1;$username deposit $replaceText[$$message[1];all;$getGlobalUserVar[Cash;;economy];1] $getServerVar[custom;;economy] from there Cash to they Bank!]
$footer[1;deposit]
$color[1;$randomText[0072FC;24ED56]]
$addTimestamp[1]


$onlyIf[$replaceText[$message[1];all;$getGlobalUserVar[Cash;;economy];1]=<$getGlobalUserVar[Cash;;economy];You don't have enough Cash to deposit]
$onlyIf[$getGlobalUserVar[Cash;;economy]>$message;You don't have enough Cash to deposit]
$argsCheck[1;Correct usage: $getServerVar[prefix]deposit <amount or all>]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix;;prefix]begin]`
})
