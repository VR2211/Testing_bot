module.exports = (bot) => {
 bot.variables({
 //Money Option
 Cash: '0',
  Bank: '0',
  Laptop: '0',
  Gun: '0',
  Pear: '0',
  acc: 'false', 
  custom: '',
 }, 'economy')
    
 bot.variables({
  //Bot Option
  prefix: 'a!'
  }, 'prefix')
    
bot.variables({
  version: '0.9.0',
    }, 'bots')
    
    bot.variables({
  dev: "",
  blacklist: "",
    })

 
                  
                  
    
    
 bot.onInteractionCreate(),
 bot.onGuildJoin()
 bot.onGuildLeave()
    }
