const fs = require("fs");

module.exports.config = {

 name: "zara",

    version: "1.0.1",

 hasPermssion: 0,

 credits: "MR CHAND", 

 description: "no prefix",

 commandCategory: "No command marks needed",

 usages: "...",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

 var { threadID, messageID } = event;

 if (event.body.indexOf("Zainab")==0 || (event.body.indexOf("@Zainab Ali")==0 || (event.body.indexOf("Zaini")==0 || (event.body.indexOf("Moto")==0)))) {

  var msg = {

    body: "𝐊𝐢𝐲𝐚 𝐇𝐚𝐢𝐧 𝐤𝐮 𝐦𝐞𝐧𝐭𝐢𝐨𝐧 𝐤𝐫𝐚 𝐫𝐡𝐚 𝐦𝐨𝐭𝐨🙂 𝐧𝐚 𝐭𝐚𝐧𝐠 𝐤𝐫𝐨 𝐌𝐞𝐫𝐢 𝐣𝐚𝐧𝐮 𝐬𝐨 𝐫𝐡𝐢 𝐡𝐚𝐢𝐧",
    attachment: fs.createReadStream(__dirname + `/noprefix/zaini.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}