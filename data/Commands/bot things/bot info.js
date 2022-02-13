module.exports = {
  name: "Bot-info",
  aliases: ["binfo" , "boti"],
  code: `
  $title[1;Bot info]
  $thumbnail[1;https://cdn.discordapp.com/attachments/795966035919634455/807884403904741386/5495053-statistic-icons-download-5953-free-png-and-vector-icons-statistic-png-512_512_preview.png]
  $description[1;
      **About AIOB**
  
      Gobal Prefix: a!
      Server Prefix $getServerVar[prefix;$clientID;prefix]
      
      **Bot Info**
      • **Owner**: $usertag[$botownerid]
      • **Discord API REST Latency**: $messagePingms
      • ** Ping**: $pingms
      • **Uptime**: $djsEval['$uptime[humanize]'.split(' ').slice(0,-1).join(' ');yes]
      • **CreationDate**: $creationDate[840319225889554453;date]
      • **Total commands**: $commandsCount
      • ** Server Count **: $ServerCount
      • ** Bot Version **: $getVar[version;$clientID;bots]
      • ** Release date **: Soon to Come
      
      **Hosting Info**
      • **CPU Usage**: $cpu
      • **CPU Model**: $djsEval[require ('os').cpus()[0].model;yes] 
      • **CPU Platform**: $djsEval[require ('os').platform();yes]
      • **RAM Usage**: $roundTenth[$ram;2] MB
      
      **Other Info**
      • **Aoi.js Vesion**: $packageVersion
      • **NodeJS Version**: $nodeversion
      • **DataBase Ping**: $dbping ms]
      $footer[1;]
      $color[1;RANDOM]`
}