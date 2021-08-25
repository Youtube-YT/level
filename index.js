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
talk: "0",
req: "400",
level: "1",
noting: "0",
noting2: "0",
}) 

bot.command({
name: "$alwaysExecute",
code: `$setUserVar[$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;talk;1];%false%;nothing2;1];0]
 
$setUserVar[$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;nothing2;1];%false%;talk;1];$sum[$getUserVar[$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;nothing2;1];%false%;talk;1]];$random[5;25]]]
 
$$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;channelSendMessage;1];%false%;setServerVar;1][$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;$channelID;1];%false%;nothing;1];<@$authorID> You leveled up! Now your new level is $sum[$getUserVar[level];1]]
 
$setUserVar[$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;level;1];%false%;nothing2;1];$sum[$getUserVar[$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;level;1];%false%;nothing2;1]];1]]
$setUserVar[$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;req;1];%false%;nothing2;1];$sum[$getUserVar[$replaceText[$replaceText[%$checkCondition[$getUserVar[talk]>$getUserVar[req]]%;%true%;req;1];%false%;nothing2;1]];$random[100;220]]]
`
})

bot.command({
name: "rank",
code: `$color[$random[111111;999999]]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[talk;$mentioned[1;yes]]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/775757240648466452/791348420844716052/1608742528817.jpg&xpcolor=F8F8F9&isboosting=false]
$footer[$username[$mentioned[1;yes]] needs $replaceText[$sub[$sum[$getUserVar[req;$mentioned[1;yes]];1];$getUserVar[talk;$mentioned[1;yes]]];-; ;1] more of EXP to level up]`})

