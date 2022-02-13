module.exports = [{
    name: "reset",
    code: `
    $title[1;Reset]
$description[1;I will Reset all your money in your cash and bank
and everything in your invertory]
$color[1;RED]

    $addButton[1;No;primary;no_$authorID]
  $addButton[1;Yes;primary;yes_$authorID]
    `,
    }, {
        type: "interaction", //yes interaction
        prototype: "button",
     code: `
$interactionUpdate[; {newEmbed: {title:Reset}{description:Hello $username I Just reset your acc}{color:RANDOM}{footer: Your acc has be reset}}]
     $setGlobalUserVar[acc;false;;economy]
     $setGlobalUserVar[Cash;0;;economy]
     $setGlobalUserVar[Bank;0;;economy]
     $setGlobalUserVar[Laptop;0;;economy]
     $setGlobalUserVar[Gun;0;;economy]
     $setGlobalUserVar[Pear;0;;economy]

$onlyIf[$getGlobalUserVar[Cash;;economy]>0;{
      "embeds" : "{newEmbed:{title:Error}{description:You acc must be in debt}{color:RANDOM}{footer: Your acc can not be reset}}",
"ephemeral" : false,
        "options" : {
            "interaction" : true
        }
    }]
     
      $onlyIf[$getGlobalUserVar[acc;;economy]==true;{
      "embeds" : "{newEmbed:{title:Error}{description:You must have an acc to be able to reset it}{color:RANDOM}{footer: Your acc can not be reset}}",
"ephemeral" : true,
        "options" : {
            "interaction" : true
        }
    }]
 
         $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content" : " ",
        "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
        "ephemeral" : true,
        "options" : {
            "interaction" : true
        }
    }]
        
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==yes;]`,
    }, {
    type: "interaction", //no interaction
        prototype: "button",
     code: `$interactionUpdate[;{newEmbed: {title:Reset}{description:Hello $username I will not reset your acc
     }{color:RANDOM};{footer:Your acc has not be reset}}]
     
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content" : " ",
        "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
        "ephemeral" : true,
        "options" : {
            "interaction" : true
        }
    }]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==no;]
    
     `,
    }]