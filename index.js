const mongoose = require('mongoose')
const mongo = require('dbdjs.mongo').default

mongoose.connect( mogon, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false,
 keepAlive: true,
})

const { prefix } = require('./config.json')
const { dbh } = require('./config.json')
const { configtoken } = require('./config.json')
const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: configtoken,
prefix: prefix,
mobile: true, //true or false - Discord Mobile Status
dbhToken: dbh,
intents: "all",
database:{
        type:"dbdjs.mongo",
        db:require('dbdjs.mongo'),
        path: mongo ,
        tables:["main","economy", "prefix", "cooldowns", "bots"]
    }
})

var DanBotHosting = require("danbot-hosting");

 bot.on("ready", async () => {
  console.log("AIOB Alpha is online");
  const API = new DanBotHosting.Client(dbh, bot);
 
  // Start posting
  let initalPost = await API.autopost();
 
  if (initalPost) {
    console.error(initalPost); // console the error
  }
});

const loader = new Aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./data/Commands/')
 
bot.onMessage()
require('./data/callbacks.js')(bot) 


bot.status({
  text: "My owner recode me",
  type: "WATCHING",
  status: "online",
})

loader.setColors({
    walking: ["blink", "bright", "fgPink"],
    failedWalking: {
        name: ["bright", "fgYellow", "underline"],

        text: ["bright", "fgRed"]
    },
    typeError: {
        command: ["bright", "fgYellow"],
        type: ["fgYellow"],
        text: ["bright", "fgRed"]
    },
    failLoad: {
        command: ["bright", "fgMagenta"],
        type: ["fgRed"],
        text: ["bright", "fgRed"],
    },
    loaded: {
        command: ["bright", "fgCyan"],
        type: ["bright", "fgBlue"],
        text: ["bright", "fgGreen"]
    },
})