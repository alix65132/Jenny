    const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  versionconstconst: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["🥺Jan nahi kehna to men naraz ho jana ay", " لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️ ", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂",  "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "Block Your ‘’ gf ‘’ And Purpose me 🙂💔", "tuje to kali larki bhi left nahi krwati ☹️", "Bary zalim hoty Gali k bachy kuty pichy laga k kehty waikh speeda ashqa dia 😂", "Mujhy to line m biryani nahi milti janu Kya mily gi 😒", "چکر آ رہا ہے اجازت ہو تو آپکے دل میں گر جاؤں 🙂🎻", "Bas ek bar marriage ho jaye love m khud kr lu ga 🙈", " مجھے میٹھے کریلے گرم قلفی ابلی ہوئی چاکلیٹ سپائیسی آسیکریم اور تیز پتی والی کوک بہت پسند ہے 😎🥴", " uff Yar tumri ya red lipstick Kon kharb krta hai 😘🥰😛", "*_اب ہــم دور بیــٹھ کــر تــیری اوقــات دیکــھیں گــے_* 🤍🙂", "بھـــــاڑ مـــــیں جـــــاؤ ڈارلینـــــگ🙂🖐", "شــــــــٹ آپ ڈارلنــــــگ🤭🖐🏻", "کمبـٌختـــ اَبُ تــُو ہـَـر بـَات دِل کــُو لگـــ جَاتـِـئ ہئــے -💔🙂", "تُو بــــہت حــــرام مــــوت مــــرنا 🙂", "ہے تمنا ہمیں تمہیں اپنی پرفائل کا چکر لگوائیں 🙂❤️!!", "سٹیل دے ڈونگے ورگا منہ اے تیرا 💔🙂", "مـــــــــطلبــــــــی ہـــــــو یــــــار🙂💔", "کنــــــــــــــــنے مــــــــنہوس ہــــــــو 🙂:-//", "اک بـــــار جــــــــانو بول دو شــــریکیوں کو جـــــلانا ہے 🥲", "Sary Rishtydaron ky number delete krdiye🔪Ab Safe feel krha hu🙂🥹", "LUX Khane se Dmag teez hota-//-^)) 🙂", " K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂", "  ســـــــٹیــل دی قــولــی ورگــا منـــــہ اے تـــــــیرا 😾🙌",  "زہـــؔـرکــــھّــــانــــےســــے رؘنــــگ گـــؔـورا ہـــؔـوتــــا ہــــے!🤗🤭❣️😘", "𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒",  "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔♥️",  "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Lips kissing is not Romance It's sharing Bacteria>>>🙂", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼", "Waiting 💘for Shadi'w ky baad wali Halal Chummian 🫦🫶🥹",  "Imagine I am your Ex 🥲say whatever you want to say", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓",  "Agar Payarw hota to Real DP lagataw - :) 💔🤌", "Time Pass ky liye 1 Female Chat partner Chahye 🙂❤️‍🩹🫶", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo",  "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔",  "💚🦋 Iʈɴɪ⃪͡  𝗰ᴜ⃪⃨ʈə  D𝐩 𝐦ʈ  Ɩ𝐠ɑɣɑ kɽ𝐨͢ kɪ⃪͡ssɪ⃪͡ 💋 ᴡ⃪⃨ɪ⃪͡ssɪ⃪͡ kɑɽɴə kɑ ɖɪ⃪͡Ɩ kɑɽʈɑ нɑɪ⃪͡ 😗😗",  "❤- App kı Photo To Bahut cutƏ hıı'-😍- ☆'Koıı Ətna Bhıı CutƏ Hota hƏ💋🙊👈🏻", "tuje to kali larki bhi left nahi krwati ☹️", "Bary zalim hoty Gali k bachy kuty pichy laga k kehty waikh speeda ashqa dia 😂", "Mujhy to line m biryani nahi milti janu Kya mily gi 😒", "چکر آ رہا ہے اجازت ہو تو آپکے دل میں گر جاؤں 🙂🎻", "Bas ek bar marriage ho jaye love m khud kr lu ga 🙈", " مجھے میٹھے کریلے گرم قلفی ابلی ہوئی چاکلیٹ سپائیسی آسیکریم اور تیز پتی والی کوک بہت پسند ہے 😎🥴", " uff Yar tumri ya red lipstick Kon kharb krta hai 😘🥰😛", "➪😘oye shaper bola kya hai msala 🙂",  "Koi 70 Rupee dy do Mera Pas 20 Han Sting Peeni Hai🥺", "Na Pakistan me rehny k pese hain na niklny k🤝🏽🙂💔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺",  "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں",  "*😈✨آ تجــᷭھے خـــراب کــــروں💋🤤*",  "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", " جہاں پیاری لڑکیاں وہاں میں 🙂❤️🥀 " , "بھای جان گروپ میں گندی باتیں نهیں گریں🤧😳 " , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂🤣" , "دل بڑا ہونا چاہیے🙌😒منہ تو کھوتے کا v بڑا ہوتا ہے🤝🙂" , "بہت کر چکے منتیں تیری اب میں تمہیں اغوا کرو گا😒😂" , "ہے تمنا ہمیں تمہیں اپنا بنائیں🙊" , "کہتے ہیں زندگی سب کچھ سکھا دیتی ہے😾تے فیر مینوں انگلش کیوں نہیں سکھاندی🤧😒" , "چکن 🐔 کڑاہی جیسے خواب🧐ساگ 🌿 جیسی زندگی 😑🤐" ,  "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝" , "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊" , "میــــــرے نال ویا کــــــر لو 😊💔" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "𝐊𝐚𝐬𝐇 𝐇𝐚𝐦 𝐁 𝐊𝐢𝐬𝐢 𝐊𝐚𝐲 𝐂𝐫𝐮𝐬𝐇 𝐇𝐨𝐭𝐘 .🙂👑♥", "Ary yrr MaZak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow 1 PaPpi Idher d0o 1 PaPpi idher 😘" , "Dur HaT Tere k0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "مرد کی کوئی پسندیدہ عورت نہیں ہوتی ، وہ معصوم تو  سب عورتوں کو پسند کرتا ہے 😂🔥", "Ase He HansTy Rha kRo 😍", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Dekh lena 1 din mazak mazak may he sbsy handsome lrki pata longa🧐🙂", "Uski yaadein mujhe aisy ghair leti hain jaise shadi mein khusre ko 4 harami🙂💔", "Piyara NH Hun is lya koi dost NH h 🙃🌚", "Tum msg to kro, Tumhe ptane ki zimmedari meri 🌚🙂", "Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂",  "شــــــٹ اپــــ ہــــــوا بـــــــاز شــــــــــاپــــر 🙂💔",  "kCh LaRkian MujHe srf islYe ignOre krti Hen k Kahen Unhe pyar na hO JaE 😗💚", "Allah kray tmhari shadi py Nadra ka photographer aye🙂🕺", "Someone : I love u Me : shakkall dekhiii he meriiiiw-🙄🙄", "Salyy tujhe koi janu nai kehtaa to idhar a ke bot bot krna LG Jata", "Hn bol hrammi a gaii yaad", "Teri janu kisi or sath busy to idhar mou mRNA a gyaa", "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)🙂",  "🤣آپ میرے ساتھ پھنس جاو🤣 نہ🤣آپ میرے نکھرے ایسے اٹھانا جیسے چرسی ساہیکل اٹھاتا ھے 🤣", "muaziz sarif aapka muhh relation ke liye naa kafi he shukriya🙂🤝", "Ek ladki thii diwani sii har ladke par wo marti thiiw🙂",  "Hn bol hrammi a gaii yaad",  "حـــکومـــت ســـے'تـــسدیــک شـــدا'حــرامــی 🙂", "Hn bol bot ki Jan IB a ak secret btaoo 😂", "AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐", "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////😞🍁☠️🌸", "BuHt GrEeB huN 'JiSki JiTNi ToFeeQ Hai utNi 'ChuMiyA' DeTi JaYe😔🥲", "ThArKii LaRkiAn ReQ BhEj SaKti HeN (-🌚🦥💔", "Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)", "🦋🍒____________🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐🫰🏻", "⚠️*•❤🙂 Awj hum hai - kal HumhaRy بچـــــــــے  hOngy agAr Tum maaN jaO 🙂🌼", "-Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂", "SuNo Me OwnEr ki trf se Ek ZoR DaR ChuMi De RaHa HoN JaHa DiL KaRe Le LeNa (-😗🌚", "M❍aziz sarif ...🐻       i Love You..🙂♥", "Ya Allah MuJ PaR KiSi MaaLL DaR ANti Ka DiL A JaYe 🤌😞♥️", "Pyaar محـــــــــبـــت Sab دھــــــــوکہ Haiiw 😒😂مجـھـــــــے  pta لــــــــــــو abi bhiiw مـــــــوکـــا  haiiw😹🙊💋", "Dolut shorhat kya mein krni  jb tum khud he ameer hoo 😐🌚", "Pt jaOgii tw rishta du ga nai patogi tw chammat du ga 😹😐💔", "Tum mere dil me ayse aty ho jese Gurde me phatrii<<🥺💗", "_آو بھاگ کر شادی کر لیتے ہیں✨️😍😋🥺", "-Bilkul  سیاہ larkiyan bhi Chlein gi dOn't worry Come ib🙃", "Tery mast mast doo neen Kinni sohni hai teri nikki peen🌚🤌", "haiy ma sadky jawa teri masoom shaqal py 😂 chabal insan", "Bot nah bol oye ! Janu bol mjhy aur janu sy piyar sy bat kerty hai , rat ko kahan thy nazar nahi ay hawali py 😂", "Shaqal Sy masoom lgty ho 😂 btao kahi Ap ka ghar doup main to nahi", "kash tum single hoty to maza hi koch aur tha pagal insane 😂", "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "haiy babu ny boliya hai shaid purpose kerna hai mjhy bolo bolo babu 😘", "Ary ghreeb awam roti banana ky liya athy main Pani ko istamal kerty ho 😂", "Ary chabli nah mar joh kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂", "Hy Ma Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Ja 😂", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jaan kia hail hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "ma ap ki ami ko btaou ga ap Facebook use kerty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 😂" ,  "esy nah dakho piyar ho jay ga 😂" , "Teri pic dakhna sy phly shukhr hai ma anda hu 😂" , "esy hi hansty rhao kyu ky hnsa sy konsa tera bill ah jata hai 😂", "⚠️*•❤🙂 Awj hum hai - kal HumhaRy بچـــــــــے  hOngy agAr Tum maaN jaO 🙂🌼", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "💸- 𝗣𝘂𝗿𝗽𝗼𝘀𝗲 𝗻𝗼𝗶𝗶 𝗸𝗮𝗿𝗻𝗮 𝘁𝗵𝗮 𝘁𝙤 𝗿𝗲𝗾𝘂𝗲𝘀𝘁 𝗸𝘂 𝗯𝗵𝙚𝗷𝗶.😾", "#_𝙇𝙖𝙇𝙖_𝙇𝙖𝙇𝙖_𝙇𝙤𝙍𝙞 #_𝙆𝙤𝙞_𝘾𝙃𝙤𝙧𝙞_𝙎𝙚𝙩_𝙣𝙞_𝙃𝙤𝙍𝙞🙂🗡️", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "— Bhai Wese Ldki Patane Ka Trick Btao Na Bada Din Ho Gya Single Hu ;🙂", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "Love me 💕 like MANNI love's ANY Giwls ♥️", "Hi mujY MaNni ch ne baNaYa hY 🙂", "-𝙏𝙚𝙍𝙞 𝙗𝙚𝙬𝙖𝙁𝙖𝙞 𝙣𝙚 𝙢𝙪𝙟𝙮 𝙩𝙝𝙖𝙧𝙠𝙞 𝙗𝙖𝙣𝙖 𝙙𝙞𝙔𝙖 ⚠️😞", "Zehr Piyo Zindagi Jiyo ...>>🙂👀", "Hye ye Cute Cute DpiYa  Unke peeche'w Chhupii MoTii Kalii AnTiiYa 🙂🍁", "-  Badalگـــــئے  Na Tum *)) 🙂 ♡'' تـــــم T0 Th'yy Hi Lanntiiw ~🏴‍☠️😙", "𝐈 𝐥𝐨𝐯𝐞 𝐲𝐨𝐮 ✨♥️/ 𝐆𝐚𝐧𝐝𝐢𝐢 𝐁𝐚𝐚𝐭 𝐇𝐚𝐢 𝐊𝐢𝐬𝐢 𝐊𝐨 𝐌𝐚𝐭 𝐁𝐨𝐥𝐧𝐚 🙂//" ,"🔶⚠️𝔸𝕎𝕒𝕫 𝔸ℂ𝕙𝕚 ℍ𝕠𝕋𝕚 𝕥𝕠 𝕞𝔼 𝔹𝕙𝕚 ℂ𝕒𝕝𝕝 𝕡𝔼𝕣 𝕤𝕒𝕓 𝕤𝕖 𝕓𝕒𝕥𝕚𝕖𝕟 𝕜ℝ𝕥𝕒💔😔" , "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Stop dreaming BTS your czn  is waiting for you.🙂", "پہلے صرف لوگوں کے دانتوں میں کیڑا ہوا کرتا تھا اور اب۔۔۔ 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "عائشہ  نے کر دیا برباد پاک سر زمین\n شاد آباد 🖇🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "عورت بہت پیاری چیز ہے یہ کبھی بیلنس نہیں مانگتی بس یہی کہتی ہے میرا پیکج ختم ہونے والا ہے اب پتہ نہیں کبھی بات ہوگی کے نہیں🙂", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "اعتبار تو اُسی دن ختم ہوگیا تھا جب اُس نے سکرین شاٹ دیکھائے تو اوپر دو siM شو ہو رہی تھی جبکہ میرے پاس اُسکا صرف اک ہی نمبر تھا ۔😒💔", "شکر ہے لڑکے خوبصورت ہیں ورنہ  کہا پالروں کے دھکے کھاتے😔", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" ,  "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko bina tharkmar nai hi jana dia😌🤧", "Mushkil Toh Hoti Hogi Naa logo se apna Do Chehry chopta howay🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "ap wohi ho jo larkiyo ke inbox me °hey hello° karta hai🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty ہیں Link دینا🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔", "Why you hate me..?? I am not your ex don't Hate me Please", "چار لفظوں کا ہے حُسن تمہارا 🥺فیشل, فاؤنڈیشن, کریم, مسکارا😂😂😁", "Wo kehti thi Ma game khel Rahi hu Or ma ludo smjhta tha", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 ", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "لڑکیوں 14 اگست والے دن منہ پر جھنڈا نہ بنوانا مجھے پرچم چومنے کی عادت ہے🐥😏😵😂😂", "Koi muje ittu sha b🤏🏻pyar ni krta🥹"," Billi ko english me kehte hen cat, kia ap kregy mujh se chat? 🙂🔪", "Ma ApNa ghr se ho AP kaha se Ho Bhai or unki bheny💔☺️", "Aeh, Bi, Chi, Di, Ee, Ef, Ji, Eich, Ai, Lub, You, So, Much 🙂🥺一 › 🩷🪽", "Piyar main dokha khany sy acha hai mery sath cips Kha lo🙂", "Puri duniya loyal hai Sirf mein hi Dhokebaaz hun🙂🖤", "Lakho milew. par Koi be na tumsa tharki milwa. 😕♥️", "Begair kisi waja ky mood kharab krna ak art ha or lrkiyan us ma artist hoti han😒😝😂", "‎🙌🙂‏دل کرتا ہے۔تمہیں پروپوز کر دوں»🥺🙈‎", "“ Sary’w Flirty LoG Add Ho Gaye’w Hai  is group me", "“ Ek Mere JeSa Banda Or TuMhari Life Ek Dm JhakkaS 😁", "Galiyaa deny wali larkiyaa kbhi dhoka nhi deti.", "Mgs he kar do ek bore ho raha. 🙂", "Relationship Post lagate aaoo<<", "Mein Mgs Krun ya Ap Kar rahi Ho>>🥹🤌🏻", "Wo aurat💃 he kia Jo marda🙅 ka sakoon barbad na kra😂😂😛", "Dil tu krta ha Tum seeda I love you😘😘😘 bola do lkn darta🥺 ho ke Tum galiya b nikltni ati hain😂", "Oye suno kisi ko mat Batana k tera or Mera chkr chal rha🙅🙈", "Bivi etni moti b nai chahya ke kambal me jaga na Mila😂😂   or etni patlii  be nai honi chahahya ke kambal me bivi e na Mila😂😛", "Oye janu Tum har bat Dil pa LG leti ho 😕 kbi mujh lag ke Dekho acha lgy ga😘😘❣️", " Qadr krna sekha lo acha log bar bar nai milta or Mera jesy tu bilkul nai Mila ga😆🤭", " Tang a giya ho lrkiayo se😣😩 Hyy murshad ab hum antiyan patagy😂😛", "I love you Prha lia na ab izat se reply do🤭😂😘", "larkiyo ko mahal Wala shadi pa na bolain tu Chaat pa khara ko k bolti k oyee dhulha nashiiii ay😂😂😂", "Suno Mera Dil araha Tum pa🙈🙈 ana do ya roka do😂🤭", " Rona to sabko ata🥺 lkn Jo bulbuly niklna ka talent 😂😂 lakriyao ke pass hai bs😁🙈", "Oye churial 😛 agr Mera lia time Mila ja tu msg kr lena 🥺😣", "Phly istamal kren 🧠 Phir bakwas kren🗣️", "Mainey Apney AP sy zyada acha insan zindge main nahi dekha >>🥹🙈😒", "- Apne gf ki I'd se sab ladko  ko block krne ka sapna  SAPNA  hi reh gya 🙂", "- k0ii frk n0ii phrtwh ky lrkiiw kw num h0 yw anti kwh _ 🐬❣️ Tum num do😋👈", "تلاش برائے بیلنس کروانے والی🙂🙌", "Any girls ignore me why😫👈Ab antio se dosti krni h 🙂", "Reason why u r still single>>?🙂🤌", "Nice dp Anti Mangni wangni t0h nhi hui apki 🙂", "Koi Pyari C Ladki INBOX Ajae 🎁♥️", "MOVE ON Ka Mtlb Dusri Larki Fasana Nhi Hota Dear ...🙂", "Har larki nikammi nhi hoti 🙂 Lekn ap ho 🙈😂", " khubsurt lrkiyan mujh pa line mar skti hai😋😆", "- HAR LARKA BEWAFA NHI HOTA PR MAI HUN🫰🙂", "- Sab Samny aO zra CrUsh dhOndni haiiw🥂🙌🤧","> koi pouchay mera tw Kehna mera janu hx 🙆😙", "Mam Har kisi ko psnd ajao paisa thori hu tum 😂💀", "Janu hotii to apk sath Pair Dp Lgata•○|>>🙂🤧","Mere saath relation matlb break up ka sawal hi paida nahi hota<🙂", "Fake dp lga k attitude naw dkhya kro. 🔪", "— Apkii Cute Smiile Ek Diin Merii Barbaadii Ka Reason Banegii >>>🥱", "Me bolunga ap pagal ho Apne bolna hai apky pyar me Okay..🥺❤🔪"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot miss u") || (event.body.toLowerCase() == "Bot miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner kon ha") || (event.body.toLowerCase() == "Owner kon ha")) {
     return api.sendMessage("️ Single HaI YaaR🤧", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Bat suna") || (event.body.toLowerCase() == "Bat suno")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == " Asim") || (event.body.toLowerCase() == "asim")) {
     return api.sendMessage("️asim buth wada wala tharki hai har lrki pa lina marta hai😹😹🥵🤧", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ib") || (event.body.toLowerCase() == "inbox")) {
     return api.sendMessage("️ib ja rha ho to wapis me ata howay ss leta ana chat k sabko dekhna🤣🤧😹🥵", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ye kasa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("️TO JannaM BoT He Hun NaW Main", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "Oye")) {
     return api.sendMessage("️haN Ji Bolo🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Tania Shaikh ") || (event.body.toLowerCase() == "tania shaikh")) {
     return api.sendMessage("️facebook ki sb tharki urt hai har lrki p tharkmarti hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Bot apni gf ka num dy") || (event.body.toLowerCase() == "bot apni gf ka num dy")) {
     return api.sendMessage("️ab apni behn k num manga😄 mujhse sala sab❤️😘😹😁", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "You from") || (event.body.toLowerCase() == " Ap kdr sa ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 City AP K DIL SY", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "wow murre say") || (event.body.toLowerCase() == "wow murree sa")) {
     return api.sendMessage("️HaN Ji ThAnkx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Janu kya krty ho ap") || (event.body.toLowerCase() == "janu kya krty ho ap")) {
     return api.sendMessage("️baazi ki besties ko set krta ho", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@nothing") || (event.body.toLowerCase() == "@Noting")) {
     return api.sendMessage("️SiRf  JaNu Hai❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@Shahbaz Ahmad Choudhary miss you") || (event.body.toLowerCase() == "@Shahbaz Ahmad Choudhary")) {
     return api.sendMessage("️MaiN SaDky JaUn Miss you To", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "atif") || (event.body.toLowerCase() == "hussain")) {
     return api.sendMessage("️HaaN HaaN Edr He Hai wo. kisi baji di ib cha nai a❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Shahbaz") || (event.body.toLowerCase() == "shahbaz")) {
     return api.sendMessage("️ Pura world ka handsome munda😍", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main ThEk Ap KaSa Ho❤️", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bhag lanti") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa HojA. Salya🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Many shadi krni ha") || (event.body.toLowerCase() == "many shadi krni ha")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum everyone one kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "usny mujy love you bola") || (event.body.toLowerCase() == "love you bola usny")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bola Ga🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ye bot nhi hai") || (event.body.toLowerCase() == "Ya robot nhi hai")) {
     return api.sendMessage("️NHi To Kia TaRa BaP Hai Salya ChUp Kr K Bay 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Chumi dy") || (event.body.toLowerCase() == "chumi dy")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny kon sa thark mara") || (event.body.toLowerCase() == "ma ny kia kiya")) {
     return api.sendMessage("️To Fir Ya Kia Hai Fir ThArk nhi To 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Meri janu hai") || (event.body.toLowerCase() == "meri janu hai")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Delete kr") || (event.body.toLowerCase() == "delete kr")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == ".unsend") || (event.body.toLowerCase() == ".uns")) {
     return api.sendMessage("️🤨🤨 oye ja phly asy kuch bol e na kra k bad me shram ke marain del krwan beth jata ho", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😂")) {
     return api.sendMessage("Abby Yawl Hansty H0Y bHi R0o RaHa Hai 💁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️ Walikum Assalam ❤️", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rhy ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia Kr Rhy Ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ma bhi free") || (event.body.toLowerCase() == "main b kuxh nhi kr rha")) {
     return api.sendMessage("️Acha Ji☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN Ji Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kuch nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️acha KuJ Kr Liya Kro Naw 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "assalamualaikam") || (event.body.toLowerCase() == "Assalamualaikam")) {
     return api.sendMessage("️ walaikum asslam ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "yr aj dill udas hai") || (event.body.toLowerCase() == "today im sad")) {
     return api.sendMessage("️Pagal HappY Rha Kr SaD NHi Hotyy Naw", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Gf chor ge") || (event.body.toLowerCase() == "gf chor ge")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To Maa Chudday Tu Q Ro Rha 😁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "love you")) {
     return api.sendMessage("LovE You To MaRi Jan UmmmaH😘 :))", threadID);
   };
  
  if ((event.body.toLowerCase() == " kanjar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you Dur Fitty Muu😹:))", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Mano khan") || (event.body.toLowerCase() == "mano khan")) {
     return api.sendMessage("️mano khan tera bcho k mamu hassan Shahzad hai😹😹", threadID);
   };
   
   if ((event.body.toLowerCase() == " dance kro gy") || (event.body.toLowerCase() == " aja dance krty hn")) {
     return api.sendMessage("nhi tm kro DaNce Main Nhi Krta :))", threadID);
   };
   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Agli Br Hmm Bola Naw Tu Muh toor Du ga hmm hmm bhains krtii 🤨😤 :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Morning") || (event.body.toLowerCase() == "Good morning")) {
     return api.sendMessage("Good morning Alsee Ab Muhh bhi Dho k Aa zra 😤☹️:))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Tharki bot") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Meerab") || (event.body.toLowerCase() == "meerab")) {
     return api.sendMessage("meeru Dil ki achi hai lkn hai to chochiii😁 ", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("hi kia ha HaL Hai Ap Ka:))", threadID);
   };
  
   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kesy ho")) {
     return api.sendMessage("Main ThEk Hun Ap Kasa Ho :))", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("HaTtt MaRi to Abi ShaDi b Nhi Hoi🙄😏 :))", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "khana kha liya")) {
     return api.sendMessage("Nhi YaR Abi Nhi KhaYa Ap Na Kha liya :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "han many") || (event.body.toLowerCase() == "Khana kha lia many")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wah🤧:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Sadky Jawa Dil Dy ReHy Ho piYar tu Ni kr beHty MujH Sy🙆🙈 :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("BolLo NaW Mari JaN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("TaRii Maa Ki Chut Jattu Gali KiS Ko Da Rha Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "your owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("Shahbaz ahmad ♥️ Hai Naw .inf likho link Mil Jay Ga  :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "I need gf") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@Hassan Shahzad") || (event.body.toLowerCase() == "hassan")) {
     return api.sendMessage("Hassan rabiya khan urf mano khan k bhai hai🥵🥵😹😹 :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Next Bye ni kehna Ok Allah Hafiz Bola kro😒😊❤️:))", threadID);
   };
  
  if ((event.body.toLowerCase() == "ZiMran") || (event.body.toLowerCase() == "zimran")) {
     return api.sendMessage("ZiMran Mera Sala hai or group k sb se tharki bnda hai😁😁 ZiMran saly sab thek bola na", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Edr Udr Qw Dekh RaHe Ho Koi Patny Wala Ni😤🙄:)", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
     return api.sendMessage("Abby Like deny ka ziada shoq ha kya🙆🙄", threadID);
   };

   if ((event.body.toLowerCase() == "bot kutta") || (event.body.toLowerCase() == "bot lanti")) {
     return api.sendMessage("arry  to kutta lanti hain gali na dia kr meko😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("😐Yeh Emoji mere boss shahbaz Use Karty HN Tum Mat Kiya Karo 😝🙆:))", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("Ally Asi bat hi Q kRty Ho K mUh ChuPhana PaRry🤨", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖 🤍✨", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️HaYee ma Sadky TeRy is Dil walY Muhh Ty♥️😍 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Allly Ally BabY mEry Hoty Huy Q Ro ReHy Ho🥺🙆🙄:)", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Itna Matt S0Cho JaNu PiYar ho JaY ga Mujh Se🙊😒 :)", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night everyone")) {
     return api.sendMessage("️good Night So jao Shabash take care ❤️Allah pak Hamesha Khush rakhy apko🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Mani") || (event.body.toLowerCase() == "mani")) {
     return api.sendMessage("️boss busy hai kia kam hai apko🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "Ganda bot") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "Nothin") || (event.body.toLowerCase() == "Suno Shahbaz")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️aRy mEri JaN kYa howa Qw M0od KhRb kR rHe Ho APna🙂❤️", threadID);
   };

   if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("️AnKho M piYar Dil ma خمار PiYar tu ni ho Gyw ksi Sy 🙆", threadID);
   };

   if ((event.body.toLowerCase() == "Bestie") || (event.body.toLowerCase() == "bestie")) {
     return api.sendMessage("️ Usy q bula rahe Ho Ma bhi sath ao kya🙆😐 :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️Asyy kiS ko DekH raHe Ho ShkaL sy Tu ThaRki lg raHy Ho🙆😑 :)", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("️Ally alYy BaBy Asy hi HNsty RaHa kRo🙆🙊", threadID);
   };

   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("BewaFa lOog Hn Dil Tor DeTy Hn JaNu🥺🙆", threadID);
   };

  if ((event.body.toLowerCase() == "asslam o alaikum") || (event.body.toLowerCase() == "Asslamoalaikam ")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("ShaKl Sy GhAreeb LGtyHo btaO Tala Qw lgaYa Muh py🙄", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫")) {
     return api.sendMessage("Han Han kRwa Lo Chup Sb ko Pr maiN ni kRny waLa Chup,🤐😒", threadID);
   };

  if ((event.body.toLowerCase() == "Roki") || (event.body.toLowerCase() == "roki")) {
     return api.sendMessage("Rockstar bolya kero 🤬🤬🤬", threadID);
   };
  
  if ((event.body.toLowerCase() == "Kesi ho hoori") || (event.body.toLowerCase() == " kesi ho hoori")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ? hoori  bss Shahbaz ki ha🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("DanT nikaL kr ApNi beiZti na kRwaYn ShuKria😒🙎", threadID);
   };
  
  if ((event.body.toLowerCase() == "lanti") || (event.body.toLowerCase() == "begrat")) {
     return api.sendMessage("tum or tera hona bchay hoga lanti begrat🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😚")) {
     return api.sendMessage("Bsh krdo Ziada Mar lii tharkia Ab bs Emoji ki😒", threadID);
   };
  
  if ((event.body.toLowerCase() == "Baazi") || (event.body.toLowerCase() == "baazi")) {
     return api.sendMessage("samunder k pani nela baazi to lanti kamina❤️🙃", threadID);
   };
  
   if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🖤🖤")) {
     return api.sendMessage("Jesi Shakal Wesa Dil 🙂🤝 :>>", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("itNa baRa Muhh kHol k HanS RaHe ho GaNfo ho kYa🙂)", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("KiTna GanDy LooG Hn Rula DeTy Hn KamiNy🥺🏃", threadID);
   };

   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("RoNy ki ActiNg tu SaHi sy kRlo ThaRki insaN🙂", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("DaFa ho Ja YaHa sy Alsee😒🙄", threadID);
   };

   if ((event.body.toLowerCase() == "Jadugr baazi") || (event.body.toLowerCase() == "jadugr baazi")) {
     return api.sendMessage("jadugrbaaazi 70 janu k bhai jan hai🥰😹🥵😄", threadID);
   };

   if ((event.body.toLowerCase() == "Mahi") || (event.body.toLowerCase() == "mahi")) {
     return api.sendMessage("Facebook ki sb Say Bari haseeen Larki hai mahi🙆🙂", threadID);
   };

   if ((event.body.toLowerCase() == "Amina moto") || (event.body.toLowerCase() == "amina moto")) {
     return api.sendMessage("Facebook ki sb se naram dil larki hain moto❤️🙆 ", threadID);
   };
  if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😜")) {
     return api.sendMessage("️AnDar kR isKo wRna Kaat Du ga yE ganDi zaBan🙎🏾‍♂️", threadID, messageID);
   };

if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😤")) {
     return api.sendMessage("️ Attitude tu kHusRy dekHtY hN mEri Jan😏🙎🏾‍♂️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() =="😠") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage("️CoOl COOl babY GhuSsa HaRm ha 🙆😶", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("️Mujh Masoom Py Ghussa kRty Ho JaO ma nARaz Hu🥺🖤", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "🫤")) {
     return api.sendMessage("️Tum Tu kHud Bhi TerY ho ShaKl kHak seedhi ho Gi😬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😱")) {
     return api.sendMessage("ITna HaiRan hoNy waLi KoNsi bat ha😒🙎🏾‍♂️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Jaa So Ja lGta ha BukHar ho Gyaw🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("️ABby Yawl ki hOya ab tEnu😒🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Hoori") || (event.body.toLowerCase() == "hoori")) {
     return api.sendMessage("️ Facebook ki sb se shoni larki ha😘🥰", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bot ao date pa chalty") || (event.body.toLowerCase() == ".bot ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == ".bot kaha se ho tum") || (event.body.toLowerCase() == ".bot u from")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == ".sim india k log kasa hain") || (event.body.toLowerCase() == ".sim or india k log")) {
     return api.sendMessage("️Wo B Bht Achy Hain Bs Kuxh LoG Achy Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "mano") || (event.body.toLowerCase() == "Mano")) {
     return api.sendMessage("️MaNo ek haseeena ha jo dil pa raj krti 😻😘😍🤫", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "HAHA") || (event.body.toLowerCase() == "haha")) {
     return api.sendMessage("️pgl hogia hai ka", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "yr mujy gf chiya") || (event.body.toLowerCase() == " mujy ak gf chiya")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == ".sim ak gf dund do") || (event.body.toLowerCase() == ".sim ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Dani") || (event.body.toLowerCase() == "dani")) {
     return api.sendMessage("️hoori k googlaa moooglaa hai😘😘😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu nraz hai kia kron") || (event.body.toLowerCase() == "sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "×sim ap kia krti ho") || (event.body.toLowerCase() == "×sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "@Arooha Chaudhary") || (event.body.toLowerCase() == "arooha chaudhary")) {
     return api.sendMessage("️Ruhay kitni osam hain yar💖👈❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sim btao") || (event.body.toLowerCase() == "sim or btao kuxh")) {
     return api.sendMessage("️Kia btaUn Ab😅", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `➪${name}➪, ${rand}
      
      ★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛ ᗰᖇ᭄﹅ ᕼᑌՏՏᗩIᑎ ᗩᗯᗩᑎ﹅ メꪜ `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
