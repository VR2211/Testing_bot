module.exports = [{
    name: "inv",
    code: `
   $title[1;Inventory]
   $description[1;Welcome $username to your Inventory
   Tip: \`\`\` Do $getServerVar[prefix;;prefix]use to use the items \`\`\`

   The items in your inventory are:
   
   Gun or Guns: You have this many $numberSeparator[$getGlobalUserVar[Gun;;economy]] Guns
   
   Pear or Pears: You have this many $numberSeparator[$getGlobalUserVar[Pear;;economy]] Pears
   
   Laptop or Laptops: You have this many $numberSeparator[$getGlobalUserVar[Laptop;;economy]] Laptops]
   
   $onlyIf[$getGlobalUserVar[acc;;economy]==true;You need to have an acc do $getServerVar[prefix]begin]`
   }]