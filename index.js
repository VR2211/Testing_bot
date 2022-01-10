const { prefix } = require('./config.json')
const { dbh } = require('./config.json')
const { configtoken } = require('./config.json')
const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: configtoken,
prefix: prefix,
mobile: true, //true or false - Discord Mobile Status
dbhToken: dbh,
intents: "all"
})

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