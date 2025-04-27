const fs = require("fs");

module.exports.config = {

 name: "manii2",

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

 if (event.body.indexOf("Zidi")==0 || (event.body.indexOf("zadii")==0 || (event.body.indexOf("zidi")==0 || (event.body.indexOf("Zìdî Lãrkâ")==0)))) {

  var msg = {

    body: "𝐚𝐫𝐲 𝐌𝐞𝐫𝐢 𝐉𝐚𝐧 𝐞𝐝𝐫 𝐡𝐨 (𝐙𝐢̀𝐝𝐢̂ 𝐋𝐚̃𝐫𝐤𝐚̂)",

    attachment: fs.createReadStream(__dirname + `/noprefix/zidi.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}