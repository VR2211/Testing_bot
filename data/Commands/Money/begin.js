module.exports = [{
	name: "begin",
    code: `$title[1;Begin]
    $description[1;Would you like to have an account please choose yes]

    $addButton[1;No;primary;No_$authorID]
    $addButton[1;Yes;primary;Yes_$authorID]`
}, {
  type: "interaction", //yes interaction
  prototype: "button",
code: `
$interactionUpdate[; {newEmbed: {title:Account maded}{description: Thank you for making an account $username. 
I have add 500 to your cash to get you stated.
I have added 250 to your bankk to get stated.
I have given you 2 Laptop to get you Stated.
I have given 1 gun to get you stated.
I have given 5 Pears to get you stated.

In total i have give you  2650 worth of money in my bot

**Break Down of the  2650 wroth**

Cash = 500
Bank = 250
Laptop = 500 Cash each and i have give you two which makes 1000 in total
Gun = 600 Cash each and i have given you 1 which makes 600 in total
Pear = 60 Cash each and i have given you 5 which makes it $math[60*5]}}]

  $setGlobalUserVar[acc;true]
 $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash];500]]
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];250]]
$setGlobalUserVar[Laptop;$sum[$getGlobalUserVar[Laptop];2]]
$setGlobalUserVar[Gun;$sum[$getGlobalUserVar[Gun];1]]
$setGlobalUserVar[Pear;$sum[$getGlobalUserVar[Pear];5]]


  $onlyIf[$getGlobalUserVar[acc]==false;{
    "embeds" : "{newEmbed:{title:Error}{description:You must have an account so you can not make a new one account}{color:RED}{footer: Requested by $username}}",
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
    
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Yes;]`
},{
  type: "interaction", //No interaction
  prototype: "button",
code: `
  $interactionUpdate[; {newEmbed: {title:Account not made}{description: I will not make your account}}]

  
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
    
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==No;]`
}]
