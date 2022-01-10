module.exports = [{
    name: "Changelog",
    code: `
    
    $title[1; **Welcome $username to the Changelog** ]
    $description[1;**This Command will show all the changes that happen to the bot

        Please choose the button of vision that you what to see the update of**]
        
        $addButton[1;Vision 0.8.0;2;4_$authorID;;]
        $addButton[1;Vision 0.4.0;2;3_$authorID;;]
        $addButton[1;Vision 0.1.0;2;2_$authorID;;]
        $addButton[1;Vision 0.0.1;2;1_$authorID;;]
        $addButton[1;Home Page;1;0_$authorID;;]
        
        $color[1;RANDOM]
        $footer[1;Home Page]`
},{
        type: "interaction", //▶ interaction
        prototype: "button",
        code: `
        $interactionUpdate[;{newEmbed: {title:Changelog}{description:

            **Update from 0.0.1 to 0.1.0**

            What was added

            Everything was added to make the bot run and work and i have added new slash comamnds:

    Added a info slash command do /info
    Added a Vision Slash Command do /vision
    Added a Prefix Slash Command do /prefix
    Added a Changelog Slash Command do /changelog}{color:RANDOM}{footer: Vision 0.0.1 to 0.1.0}};{actionRow:{button:Home Page:2:0_$authorId::}{button:Vision 0.0.1:1:1_$authorId::}{button:Vision 0.1.0:2:2_$authorId::}{button:Vision 0.4.0:2:3_$authorId::}{button:Vision 0.8.0:2:4_$authorId::}}

    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content" : " ",
        "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
        "ephemeral" : true,
        "options" : {
            "interaction" : true
        }
    }]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==1;]`
},{
        type: "interaction", //▶ interaction
        prototype: "button",
        code: `
    $interactionUpdate[;{newEmbed: {title:Changelog}{description:

        **Update from 0.1.0 to 0.4.0**

        What happened in this Vision update?

        update /info to /bot-info
        
        add more things to /info
        
        Add a Changelog and a info slashcommand
        Do /info to use info the info slash command
        Do /changelog to use the changelog slash command
        
        Removed all Slash Commands to fix an error

}{color:RANDOM}{footer: Vision 0.1.0 to 0.4.0}};{actionRow:{button:Home Page:2:0_$authorId::}{button:Vision 0.0.1:2:1_$authorId::}{button:Vision 0.1.0:1:2_$authorId::}{button:Vision 0.4.0:2:3_$authorId::}{button:Vision 0.8.0:2:4_$authorId::}}

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==2;]`
},{
    type: "interaction", //▶ interaction
    prototype: "button",
    code: `
$interactionUpdate[;{newEmbed: {title:Changelog}{description:

    **Update from 0.4.0 to 0.8.0**

    What happened in this Vision update?

Removed Restart for the bot  to restart.
 
 Made say only for admins.
 
 Added a eval command for dev only
 
 Removed make slash and delete slash for dev because l can use eval for that
 
 Update the help comamnd
 
 Fix the bstats command thanks to  <@822525798065373265> for tell me the error
 
 Added a request command 
 
 Added a Report-bug comamnd
 
 Made /changelog a global slash command
 made /bot-info a global  slash command
 made /prefix a global slash command 
 
 Trying to fix all the slash comamnd 
 
 Removed all slash comamnd to fix them
 
 Add a reset command
 
 Add a begin command

}{color:RANDOM}{footer: Vision 0.4.0 to 0.8.0}};{actionRow:{button:Home Page:2:0_$authorId::}{button:Vision 0.0.1:2:1_$authorId::}{button:Vision 0.1.0:2:2_$authorId::}{button:Vision 0.4.0:1:3_$authorId::}{button:Vision 0.8.0:2:4_$authorId::}}

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
"content" : " ",
"embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
"ephemeral" : true,
"options" : {
    "interaction" : true
}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==3;]`
},{
    type: "interaction", //▶ interaction
    prototype: "button",
    code: `
$interactionUpdate[;{newEmbed: {title:Changelog}{description:

    **Update from 0.8.0 to 0.9.0**

    What happened in this Vision update?

Update the Bal command

added a new slash command called Developers

added a new slash command  called links

added a new slash command called future

added more things to /bot-info

 Had to Fix the help command after l got some errors the command is fix

 Changed The help command to work with buttons.

Changed /changelog to $getServervar[prefix]changelog and it has buttons
    
    Added more things to /bot-info
    
    Added all the slash command again becuase l have fix them and they are all global.
    
    Made /changelog a global slash command
    made /bot-info a global  slash command
    made /prefix a global slash command
    
    Removed all slash command to fix it again.

}{color:RANDOM}{footer: Vision 0.8.0 to 0.9.0}};{actionRow:{button:Home Page:2:0_$authorId::}{button:Vision 0.0.1:2:1_$authorId::}{button:Vision 0.1.0:2:2_$authorId::}{button:Vision 0.4.0:2:3_$authorId::}{button:Vision 0.8.0:1:4_$authorId::}}

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
"content" : " ",
"embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
"ephemeral" : true,
"options" : {
    "interaction" : true
}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==4;]`
},{
    type: "interaction", //▶ interaction
    prototype: "button",
    code: `
$interactionUpdate[;{newEmbed: {title: **Welcome $username to the Changelog** }{description:

    **This Command will show all the changes that happen to the bot

        Please choose the button of vision that you what to see the changelog of**



}{color:RANDOM}{footer: Home Page}};{actionRow:{button:Home Page:1:0_$authorId::}{button:Vision 0.0.1:2:1_$authorId::}{button:Vision 0.1.0:2:2_$authorId::}{button:Vision 0.4.0:2:3_$authorId::}{button:Vision 0.8.0:2:4_$authorId::}}

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
"content" : " ",
"embeds" : "{newEmbed: {title:Error}{description:You don't own this button}{color:RED}}",
"ephemeral" : true,
"options" : {
    "interaction" : true
}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==0;]`
}]