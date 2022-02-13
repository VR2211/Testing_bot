module.exports = ({
  name: "work",
  code: `$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy];$random[25;100]];;economy]
  $title[1;Work]
$description[1;$username works as a $randomText[Tailor;Farmer;Teacher;Chef;Pilot;Police;Miner;Construction Worker;Minecraft Zombie] and earn $$random[25;100]]
$Globalcooldown[45m;Don't people hate woking try again in %time%]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix;;prefix]begin]
`})