module.exports = ({
    name:"yearly",
    code:`
$title[1;Yearly Reward]
$description[1;Your yearly reward is $$random[1500;3000]]
$footer[1;Requested by $username]
$color[1;78eab8]
$Globalcooldown[365d;This is a yearly command, meaning it can only be executed...well, yearly. Try again in %time%.]
$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy];$random[1500;3000]];;economy]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix;;prefix]begin]
`
})