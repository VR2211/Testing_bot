module.exports = ({
 name: "slut",
 code: `
$title[1;$username ||Sluted!||]
$color[1;#fffff]
$description[1;You $randomText[Sucked a BBC;Choked and He Liked it;got Fucked by an E-Boy;;got GangBanged;got Fucked by a Goat🐐;were a hoe for 2 days;got raped;got fingerd;got fucked by a homless man;got fucked by Aki🙂] and earned $$random[85;800] Cash!]
$footer[1;Requested by $username]
$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy];$random[85;800]];;economy]
$Globalcooldown[30m;Please wait %time% before being a ||slut|| again]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix;;prefix]begin]`
})