module.exports = [{
    name: "help",
    code: `
    $title[1;Help Command]
    $description[1;
 
        The Global Prefix is: t!
        Your server Prefix is: $getServerVar[prefix;;prefix]
        [Support server](https://discord.gg/4j8EyByVHc)
        
        **Dear $username Thank you for use the help command please choose what you need you help with under this message.**

    1/7 **General**
    2/7 **Economy**
    3/7 **Music** (Coming Soon)
    4/7 **Fun**
    5/7 **Slash Commands**
    6/7 **Admin Only**
    7/7  **Devloper Only**
    0/7 **Return to the home page**]
    $color[1;RANDOM]
    $footer[1; Page 0/7]

    $addButton[1;⏩;2;⏩_$authorID;yes;]
    $addButton[1;▶;2;▶_$authorID;;]
    $addButton[1;◀;2;◀_$authorID;yes;]
    $addButton[1;⏪;2;⏪_$authorID;yes;]`
},{
    type: "interaction", //▶ interaction
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed: {title:Genaral Commands}{description:
        **Dear $username**

        The Global Prefix is: a!
        Your server Prefix is: $getServerVar[prefix]

       **The General Commands that your can use with AIOB Alpha are

       The Help Command
       
         bot-info
       
         Server-info
         
         @the bot
       
        Support

         Chagelog
         
         Math** 
       
       **Report-bug**
       
       **request**
    
        **r-Bug-eg**
    
         **request-eg**}{color:RANDOM}{footer: Page 1/7}};{actionRow:{button:◀:1:⏪0_$authorId::}{button:Support:5:https\\://discord.gg/4j8EyByVHc:false:<a:SOS:922509784639492096>}}
      $onlyIf[$getGlobalUserVar[acc;;economy]==true;{
      "embeds" : "{newEmbed:{title:Error}{description:You must have an acc to be able to use this command}{color:RANDOM}{footer: Your acc has be reset}}"
  }]
 
  $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==▶;]`
},{
    type: "interaction", //▶1 interaction
    prototype: "button",
 code: `$interactionUpdate[;{newEmbed: {title:Economy Commands} {description:
**Dear $username**

        The Global Prefix is: a!
        Your server Prefix is: $getServerVar[prefix]

**The Economy Commands that you can use with AIOB Alpha Are

Balance 

Beg

daily

deposit=dep        

|| Slut ||

Tip

Withdraw       

Work

Shop

Inventory
 
Yearly**

|| Before you use this command check the shop ||
**Buy**

|| Before you use this command check your inventory ||
**Use**

}{color:RANDOM}{footer: Page 2/7}};{actionRow:{button:Back to Home Page:1:◀0_$authorId::<:home:922519671226384414>}{button:Support:5:https\\://discord.gg/4j8EyByVHc:false:<a:SOS:922509784639492096>}}
  
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==▶1;]`,
}, {
    type: "interaction", //▶2 interaction
    prototype: "button",
 code: `$interactionUpdate[;{newEmbed: {title:Fun Commands} {description:
**Dear $username**

    The Global Prefix is: a!
        Your server Prefix is: $getServerVar[prefix]

    **The Fun Commands that you can use with AIOB Alpha
    
    Meme (Does not Work)
    
    Avatar
    
    Exam
    
    Blush
    
    Bored
    
    Highfive
    
    Hug
    
    Kiss
    
    Poke
    
    Sad
    
    Slap
    
    Sleep** 
           }{color:RANDOM}{footer: Page 4/7}};{actionRow:{button:Back to Home Page:1:◀0_$authorId::<:home:922519671226384414>}{button:Support:5:https\\://discord.gg/4j8EyByVHc:false:<a:SOS:922509784639492096>}}

           $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]

           $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==▶2;]`,
        },{
            type: "interaction", //▶3 interaction
            prototype: "button",
         code: `$interactionUpdate[;{newEmbed: {title:Slash Commands}{description:
            **Dear $username**

            **The Slash Commands That you can use with AIOB Alpha are
    
            /bot-info 
    
            /prefix

           /developers

          /links

          /future**
           }{color:RANDOM}{footer: Page 5/7}};{actionRow:{button:Back to Home Page:1:◀0_$authorId::<:home:922519671226384414>}{button:Support:5:https\\://discord.gg/4j8EyByVHc:false:<a:SOS:922509784639492096>}}


$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
           $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==▶3;]`,
        },{
            type: "interaction", //▶4 interaction
    prototype: "button",
 code: `$interactionUpdate[;{newEmbed: {title:Admin Only Commands} {description:
**Dear $username**

    The Global Prefix is: a!
        Your server Prefix is: $getServerVar[prefix]

    **The Admin Commands that you can use with AIOB Alpha are
    
    Nuke=nuke 
    
    Clear
    
    Ban
    
    SetPrefix
    
    Say**
    
}{color:RANDOM}{footer: Page 6/7}};{actionRow:{button:Back to Home Page:1:◀0_$authorId::<:home:922519671226384414>}{button:Support:5:https\\://discord.gg/4j8EyByVHc:false:<a:SOS:922509784639492096>}}

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]

     $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==▶4;]`,
        }, {
            type: "interaction", //▶5 interaction
    prototype: "button",
 code: `$interactionUpdate[;{newEmbed: {title:Developer Only} {description:
    **Dear $username**

    The Global Prefix is: a!
        Your server Prefix is: $getServerVar[prefix]

    **Developer Only Commands 
    
    CommandUpdate
    
    Eval

    deva

    exec
    **
}{color:RANDOM}{footer: Page 7/7}};{actionRow:{button:Back to Home Page:1:◀0_$authorId::<:home:922519671226384414>}{button:Support:5:https\\://discord.gg/4j8EyByVHc:false:<a:SOS:922509784639492096>}}

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]

     $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==▶5;]`,
        },{
            type: "interaction", //◀0 interaction
    prototype: "button",
    code: `$interactionUpdate[;{newEmbed: {title:Help Command}{description:

        The bots Global Prefix is: a!
        The bots server Prefix is: $getServerVar[prefix;;prefix]
        [Support server](https://discord.gg/4j8EyByVHc)
        
        **Dear $username Thank you for use the help command pls chose what you need you  nedd help with under this message.**

    1/7 **General**
    2/7 **Economy**
    3/7 **Music** (Coming Soon)
    4/7 **Fun**
    4/7 **Slash Commands**
    5/7 **Admin Only**
    6/7 **Devloper Only**
    0/7 **home page**}{color:RANDOM}{footer: Page 0/7}};{actionRow:{button:⏪:1:⏪0_$authorId:false:}{button:◀:1:▶5_$authorId:false:}{button:▶:1:▶_$authorId:false:}{button:⏩:1:▶6_$authorId:true:}}{actionRow:{button:Support:5:https\\://discord.gg/4j8EyByVHc:false:<a:SOS:922509784639492096>}}]

  $onlyIf[$getGlobalUserVar[acc;;economy]==true;{
      "embeds" : "{newEmbed:{title:Error}{description:You must have an acc to be able to use this command}{color:RANDOM}{footer: Your acc has be reset}}"
  }]
 
  $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==⏪0;]`
}]