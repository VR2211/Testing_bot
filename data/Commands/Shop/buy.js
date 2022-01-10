module.exports = [{
    name: "buy",
    code: `
    
   $title[1;Buy]
   $description[1;Welcome to the buy meun $username 
    What Can you Buy:
    You can buy a Gun it cost 600 Cash

    You can buy a Pear it cost 60 Cash

    You can buy a Laptop it cost 500 Cash]
    $addButton[1;Laptop;primary;awaitl_$authorID]
    $addButton[1;Pear;primary;awaitp_$authorID]
    $addButton[1;Gun;primary;awaitg_$authorID]
    `,
   }, {
       type: "interaction",
       prototype: "button",
       code: `$interactionUpdate[;{newEmbed: {title:Bought a Gun}{description:Hello $username your bought a gun for 600 Cash}}]
   
       $setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash];600]]
       $setGlobalUserVar[Gun;$sum[$getGlobalUserVar[Gun];1]]
   
     $onlyIf[$getGlobalUserVar[Cash]>600;{
   "embeds" : "{newEmbed:{title:Error}{description:you don't have enough Cash to buy a Gun you need 600 cash}{color:RED}}",
    "ephemeral" : true,
    "options" : {
     "interaction" : true
       }
}]

       $onlyIf[$getGlobalUserVar[acc]==true;{
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
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==awaitg;]`,
   }, {
    type: "interaction",
    prototype: "button",
    code: ` $interactionUpdate[;{newEmbed: {title:Bought a Pear}{description:Hello $username your bought a Pear for 60 Cash}}]

    $setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash];60]]
       $setGlobalUserVar[Pear;$sum[$getGlobalUserVar[Pear];1]]

       $onlyIf[$getGlobalUserVar[Cash]>60;{
        "embeds" : "{newEmbed:{title:Error}{description:you don't have enough Cash to buy a Pear you need 60 cash}{color:RED}}",
       "ephemeral" : true,
       "options" : {
           "interaction" : true
       }
        }]
            $onlyIf[$getGlobalUserVar[acc]==true;{
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
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==awaitp;]`,
    }, {
        type: "interaction",
    prototype: "button",
    code: ` $interactionUpdate[;{newEmbed: {title:Bought a Laptop}{description:Hello $username your bought a Laptop for 500 Cash}}]

    $setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash];500]]
       $setGlobalUserVar[Laptop;$sum[$getGlobalUserVar[Laptop];1]]

       $onlyIf[$getGlobalUserVar[Cash]>500;{
         "embeds" : "{newEmbed:{title:Error}{description:you don't have enough Cash to buy a Laptop you need 500 cash}{color:RED}}",
       "ephemeral" : true,
       "options" : {
           "interaction" : true
       }
        }]
            $onlyIf[$getGlobalUserVar[acc]==true;{
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
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==awaitl;]`
    }]