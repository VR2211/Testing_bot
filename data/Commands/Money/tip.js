module.exports = ({
 name: "tip",
 code: `
$title[1;**Tip Reward**]
$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy];$random[100;200]];;economy]
$description[1;Your Tip Reward is $$random[100;200]]
$cooldown[30m;This is a Tip command, meaning it can only be done every 30 minutes. Try again in %time%.;;cooldowns]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix;;prefix]begin]
`})
