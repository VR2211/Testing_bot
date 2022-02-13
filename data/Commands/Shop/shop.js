module.exports = ({
 name: "shop",
 code: `
$title[1;Shop]
$description[1;Welcome $username to the shop
 Tip: **To buy any item in the shop do $getServerVar[prefix;$clientID;prefix]buy**
The items the shop has is:

A Gun

A Pear

A Laptop]
$onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix]begin]`
})
  