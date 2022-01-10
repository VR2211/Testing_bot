module.exports = (bot) => {
 bot.variables({
 //Money Option
 Cash: '0',
  Bank: '0',
  Laptop: '0',
  Gun: '0',
  Pear: '0',
  acc: 'false',
  version: '0.9.0',
  custom: '',
  dev: "",
  blacklist: "",
  //Bot Option
  prefix: 'a!'
  })
    
 bot.onInteractionCreate(),
 bot.onGuildJoin()
 bot.onGuildLeave()
    }
