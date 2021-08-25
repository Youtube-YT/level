const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  sharding: false, //true or false
  shardAmount: 2, //Shard amount
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
 fetchInvites: true,
  token: "YOUR BOT TOKEN", //Discord Bot Token
  prefix: ["+"],
  mobile: false,
 connectedBots: true,
  autoUpdate: ["false"]//Change PREFIX to your Prefix
})

bot.onMessage(); // Allows Commands to Executed


//for the variables
bot.variables({
exp: "0",
req: "400",
lvl: "1",
}) 

bot.command({
name: "$alwaysExecute",
code: `$if[$sum[$getUserVar[exp];$random[15;30]]>=$getUserVar[req]]

<@$authorID>, you have reached level $sum[$getUserVar[lvl];1]! GG.

$setUserVar[exp;$sub[$sum[$getUserVar[exp];$random[15;30]];$getUserVar[req]]]

$setUserVar[req;$sum[$getUserVar[req];100]]

$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$else

$setUserVar[exp;$sum[$getUserVar[exp];$random[15;30]]]

$endif`
})

bot.command({
name: "rank",
code: `$color[$random[111111;999999]]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/775757240648466452/791348420844716052/1608742528817.jpg&xpcolor=F8F8F9&isboosting=false]
$footer[$username[$mentioned[1;yes]] needs $replaceText[$sub[$sum[$getUserVar[req;$mentioned[1;yes]];1];$getUserVar[exp;$mentioned[1;yes]]];-; ;1] more of EXP to level up]`})
