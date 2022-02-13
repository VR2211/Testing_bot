module.exports = [{
    name: "use",
    code: `
    
   $title[1;Use Command]
   $description[1;Welcome to the Use meun $username 
    What Can Would you like to use:
   Your Guns your have: $numberSeparator[$getGlobalUserVar[Gun;;economy]]

   Your Pears your have: $numberSeparator[$getGlobalUserVar[Pear;;economy]]

   Your Laptops your have: $numberSeparator[$getGlobalUserVar[Laptop;;economy]] ]
    $addButton[1;Laptop;primary;awaitl2_$authorID]
    $addButton[1;Pear;primary;awaitp2_$authorID]
    $addButton[1;Gun;primary;awaitg2_$authorID]
    `,
   }, {
       type: "interaction",
       prototype: "button",
       code: `$interactionUpdate[;{newEmbed: {title:Gun Used}{description:Update will come soon $randomText[Buck;Lion;Bady lion;Bady buck;Pig;Cow;Bady pig;Bady cow;Horse;Bady horse;Cheetah;Bady cheetah;Tiger;Bady tiger;Elephant;Bady elephant;Wolf;Bady wolf;Duck;bady duck] and you got $$random[100;450] Cash}}]

      $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy;$authorID];$random[100;450]];;economy]
$setGlobalUserVar[Gun;$sub[$getGlobalUserVar[Gun;;economy;$authorID];1];;economy]

$onlyIf[$getGlobalUserVar[Gun;;economy]>=1;{
   "embeds" : "{newEmbed:{title:Error}{description:you don't have enough Guns please go and buy 1 by doing $getServerVar[prefix]buy}{color:RED}}",
    "ephemeral" : true,
    "options" : {
     "interaction" : true
       }
}]

       $onlyIf[$getGlobalUserVar[acc;;economy]==true;{
   "embeds" : "{newEmbed:{title:Error}{description:You need to have an account do $getServerVar[prefix]begin to get an account}{color:RED}}",
    "ephemeral" : true,
    "options" : {
     "interaction" : true
       }
   }]
   
   $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
      "content": " ",
       "embeds" : "{newEmbed:{title:Error}{description:You don't own this button}{color:RED}}",
       "ephemeral" : true,
       "options" : {
           "interaction" : true
       }
   }]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==awaitg2;]`,
   }, {
    type: "interaction",
    prototype: "button",
    code: ` $interactionUpdate[;{newEmbed: {title:Pear Used}{description: You ate your Pear $randomText[in the Morning;At Lunch;At dinner] and you got $$random[25;75]}}]

    $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy];$random[25;75]];;economy]
$setGlobalUserVar[Pear;$sub[$getGlobalUserVar[Pear;;economy;$authorID];1];;economy;]

       $onlyIf[$getGlobalUserVar[Pear;;economy]>=1;{
        "embeds" : "{newEmbed:{title:Error}{description:you don't have enough Pears please go and buy 1 by doing $getServerVar[prefix]buy}{color:RED}}",
       "ephemeral" : true,
       "options" : {
           "interaction" : true
       }
        }]
            $onlyIf[$getGlobalUserVar[acc;;economy]==true;{
   "embeds" : "{newEmbed:{title:Error}{description:You need to have an account do $getServerVar[prefix]begin to get an account}{color:RED}}",
    "ephemeral" : true,
    "options" : {
     "interaction" : true
       }
        }]

        $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
           "content" : " ",
            "embeds" : "{newEmbed:{title:Error}{description:You don't own this button}{color:RED}}",
            "ephemeral" : true,
            "options" : {
                "interaction" : true
            }
        }]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==awaitp2;]`,
    }, {
        type: "interaction",
    prototype: "button",
    code: ` $interactionUpdate[;{newEmbed: {title:Laptop Used}{description:$randomText[File;Movie;Document;Series;||porn video||] but the upload got a error at 99% so the upload company give you $$random[100;200] towards your new pc}}]

    $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;;economy];$random[100;200]];;economy]
    $setGlobalUserVar[Laptop;$sub[$getGlobalUserVar[Laptop;;economy;$authorID];1];;economy]

       $onlyIf[$getGlobalUserVar[Laptop;;economy]>=1;{
         "embeds" : "{newEmbed:{title:Error}{description:you don't have enough Laptops please go and buy 1 by doing $getServerVar[prefix]buy}{color:RED}}",
       "ephemeral" : true,
       "options" : {
           "interaction" : true
       }
        }]
            $onlyIf[$getGlobalUserVar[acc;;economy]==true;{
   "embeds" : "{newEmbed:{title:Error}{description:You need to have an account do $getServerVar[prefix]begin to get an account}{color:RED}}",
    "ephemeral" : true,
    "options" : {
     "interaction" : true
       }
        }]  

        $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
            "content" : " ",
            "embeds" : "{newEmbed:{title:Error}{description:You don't own this button}{color:RED}}",
            "ephemeral" : true,
            "options" : {
                "interaction" : true
            }
        }]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==awaitl2;]`
    }]