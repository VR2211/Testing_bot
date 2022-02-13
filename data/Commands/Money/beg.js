module.exports = ({
 name: "beg",
 code: `
$title[1;Begging]
$footer[1;Requested by $username]
$addTimestamp[1]
$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID;economy];$random[250;900]];$authorID;economy]
$description[1;You begged $randomText[1;on the streets;in the city;at a house;at a park] and $randomText[1;Jeff Bezos;Cool Stickman;John Cena;Some Guy felt bad for you and;an idiot] gave you $$random[250;900]]
$Globalcooldown[30m;you gotta wait for %time%.]
$color[1;#fffff]
$thumbnail[1;https://cdn.discordapp.com/attachments/692755249709973578/749004225710784572/2279e251a4609c07a45b4585fea36b64.gif]
$onlyIf[$getGlobalUserVar[acc;$authorID;economy]==true;You need to have an acc do $getServerVar[prefix;$clientID;prefix]begin]
`})
