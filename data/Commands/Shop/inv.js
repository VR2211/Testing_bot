module.exports = [{
    name: "inv",
    code: `
   $title[1;Inventory]
   $description[1;Welcome $username to your Inventory
   Tip: \`\`\` Do $getServerVar[prefix]use to use the items \`\`\`

   The items in your inventory are:
   
   Gun or Guns: You have this many $numberSeparator[$getGlobalUserVar[Gun]] Guns
   
   Pear or Pears: You have this many $numberSeparator[$getGlobalUserVar[Pear]] Pears
   
   Laptop or Laptops: You have this many $numberSeparator[$getGlobalUserVar[Laptop]] Laptops]
   
   $onlyIf[$getGlobalUserVar[acc]==true;You need to have an acc do $getServerVar[prefix]begin]`
   }]