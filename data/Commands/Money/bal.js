module.exports = ({
  name: "balance",
  aliases: ["bal", "b"],
code:`$addTimestamp[1]
$author[1;$username[$mentioned[1;yes]] Bal]
$color[1;29af57]
$addField[1;:money_with_wings: Net Worth:;$$numberSeparator[$sum[$getGlobalUserVar[Cash;;economy;$mentioned[1;yes]];$getGlobalUserVar[Bank;;economy;$mentioned[1;yes]]]]]
$addField[1; :moneybag: Bank;$$numberSeparator[$getGlobalUserVar[Bank;;economy;;$mentioned[1;yes]]]]
$addField[1;:dollar: Cash;$$numberSeparator[$getGlobalUserVar[Cash;;economy;$mentioned[1;yes];;economy]]]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;Bots don't have money!]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to make an acc You can make an acc by doing  $getServerVar[prefix;;prefix]begin]`
})
