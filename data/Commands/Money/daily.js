module.exports = ({
 name: "Daily",
 code: `$title[1;Daily Reward]
$description[1;Your daily reward is $$random[250;850]]
$footer[1;Requested by $username]
$color[1;78eab8]
$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy];$random[250;850]];;economy]
$Globalcooldown[24h;Pls try again in %time%]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix;;prefix]begin]`
})
