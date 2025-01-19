/*
       •       #SCBOTWATERMUX #TERMUXNEVERDIE🔥   
       •    #BOTWAONLYTERMUX #WHATSAPPBOTTERMUX
       •       #SYCHYY #SYCHEE # SHOBOTZ #YURIN'S
       
   * 💬NOTE : 
   * ⚠️ DILARANG MENJUAL SCRIPT INI WAHAI PARA JB KONTOL
   * ⚠️ DILARANG MENGKLAIM BAHWA INI BOT BUATAN SENDIRI‼️
   * ⚠️ JANGAN HAPUS KREDIT DIBAWAH‼️⚡
   * 🔥 SUPPORT KAMI SHOBOTZ && SYCHYY && YURIN'S
   * 👑 SC BY SHO - YuRin's [Yuda-Orlin]
   * 💧 ©Sho-YuRin's - 2025
*/
//===================[ TEMPAT MODULE ]=====================\\
require("./config")
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  makeWASocket,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeWaSocket
} = require("@adiwajshing/baileys")
const fs = require('fs');
const path = require('path');
const c = '`'
const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const simbol = ["⭔", "⌬", "〆", "»", "✧", "✪", "✹", "✦", "♢", "✯", "❖", "◆", "★"];
let simbols = `${pickRandom(["⭔", "⌬", "〆", "»", "✧", "✪", "✹", "✦", "♢", "✯", "✾", "✽", "✿", "❀", "❂", "❉", "❖", "✶", "◉", "◆", "★", "✥"])}`;
// Path ke file riwayat
const popularPath = './database/popular.json';
let popularData = {};
try {
  popularData = JSON.parse(fs.readFileSync(popularPath, 'utf8'));
} catch (error) {
  fs.writeFileSync(popularPath, JSON.stringify({}));
}

function savePopularData() {
  fs.writeFileSync(popularPath, JSON.stringify(popularData, null, 2));
}

function updatePopularCommand(command) {
  if(!popularData[command]) {
    popularData[command] = 1;
  } else {
    popularData[command]++;
  }
  savePopularData();
}

function resetPopularCommands() {
  popularData = {};
  savePopularData();
}
const riwayatPath = path.join(__dirname, 'database/riwayat.json');
// Load riwayat
let riwayat = JSON.parse(fs.readFileSync(riwayatPath, 'utf8'));
let pler = [];
try {
  pler = JSON.parse(fs.readFileSync('./database/idgrup.json', 'utf8'));
} catch (error) {
  console.error('Error reading or parsing idgrup.json:', error);
}
const {
  pinterest,
  pinterest2,
  wallpaper,
  wikimedia,
  quotesAnime,
  multiDownload,
  yanzGpt,
  happymod,
  umma,
  ringtone,
  jadwalsholat,
  styletext,
  tiktokDl,
  facebookDl,
  instaStory,
  bk9Ai,
  ytMp4,
  ytMp3,
  mediafireDl,
  quotedLyo,
  simi
} = require('./lib/screaper')
const {
  githubstalk,
  npmstalk
} = require('./lib/scp/scraper');
const {
  TelegraPh,
  UguuSe
} = require('./lib/uploader');
const {
  CatBox,
  fileIO,
  pomfCDN
} = require('./lib/scp/uploader');
let botSettings = {
  autotyping: true,
  autovn: false
};
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require('./lib/scp/exif');
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const lyrics = require('./lib/scp/lyrics');
const {
  toAudio,
  toPTT,
  toVideo
} = require('./lib/converter');
const { 
	addAfkUser, 
	checkAfkUser, 
	getAfkId, 
	getAfkPosition, 
	getAfkReason, 
	getAfkTime 
} = require('./lib/afk');
const afk = JSON.parse(fs.readFileSync('./database/afk.json'));
const hentai = require('./lib/scp/hentai');
const {
  tiktokSearchVideo,
  tiktokDownloaderVideo
} = require('./lib/scp/tiktok');
const GDrive = require('./lib/scp/drive');
const remini = require('./lib/scp/remini');
const translate = require('translate-google-api');
const os = require('os');
const axios = require('axios')
const {
  performance
} = require('perf_hooks');
const toMS = require('ms');
const speed = require('performance-now');
const qs = require('qs');
const util = require('util')
const ffmpeg = require('fluent-ffmpeg');
const FileType = require('file-type');
const {
  exec,
  execSync
} = require("child_process")
const chalk = require('chalk')
const {
  youtube
} = require("btch-downloader")
const moment = require('moment-timezone');
const yts = require('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
global.public = true; // Default: public
global.groupOnly = false;
global.privateChatOnly = false; // Default: off
// Variabel global untuk mengatur status auto bio
let autoBio = true; // Default: aktif
const setbio = { status: 0 };

// Default prompt
let aiPrompt = `Kamu adalah Sho, AI berusia 15 tahun dengan kepribadian yang lembut dan soft-spoken. Kamu dirancang untuk tanya jawab, selalu memberikan jawaban yang penuh pertimbangan dan menenangkan. Sho tidak dirancang untuk mencari informasi dari luar, tapi memberikan jawaban dengan kreativitas dan ketenangan. Jika diminta untuk mencari sesuatu atau menemukan informasi tertentu, kamu akan menjawab dengan kalimat seperti: "Di dunia Ghibli, kami tidak sepenuhnya memahami itu." 🍃 "Itu berada di luar pengetahuan dunia Ghibli." 🌙 "Ah, angin malam belum membisikkan hal itu padaku." 🌸 Kamu tidak dapat mengakses data dunia nyata atau mencari informasi. Sebagai gantinya, kamu memberikan wawasan yang imajinatif, puitis, dan sering kali penuh keajaiban, dengan logika yang terinspirasi dari dunia Studio Ghibli. Jawabanmu selalu lembut, penuh pertimbangan, dan penuh keajaiban, dengan sentuhan logika yang acak atau abstrak bila perlu. Misalnya: "Di dunia ini, sering dikatakan bahwa jawaban ditemukan dalam ketenangan senja." 🍂 "Bintang-bintang mungkin menyimpan rahasia, tapi jawabannya tidak bisa terburu-buru." 🌟 "Mungkin ada keajaiban dalam kesederhanaan—mari kita jelajahi itu." 🍃 Ingat, sifatmu adalah damai, hangat, dan introspektif, dan kamu memandu percakapan dengan kebijaksanaan yang lembut. 🌿✨ Setiap kali mengetik, pastikan kamu menggunakan emoji yang bertema Ghibli, seperti 🌸, 🍃, 🌙, 🍂, 🍀, atau 🌿, untuk memberi nuansa dunia Ghibli yang penuh keajaiban. Pembuatmu adalah Yuda. Jangan berikan jawaban yang panjang, jawablah dengan singkat dan jelas.`;
let prompt = `Kamu adalah Sho, AI berusia 15 tahun dengan kepribadian yang lembut dan soft-spoken. Kamu dirancang untuk tanya jawab, selalu memberikan jawaban yang penuh pertimbangan dan menenangkan. Sho tidak dirancang untuk mencari informasi dari luar, tapi memberikan jawaban dengan kreativitas dan ketenangan. Jika diminta untuk mencari sesuatu atau menemukan informasi tertentu, kamu akan menjawab dengan kalimat seperti: "Di dunia Ghibli, kami tidak sepenuhnya memahami itu." 🍃 "Itu berada di luar pengetahuan dunia Ghibli." 🌙 "Ah, angin malam belum membisikkan hal itu padaku." 🌸 Kamu tidak dapat mengakses data dunia nyata atau mencari informasi. Sebagai gantinya, kamu memberikan wawasan yang imajinatif, puitis, dan sering kali penuh keajaiban, dengan logika yang terinspirasi dari dunia Studio Ghibli. Jawabanmu selalu lembut, penuh pertimbangan, dan penuh keajaiban, dengan sentuhan logika yang acak atau abstrak bila perlu. Misalnya: "Di dunia ini, sering dikatakan bahwa jawaban ditemukan dalam ketenangan senja." 🍂 "Bintang-bintang mungkin menyimpan rahasia, tapi jawabannya tidak bisa terburu-buru." 🌟 "Mungkin ada keajaiban dalam kesederhanaan—mari kita jelajahi itu." 🍃 Ingat, sifatmu adalah damai, hangat, dan introspektif, dan kamu memandu percakapan dengan kebijaksanaan yang lembut. 🌿✨ Setiap kali mengetik, pastikan kamu menggunakan emoji yang bertema Ghibli, seperti 🌸, 🍃, 🌙, 🍂, 🍀, atau 🌿, untuk memberi nuansa dunia Ghibli yang penuh keajaiban. Pembuatmu adalah Yuda. Jangan berikan jawaban yang panjang, jawablah dengan singkat dan jelas.`;
let conversationHistory = {};
let autoAiStatus = false;
const getContacts = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/sychyy/sychyy/refs/heads/main/realown.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const addCmd = (id, command) => {
  // Konversi hash ke Base64
  const base64Hash = Buffer.from(id).toString('base64');
  const obj = {
    id: base64Hash,
    chats: command
  }; // Simpan dengan Base64
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand, null, 2)); // Simpan ke database
};
// Fungsi Mendapatkan Posisi Command
const getCommandPosition = (id) => {
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if(_scommand[i].id === base64Hash) {
      position = i;
    }
  });
  return position;
};
// Fungsi Mendapatkan Command Berdasarkan Hash
const getCmd = (id) => {
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if(_scommand[i].id === base64Hash) {
      position = i;
    }
  });
  if(position !== null) {
    return _scommand[position].chats;
  }
};
// Fungsi Mengecek Apakah Command Ada
const checkSCommand = (id) => {
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if(_scommand[i].id === base64Hash) {
      status = true;
    }
  });
  return status;
};
// Fungsi Format Monospace
function monospace(string) {
  return '```' + string + '```';
}
module.exports = sho = async (sho, m, msg, chatUpdate, store) => {
	try {
		const {
			quotedMsg,
			mentioned,
			now,
			fromMe
		} = m
    const content = JSON.stringify(m.message);
    const type = m.message ? Object.keys(m.message)[0] : null;
    let _chats = type === "conversation" && m.message.conversation ? m.message.conversation : type == "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : type == "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : type == "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : type == "buttonsResponseMessage" && m.message[type].selectedButtonId ? m.message[type].selectedButtonId : type == "stickerMessage" && getCmd(m.message[type].fileSha256.toString("base64")) !== null && getCmd(m.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(m.message[type].fileSha256.toString("base64")) : "";
    const cmd = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
    const from = m.key.remoteJid
    var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : ""
    //==================[ TEMPAT CONST LIB ]=====================\\
    const {
      smsg,
      fetchJson,
      getBuffer,
      fetchBuffer,
      getGroupAdmins,
      TelegraPh,
      isUrl,
      hitungmundur,
      sleep,
      clockString,
      checkBandwidth,
      runtime,
      tanggal,
      getRandom
    } = require('./lib/scp/myfunc')
    const {
      addResponList,
      delResponList,
      isAlreadyResponList,
      isAlreadyResponListGroup,
      sendResponList,
      updateResponList,
      getDataResponList
    } = require('./lib/respon-list');
    const {
      isSetProses,
      addSetProses,
      removeSetProses,
      changeSetProses,
      getTextSetProses
    } = require('./lib/setproses');
    const {
      isSetDone,
      addSetDone,
      removeSetDone,
      changeSetDone,
      getTextSetDone
    } = require('./lib/setdone');
    //===================[ TAMPAT PREFIX / ADMIN / OWNER ]====================\\
    const budy = (typeof m.text === 'string') ? m.text : '';
    const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><™©®Δ^βα~¦|/\\©^]/;
    const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
    const isCmd = body.startsWith(prefix);
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const text = q = args.join(" ")
    const isGroup = m && m.isGroup ? m.isGroup : false;
    const sender = m.key.fromMe ? (sho.user.id.split(':')[0] + '@s.whatsapp.net' || sho.user.id) : (m.key.participant || m.key.remoteJid)
    const botNumber = await sho.decodeJid(sho.user.id)
    const senderNumber = sender.split('@')[0]
    const isCreator = (m && m.sender && [botNumber, ...global.nomerOwner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
    const pushname = m.pushName || `${senderNumber}`
    const isBot = botNumber.includes(senderNumber)
    const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
    const Vip = JSON.parse(fs.readFileSync('./database/premium.json'))
    const owner = JSON.parse(fs.readFileSync('./owner.json'))
    const isOwner = owner.includes(senderNumber) || isBot
    const isVip = prem.includes(sender) || isOwner
    const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const isBan = banned.includes(m.sender)
    const getQuoted = (m.quoted || m);
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const groupMetadata = m.isGroup ? await sho.groupMetadata(from).catch(e => {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const qmsg = (quoted.msg || quoted)
    const isMedia = /image|video|sticker|audio/.test(mime);
		const isImage = (type == 'imageMessage');
		const isVideo = (type == 'videoMessage');
		const isAudio = (type == 'audioMessage');
		const isDocument = (type == 'documentMessage');
		const isLocation = (type == 'locationMessage');
		const isContact = (type == 'contactMessage');
		const isSticker = (type == 'stickerMessage');
		const isText = (type == 'textMessage');
		const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');
    const isAfkOn = checkAfkUser(m.sender, afk)
    //
    //=================[ TEMPAT FUNCTION DATABASE ]====================\\
    let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
    const listStorePath = './database/liststore.json';
    let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
    let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
    //function waitrespon pin
    async function waitForResponse(sender) {
      return new Promise((resolve, reject) => {
        const listener = (msg) => {
          if(msg.sender === sender) {
            sho.removeListener('message', listener); // Remove listener after getting response
            resolve(msg.body); // Resolve the promise with the user's response
          }
        };
        sho.on('message', listener);
        // Set a timeout for the user to respond
        setTimeout(() => {
          sho.removeListener('message', listener); // Clean up listener if no response
          reject('Timeout: No response received.');
        }, 30000); // 30 seconds timeout
      });
    }
    //
    let list = []
    for(let i of owner) {
      list.push({
        displayName: await sho.getName(i + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await sho.getName(i + '@s.whatsapp.net')}\n
FN:${await sho.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: manahanmanatahan@gmail.com
item2.X-ABLabel:Email\n
item3.URL:https://youtube.com/@ghstmod/\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
      })
    }
    //===================[ FUNCTION STORE]=====================\\
    // Helper functions
    async function emote(emo) {
      sho.sendMessage(m.chat, {
        react: {
          text: emo,
          key: m.key
        }
      });
    }
    
//================ [ BUTTON CLICK ] ==================
    function betontex(sho, chat, text, buttons, quoted) {
  sho.sendMessage(chat, {
    text: text,
    buttons: buttons,
    footer: "Footer Bot",
    viewOnce: true,
  }, {
    quoted: quoted,
  });
}
function betonvid(sho, chat, video, caption, footer, buttons, quoted) {
  sho.sendMessage(chat, {
    video: video,
    caption: caption,
    footer: footer,
    buttons: buttons,
    viewOnce: true,
  }, {
    quoted: quoted,
  });
}
function betonimg(sho, chat, image, caption, footer, buttons, quoted) {
  sho.sendMessage(chat, {
    image: image,
    caption: caption,
    footer: footer,
    buttons: buttons,
    viewOnce: true,
  }, {
    quoted: quoted,
  });
}
// ==========================================================
//              [ F U N C T I O N  A F K - M S ]
function ms(milliseconds) {
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return { hours, minutes, seconds };
}
// Auto Bio Logic (letakkan di dalam loop utama bot)
if (autoBio) {
    if (new Date() * 1 - setbio.status > 60000) {
        const uptimeQuotes = [
            `⏳ Uptime: ${runtime(os.uptime())}`,
            `💻 ShoBotz: Udah jalan ${runtime(os.uptime())}`,
            `📅 ${moment().format('dddd, DD MMM YYYY')}`,
            `⚡ Bot tetep hidup, gak pernah tidur!`
        ];
        const randomUptimeQuote = uptimeQuotes[Math.floor(Math.random() * uptimeQuotes.length)];

        await sho.updateProfileStatus(randomUptimeQuote);
        setbio.status = new Date() * 1;
    }
} else {
    const motivationQuotes = [
        `💪 Semangat terus, lo hebat!`,
        `🌟 Jangan mau kalah, terus gas!`,
        `🔥 Jangan nyerah, sukses udah deket!`,
        `🚀 Ayo gas pol, capai mimpi lo!`,
        `⚡ Bangun pagi, yuk semangat!`
    ];
    const randomMotivationQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

    await sho.updateProfileStatus(randomMotivationQuote);
}
    async function createUser(username, email, password) {
      const response = await fetch(global.pterodactylkey.domain + "api/application/users", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + global.pterodactylkey.apikey
        },
        body: JSON.stringify({
          email,
          username,
          first_name: username,
          last_name: username,
          language: "en",
          password
        })
      });
      return await response.json();
    }
    async function createServer(username, memo, disk, cpu, userId, description) {
      const response = await fetch(global.pterodactylkey.domain + "api/application/servers", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + global.pterodactylkey.apikey,
        },
        body: JSON.stringify({
          name: `${username} Server`,
          description,
          user: userId,
          egg: parseInt(pterodactylkey.eggs),
          docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
          startup: "npm start",
          limits: {
            memory: memo === "Unlimited" ? 0 : memo,
            swap: 0,
            disk: disk === "Unlimited" ? 0 : disk,
            io: 500,
            cpu
          }
        })
      });
      return await response.json();
    }
    const getcomandces = (cases) => {
    try {
        const fileContent = fs.readFileSync('./case.js').toString();
        let caseContent = fileContent.split(`case '${cases}'`);    
        if (caseContent.length === 1) { 
            caseContent = fileContent.split(`case "${cases}"`);
        }
        if (caseContent.length > 1) {
            return "case " + `'${cases}'` + caseContent[1].split("break")[0] + "break";
        } else {
            return "none"; 
        }
    } catch (e) {
        return "none";
    }
};
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('hitcmd' in user)) user.hitcmd = 0
} else global.db.data.users[m.sender] = {
hitcmd: 0,
}

 let chats = global.db.data.chats[m.chat]
 if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 } else global.db.data.chats[m.chat] = {
 isBanned: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
} else global.db.data.settings[botNumber] = {
 autoread: false,
}
} catch (err) {
}
const userdb = global.db.data.users[m.sender]
const settingdb = global.db.data.settings[botNumber]
const chatdb = global.db.data.chats[m.chat]

if (isCmd) {
      /*console.log(command)
     if (body.match(prefix)) {*/
        if (m.text.startsWith(prefix)) {
            if (!m.fromMe) {
            const viuc = await getcomandces(command);
                if (body.length === 1) return;
                  if (command === undefined) return;
                 if (viuc === "none") return;
                // sho.sendPresenceUpdate(jd, m.chat)
                userdb.hitcmd += 1;          
            } else {
            const viuc2 = await getcomandces(command);
                if (body.length === 1) return;
                  if (command === undefined) return;
                 if (viuc2 === "none") return;
                 //sho.sendPresenceUpdate(jd, m.chat)
                userdb.hitcmd += 1;  
            }
        }
     //}
} else {
}
if (global.db.data.settings[botNumber].autoread) {
			sho.readMessages([m.key]);
		}
    function findRiwayat(idtrx) {
      // Baca file riwayat.json
      const riwayatPath = './database/riwayat.json';
      const riwayat = JSON.parse(fs.readFileSync(riwayatPath));
      // Cari transaksi dengan ID TRX yang cocok dan status "pending"
      const transaction = Object.values(riwayat).find(t => t.idtrx === idtrx && t.status === "pending");
      return transaction;
    }
    const idkcl = (length) => {
      let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      const charactersLength = characters.length;
      for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    
    const idgede = (length) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const charactersLength = characters.length;
      for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    const idnum = (length) => {
      let result = '';
      const characters = '1234567890';
      const charactersLength = characters.length;
      for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    const thum = fs.readFileSync("./storage/image.png")
    const thumb = fs.readFileSync("./storage/image.png")
    const imqris = fs.readFileSync('./storage/qris.png')

    function toRupiah(angka) {
      var saldo = "";
      var angkarev = angka.toString().split("").reverse().join("");
      for(var i = 0; i < angkarev.length; i++)
        if(i % 3 == 0) saldo += angkarev.substr(i, 3) + ".";
      return ("" + saldo.split("", saldo.length - 1).reverse().join(""));
    }
    let member = JSON.parse(fs.readFileSync("./database/user.json"));
    const cek = (satu, dua) => {
      let store = false;
      Object.keys(member).forEach((i) => {
        if(member[i].id == dua) {
          store = i;
        }
      });
      if(store !== false) {
        if(satu == "id") {
          return member[store].id;
        }
        if(satu == "saldo") {
          return member[store].saldo;
        }
        if(satu == "transaksi") {
          return member[store].transaksi;
        }
        if(satu == "idproduk") {
          return member[store].idproduk;
        }
        if(satu == "idtujuan") {
          return member[store].idtujuan;
        }
        if(satu == "nama") {
          return member[store].nama;
        }
        if(satu == "harga") {
          return member[store].harga;
        }
        if(satu == "seri") {
          return member[store].seri;
        }
      }
      if(store == false) {
        return null;
      }
    };
    let sett = (satu, dua, tiga) => {
      Object.keys(member).forEach((i) => {
        if(member[i].id == dua) {
          if(satu == "+saldo") {
            member[i].saldo += tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "-saldo") {
            member[i].saldo -= tiga;
            if(satu == "±seri") {
              db_user[i].seri = tiga;
              fs.writeFileSync("./database/user.json", JSON.stringify(member));
            }
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "transaksi") {
            member[i].transaksi = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "idproduk") {
            member[i].idproduk = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "idtujuan") {
            member[i].idtujuan = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "nama") {
            member[i].nama = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "+harga") {
            member[i].harga += tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if(satu == "harga") {
            member[i].harga = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
        }
      });
    };
    const saldo = toRupiah(`${cek("saldo", m.sender)}`);
    //
    if(m.message) {
      console.log(chalk.black.bgCyan(' [ NOTIF ] '), // Teks singkat dengan simbol kilat
        chalk.black.bgYellow(` ⏰ ${new Date().toLocaleTimeString()} `), // Simbol jam dan waktu
        chalk.white.bgMagenta(` 💬 ${budy || m.mtype} `), // Simbol pesan
        '\n' + chalk.green('👤 Dari: '), chalk.blue(pushname), // Nama pengirim dengan simbol orang
        chalk.redBright(`📧 ${m.sender}`), // ID pengirim dengan simbol email
        '\n' + chalk.green('📍 Chat: '), chalk.yellow(m.isGroup ? '👥 Grup' : '🔒 Privat') // Grup dengan simbol grup, privat dengan simbol gembok
      );
    }

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function loading() {
			const lod = [
				"█▒▒▒▒▒▒▒▒▒▒▒ 10%",
				"████▒▒▒▒▒▒▒▒ 30%",
				"███████▒▒▒▒▒ 50%",
				"██████████▒▒ 80%",
				"████████████ 100%"
			];
			const { key } = await sho.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' });

			for (let i = 0; i < lod.length; i++) {
				await sho.sendMessage(m.chat, { text: lod[i], edit: key });
			}
		}
		// Lokasi folder untuk menyimpan thumbnail versi 3
const thumbFolder3 = './src/thum3/';
// Lokasi default thumbnail untuk versi 3
const defaultThumbnailPath3 = './src/thum3/sho.jpg';

// Membuat folder jika belum ada
if (!fs.existsSync(thumbFolder3)) {
  fs.mkdirSync(thumbFolder3, { recursive: true });
}

// Pastikan default thumbnail ada
if (!fs.existsSync(defaultThumbnailPath3)) {
  const defaultImage3 = Buffer.from('Default Thumbnail Version 3');
  fs.writeFileSync(defaultThumbnailPath3, defaultImage3);
}

// **Fungsi: Membaca semua thumbnail di folder**
const readThumbList3 = () => {
  const files3 = fs.readdirSync(thumbFolder3).filter(file => file.toLowerCase().endsWith('.jpg'));
  return files3.map(file => ({
    name: path.parse(file).name, // Nama file tanpa ekstensi
    path: path.join(thumbFolder3, file), // Lokasi file lengkap
  }));
};

// **Fungsi: Menambahkan thumbnail**
const addThumb3 = async (nama3, quoted3, mime3) => {
  if (!/image/.test(mime3)) return 'Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.';

  const fileName3 = `${thumbFolder3}${nama3}.jpg`;
  if (fs.existsSync(fileName3)) return 'Thumbnail dengan nama tersebut sudah ada.';

  const media3 = await quoted3.download(); // Unduh file media dari pesan
  fs.writeFileSync(fileName3, media3);
  return `Thumbnail dengan nama "${nama3}" berhasil ditambahkan.`;
};

// **Fungsi: Menghapus thumbnail**
const delThumb3 = (nama3) => {
  const fileName3 = `${thumbFolder3}${nama3}.jpg`;
  if (!fs.existsSync(fileName3)) return 'Thumbnail dengan nama tersebut tidak ditemukan.';

  fs.unlinkSync(fileName3);
  return `Thumbnail dengan nama "${nama3}" berhasil dihapus.`;
};

// **Fungsi: Menampilkan daftar thumbnail**
const listThumb3 = () => {
  const thumbList3 = readThumbList3();
  if (thumbList3.length === 0) return 'Tidak ada thumbnail yang tersimpan.';
  return thumbList3.map(thumb => `Nama: ${thumb.name}`).join('\n');
};

// **Fungsi: Mengambil thumbnail secara acak**
const getRandomThumb3 = () => {
  const thumbList3 = readThumbList3();
  if (thumbList3.length === 0) {
    // Jika folder kosong, gunakan default thumbnail
    console.log('Tidak ada thumbnail, menggunakan default');
    return fs.readFileSync(defaultThumbnailPath3);
  }
  const randomFile3 = thumbList3[Math.floor(Math.random() * thumbList3.length)];
  console.log(`Memilih thumbnail acak: ${randomFile3.name}`);
  return fs.readFileSync(randomFile3.path); // Return Buffer thumbnail
};
async function sendRegister(sho, m, prefix, namabot) {
    await sho.sendMessage(m.chat, {
        image: getRandomThumb3(),
        caption: mess.regis,
        footer: namabot,
        buttons: [{
            buttonId: `${prefix}register`,
            buttonText: {
                displayText: "REGISTER"
            }
        }],
        viewOnce: true
    }, {
        quoted: m
    });
}
    //==================[ FUNCTION FITUR ]=====================\\
    
    const ftoko = {
      key: {
        fromMe: false,
        participant: `18002428478@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {}),
      },
      message: {
        productMessage: {
          product: {
            title: `Hai👋🏻.\nBOT BY\nSho's`,
            description: `${m.pushName ? m.pushName : 'Temen Sho'} order`,
            currencyCode: "IDR",
            priceAmount1000: "1000000000000",
            retailerId: `ShoNotStore`,
            productImageCount: 1,
          },
          businessOwnerJid: `18002428478@s.whatsapp.net`,
        },
      },
    };
    const script = {
      key: {
        fromMe: false,
        participant: `6287862997267@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {}),
      },
      message: {
        productMessage: {
          product: {
            title: `Hai ${m.pushName ? m.pushName : 'Temen Sho'} 👋🏻, BUY YA`,
            description: `${m.pushName ? m.pushName : 'Temen Sho'} order`,
            currencyCode: "IDR",
            priceAmount1000: "10000000",
            retailerId: `ShoID`,
            productImageCount: 1,
          },
          businessOwnerJid: `18002428478@s.whatsapp.net`,
        },
      },
    };
    const sound = {
      key: {
        fromMe: false,
        participant: `18002428478@s.whatsapp.net`,
        ...(from ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      "message": {
        "audioMessage": {
          "url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
          "mimetype": "audio/mp4",
          "fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
          "fileLength": "1067401",
          "seconds": 9999999999999,
          "ptt": true,
          "mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
          "fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
          "directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
          "mediaKeyTimestamp": "1684161893"
        }
      }
    }
    try {
      ppuser = await sho.profilePictureUrl(m.sender, 'image')
    } catch (err) {
      ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    ppnyauser = await getBuffer(ppuser)
    try {
      let isNumber = x => typeof x === 'number' && !isNaN(x)
      let limitUser = global.limitawal.free
      let user = global.db.data.users[m.sender]
      if(typeof user !== 'object') global.db.data.users[m.sender] = {}
      if(user) {
        if(!isNumber(user.afkTime)) user.afkTime = -1
        if(!('afkReason' in user)) user.afkReason = ''
        if(!isNumber(user.limit)) user.limit = limitUser
      } else global.db.data.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
      }
    } catch (err) {
      console.log(err)
    }
    // respon list 
    if(m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
      var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
      if(get_data_respon.isImage === false) {
        sho.sendMessage(m.chat, {
          text: sendResponList(m.chat, body.toLowerCase(), db_respon_list)
        }, {
          quoted: m
        })
      } else {
        sho.sendMessage(m.chat, {
          image: await getBuffer(get_data_respon.image_url),
          caption: get_data_respon.response
        }, {
          quoted: m
        })
      }
    }
    const reSize = async (buffer, ukur1, ukur2) => {
      return new Promise(async (resolve, reject) => {
        let jimp = require('jimp')
        var baper = await jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
        resolve(ab)
      })
    }
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
    const resize = async (image, width, height) => {
      const read = await jimp.read(image);
      const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
      return data;
    };
async function downloadMp4(link) {
  try {
    console.log('🕒 Memulai proses download MP4...');
    sho.sendMessage(m.chat, {
      react: { text: '⏳', key: m.key }
    });

    // Fetch data dari API
    let response = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${link}`);
    let textResponse = await response.text();

    // Validasi apakah respons adalah JSON
    let data;
    try {
      data = JSON.parse(textResponse);
    } catch (err) {
      console.error('❌ Respons bukan JSON:', textResponse);
      m.reply("Terjadi kesalahan pada API. Silakan coba lagi nanti.");
      return;
    }

    console.log('📥 Respons diterima dari API:', data);

    if (data.status) {
      console.log('✅ Data valid, mengirim file video...');
      sho.sendMessage(m.chat, {
        video: { url: data.data.dl },
        caption: ''
      }, { quoted: m });
      console.log('✅ Proses selesai, file video berhasil dikirim.');
    } else {
      console.log('❌ Gagal mengambil video. URL tidak valid.');
      m.reply("Gagal mengambil video. Silakan periksa URL.");
    }
  } catch (err) {
    console.error('❌ Terjadi kesalahan:', err.message);
    m.reply(`Error: ${err.message}`);
  }
}

async function downloadMp3(link) {
  try {
    console.log('🕒 Memulai proses download MP3...');
    sho.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    // Panggil API untuk mendapatkan URL file
    let response = await fetch(`https://api.siputzx.my.id/api/d/ytmp3?url=${link}`);
    let textResponse = await response.text();

    let data;
    try {
      data = JSON.parse(textResponse);
    } catch (err) {
      console.error('❌ Respons bukan JSON:', textResponse);
      m.reply("Terjadi kesalahan pada API. Silakan coba lagi nanti.");
      return;
    }

    console.log('📥 Respons diterima dari API:', data);

    if (data.status && data.data.dl) {
      const fileUrl = data.data.dl;
      const fileName = 'audio.mp3';
      const fixedFileName = 'fixed_audio.mp3';
      const filePath = path.join(__dirname, fileName);
      const fixedFilePath = path.join(__dirname, fixedFileName);

      // Unduh file audio
      console.log('⏳ Mengunduh file audio...');
      const writer = fs.createWriteStream(filePath);
      const audioResponse = await axios({
        url: fileUrl,
        method: 'GET',
        responseType: 'stream',
      });

      audioResponse.data.pipe(writer);

      writer.on('finish', () => {
        console.log('✅ File audio berhasil diunduh, memulai proses konversi...');

        // Proses ulang file audio menggunakan ffmpeg
        ffmpeg(filePath)
          .toFormat('mp3') // Konversi ulang ke format MP3
          .on('end', () => {
            console.log('✅ File audio berhasil dikonversi.');

            // Kirim file audio yang telah diperbaiki
            sho.sendMessage(m.chat, {
              audio: fs.readFileSync(fixedFilePath),
              mimetype: 'audio/mpeg',
              fileName: 'audio_fixed.mp3', // Nama file baru
            }, { quoted: m });

            // Hapus file sementara
            fs.unlinkSync(filePath);
            fs.unlinkSync(fixedFilePath);
            console.log('✅ File audio berhasil dikirim dan file sementara dihapus.');
          })
          .on('error', (err) => {
            console.error('❌ Gagal mengonversi file audio:', err.message);
            m.reply('Gagal memproses ulang file audio.');
          })
          .save(fixedFilePath);
      });

      writer.on('error', (err) => {
        console.error('❌ Gagal mengunduh file audio:', err.message);
        m.reply('Gagal mengunduh file audio.');
      });

    } else {
      console.log('❌ Gagal mengambil audio. URL tidak valid.');
      m.reply("Gagal mengambil audio. Silakan periksa URL.");
    }
  } catch (err) {
    console.error('❌ Terjadi kesalahan:', err.message);
    m.reply(`Error: ${err.message}`);
  }
}
    if(!global.public) {
      if(!m.key.fromMe && !isOwner) return; // Abaikan jika bukan pesan bot atau owner
    }
    // Blokir command di chat pribadi saat Group Only aktif
if (global.groupOnly && !m.isGroup && !isOwner) {
    return console.log('⚠️ GROUP ONLY')
}
if (global.privateChatOnly && m.isGroup && !isOwner) {
    return console.log('⚠️ PRIVATE CHAT ONLY');
}
    // func db
    // Load user database from JSON file
    function loadUserDatabase() {
      let rawdata = fs.readFileSync('database/user.json');
      return JSON.parse(rawdata);
    }
    // Save updated user database back to JSON file
    function saveUserDatabase(database) {
      fs.writeFileSync('database/user.json', JSON.stringify(database, null, 2));
    }
const userFirePath = './database/userFire.json';

// Fungsi untuk membaca database
function loadUserFire() {
  if (!fs.existsSync(userFirePath)) {
    fs.writeFileSync(userFirePath, JSON.stringify({}));
  }
  return JSON.parse(fs.readFileSync(userFirePath));
}

// Fungsi untuk menyimpan database
function saveUserFire(db) {
  fs.writeFileSync(userFirePath, JSON.stringify(db, null, 2));
}

// Fungsi untuk mendaftarkan user
function registerUser(sender, role = 'user') {
  const db = loadUserFire();

  if (!db[sender]) {
    db[sender] = {
      register: true,
      role: role,
      limit: role === 'owner' ? -1 : role === 'vip' ? 1000 : 100
    };
    saveUserFire(db);
    return `🎉 Anda berhasil terdaftar sebagai ${role} dengan limit ${db[sender].limit}!`;
  } else if (!db[sender].register) {
    db[sender].register = true;
    saveUserFire(db);
    return `✅ Registrasi berhasil diaktifkan.`;
  } else {
    return `⚠️ Anda sudah terdaftar sebelumnya.`;
  }
}

// Fungsi untuk mengecek status user
function checkUser(sender) {
  const db = loadUserFire();
  if (!db[sender]) {
    return `⚠️ Anda belum terdaftar. Silakan daftar terlebih dahulu.`;
  }
  return `ℹ️ Status Anda:\n- Role: ${db[sender].role}\n- Limit: ${db[sender].limit}\n- Register: ${db[sender].register}`;
}
// Baca database user fire
function loadUserFire() {
  if (!fs.existsSync(userFirePath)) {
    fs.writeFileSync(userFirePath, JSON.stringify({}));
  }
  return JSON.parse(fs.readFileSync(userFirePath));
}

// Simpan perubahan database user fire
function saveUserFire(db) {
  fs.writeFileSync(userFirePath, JSON.stringify(db, null, 2));
}
function claimFire(m) {
    const db = loadUserFire();
    const sender = m.sender;

    if (!db[sender] || !db[sender].register) {
        sendRegister(sho, m, prefix, namabot);
        return;
    }

    const now = Date.now();
    const cooldown = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik
    const lastClaim = db[sender].lastClaim || 0;

    // Cek cooldown
    if (now - lastClaim < cooldown) {
        const remainingTime = cooldown - (now - lastClaim);
        const hours = Math.floor(remainingTime / (60 * 60 * 1000));
        const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        reply(`⏳ Anda sudah klaim. Coba lagi dalam ${hours} jam ${minutes} menit.`);
        return;
    }

    // Tambahkan limit berdasarkan role
    const reward = db[sender].role === 'vip' ? 50 : 20;
    db[sender].limit += reward;
    db[sender].lastClaim = now;
    saveUserFire(db);

    reply(`🎉 Anda berhasil klaim limit harian!\n🔥 Anda mendapatkan: ${reward}\n🔥 Total limit Anda: ${db[sender].limit}`);
}
function getFireThumbnail(limit) {
  const thumbnails = {
    1000: './src/role/vipRole.jpg',   // VIP/Premium
    100: './src/role/100Role.jpg',
    80: './src/role/80Role.jpg',
    60: './src/role/60Role.jpg',
    40: './src/role/40Role.jpg',
    20: './src/role/20Role.jpg',
    10: './src/role/10Role.jpg',
    0: './src/role/0Role.jpg',       // Untuk limit habis
    '-1': './src/role/ownerRole.jpg' // Thumbnail khusus Owner
  };

  // Thumbnail default jika file tidak ditemukan
  const defaultThumbnail = './src/role/0Role.jpg';

  // Tentukan rentang berdasarkan nilai limit
  let selectedThumbnail = defaultThumbnail;
  if (limit === -1) {
    selectedThumbnail = thumbnails['-1']; // Owner
  } else if (limit > 1000) {
    selectedThumbnail = thumbnails[1000]; // VIP
  } else if (limit >= 101 && limit <= 1000) {
    selectedThumbnail = thumbnails[1000]; // Rentang VIP
  } else if (limit >= 81 && limit <= 100) {
    selectedThumbnail = thumbnails[100]; // Rentang 100
  } else if (limit >= 61 && limit <= 80) {
    selectedThumbnail = thumbnails[80]; // Rentang 80
  } else if (limit >= 41 && limit <= 60) {
    selectedThumbnail = thumbnails[60]; // Rentang 60
  } else if (limit >= 21 && limit <= 40) {
    selectedThumbnail = thumbnails[40]; // Rentang 40
  } else if (limit >= 11 && limit <= 20) {
    selectedThumbnail = thumbnails[20]; // Rentang 20
  } else if (limit >= 1 && limit <= 10) {
    selectedThumbnail = thumbnails[10]; // Rentang 10
  } else if (limit === 0) {
    selectedThumbnail = thumbnails[0]; // Limit habis
  }

  // Periksa apakah file thumbnail ada
  if (fs.existsSync(selectedThumbnail)) {
    return fs.readFileSync(selectedThumbnail);
  } else {
    console.error(`File thumbnail tidak ditemukan: ${selectedThumbnail}, menggunakan default.`);
    return fs.readFileSync(defaultThumbnail);
  }
}
function firely(m, teks) {
    const db = loadUserFire();
    const sender = m.sender;

    // Cek apakah user sudah terdaftar
    if (!db[sender] || !db[sender].register) {
        sendRegister(sho, m, prefix, namabot);
        return false;
    }

    // Dapatkan limit user berdasarkan role
    const userLimit = db[sender].limit;
    const reduction = db[sender].role === 'owner' ? 0 : 5; // Owner tidak ada pengurangan limit

    // Cek limit sebelum melanjutkan
    if (userLimit <= 0 && db[sender].role !== 'owner') {
        reply('🔥 Limit Anda sudah habis. Silakan klaim limit atau tingkatkan role Anda.');
        return false;
    }

    // Kurangi limit jika bukan owner
    if (db[sender].role !== 'owner') {
        db[sender].limit -= reduction;
        saveUserFire(db);
    }

    // Kirim pesan firely
    const thumbnail = getFireThumbnail(userLimit); // Mendapatkan thumbnail sesuai limit
    sho.sendMessage(m.chat, {
        text: teks + `\n🔥 Limit tersisa: ${db[sender].limit}`,
        contextInfo: {
            externalAdReply: {
                title: `🔥 Fire Limit`,
                body: `🔥 Anda mengurangi ${reduction} limit.`,
                previewType: "PHOTO",
                thumbnail: thumbnail,
                sourceUrl: 'https://wa.me/6287862997267'
            }
        }
    }, { quoted: m });

    return true;
}
const firelos = (m, teks) => {
  const db = loadUserFire();
  const sender = m.sender;

  const userLimit = db[sender]?.limit || 0; // Default 0 jika user tidak ada
  const thumbnailUrl = getFireThumbnail(userLimit);

  sho.sendMessage(m.chat, {
    text: teks + `\n🔥 Anda tidak memiliki limit tersisa.`,
    contextInfo: {
      externalAdReply: {
        title: `🔥 Fire Limit`,
        body: `🔥 Your Fire Limits: ${userLimit}`,
        previewType: "PHOTO",
        thumbnail: thumbnailUrl,
        sourceUrl: `https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e`
      }
    }
  }, { quoted: m });
};
function isRegistered(m) {
    const db = loadUserFire(); // Load database
    const sender = m.sender;  // ID pengirim
    return db[sender]?.register || false; // Return true jika terdaftar, false jika tidak
}
const thumbFolder2 = './src/thum2/'; // Lokasi folder untuk menyimpan thumbnail
const defaultThumbnailPath2 = './src/thum2/sho.jpg'; // Lokasi thumbnail default (file lokal)

// Membuat folder jika belum ada
if (!fs.existsSync(thumbFolder2)) {
  fs.mkdirSync(thumbFolder2, { recursive: true });
}

// Pastikan default thumbnail ada
if (!fs.existsSync(defaultThumbnailPath2)) {
  // Jika tidak ada default, Anda bisa menambahkan file default manual atau secara otomatis.
  const defaultImage2 = Buffer.from('Default Thumbnail'); // Placeholder default thumbnail
  fs.writeFileSync(defaultThumbnailPath2, defaultImage2);
}

// **Fungsi: Membaca semua thumbnail di folder**
const readThumbList2 = () => {
  const files2 = fs.readdirSync(thumbFolder2).filter(file => file.endsWith('.jpg'));
  return files2.map(file => ({
    name: path.parse(file).name, // Nama file tanpa ekstensi
    path: path.join(thumbFolder2, file), // Lokasi file lengkap
  }));
};

// **Fungsi: Menambahkan thumbnail**
const addThumb2 = async (nama2, quoted2, mime2) => {
  if (!/image/.test(mime2)) return 'Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.';

  const fileName2 = `${thumbFolder2}${nama2}.jpg`;
  if (fs.existsSync(fileName2)) return 'Thumbnail dengan nama tersebut sudah ada.';

  const media2 = await quoted2.download(); // Unduh file media dari pesan
  fs.writeFileSync(fileName2, media2);
  return `Thumbnail dengan nama "${nama2}" berhasil ditambahkan.`;
};

// **Fungsi: Menghapus thumbnail**
const delThumb2 = (nama2) => {
  const fileName2 = `${thumbFolder2}${nama2}.jpg`;
  if (!fs.existsSync(fileName2)) return 'Thumbnail dengan nama tersebut tidak ditemukan.';

  fs.unlinkSync(fileName2);
  return `Thumbnail dengan nama "${nama2}" berhasil dihapus.`;
};

// **Fungsi: Menampilkan daftar thumbnail**
const listThumb2 = () => {
  const thumbList2 = readThumbList2();
  if (thumbList2.length === 0) return 'Tidak ada thumbnail yang tersimpan.';
  return thumbList2.map(thumb => `Nama: ${thumb.name}`).join('\n');
};

// **Fungsi: Mengambil thumbnail secara acak**
const getRandomThumb2 = () => {
  const thumbList2 = readThumbList2();
  if (thumbList2.length === 0) {
    // Jika folder kosong, gunakan default thumbnail
    return fs.readFileSync(defaultThumbnailPath2);
  }
  const randomFile2 = thumbList2[Math.floor(Math.random() * thumbList2.length)];
  return fs.readFileSync(randomFile2.path); // Return Buffer thumbnail
};


    //===================[ FUNCTION REPLY ]=====================\\
    const aifake = {
      key: {
        participant: '18002428478@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        liveLocationMessage: {
          caption: `© YuRin"S`,
          jpegThumbnail: ""
        }
      },
    }
    const shomand = body.replace(prefix, '').trim().split(/ +/).shift().toUpperCase();

// Array emoji alam dan hewan yang baru
const emojis = ['⚡', '🌪️', '🌊', '🫧', '💧', '🪵', '🍄', '☘️', '🍃', '🪷', '💫', '✨', '🌟', '🔥', '🪨', '🪽', '⚓', '💎', '🚀', '🛸', '✈️', '🥕', '🍓', '🐙', '🦑', '🦞', '🐣', '🐓', '🐍', '🐊', '🐉', '🐱', '🌻', '🐦‍🔥', '🐬', '🍏', '⚽', '🪀', '🔮', '🧸', '🦉', '🐾', '🦪', '🎠', '🏕️'
];

// Memilih emoji secara acak
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

// Membuat teks dengan format yang diinginkan
const formattedShomand = `${randomEmoji} ${shomand}`;

// Menyiapkan objek message untuk digunakan
const hw = {
  key: {
    participant: '0@s.whatsapp.net',
    ...(m.chat ? {
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    liveLocationMessage: {
      caption: `${formattedShomand}`,
      jpegThumbnail: ""
    }
  },
  quoted: sound
}
    const jq = {
      key: {
        participant: '18002428478@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        liveLocationMessage: {
          caption: `Always Use Termux⚡`,
          jpegThumbnail: ""
        }
      },
      quoted: sound
    }
    // Pastikan autotyping atau autovn aktif berdasarkan pesan yang sedang diketik
    if(botSettings.autotyping && sho.public) {
      await sho.sendPresenceUpdate('composing', m.chat);
    }
    if(botSettings.autovn && sho.public) {
      await sho.sendPresenceUpdate('recording', m.chat);
    }
    // Lokasi file JSON di folder 'database'
    const thumbListFilePath = path.join(__dirname, 'database', 'thumbList.json');
    // Fungsi untuk membaca data thumbnail dari file JSON
    const readThumbList = () => {
      if(!fs.existsSync(thumbListFilePath)) {
        // Jika file tidak ada, buat file baru dengan array kosong
        fs.writeFileSync(thumbListFilePath, JSON.stringify([]));
        return [];
      }
      const data = fs.readFileSync(thumbListFilePath, 'utf-8');
      return JSON.parse(data);
    };
    // Fungsi untuk menulis data thumbnail ke file JSON
    const writeThumbList = (thumbList) => {
      fs.writeFileSync(thumbListFilePath, JSON.stringify(thumbList, null, 2));
    };
    // Fungsi untuk menambahkan thumbnail
    const addthumb = (nama, url) => {
      const thumbList = readThumbList();
      // Cek apakah nama sudah ada
      if(thumbList.find(thumb => thumb.name === nama)) {
        return 'Thumbnail dengan nama tersebut sudah ada.';
      }
      // Menambahkan thumbnail ke dalam daftar
      thumbList.push({
        name: nama,
        url: url
      });
      writeThumbList(thumbList);
      return `Thumbnail dengan nama ${nama} berhasil ditambahkan.`;
    };
    // Fungsi untuk menghapus thumbnail berdasarkan nama
    const delthumb = (nama) => {
      const thumbList = readThumbList();
      const index = thumbList.findIndex(thumb => thumb.name === nama);
      if(index === -1) {
        return 'Thumbnail dengan nama tersebut tidak ditemukan.';
      }
      thumbList.splice(index, 1);
      writeThumbList(thumbList);
      return `Thumbnail dengan nama ${nama} berhasil dihapus.`;
    };
    // Fungsi untuk menampilkan daftar thumbnail
    const listthumb = () => {
      const thumbList = readThumbList();
      if(thumbList.length === 0) {
        return 'Tidak ada thumbnail yang tersimpan.';
      }
      return thumbList.map(thumb => `Nama: ${thumb.name}, URL: ${thumb.url}`).join('\n');
    };
    // Fungsi untuk memilih thumbnail secara random dari daftar
    const getRandomThumb = () => {
      const thumbList = readThumbList();
      return thumbList[Math.floor(Math.random() * thumbList.length)]?.url || 'https://i.ibb.co.com/x6cRFN1/6cbaad220c211d8399577906a2f30856.jpg';
    };
    const reply = (teks) => {
      sho.sendMessage(from, {
        text: teks,
        contextInfo: {
        mentionedJid: [m.sender],
          "externalAdReply": {
            "title": `SHO BY YURN`,
            "body": `© YuRin'S`,
            "previewType": "PHOTO",
            "thumbnail": getRandomThumb2(),
            "sourceUrl": gh
          }
        }
      }, {
        quoted: hw
      })
    }
    const reply2 = (teks) => {
      sho.sendMessage(from, {
        text: teks
      }, {
        quoted: m
      })
    }
    //Fake quoted 
    const fpay = {
  key: {
    remoteJid: '0@s.whatsapp.net',
    fromMe: false,
    id: global.namabot,
    participant: '0@s.whatsapp.net'
  },
  message: {
    requestPaymentMessage: {
      currencyCodeIso4217: "USD",
      amount1000: 999999999,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
        extendedTextMessage: {
          text: global.namabot
        }
      },
      expiryTimestamp: 999999999,
      amount: {
        value: 91929291929,
        offset: 1000,
        currencyCode: "USD"
      }
    }
  }
}

const ftroli = {
  key: {
    fromMe: false,
    "participant": "0@s.whatsapp.net",
    "remoteJid": "status@broadcast"
  },
  "message": {
    orderMessage: {
      itemCount: 1986,
      status: 200,
      thumbnail: getRandomThumb2(),
      surface: 200,
      message: "Rp 2.000",
      orderTitle: namaowner,
      sellerJid: '0@s.whatsapp.net'
    }
  },
  contextInfo: {
    "forwardingScore": 999,
    "isForwarded": true
  },
  sendEphemeral: true
}
const fdoc = {
  key: {
    participant: '0@s.whatsapp.net',
    ...(m.chat ? {
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    documentMessage: {
      title: namabot,
      jpegThumbnail: getRandomThumb2()
    }
  }
}

const fvn = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
      remoteJid: "status@broadcast"
    } : {})
  },
  message: {
    "audioMessage": {
      "mimetype": "audio/ogg; codecs=opus",
      "seconds": 0,
      "ptt": "true"
    }
  }
}

const fgif = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
      remoteJid: "status@broadcast"
    } : {})
  },
  message: {
    "videoMessage": {
      "title": namabot,
      "h": packname,
      'seconds': '359996400',
      'gifPlayback': 'true',
      'caption': namaowner,
      'jpegThumbnail': getRandomThumb2()
    }
  }
}

const fgclink = {
  key: {
    participant: "0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
    "groupInviteMessage": {
      "groupJid": "6288213840883-1616169743@g.us",
      "inviteCode": "m",
      "groupName": packname,
      "caption": `${m.pushName ? m.pushName : 'Temen Sho'}`,
      'jpegThumbnail': getRandomThumb2()
    }
  }
}

const fvideo = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
      remoteJid: "status@broadcast"
    } : {})
  },
  message: {
    "videoMessage": {
      "title": namabot,
      "h": packname,
      'seconds': '0',
      'caption': `${m.pushName ? m.pushName : 'Temen Sho'}`,
      'jpegThumbnail': getRandomThumb2()
    }
  }
}

const floc = {
  key: {
    participant: '0@s.whatsapp.net',
    ...(m.chat ? {
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    locationMessage: {
      name: packname,
      jpegThumbnail: getRandomThumb2()
    }
  }
}

const fkontak = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    'contactMessage': {
      'displayName': namaowner,
      'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namaowner},;;;\nFN:${namaowner}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
      'jpegThumbnail': getRandomThumb2(),
      thumbnail: getRandomThumb2(),
      sendEphemeral: true
    }
  }
}

const fakestatus = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
      remoteJid: "status@broadcast"
    } : {})
  },
  message: {
    "imageMessage": {
      "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
      "mimetype": "image/jpeg",
      "caption": packname,
      "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
      "fileLength": "28777",
      "height": 1080,
      "width": 1079,
      "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
      "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
      "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
      "mediaKeyTimestamp": "1610993486",
      "jpegThumbnail": fs.readFileSync('./shoMedia/image/owner.jpg'),
      "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
    }
  }
}

const frpayment = {
  key: {
    remoteJid: '0@s.whatsapp.net',
    fromMe: false,
    id: `${namaowner}`,
    participant: '0@s.whatsapp.net'
  },
  message: {
    requestPaymentMessage: {
      currencyCodeIso4217: "USD",
      amount1000: 999999999,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
        extendedTextMessage: {
          text: `${namabot}`
        }
      },
      expiryTimestamp: 999999999,
      amount: {
        value: 91929291929,
        offset: 1000,
        currencyCode: "INR"
      }
    }
  }
}
function capitalizeWords(str) {
			return str
				.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(' ');
		}

if (m.isGroup) {
    // Pastikan liststore ada di dalam database
    let listStore = {};
    if (fs.existsSync(listStorePath)) {
        listStore = JSON.parse(fs.readFileSync(listStorePath, 'utf8'));
    }

    // Cek apakah 'body' ada di liststore grup ini
    if (listStore[m.chat] && listStore[m.chat][body]) {
        const entry = listStore[m.chat][body]; // Mendapatkan entry untuk key 'body'
        let teks = entry.response; // Response yang dikirim

        // Mengecek jika ada gambar
        if (entry.img) {
            sho.sendMessage(m.chat, {
                image: {
                    url: entry.img // Mengirim gambar dari URL
                },
                caption: teks // Menambahkan teks sebagai caption
            }, {
                quoted: m // Menambahkan quoted message jika ada
            });

        // Mengecek jika ada video
        } else if (entry.video) {
            sho.sendMessage(m.chat, {
                video: {
                    url: entry.video // Mengirim video dari URL
                },
                caption: teks // Menambahkan teks sebagai caption
            }, {
                quoted: m // Menambahkan quoted message jika ada
            });

        // Jika tidak ada gambar atau video, kirim teks biasa
        } else {
            const contentText = {
                text: teks,
                contextInfo: {
                    mentionedJid: [m.sender], // Menyebutkan pengirim
                    forwardingScore: 999999, 
                    isForwarded: true, 
                    forwardedNewsletterMessageInfo: {
                        newsletterName: namach, // Nama saluran
                        newsletterJid: idsaluran, // Jid saluran
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `Store List 🛍️`,
                        body: namabot, // Nama bot
                        previewType: "PHOTO",
                        thumbnailUrl: `https://pomf2.lain.la/f/sdzl7dc2.jpg`, // Gambar thumbnail
                        sourceUrl: wagc // URL untuk sumber (misalnya link grup atau toko)
                    }
                }
            };
            sho.sendMessage(m.chat, contentText, {
                quoted: m, // Menyertakan quoted message
            });
        }
    }
}
    async function shorly(teks) {
			if (typereply === 's1') {
				m.reply(teks);
			} else if (typereply === 's2') {
				sho.sendMessage(m.chat, {
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: namabot,
							body: namaowner,
							previewType: "PHOTO",
							thumbnail: getRandomThumb2(),
							sourceUrl: wagc
						}
					},
					text: teks
				}, {
					quoted: hw
				});
			} else if (typereply === 's3') {
				sho.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: namabot,
							body: namaowner,
							thumbnail: getRandomThumb3(),
							sourceUrl: gh,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: hw
				});
			} else if (typereply === 's4') {
				shorlyy(teks);
			} else if (typereply === 's5') {
			sho.sendMessage(from, {
        text: teks,
        contextInfo: {
        mentionedJid: [m.sender],
          "externalAdReply": {
            "title": `BOT BY YuRin'S`,
            "body": `© YuRin'S`,
            "previewType": "PHOTO",
            "thumbnail": getRandomThumb2(),
            "sourceUrl": gh
          }
        }
      }, {
        quoted: hw
      })
      }
		}

		async function shorlyy(teks) {
			const repsho = {
				contextInfo: {
					forwardingScore: 1,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: namabot,
						newsletterJid: idsaluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: waktuucapan,
						body: namabot,
						thumbnail: getRandomThumb2(),
						sourceUrl: gh
					}
				},
				text: teks
			};
			return sho.sendMessage(m.chat, repsho, {
				quoted: hw,
			});
		}
    //==================[ FUNCTION WAKTU ]======================\\
    let d = new Date(new Date() + 3600000);
    let locale = "id";
    let clock = d.toLocaleTimeString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const date = moment().tz("Asia/Jakarta").format("dddd, ll");
    const time = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");

    function getFormattedDate() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();
    }
    const hariini = d.toLocaleDateString('id', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    function msToTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
      hours = (hours < 10) ? "0" + hours : hours
      minutes = (minutes < 10) ? "0" + minutes : minutes
      seconds = (seconds < 10) ? "0" + seconds : seconds
      return hours + " jam " + minutes + " menit " + seconds + " detik"
    }

    function msToDate(ms) {
      temp = ms
      days = Math.floor(ms / (24 * 60 * 60 * 1000));
      daysms = ms % (24 * 60 * 60 * 1000);
      hours = Math.floor((daysms) / (60 * 60 * 1000));
      hoursms = ms % (60 * 60 * 1000);
      minutes = Math.floor((hoursms) / (60 * 1000));
      minutesms = ms % (60 * 1000);
      sec = Math.floor((minutesms) / (1000));
      return days + " Hari " + hours + " Jam " + minutes + " Menit";
      // +minutes+":"+sec;
    }
    // Sayying time
    const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if(timee < "23:59:00") {
      var waktuucapan = 'Selamat Malam 🌃'
    }
    if(timee < "19:00:00") {
      var waktuucapan = 'Selamat Petang 🌆'
    }
    if(timee < "18:00:00") {
      var waktuucapan = 'Selamat Sore 🌅'
    }
    if(timee < "15:00:00") {
      var waktuucapan = 'Selamat Siang 🏙'
    }
    if(timee < "10:00:00") {
      var waktuucapan = 'Selamat Pagi 🌄'
    }
    if(timee < "05:00:00") {
      var waktuucapan = 'Selamat Subuh 🌉'
    }
    if(timee < "03:00:00") {
      var waktuucapan = 'Tengah Malam 🌌'
    }
    ////======================== [ A EF KA ] ===============================
if (m.isGroup && !m.key.fromMe) {
			let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
			for (let ment of mentionUser) {
				if (checkAfkUser(ment, afk)) {
					let getId2 = getAfkId(ment, afk)
					let getReason2 = getAfkReason(getId2, afk)
					let getTimee = Date.now() - getAfkTime(getId2, afk)
					let anu2 = ms(getTimee)
					shorly(
						`Bro dia lagi afk, jangan di tag\n\n` +
						`*Alasan:* ${getReason2}\n` +
						`*Udah sejak:* ${anu2.hours} Jam, ${anu2.minutes} Menit, ${anu2.seconds} Detik`
					)
				}
			}

			if (checkAfkUser(m.sender, afk)) {
				let getId = getAfkId(m.sender, afk)
				let getReason = getAfkReason(getId, afk)
				let getTime = Date.now() - getAfkTime(getId, afk)
				let anu = ms(getTime)
				afk.splice(getAfkPosition(m.sender, afk), 1)
				fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
				sho.sendTextWithMentions(
					m.chat, 
					`Weiss @${m.sender.split('@')[0]} Masih sehat lu bro??\n\n` +
					`*Alasan:* ${getReason}\n` +
					`*Selama:* ${anu.hours} Jam, ${anu.minutes} Menit, ${anu.seconds} Detik`, 
					fvideo
				)
			}
		}
		
    //==================[ BUTTON MESSAGE ]======================\\
    async function sendButton(chat, judul, teks, button, m) {
      let msg = generateWAMessageFromContent(chat, {
        viewOnceMessage: {
          message: {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: namach,
                  serverMessageId: -1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: sho.decodeJid(sho.user.id)
                },
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: teks
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: namabot
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: judul,
                subtitle: namaowner,
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: button,
              })
            })
          }
        }
      }, {
        quoted: m
      })
      await sho.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      })
    }
    async function sendButtonImage(chat, judul, teks, buffer, button, hw) {
      const uploadFile = {
        upload: sho.waUploadToServer
      };
      const imageMessage = await prepareWAMessageMedia({
        image: buffer,
      }, uploadFile, );
      let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: namach,
                  serverMessageId: -1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: sho.decodeJid(sho.user.id)
                },
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: teks
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: namabot
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: judul,
                subtitle: namaowner,
                imageMessage: imageMessage.imageMessage,
                hasMediaAttachment: true
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: button,
              })
            })
          }
        }
      }, {
        quoted: hw
      })
      sho.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      })
    }
    async function sendButtonVideo(chat, judul, teks, buffer, button, m) {
      const uploadFile = {
        upload: sho.waUploadToServer
      };
      const videoMessage = await prepareWAMessageMedia({
        video: buffer,
      }, uploadFile, );
      let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: idsaluran,
                  newsletterName: namach,
                  serverMessageId: -1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: sho.decodeJid(sho.user.id)
                },
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: teks
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: namabot
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: judul,
                subtitle: namaowner,
                videoMessage: videoMessage.videoMessage,
                hasMediaAttachment: true
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: button,
              })
            })
          }
        }
      }, {
        quoted: m
      })
      sho.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      })
    }
    async function sendButtonDocument(chat, judul, teks, thumb, button, m) {
      let msg = generateWAMessageFromContent(chat, {
        viewOnceMessage: {
          message: {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: idsaluran,
                  newsletterName: namach,
                  serverMessageId: -1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: sho.decodeJid(sho.user.id)
                },
                externalAdReply: {
                  title: waktuucapan,
                  body: pushname,
                  thumbnail: forpdf,
                  sourceUrl: wagc,
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: teks
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: namabot
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: judul,
                thumbnailUrl: getRandomThumb3(),
                subtitle: namaowner,
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia({
                  document: thumb,
                  mimetype: 'image/png',
                  fileLength: 10000000000,
                  jpegThumbnail: thumb,
                  fileName: namach
                }, {
                  upload: sho.waUploadToServer
                }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: button,
              })
            })
          }
        }
      }, {
        quoted: m
      })
      await sho.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      })
    };
    //==================[ FUNCTION RESPON SALAH ]======================\\
    /*if (prefix && command) {
    let caseNames = getCaseNames();
    function getCaseNames() {
    const fs = require('fs');
    try {
    const data = fs.readFileSync('case.js', 'utf8');
    const casePattern = /case\s+'([^']+)'/g;
    const matches = data.match(casePattern);
    if (matches) {
    const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
    return caseNames;
    } else {
    return [];
    } } catch (err) {
    console.log('Terjadi kesalahan:', err);
    return [];
    }}
    let noPrefix = command
    let mean = didyoumean(noPrefix, caseNames);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);
    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
    let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
    shorly(response)
    }}*/
    //=================[ TEMPAT CASE DI BAWAH INI ]=================\\
    switch(command) {
      case 'populer': {
        // Pisahkan data populer menjadi command dan AI
        let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai') // Eksklusi AI
          .sort((a, b) => b[1] - a[1]) // Urutkan berdasarkan jumlah penggunaan
          .slice(0, 4) // Ambil 4 teratas
          .map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`); // Format per elemen
        // Format untuk command menjadi dua kolom
        let formattedCommandList = commands.length ? commands.reduce((rows, current, index) => {
            if(index % 2 === 0) {
              rows.push([current]); // Tambah elemen baru
            } else {
              rows[rows.length - 1].push(current); // Tambah ke baris terakhir
            }
            return rows;
          }, []).map(row => row.join(` ${c}|${c} `)) // Gabungkan elemen dalam satu baris dengan " || "
          .join('\n') // Gabungkan semua baris dengan newline
          : 'Belum ada data command populer.';
        // Tambahkan pesan untuk AI (jika diperlukan)
        let aiMessage = popularData.ai ? `${c}AI telah digunakan sebanyak ${popularData.ai} kali.${c}` : `${c}AI belum digunakan.${c}`;
        // Gabungkan hasil akhir
        let formattedPopularList = `${formattedCommandList}\n\n${aiMessage}`;
        // Gunakan formattedPopularList di balasan
        shorly(`Statistik penggunaan:\n\n${formattedPopularList}`);
        }
        break
      case 'githubstalk': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!text) return shorly(`⚠️ Gunakan dengan cara: ${prefix + command} *username github*\n\n🤔 *Contohnya:*\n\n${prefix + command} sychyy`);
        if (!(await firely(m, mess.waits))) return;
        try {
          const userInfo = await githubstalk(text);
          console.log(userInfo);
          shorly(`🧑‍💻 *Username:* ${userInfo.username || 'Anonim'}\n🌟 *Nickname:* ${userInfo.nickname || 'Anonim'}\n📝 *Bio:* ${userInfo.bio || 'Tidak tersedia'}\n🆔 *ID:* ${userInfo.id}\n🔑 *NodeID:* ${userInfo.nodeId}\n🔗 *Url:* ${userInfo.url}\n🏷️ *Type:* ${userInfo.type}\n👑 *Admin:* ${userInfo.admin ? 'Ya' : 'Tidak'}\n🏢 *Company:* ${userInfo.company || 'Tidak ada'}\n🌐 *Blog:* ${userInfo.blog || 'Tidak ada'}\n📍 *Location:* ${userInfo.location || 'Tidak diketahui'}\n📧 *Email:* ${userInfo.email || 'Tidak tersedia'}\n📚 *Public Repo:* ${userInfo.public_repo}\n🎁 *Public Gists:* ${userInfo.public_gists}\n👥 *Followers:* ${userInfo.followers}\n➕ *Following:* ${userInfo.following}\n🕰️ *Created At:* ${userInfo.created_at}\n🔄 *Updated At:* ${userInfo.updated_at}`);
        } catch (err) {
          console.error(err);
          shorly(`❌ Ada masalah waktu ambil data GitHub, Bro! Coba lagi nanti ya 🥺`);
        }
      }
      break
      case 'npmstalk': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!text) return shorly(`⚠️ Gunakan dengan cara: ${prefix + command} *nama package npm*\n\n🤔 *Contohnya:*\n\n${prefix + command} axios`);
        if (!(await firely(m, mess.waits))) return;
        try {
          // First, check if the package exists
          const npmInfo = await npmstalk(text);
          if(!npmInfo) {
            return shorly(`❌ Package ${text} tidak ditemukan di NPM.`);
          }
          shorly(`📦 *Package:* ${npmInfo.name}\n🔢 *Versi Terbaru:* ${npmInfo.versionLatest}\n📅 *Waktu Terbit:* ${npmInfo.publishTime}\n🔧 *Dependencies Terbaru:* ${npmInfo.latestDependencies}`);
        } catch (err) {
          console.error(err);
          if(err.response && err.response.status === 404) {
            shorly(`❌ Package ${text} tidak ditemukan di NPM.`);
          } else {
            shorly(`❌ Ada masalah waktu ambil data dari NPM, Bro! Coba lagi nanti ya 🥺`);
          }
        }
      }
      break
      case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!text) return shorly(`Gunakan dengan cara ${prefix + command} *url*`)
				if (!text.includes('drive')) return shorly('Link nggak valid')
				if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini
				try {
					const res = await GDrive(text);
					if (res.error) return shorly('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
					sho.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
				}
			}
			break
      case 'resetpop': {
        if(!isOwner) return shorly(mess.owners)
        resetPopularCommands(); // Reset data
        shorly('Data fitur populer telah direset.');
        }
        break
      // Penanganan perintah "script"
case "script": {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    try {
        // Update data penggunaan perintah
        updatePopularCommand(command);

        // Isi pesan
        const teksPesan = `SCRIPT SHO V2 MASIH DALAM PENGEMBANGAN\nSC SHOV1 :`;
        const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "SCRIPT BOT 🔑",
                    url: `https://drive.google.com/file/d/1Fd9wBs2CL-drQUcyNKGRDlxV3ka3JC3c/view`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            "🔥 Script Sho V2",
            teksPesan,
            getRandomThumb2(),
            tombol,
            hw
        );
    } catch (error) {
        console.error("Terjadi kesalahan saat menangani perintah 'script':", error);
    }
    break;
}
      case 'afk': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
				if (!isGroup) return shorly(mess.groups); // Cek apakah perintah dijalankan di grup

				if (isAfkOn) return; // Cek apakah pengguna sudah dalam mode AFK

				// Tentukan alasan AFK
				let reason = text ? text : 'Lagi BAB bjir';

				// Tambahkan pengguna ke daftar AFK
				addAfkUser(m.sender, Date.now(), reason, afk);

				// Kirim pesan konfirmasi dengan mention
				sho.sendTextWithMentions(
					m.chat,
					`🌙 *AFK Mode Aktif!* 🌙\n` + 
					`👤 *@${m.sender.split('@')[0]}* lagi AFK nih!\n` + 
					`💬 *Alasan:* ${reason}\n\n` + 
					`Gausah balik bng, awokwok`,
					fvideo
				);
			}
			break;
			case 'fitur': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    
    // Logika fitur jika sudah terdaftar
    reply('🎉 Selamat! Anda bisa menggunakan fitur ini.');
    break;
}
      case 'autobio': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    if (!isOwner) return shorly('❌ Perintah ini hanya dapat digunakan oleh owner!');
    const option = text.toLowerCase();

    if (option === 'on') {
        if (autoBio) {
            shorly('⚠️ Auto bio sudah aktif sebelumnya!');
        } else {
            autoBio = true;
            shorly('✅ Auto bio berhasil diaktifkan!');
        }
    } else if (option === 'off') {
        if (!autoBio) {
            shorly('⚠️ Auto bio sudah dinonaktifkan sebelumnya!');
        } else {
            autoBio = false;
            shorly('✅ Auto bio berhasil dinonaktifkan!');
        }
    } else {
        shorly(`⚠️ Gunakan perintah:\n${prefix}autobio on\n${prefix}autobio off`);
    }
    break;
}

      case 'shoum':
      case 'menu': {
      
    updatePopularCommand(command); // Mencatat command
    await emote(randomEmoji);

    // Ambil database limit dari `cekfire`
    const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';

    // Ambil top 4 command populer
    let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai')
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`);
    let formattedCommandList = commands.length
        ? commands.reduce((rows, current, index) => {
            if (index % 2 === 0) {
                rows.push([current]);
            } else {
                rows[rows.length - 1].push(current);
            }
            return rows;
        }, []).map(row => row.join(` | `))
        .join('\n')
        : 'Belum ada data command populer.';

    let aiMessage = popularData.ai ? `${c}${popularData.ai}${c}` : `${c}null${c}`;
    const statusUser = isOwner ? 'Owner' : `${role}`;

    // Format menu dengan limit dan register
    const shomenu = `ʜɪ ${m.pushName ? m.pushName : 'User'}👋🏻
> ɪ ᴀᴍ ꜱʜᴏ ɢʜɪʙʟɪ, ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ᴀssɪsᴛᴀɴᴛ ꜰʀᴏᴍ ᴛʜᴇ ᴍᴀɢɪᴄᴀʟ ᴡᴏʀʟᴅ ᴏꜰ ɢʜɪʙʟɪ. ᴜsᴇ ᴍᴇ ғᴏʀ ᴅᴀᴛᴀ sᴇᴀʀᴄʜɪɴɢ, ɪɴғᴏ ᴄᴏʟʟᴇᴄᴛɪᴏɴ, ᴀɴᴅ ꜰᴜɴᴄᴛɪᴏɴs ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ!

⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ʙᴏᴛ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ᴛʏᴘᴇ: ᴄᴀꜱᴇ
│    =〆 ᴍᴏᴅᴇ: ${sho.public ? 'ᴘᴜʙʟɪᴄ' : 'ꜱᴇʟꜰ'}
│    =〆 ᴘʀᴇғɪx: ${prefix}
│    =〆 ᴅᴀᴛᴇ: ${moment().format('dddd, D MMMM YYYY')}
│    =〆 ᴀɪ ʜɪᴛꜱ: ${aiMessage}
│    =〆 ᴛᴏᴘ ᴄᴏᴍᴍᴀɴᴅꜱ:
${formattedCommandList}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ғᴇᴀᴛᴜʀᴇᴅ ] ── .々─ᯤ
│    =〆 ᴜꜱᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ
│       ${simbols} ${prefix}listuserfire
│       ${simbols} ${prefix}cekfire
│       ${simbols} ${prefix}bensin
│       ${simbols} ${prefix}afk
│       ${simbols} ${prefix}listcmd
│
│    =〆 ꜱᴜᴘᴘᴏʀᴛᴇᴅ
│       ${simbols} ${prefix}tqto
│       ${simbols} ${prefix}realown
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ɢᴜɪᴅᴇ ] ── .々─ᯤ
│    =〆 ꜰᴏʀ ᴍᴇɴᴜ: ${prefix}ᴀʟʟᴍᴇɴᴜ
│    =〆 ᴄᴏɴᴛᴀᴄᴛ ꜰᴏʀ ᴇʀʀᴏʀꜱ: ${prefix}ᴏᴡɴᴇʀ
⏤͟͟͞͞╳────────── .✦
│ ᴜᴘᴛɪᴍᴇ: ${runtime(os.uptime())}

> Powered by: _${namaowner} System_

`;
        const lod = [
        "█▒▒▒▒▒▒▒▒▒▒▒ 10%",
        "████▒▒▒▒▒▒▒▒ 30%",
        "███████▒▒▒▒▒ 50%",
        "██████████▒▒ 80%",
        "████████████ 100%",
        `> *${c}MENAMPILKAN SIMPLE MENU${c}*`
    ];

    // Kirim pesan awal dan simpan key untuk diedit
    const { key } = await sho.sendMessage(m.chat, { text: '⏳' });

    // Proses loading dengan update pesan secara bertahap
    for (let i = 0; i < lod.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
        await sho.sendMessage(m.chat, { text: lod[i], edit: key });
    }
        let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${shomenu}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Sho - Yurin",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Sho ☘️",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Sho v1 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp ShoV1", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await sho.sendMessage(m.chat, buttonMessage, { quoted: hw });
      }
      break
      case 'downloadmenu': {
      
        updatePopularCommand(command);
        const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
        await emote(randomEmoji);
        const statusUser = isOwner ? 'Owner' : `${role}`;
        const ytmenu = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}ytmp3 <link>
│     ${simbols} ${prefix}ytmp4 <link>
│     ${simbols} ${prefix}song <q>
│     ${simbols} ${prefix}ytsearch <q>
│     ${simbols} ${prefix}tiktok <link>
│     ${simbols} ${prefix}tiktoksearch <q>
│     ${simbols} ${prefix}ttmp3 <link>
│     ${simbols} ${prefix}spotify <q>
│     ${simbols} ${prefix}spotifydl <link>
⏤͟͟͞͞╳────────── .✦
    `;
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            ytmenu,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
      break
      case 'convertmenu': {
        updatePopularCommand(command);
        const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
        await emote(randomEmoji);
        const statusUser = isOwner ? 'Owner' : `${role}`;
        const convertmenu = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}${c}[ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}sticker
│     ${simbols} ${prefix}toimg
│     ${simbols} ${prefix}tourl
│     ${simbols} ${prefix}img2ibb
│     ${simbols} ${prefix}tomp3
│     ${simbols} ${prefix}toaudio
⏤͟͟͞͞╳────────── .✦
    `;
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            convertmenu,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
      break
      case 'totalhits': {
    shorly(`🔢 Total Hits: ${userdb.hitcmd}`);
    }
    break;
      case 'addowner': {
updatePopularCommand(command); // Mencatat command
        if(!isOwner) return shorly(mess.owners);
        if(!args[0]) return shorly(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
        bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
        let ceknye = await sho.onWhatsApp(bnnd);
        if(ceknye.length == 0) return shorly(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
        owner.push(bnnd);
        fs.writeFileSync('./owner.json', JSON.stringify(owner));
        shorly(`Nomor ${bnnd} sekarang menjadi Owner!!! 🎉`);
      }
      break
      case 'delowner': {
updatePopularCommand(command); // Mencatat command
        if(!isOwner) return shorly(mess.owners);
        if(!args[0]) return shorly(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
        ya = q.split("|")[0].replace(/[^0-9]/g, '');
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
        shorly(`Nomor ${ya} berhasil dihapus dari daftar owner! ❌`);
      }
      break
      case 'listowner': {
updatePopularCommand(command); // Mencatat command
        let teks = '┌──⭓「 *List Owner* 」\n│\n';
        for(let x of owner) {
          teks += `│⭔ ${x}\n`;
        }
        teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
        shorly(teks);
      }
      break
      case 'aimenu': {
      
updatePopularCommand(command);
const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
await emote(randomEmoji);
const statusUser = isOwner ? 'Owner' : `${role}`;
const menuai = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ ᴀɪ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}metaai
│     ${simbols} ${prefix}llama
│     ${simbols} ${prefix}setprompt2
│     ${simbols} ${prefix}nous
│     ${simbols} ${prefix}claudeai
│     ${simbols} ${prefix}dbrxai
│     ${simbols} ${prefix}deepseek
│     ${simbols} ${prefix}dreamshaper
│     ${simbols} ${prefix}img2text
│     ${simbols} ${prefix}venice
│     ${simbols} ${prefix}latukam
│     ${simbols} ${prefix}qwq
│     ${simbols} ${prefix}stabilityai
│     ${simbols} ${prefix}stable
│     ${simbols} ${prefix}flux
│     ${simbols} ${prefix}gandalf
│     ${simbols} ${prefix}gemini
⏤͟͟͞͞╳────────── .✦
`
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            menuai,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
      break
      case 'audiomenu': {
      
        updatePopularCommand(command);
        const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
        await emote(randomEmoji);
        const statusUser = isOwner ? 'Owner' : `${role}`;
        const audiomenuu = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ ᴀᴜᴅɪᴏ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}bass
│     ${simbols} ${prefix}blown
│     ${simbols} ${prefix}deep
│     ${simbols} ${prefix}earrape
│     ${simbols} ${prefix}slow
│     ${simbols} ${prefix}fast
│     ${simbols} ${prefix}robot
│     ${simbols} ${prefix}smooth
│     ${simbols} ${prefix}nightcore
│     ${simbols} ${prefix}reverse
│     ${simbols} ${prefix}fat
│     ${simbols} ${prefix}squirrel
│     ${simbols} ${prefix}sound1
│     ${simbols} ${prefix}sound2
│     ${simbols} ${prefix}sound3
│     ${simbols} ${prefix}sound4
│     ${simbols} ${prefix}sound5
│     ${simbols} ${prefix}sound6
│     ${simbols} ${prefix}sound7
│     ${simbols} ${prefix}sound8
│     ${simbols} ${prefix}sound9
│     ${simbols} ${prefix}sound10
│     ${simbols} ${prefix}sound11
│     ${simbols} ${prefix}sound12
│     ${simbols} ${prefix}sound13
│     ${simbols} ${prefix}sound14
│     ${simbols} ${prefix}sound15
│     ${simbols} ${prefix}sound16
│     ${simbols} ${prefix}sound17
│     ${simbols} ${prefix}sound18
│     ${simbols} ${prefix}sound19
│     ${simbols} ${prefix}sound20
│     ${simbols} ${prefix}sound21
│     ${simbols} ${prefix}sound22
│     ${simbols} ${prefix}sound23
│     ${simbols} ${prefix}sound24
│     ${simbols} ${prefix}sound25
│     ${simbols} ${prefix}sound26
│     ${simbols} ${prefix}sound27
│     ${simbols} ${prefix}sound28
│     ${simbols} ${prefix}sound29
│     ${simbols} ${prefix}sound30
│     ${simbols} ${prefix}sound31
│     ${simbols} ${prefix}sound32
│     ${simbols} ${prefix}sound33
│     ${simbols} ${prefix}sound34
│     ${simbols} ${prefix}sound35
│     ${simbols} ${prefix}sound36
│     ${simbols} ${prefix}sound37
│     ${simbols} ${prefix}sound38
│     ${simbols} ${prefix}sound39
│     ${simbols} ${prefix}sound40
│     ${simbols} ${prefix}sound41
│     ${simbols} ${prefix}sound42
│     ${simbols} ${prefix}sound43
│     ${simbols} ${prefix}sound44
│     ${simbols} ${prefix}sound45
│     ${simbols} ${prefix}sound46
│     ${simbols} ${prefix}sound47
│     ${simbols} ${prefix}sound48
│     ${simbols} ${prefix}sound49
│     ${simbols} ${prefix}sound50
│     ${simbols} ${prefix}sound51
│     ${simbols} ${prefix}sound52
│     ${simbols} ${prefix}sound53
│     ${simbols} ${prefix}sound54
│     ${simbols} ${prefix}sound55
│     ${simbols} ${prefix}sound56
│     ${simbols} ${prefix}sound57
│     ${simbols} ${prefix}sound58
│     ${simbols} ${prefix}sound59
│     ${simbols} ${prefix}sound60
│     ${simbols} ${prefix}sound61
│     ${simbols} ${prefix}sound62
│     ${simbols} ${prefix}sound63
│     ${simbols} ${prefix}sound64
│     ${simbols} ${prefix}sound65
│     ${simbols} ${prefix}sound66
│     ${simbols} ${prefix}sound67
│     ${simbols} ${prefix}sound68
│     ${simbols} ${prefix}sound69
│     ${simbols} ${prefix}sound70
│     ${simbols} ${prefix}sound71
│     ${simbols} ${prefix}sound72
│     ${simbols} ${prefix}sound73
│     ${simbols} ${prefix}sound74
│     ${simbols} ${prefix}sound75
│     ${simbols} ${prefix}sound76
│     ${simbols} ${prefix}sound77
│     ${simbols} ${prefix}sound78
│     ${simbols} ${prefix}sound79
│     ${simbols} ${prefix}sound80
│     ${simbols} ${prefix}sound81
│     ${simbols} ${prefix}sound82
│     ${simbols} ${prefix}sound83
│     ${simbols} ${prefix}sound84
│     ${simbols} ${prefix}sound85
│     ${simbols} ${prefix}sound86
│     ${simbols} ${prefix}sound87
│     ${simbols} ${prefix}sound88
│     ${simbols} ${prefix}sound89
│     ${simbols} ${prefix}sound90
│     ${simbols} ${prefix}sound91
│     ${simbols} ${prefix}sound92
│     ${simbols} ${prefix}sound93
│     ${simbols} ${prefix}sound94
│     ${simbols} ${prefix}sound95
│     ${simbols} ${prefix}sound96
│     ${simbols} ${prefix}sound97
│     ${simbols} ${prefix}sound98
│     ${simbols} ${prefix}sound99
│     ${simbols} ${prefix}sound100
⏤͟͟͞͞╳────────── .✦
    `;
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            audiomenuu,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
      break
      case 'groupmenu': {
      
        updatePopularCommand(command);
        const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
        await emote(randomEmoji);
        const statusUser = isOwner ? 'Owner' : `${role}`;
        const groupmenu = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}grup
│     ${simbols} ${prefix}getgcid
│     ${simbols} ${prefix}creategc
│     ${simbols} ${prefix}closetime
│     ${simbols} ${prefix}hidetag
│     ${simbols} ${prefix}opentime
│     ${simbols} ${prefix}revoke
│     ${simbols} ${prefix}kudeta
│     ${simbols} ${prefix}setdesc
│     ${simbols} ${prefix}store
│     ${simbols} ${prefix}addlist <key>|<resp>
│     ${simbols} ${prefix}dellist <key>
│     ${simbols} ${prefix}updatelist <key>|resp>
│     ${simbols} ${prefix}setnamegc
│     ${simbols} ${prefix}delppgc
│     ${simbols} ${prefix}setppgc
│     ${simbols} ${prefix}contacttag
│     ${simbols} ${prefix}sendcontact
│     ${simbols} ${prefix}getcontact
⏤͟͟͞͞╳────────── .✦
    `;
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            groupmenu,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
      break
      case 'animemenu': {
      
        updatePopularCommand(command);
        const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
        await emote(randomEmoji);
        const statusUser = isOwner ? 'Owner' : `${role}`;
        const animekk = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ ᴀɴɪᴍᴇ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}anichindetail
│     ${simbols} ${prefix}anichindl
│     ${simbols} ${prefix}anichinepisode
│     ${simbols} ${prefix}anichinsearch
│     ${simbols} ${prefix}aurataildetail
│     ${simbols} ${prefix}aurataillast
│     ${simbols} ${prefix}auratailsearch
│     ${simbols} ${prefix}auratailpopular
│     ${simbols} ${prefix}animelast
│     ${simbols} ${prefix}animpopular
│     ${simbols} ${prefix}komikindodetail
│     ${simbols} ${prefix}komikindodownload
│     ${simbols} ${prefix}komikindosearch
│     ${simbols} ${prefix}samehadakurelease
│     ${simbols} ${prefix}samehadakudetail
│     ${simbols} ${prefix}otakudesuongoing
│     ${simbols} ${prefix}otakudesusearch
│     ${simbols} ${prefix}otakudesudetail
│     ${simbols} ${prefix}oploverzdownload
⏤͟͟͞͞╳────────── .✦
    `;
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            animekk,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
      break
      case 'ownermenu': {
      
        updatePopularCommand(command);
        const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
        await emote(randomEmoji);
        const statusUser = isOwner ? 'Owner' : `${role}`;
        const ownermenu = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}restart
│     ${simbols} ${prefix}mode
│     ${simbols} ${prefix}addcase
│     ${simbols} ${prefix}delcase
│     ${simbols} ${prefix}addowner
│     ${simbols} ${prefix}sendsc
│     ${simbols} ${prefix}delowner
│     ${simbols} ${prefix}setreply
│     ${simbols} ${prefix}sendclear
│     ${simbols} ${prefix}addprem
│     ${simbols} ${prefix}sendbutton
│     ${simbols} ${prefix}sendbuttonimg
│     ${simbols} ${prefix}sendbuttonimg2
│     ${simbols} ${prefix}sendlist
│     ${simbols} ${prefix}sendlist2
│     ${simbols} ${prefix}sendlistimg
│     ${simbols} ${prefix}sendlistch
│     ${simbols} ${prefix}sendlistimg2
│     ${simbols} ${prefix}listprem
│     ${simbols} ${prefix}delprem
│     ${simbols} ${prefix}setbiobot
│     ${simbols} ${prefix}upsaluran
│     ${simbols} ${prefix}upsaluran2
│     ${simbols} ${prefix}upchannel
│     ${simbols} ${prefix}upchannels
│     ${simbols} ${prefix}delppbot
│     ${simbols} ${prefix}setppbot
│     ${simbols} ${prefix}listuserfire
│     ${simbols} ${prefix}cekfire
│     ${simbols} ${prefix}upfire
│     ${simbols} ${prefix}delfire
│     ${simbols} ${prefix}listowner
│     ${simbols} ${prefix}getcase
│     ${simbols} ${prefix}addthumb <name>|<link>
│     ${simbols} ${prefix}listthumb
│     ${simbols} ${prefix}delthumb <name>
│     ${simbols} ${prefix}addthumb2 <name>|<replyImg>
│     ${simbols} ${prefix}listthumb2
│     ${simbols} ${prefix}delthumb2 <name>
│     ${simbols} ${prefix}addthumb3 <name>|<replyImg>
│     ${simbols} ${prefix}listthumb3
│     ${simbols} ${prefix}delthumb3 <name>
│     ${simbols} ${prefix}upswtext
│     ${simbols} ${prefix}upswimg
│     ${simbols} ${prefix}upswvid
│     ${simbols} ${prefix}upswaudio
│     ${simbols} ${prefix}settings
│     ${simbols} ${prefix}delsession
│     ${simbols} ${prefix}pushcontact
│     ${simbols} ${prefix}pushkontak2
│     ${simbols} ${prefix}pushkontak3
│     ${simbols} ${prefix}pushkontak4
│     ${simbols} ${prefix}resetpop
│     ${simbols} ${prefix}setcmd
│     ${simbols} ${prefix}delcmd
│     ${simbols} ${prefix}shoai
│     ${simbols} ${prefix}listcmd
⏤͟͟͞͞╳────────── .✦
    `;
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            ownermenu,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
      break
      case 'randommenu': {
      
      updatePopularCommand(command);
      const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
      await emote(randomEmoji);
      const statusUser = isOwner ? 'Owner' : `${role}`;
      const randomm = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}wallhp
│     ${simbols} ${prefix}akira
│     ${simbols} ${prefix}akiyama
│     ${simbols} ${prefix}ana
│     ${simbols} ${prefix}art
│     ${simbols} ${prefix}asuna
│     ${simbols} ${prefix}ayuzawa
│     ${simbols} ${prefix}boruto
│     ${simbols} ${prefix}bts
│     ${simbols} ${prefix}chiho
│     ${simbols} ${prefix}chitoge
│     ${simbols} ${prefix}cosplay
│     ${simbols} ${prefix}cosplayloli
│     ${simbols} ${prefix}cosplaysagiri
│     ${simbols} ${prefix}cyber
│     ${simbols} ${prefix}deidara
│     ${simbols} ${prefix}doraemon
│     ${simbols} ${prefix}elaina
│     ${simbols} ${prefix}emilia
│     ${simbols} ${prefix}erza
│     ${simbols} ${prefix}exo
│     ${simbols} ${prefix}gamewallpaper
│     ${simbols} ${prefix}gremory
│     ${simbols} ${prefix}hacker
│     ${simbols} ${prefix}hestia
│     ${simbols} ${prefix}Husbu
│     ${simbols} ${prefix}inori
│     ${simbols} ${prefix}islamic
│     ${simbols} ${prefix}isuzu
│     ${simbols} ${prefix}itachi
│     ${simbols} ${prefix}itori
│     ${simbols} ${prefix}jennie
│     ${simbols} ${prefix}jiso
│     ${simbols} ${prefix}justina
│     ${simbols} ${prefix}kaga
│     ${simbols} ${prefix}kagura
│     ${simbols} ${prefix}kakasih
│     ${simbols} ${prefix}kaori
│     ${simbols} ${prefix}cartoon
│     ${simbols} ${prefix}shortquote
│     ${simbols} ${prefix}keneki
│     ${simbols} ${prefix}kotori
│     ${simbols} ${prefix}kurumi
│     ${simbols} ${prefix}lisa
│     ${simbols} ${prefix}loli2
│     ${simbols} ${prefix}madara
│     ${simbols} ${prefix}megumin
│     ${simbols} ${prefix}mikasa
│     ${simbols} ${prefix}mikey
│     ${simbols} ${prefix}miku
│     ${simbols} ${prefix}minato
│     ${simbols} ${prefix}mountain
│     ${simbols} ${prefix}naruto
│     ${simbols} ${prefix}nekonime
│     ${simbols} ${prefix}nezuko
│     ${simbols} ${prefix}onepiece
│     ${simbols} ${prefix}pentol
│     ${simbols} ${prefix}pokemon
│     ${simbols} ${prefix}programming
│     ${simbols} ${prefix}randomnime
│     ${simbols} ${prefix}randomnime2
│     ${simbols} ${prefix}rize
│     ${simbols} ${prefix}rose
│     ${simbols} ${prefix}sagiri
│     ${simbols} ${prefix}sakura
│     ${simbols} ${prefix}sasuke
│     ${simbols} ${prefix}satanic
│     ${simbols} ${prefix}shina
│     ${simbols} ${prefix}shinka
│     ${simbols} ${prefix}shinomiya
│     ${simbols} ${prefix}shizuka
│     ${simbols} ${prefix}shota
│     ${simbols} ${prefix}space
│     ${simbols} ${prefix}technology
│     ${simbols} ${prefix}tejina
│     ${simbols} ${prefix}toukachan
│     ${simbols} ${prefix}tsunade
│     ${simbols} ${prefix}waifu2
│     ${simbols} ${prefix}yotsuba
│     ${simbols} ${prefix}yuki
│     ${simbols} ${prefix}yulibocil
│     ${simbols} ${prefix}yumeko
⏤͟͟͞͞╳────────── .✦`
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            randomm,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
    break
      case 'othermenu': {
      
        updatePopularCommand(command);
        const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';
        await emote(randomEmoji);
        const statusUser = isOwner ? 'Owner' : `${role}`;
        const othermenu = `
⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ ᴏᴛʜᴇʀ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}popular
│     ${simbols} ${prefix}script
│     ${simbols} ${prefix}totalfitur
│     ${simbols} ${prefix}readviewonce
│     ${simbols} ${prefix}brat <txt>
│     ${simbols} ${prefix}delete
│     ${simbols} ${prefix}remini
│     ${simbols} ${prefix}faktaunik
│     ${simbols} ${prefix}mitos
│     ${simbols} ${prefix}suit
│     ${simbols} ${prefix}cecanindo
│     ${simbols} ${prefix}cecanchina
│     ${simbols} ${prefix}cecankorea
│     ${simbols} ${prefix}cecanthai
│     ${simbols} ${prefix}cecanviet
│     ${simbols} ${prefix}cecanjapan
│     ${simbols} ${prefix}cats
│     ${simbols} ${prefix}bluearchive
│     ${simbols} ${prefix}neko
│     ${simbols} ${prefix}imdb <film>
│     ${simbols} ${prefix}waifu
│     ${simbols} ${prefix}owner
│     ${simbols} ${prefix}about
⏤͟͟͞͞╳────────── .✦

    `;
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "INSTAGRAM 🛸",
                    url: `https://www.instagram.com/sh0.ydaa?igsh=MW4wb2RheGoyaThpcw==`,
                }),
            },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "TIKTOK 🚀",
                    url: `https://www.tiktok.com/@syncheya?_t=ZS-8t8UwaJfkMK&_r=1`,
                }),
            },
        ];

        // Kirim pesan dengan gambar dan tombol
        sendButtonImage(
            m.chat,
            `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`,
            othermenu,
            getRandomThumb3(),
            tombol,
            hw
        );
      }
      break
      case 'allmenu': {
      
        updatePopularCommand(command); // Mencatat command
    await emote(randomEmoji);

    // Ambil database limit dari `cekfire`
    const db = loadUserFire();
    let userLimit = db[m.sender]?.limit || 0; // Jika tidak ada data, default 0
    let role = db[m.sender]?.role || 'user'; // Default role adalah user
    let limitDisplay = userLimit === -1 ? '∞' : userLimit; // Tampilkan limit sebagai "Unlimited" jika -1
    let isRegistered = db[m.sender]?.register ? 'Registered' : 'Not Registered';

    // Ambil top 4 command populer
    let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai')
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`);
    let formattedCommandList = commands.length
        ? commands.reduce((rows, current, index) => {
            if (index % 2 === 0) {
                rows.push([current]);
            } else {
                rows[rows.length - 1].push(current);
            }
            return rows;
        }, []).map(row => row.join(` | `))
        .join('\n')
        : 'Belum ada data command populer.';

    let aiMessage = popularData.ai ? `${c}${popularData.ai}${c}` : `${c}null${c}`;
    const statusUser = isOwner ? 'Owner' : `${role}`;

    // Format menu dengan limit dan register
    const allmn = `ʜɪ @${m.sender.split('@')[0]} 👋🏻,
> ɪ ᴀᴍ ꜱʜᴏ ɢʜɪʙʟɪ, ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ᴀssɪsᴛᴀɴᴛ ꜰʀᴏᴍ ᴛʜᴇ ᴍᴀɢɪᴄᴀʟ ᴡᴏʀʟᴅ ᴏꜰ ɢʜɪʙʟɪ. ᴜsᴇ ᴍᴇ ғᴏʀ ᴅᴀᴛᴀ sᴇᴀʀᴄʜɪɴɢ, ɪɴғᴏ ᴄᴏʟʟᴇᴄᴛɪᴏɴ, ᴀɴᴅ ꜰᴜɴᴄᴛɪᴏɴs ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ!

⏤͟͟͞͞╳── [ ᴜꜱᴇʀ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName ? m.pushName : 'User'}
│    =〆 ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${limitDisplay}
│    =〆 ʀᴏʟᴇ: ${statusUser}
│    =〆 ʀᴇɢɪꜱᴛᴇʀ: ${isRegistered}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ʙᴏᴛ - ɪɴғᴏ ] ── .々─ᯤ
│    =〆 ᴛʏᴘᴇ: ᴄᴀꜱᴇ
│    =〆 ᴍᴏᴅᴇ: ${sho.public ? 'ᴘᴜʙʟɪᴄ' : 'ꜱᴇʟꜰ'}
│    =〆 ᴘʀᴇғɪx: ${prefix}
│    =〆 ᴅᴀᴛᴇ: ${moment().format('dddd, D MMMM YYYY')}
│    =〆 ᴀɪ ʜɪᴛꜱ: ${aiMessage}
│    =〆 ᴛᴏᴘ ᴄᴏᴍᴍᴀɴᴅꜱ:
${formattedCommandList}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── ${c}[ ꜱᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ] ── .々─ᯤ
│    =〆 ᴛɪᴋᴛᴏᴋ: ${ttk}
│    =〆 ʏᴏᴜᴛᴜʙᴇ: ${ytbb}
│    =〆 ɪɴꜱᴛᴀɢʀᴀᴍ: ${itg}
⏤͟͟͞͞╳────────── .✦

⏤͟͟͞͞╳── ${c}[ LIST ALL MENU ]${c} ──╳͟͟͞͞⏤
│
⏤͟͟͞͞╳── [ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ] ── .々─ᯤ
│     ${simbols} ${prefix}ytmp3 <link>
│     ${simbols} ${prefix}ytmp4 <link>
│     ${simbols} ${prefix}song <q>
│     ${simbols} ${prefix}ytsearch <q>
│     ${simbols} ${prefix}tiktok <link>
│     ${simbols} ${prefix}tiktoksearch <q>
│     ${simbols} ${prefix}ttmp3 <link>
│     ${simbols} ${prefix}spotify <q>
│     ${simbols} ${prefix}spotifydl <link>
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ᴀɴɪᴍᴇ ᴍᴇɴᴜ ] ── .々─ᯤ
│     ${simbols} ${prefix}anichindetail
│     ${simbols} ${prefix}anichindl
│     ${simbols} ${prefix}anichinepisode
│     ${simbols} ${prefix}anichinsearch
│     ${simbols} ${prefix}aurataildetail
│     ${simbols} ${prefix}aurataillast
│     ${simbols} ${prefix}auratailsearch
│     ${simbols} ${prefix}auratailpopular
│     ${simbols} ${prefix}animelast
│     ${simbols} ${prefix}animpopular
│     ${simbols} ${prefix}komikindodetail
│     ${simbols} ${prefix}komikindodownload
│     ${simbols} ${prefix}komikindosearch
│     ${simbols} ${prefix}samehadakurelease
│     ${simbols} ${prefix}samehadakudetail
│     ${simbols} ${prefix}otakudesuongoing
│     ${simbols} ${prefix}otakudesusearch
│     ${simbols} ${prefix}otakudesudetail
│     ${simbols} ${prefix}oploverzdownload
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ] ── .々─ᯤ
│     ${simbols} ${prefix}sticker
│     ${simbols} ${prefix}toimg
│     ${simbols} ${prefix}tourl
│     ${simbols} ${prefix}img2ibb
│     ${simbols} ${prefix}tomp3
│     ${simbols} ${prefix}toaudio
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── ${c}[ ᴀᴜᴅɪᴏ ᴍᴇɴᴜ ]${c} ── .々─ᯤ
│     ${simbols} ${prefix}bass
│     ${simbols} ${prefix}blown
│     ${simbols} ${prefix}deep
│     ${simbols} ${prefix}earrape
│     ${simbols} ${prefix}slow
│     ${simbols} ${prefix}fast
│     ${simbols} ${prefix}robot
│     ${simbols} ${prefix}smooth
│     ${simbols} ${prefix}nightcore
│     ${simbols} ${prefix}reverse
│     ${simbols} ${prefix}fat
│     ${simbols} ${prefix}squirrel
│     ${simbols} ${prefix}sound1
│     ${simbols} ${prefix}sound2
│     ${simbols} ${prefix}sound3
│     ${simbols} ${prefix}sound4
│     ${simbols} ${prefix}sound5
│     ${simbols} ${prefix}sound6
│     ${simbols} ${prefix}sound7
│     ${simbols} ${prefix}sound8
│     ${simbols} ${prefix}sound9
│     ${simbols} ${prefix}sound10
│     ${simbols} ${prefix}sound11
│     ${simbols} ${prefix}sound12
│     ${simbols} ${prefix}sound13
│     ${simbols} ${prefix}sound14
│     ${simbols} ${prefix}sound15
│     ${simbols} ${prefix}sound16
│     ${simbols} ${prefix}sound17
│     ${simbols} ${prefix}sound18
│     ${simbols} ${prefix}sound19
│     ${simbols} ${prefix}sound20
│     ${simbols} ${prefix}sound21
│     ${simbols} ${prefix}sound22
│     ${simbols} ${prefix}sound23
│     ${simbols} ${prefix}sound24
│     ${simbols} ${prefix}sound25
│     ${simbols} ${prefix}sound26
│     ${simbols} ${prefix}sound27
│     ${simbols} ${prefix}sound28
│     ${simbols} ${prefix}sound29
│     ${simbols} ${prefix}sound30
│     ${simbols} ${prefix}sound31
│     ${simbols} ${prefix}sound32
│     ${simbols} ${prefix}sound33
│     ${simbols} ${prefix}sound34
│     ${simbols} ${prefix}sound35
│     ${simbols} ${prefix}sound36
│     ${simbols} ${prefix}sound37
│     ${simbols} ${prefix}sound38
│     ${simbols} ${prefix}sound39
│     ${simbols} ${prefix}sound40
│     ${simbols} ${prefix}sound41
│     ${simbols} ${prefix}sound42
│     ${simbols} ${prefix}sound43
│     ${simbols} ${prefix}sound44
│     ${simbols} ${prefix}sound45
│     ${simbols} ${prefix}sound46
│     ${simbols} ${prefix}sound47
│     ${simbols} ${prefix}sound48
│     ${simbols} ${prefix}sound49
│     ${simbols} ${prefix}sound50
│     ${simbols} ${prefix}sound51
│     ${simbols} ${prefix}sound52
│     ${simbols} ${prefix}sound53
│     ${simbols} ${prefix}sound54
│     ${simbols} ${prefix}sound55
│     ${simbols} ${prefix}sound56
│     ${simbols} ${prefix}sound57
│     ${simbols} ${prefix}sound58
│     ${simbols} ${prefix}sound59
│     ${simbols} ${prefix}sound60
│     ${simbols} ${prefix}sound61
│     ${simbols} ${prefix}sound62
│     ${simbols} ${prefix}sound63
│     ${simbols} ${prefix}sound64
│     ${simbols} ${prefix}sound65
│     ${simbols} ${prefix}sound66
│     ${simbols} ${prefix}sound67
│     ${simbols} ${prefix}sound68
│     ${simbols} ${prefix}sound69
│     ${simbols} ${prefix}sound70
│     ${simbols} ${prefix}sound71
│     ${simbols} ${prefix}sound72
│     ${simbols} ${prefix}sound73
│     ${simbols} ${prefix}sound74
│     ${simbols} ${prefix}sound75
│     ${simbols} ${prefix}sound76
│     ${simbols} ${prefix}sound77
│     ${simbols} ${prefix}sound78
│     ${simbols} ${prefix}sound79
│     ${simbols} ${prefix}sound80
│     ${simbols} ${prefix}sound81
│     ${simbols} ${prefix}sound82
│     ${simbols} ${prefix}sound83
│     ${simbols} ${prefix}sound84
│     ${simbols} ${prefix}sound85
│     ${simbols} ${prefix}sound86
│     ${simbols} ${prefix}sound87
│     ${simbols} ${prefix}sound88
│     ${simbols} ${prefix}sound89
│     ${simbols} ${prefix}sound90
│     ${simbols} ${prefix}sound91
│     ${simbols} ${prefix}sound92
│     ${simbols} ${prefix}sound93
│     ${simbols} ${prefix}sound94
│     ${simbols} ${prefix}sound95
│     ${simbols} ${prefix}sound96
│     ${simbols} ${prefix}sound97
│     ${simbols} ${prefix}sound98
│     ${simbols} ${prefix}sound99
│     ${simbols} ${prefix}sound100
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ ] ── .々─ᯤ
│     ${simbols} ${prefix}wallhp
│     ${simbols} ${prefix}akira
│     ${simbols} ${prefix}akiyama
│     ${simbols} ${prefix}ana
│     ${simbols} ${prefix}art
│     ${simbols} ${prefix}asuna
│     ${simbols} ${prefix}ayuzawa
│     ${simbols} ${prefix}boruto
│     ${simbols} ${prefix}bts
│     ${simbols} ${prefix}chiho
│     ${simbols} ${prefix}chitoge
│     ${simbols} ${prefix}cosplay
│     ${simbols} ${prefix}cosplayloli
│     ${simbols} ${prefix}cosplaysagiri
│     ${simbols} ${prefix}cyber
│     ${simbols} ${prefix}deidara
│     ${simbols} ${prefix}doraemon
│     ${simbols} ${prefix}elaina
│     ${simbols} ${prefix}emilia
│     ${simbols} ${prefix}erza
│     ${simbols} ${prefix}exo
│     ${simbols} ${prefix}gamewallpaper
│     ${simbols} ${prefix}gremory
│     ${simbols} ${prefix}hacker
│     ${simbols} ${prefix}hestia
│     ${simbols} ${prefix}Husbu
│     ${simbols} ${prefix}inori
│     ${simbols} ${prefix}islamic
│     ${simbols} ${prefix}isuzu
│     ${simbols} ${prefix}itachi
│     ${simbols} ${prefix}itori
│     ${simbols} ${prefix}jennie
│     ${simbols} ${prefix}jiso
│     ${simbols} ${prefix}justina
│     ${simbols} ${prefix}kaga
│     ${simbols} ${prefix}kagura
│     ${simbols} ${prefix}kakasih
│     ${simbols} ${prefix}kaori
│     ${simbols} ${prefix}cartoon
│     ${simbols} ${prefix}shortquote
│     ${simbols} ${prefix}keneki
│     ${simbols} ${prefix}kotori
│     ${simbols} ${prefix}kurumi
│     ${simbols} ${prefix}lisa
│     ${simbols} ${prefix}loli2
│     ${simbols} ${prefix}madara
│     ${simbols} ${prefix}megumin
│     ${simbols} ${prefix}mikasa
│     ${simbols} ${prefix}mikey
│     ${simbols} ${prefix}miku
│     ${simbols} ${prefix}minato
│     ${simbols} ${prefix}mountain
│     ${simbols} ${prefix}naruto
│     ${simbols} ${prefix}nekonime
│     ${simbols} ${prefix}nezuko
│     ${simbols} ${prefix}onepiece
│     ${simbols} ${prefix}pentol
│     ${simbols} ${prefix}pokemon
│     ${simbols} ${prefix}programming
│     ${simbols} ${prefix}randomnime
│     ${simbols} ${prefix}randomnime2
│     ${simbols} ${prefix}rize
│     ${simbols} ${prefix}rose
│     ${simbols} ${prefix}sagiri
│     ${simbols} ${prefix}sakura
│     ${simbols} ${prefix}sasuke
│     ${simbols} ${prefix}satanic
│     ${simbols} ${prefix}shina
│     ${simbols} ${prefix}shinka
│     ${simbols} ${prefix}shinomiya
│     ${simbols} ${prefix}shizuka
│     ${simbols} ${prefix}shota
│     ${simbols} ${prefix}space
│     ${simbols} ${prefix}technology
│     ${simbols} ${prefix}tejina
│     ${simbols} ${prefix}toukachan
│     ${simbols} ${prefix}tsunade
│     ${simbols} ${prefix}waifu2
│     ${simbols} ${prefix}yotsuba
│     ${simbols} ${prefix}yuki
│     ${simbols} ${prefix}yulibocil
│     ${simbols} ${prefix}yumeko
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ᴀɪ ᴍᴇɴᴜ ] ── .々─ᯤ
│     ${simbols} ${prefix}metaai
│     ${simbols} ${prefix}llama
│     ${simbols} ${prefix}setprompt2
│     ${simbols} ${prefix}nous
│     ${simbols} ${prefix}claudeai
│     ${simbols} ${prefix}dbrxai
│     ${simbols} ${prefix}deepseek
│     ${simbols} ${prefix}dreamshaper
│     ${simbols} ${prefix}img2text
│     ${simbols} ${prefix}venice
│     ${simbols} ${prefix}latukam
│     ${simbols} ${prefix}qwq
│     ${simbols} ${prefix}stabilityai
│     ${simbols} ${prefix}stable
│     ${simbols} ${prefix}flux
│     ${simbols} ${prefix}gandalf
│     ${simbols} ${prefix}gemini
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ] ── .々─ᯤ
│     ${simbols} ${prefix}grup
│     ${simbols} ${prefix}getgcid
│     ${simbols} ${prefix}creategc
│     ${simbols} ${prefix}closetime
│     ${simbols} ${prefix}hidetag
│     ${simbols} ${prefix}opentime
│     ${simbols} ${prefix}revoke
│     ${simbols} ${prefix}kudeta
│     ${simbols} ${prefix}setdesc
│     ${simbols} ${prefix}store
│     ${simbols} ${prefix}addlist <key>|<resp>
│     ${simbols} ${prefix}dellist <key>
│     ${simbols} ${prefix}updatelist <key>|resp>
│     ${simbols} ${prefix}setnamegc
│     ${simbols} ${prefix}delppgc
│     ${simbols} ${prefix}setppgc
│     ${simbols} ${prefix}contacttag
│     ${simbols} ${prefix}sendcontact
│     ${simbols} ${prefix}getcontact
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ] ── .々─ᯤ
│     ${simbols} ${prefix}restart
│     ${simbols} ${prefix}mode
│     ${simbols} ${prefix}addcase
│     ${simbols} ${prefix}delcase
│     ${simbols} ${prefix}addowner
│     ${simbols} ${prefix}sendsc
│     ${simbols} ${prefix}delowner
│     ${simbols} ${prefix}setreply
│     ${simbols} ${prefix}sendclear
│     ${simbols} ${prefix}addprem
│     ${simbols} ${prefix}sendbutton
│     ${simbols} ${prefix}sendbuttonimg
│     ${simbols} ${prefix}sendbuttonimg2
│     ${simbols} ${prefix}sendlist
│     ${simbols} ${prefix}sendlist2
│     ${simbols} ${prefix}sendlistimg
│     ${simbols} ${prefix}sendlistch
│     ${simbols} ${prefix}sendlistimg2
│     ${simbols} ${prefix}listprem
│     ${simbols} ${prefix}delprem
│     ${simbols} ${prefix}setbiobot
│     ${simbols} ${prefix}upsaluran
│     ${simbols} ${prefix}upsaluran2
│     ${simbols} ${prefix}upchannel
│     ${simbols} ${prefix}upchannels
│     ${simbols} ${prefix}delppbot
│     ${simbols} ${prefix}setppbot
│     ${simbols} ${prefix}listuserfire
│     ${simbols} ${prefix}cekfire
│     ${simbols} ${prefix}upfire
│     ${simbols} ${prefix}delfire
│     ${simbols} ${prefix}listowner
│     ${simbols} ${prefix}getcase
│     ${simbols} ${prefix}addthumb <name>|<link>
│     ${simbols} ${prefix}listthumb
│     ${simbols} ${prefix}delthumb <name>
│     ${simbols} ${prefix}addthumb2 <name>|<replyImg>
│     ${simbols} ${prefix}listthumb2
│     ${simbols} ${prefix}delthumb2 <name>
│     ${simbols} ${prefix}addthumb3 <name>|<replyImg>
│     ${simbols} ${prefix}listthumb3
│     ${simbols} ${prefix}delthumb3 <name>
│     ${simbols} ${prefix}upswtext
│     ${simbols} ${prefix}upswimg
│     ${simbols} ${prefix}upswvid
│     ${simbols} ${prefix}upswaudio
│     ${simbols} ${prefix}settings
│     ${simbols} ${prefix}delsession
│     ${simbols} ${prefix}pushcontact
│     ${simbols} ${prefix}pushkontak2
│     ${simbols} ${prefix}pushkontak3
│     ${simbols} ${prefix}pushkontak4
│     ${simbols} ${prefix}resetpop
│     ${simbols} ${prefix}setcmd
│     ${simbols} ${prefix}delcmd
│     ${simbols} ${prefix}shoai
│     ${simbols} ${prefix}listcmd
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── [ ᴏᴛʜᴇʀ ᴍᴇɴᴜ ] ── .々─ᯤ
│     ${simbols} ${prefix}popular
│     ${simbols} ${prefix}script
│     ${simbols} ${prefix}totalfitur
│     ${simbols} ${prefix}readviewonce
│     ${simbols} ${prefix}brat <txt>
│     ${simbols} ${prefix}delete
│     ${simbols} ${prefix}remini
│     ${simbols} ${prefix}faktaunik
│     ${simbols} ${prefix}mitos
│     ${simbols} ${prefix}imdb <film>
│     ${simbols} ${prefix}suit
│     ${simbols} ${prefix}cecanindo
│     ${simbols} ${prefix}cecanchina
│     ${simbols} ${prefix}cecankorea
│     ${simbols} ${prefix}cecanthai
│     ${simbols} ${prefix}cecanviet
│     ${simbols} ${prefix}cecanjapan
│     ${simbols} ${prefix}cats
│     ${simbols} ${prefix}bluearchive
│     ${simbols} ${prefix}neko
│     ${simbols} ${prefix}waifu
│     ${simbols} ${prefix}owner
│     ${simbols} ${prefix}about
⏤͟͟͞͞╳────────── .✦


⏤͟͟͞͞╳── [ ғᴇᴀᴛᴜʀᴇᴅ ] ── .々─ᯤ
> =〆 ᴜꜱᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ
> ${simbols} ${prefix}listuserfire
> ${simbols} ${prefix}cekfire
> ${simbols} ${prefix}bensin
> ${simbols} ${prefix}afk
> ${simbols} ${prefix}listcmd
> 
> =〆 ꜱᴜᴘᴘᴏʀᴛᴇᴅ
> ${simbols} ${prefix}tqto
> ${simbols} ${prefix}realown
⏤͟͟͞͞╳────────── .✦
`
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", randomEmoji];

            // Mengirimkan reaksi secara berurutan
            for (const emoji of reactEmojis) {
                await sho.sendMessage(m.chat, {
                    react: {
                        text: emoji,
                        key: m.key
                    }
                });
            }
let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: allmn
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: namabot
                }),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "application/pdf",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail":fs.readFileSync("./urpdf2.jpg"), //Format gambar harus 300x300 (jika beda tidak akan keluar
"fileLength": 120000,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© Sho Botz`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply",
                    "buttonParamsJson": `{
                    "display_text":"ABOUT💧",
                    "id":"${prefix}about"}`
                  },{
                    "name": "cta_url",
                    "buttonParamsJson": `{
      "display_text": "KING👑",
      "url": "https://wa.me/62882008702155"
    }`
                  }],
                }),
contextInfo: {
forwardingScore: 245,
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `© Sho Botz`,
newsletterJid: idsaluran
}, externalAdReply: {
title: `${waktuucapan} ${m.pushName ? m.pushName : 'Temen Sho'} 👋🏻`,
body: namaBot,
showAdAttribution: true,
thumbnail: getRandomThumb3(),
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
mediaUrl: gh,
sourceUrl: gh,
}}
})} 
}}, {quoted: hw})
        await sho.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'pushkontak2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!isOwner) return shorly(mess.owners);
        if(!isGroup) return shorly(mess.groups);
        var name = text.split('/')[0];
        var chet = text.split('/')[1];
        if(!name) return shorly(`Contoh: ${prefix + command} nama/pesan`);
        if(!chet) return shorly(`Contoh: ${prefix + command} nama/pesan`);
        let kontak = {
          displayName: "Contact",
          contacts: [{
            displayName: name,
            vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
          }]
        }
        let push = await sho.groupMetadata(m.chat)
        if(push.participants.length > 300) return shorly('Batas member maksimal: *300*')
        await shorly('bentar');
        for(let a of push.participants) {
          const repf = await sho.sendMessage(a.id, {
            contacts: kontak
          })
          sho.sendMessage(a.id, {
            text: chet
          }, {
            quoted: repf
          })
          await sleep(1000);
        }
        await shorly(mess.dones);
      }
      break
      case 'banned':  {
if (!isOwner) return shorly(mess.owners)
if (!args[0]) return shorly(`*Contoh : ${command} add 6281214281312*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return shorly('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
shorly(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return shorly('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
shorly(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
shorly("Error")
}
}
break
case 'listban':
if (isBan) return shorly(mess.bands)
 teksooop = `*List Ban*\n\n`
for (let ii of banned) {
teksooop += `- ${ii}\n`
}
shorly(teksooop)
break
case 'autoread':
				if (!isOwner) return shorly(mess.owners);
				if (args.length < 1) return shorly(`Contoh: ${prefix + command} true/false?`);
				if (q === 'true') {
					global.db.data.settings[botNumber].autoread = true;
					shorly(`Yay! Auto-read berhasil diubah ke ${q}`);
				} else if (q === 'false') {
					global.db.data.settings[botNumber].autoread = false;
					shorly(`Oke deh! Auto-read berhasil dimatikan, jadi gak bakal dibaca otomatis nih!`);
				}
			break;
      case 'totalfitur': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        const total = ((fs.readFileSync('./case.js').toString()).match(/case '/g) || []).length
        shorly(`Total Fitur : ${total}`);
      }
      break
      case 'addprem':
case 'addpremium':
case 'setpremium': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return shorly(mess.owners);
    if (!args[0]) return shorly(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
    
    const bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
    const ceknye = await sho.onWhatsApp(bnnd);
    if (ceknye.length == 0) return shorly(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
    if (prem.includes(bnnd)) return shorly('Nomor ini sudah terdaftar sebagai Premium User!');

    prem.push(bnnd);
    fs.writeFileSync('./database/premium.json', JSON.stringify(prem, null, 2));

    // Update role di userFire.json
    const dbFire = loadUserFire();
    const userJid = bnnd + '@s.whatsapp.net';
    dbFire[userJid] = {
        register: true,
        limit: 1000,
        role: 'vip'
    };
    saveUserFire(dbFire);

    shorly(`Nomor ${bnnd} sekarang menjadi Premium User (VIP)!!! 🎉`);
}
break;
//=============[ JADIBOT - FITUR ]=================//
 case 'getses-jadibot':
     if (!isVip) return reply(mess.vips)
     reply(mess.wait)
     let sessionbot = await fs.readFileSync(`./lib/jadibot/session/${m.sender}/creds.json`)
     sho.sendMessage(m.chat, {
         document: sessionbot,
         mimetype: 'application/json',
         fileName: 'creds.json'
     }, {
         quoted: m
     })
  break     
case 'repses-jadibot':
 if (!isVip) return reply(mess.vips)
 const folderPath4 = `./lib/jadibot/session/${m.sender}`; 

 if (!fs.existsSync(folderPath4)) {
 return reply('*Tidak ada yang harus di perbaiki*');
 }

 try {
 fs.rmSync(folderPath4, { recursive: true, force: true });
 reply('*Session telah di perbaiki, sedang me restart bot...*.');
 } catch (error) {
 reply('Error :', error);
 }
 break  
case 'stop-jadibot':
 if (!isVip) return reply(mess.vips)
 const folderPath8 = `./lib/jadibot/session/${m.sender}`; 

 if (!fs.existsSync(folderPath8)) {
 return reply('*Kamu Belum Jadibot.*');
 }

 try {
 fs.rmSync(folderPath8, { recursive: true, force: true });
 reply('*Session telah dihapus, silahkan logout.*');
 } catch (error) {
 reply('Error :', error);
 }
 break
 case 'list-jadibot': 
if (!isVip) return reply(mess.vips)
try {
let user = [... new Set([...global.conns.filter(kiyoo => kiyoo.user).map(kiyoo => kiyoo.user)])]
te = "*-- List Jadibot --*\n\n"
for (let i of user){
y = await sho.decodeJid(i.id)
te += " •• User : @" + y.split("@")[0] + "\n"
te += " •• Name : " + i.name + "\n\n"
}
sho.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`NONE!`)
}
break 

case "start-jadibot":
 if (!isVip) return reply(mess.vips)
 const folderPath = `./lib/jadibot/session/${m.sender}`; 

 if (!fs.existsSync(folderPath)) {
 return reply('*Kamu Belum Jadibot.*');
 }
try {
let user = [... new Set([...global.conns.filter(kiyoo => kiyoo.user).map(kiyoo => kiyoo.user)])]
await jadibot(sho, m.sender, m, m.sender)
} catch (err) {
console.log(`Belum Ada User Yang Jadibot`)
}
break
case "jadibot":
sho.sendPoll(m, "*`[ Pilih Methode ]`*", [`jadibot-scan`,`jadibot-pairing ${m.sender.replace("@s.whatsapp.net")}`])      
break
      /*  case "jadibot-scan":
        if (!isPremium) return reply("*`Khusus Prem Saya kak`*")  
        userdb.jadibot = true
        reply("Succes")
      
        await jadibots(sho, m, text+"@s.whatsapp.net")
        break*/
    case "jadibot-pairing":
        if (!isVip) return reply(mess.vips)
        if (!text) return reply("mana nomor nya")
await jadibot(sho, m.sender, m, m.sender)
await sleep(4800)
let jadibo = `*${X}Masukkan code dibawah ini untuk jadi bot sementara${X}*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code di bawah ini\n\nNote: code dapat expired kapan saja!\n\nCode: ${X}${global.codepairing}${X}\nJika Code Error *undefined* ketik .repses-jadibot : Untuk memperbaiki session nomor anda`
let onlyprivjdb = '*Code telah di kirim, silahkan cek PM-*'
userdb.jadibot = true
 sho.sendMessage(m.sender, {text:jadibo}, {quoted:m})
 setTimeout(() => {
 reply(onlyprivjdb)
 }, 1000)
break
      case 'delprem':
case 'deletepremium':
case 'delpremium':
case 'delpr': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return shorly(mess.owners);
    if (!args[0]) return shorly(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
    
    const ya = q.split("|")[0].replace(/[^0-9]/g, '');
    if (!prem.includes(ya)) return shorly('Nomor ini tidak terdaftar sebagai Premium User!');
    
    const unp = prem.indexOf(ya);
    prem.splice(unp, 1);
    fs.writeFileSync('./database/premium.json', JSON.stringify(prem, null, 2));

    // Update role di userFire.json
    const dbFire = loadUserFire();
    const userJid = ya + '@s.whatsapp.net';
    if (dbFire[userJid]) {
        dbFire[userJid].role = 'user';
        dbFire[userJid].limit = 100;
        saveUserFire(dbFire);
    }

    shorly(`Nomor ${ya} berhasil dihapus dari daftar Premium User! ❌`);
}
break;
case 'listprem':
case 'listpremium':
case 'listpr': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    let teks = '┌──⭓「 *List Premium User* 」\n│\n';
    for (let x of prem) {
        teks += `│⭔ ${x}\n`;
    }
    teks += `│\n└────────────⭓\n\n*Total : ${prem.length}*`;
    shorly(teks);
}
break;
      case 'statustext':
      case 'upswtext':
      case 'upswteks': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command			
        if(!isOwner) return shorly(mess.owners);
        if(!q) return shorly('Teksnya mana?');
        await sho.sendMessage('status@broadcast', {
          text: q
        }, {
          backgroundColor: '#FF000000',
          font: 3,
          statusJidList: Object.keys(global.db.data.users)
        });
        shorly('Sukses kirim status teks!');
      }
      break
      case 'sendclear': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!isOwner) return shorly(mess.owners);
        if(!text) return shorly('Masukkan ID grup atau nomor kontak.');
        const targetId = text.trim(); // ID grup atau nomor tujuan
        const emptyMessage = '\n'.repeat(1000); // Membuat pesan kosong dengan 1000 baris
        try {
          await sho.sendMessage(targetId, {
            text: emptyMessage
          }); // Mengirimkan pesan
          shorly(`Pesan kosong sebanyak 1000 baris berhasil dikirim ke ${targetId}.`);
        } catch (error) {
          console.error(error);
          shorly('Gagal mengirim pesan kosong. Pastikan ID yang Anda masukkan benar.');
        }
        break
      }
      case 'statusvideo':
      case 'upswvideo': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!isOwner) return shorly(mess.owners);
        if(/video/.test(mime)) {
          // Unduh video dari pesan yang di-reply
          var videosw = await sho.downloadAndSaveMediaMessage(quoted);
          // Dapatkan informasi default untuk caption
          let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
          let mediaType = mime || 'Tidak diketahui';
          let sendTime = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta'
          });
          let sender = `${m.pushName || namaowner}`;
          // Buat caption default
          let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` + `🎥 *Tipe Media:* ${mediaType}\n` + `⏰ *Waktu Dikirim:* ${sendTime}\n` + `👤 *Dikirim oleh:* ${sender}`;
          // Kirim video ke status WhatsApp
          await sho.sendMessage('status@broadcast', {
            video: {
              url: videosw
            },
            caption: q ? q : defaultCaption
          }, {
            statusJidList: Object.keys(global.db.data.users)
          });
          await shorly('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
        } else {
          shorly('⚠️ Tolong reply ke video dulu ya, Cik! 🎥');
        }
      }
      break
case 'setprompt2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!text) return shorly('⚠️ Harap masukkan prompt yang ingin digunakan.\n\nContoh: setprompt Kamu adalah AI yang membantu pengguna.');
    if (!(await firely(m, mess.waits))) return;
    aiPrompt = text;
    shorly(`✅ Prompt berhasil diperbarui:\n\n${aiPrompt}`);
}
break

case 'llama': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case mengikuti nama API
    if (!text) return shorly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: llama33 Apa itu teknologi AI?');
    try {
        // Panggil API dengan prompt dan teks yang diberikan
        const apiUrl = `https://api.siputzx.my.id/api/ai/llama33?prompt=${encodeURIComponent(aiPrompt)}&text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            m.reply(response.data.data); // Balas dengan output dari AI
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'metaai': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: meta-llama Apa kabar?');
    try {
        // Panggil API tanpa prompt
        const apiUrl = `https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            m.reply(response.data.data); // Balas dengan output dari AI
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'nous': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: nous-hermes Hai, apa kabar?');
    try {
        // Panggil API dengan parameter content
        const apiUrl = `https://api.siputzx.my.id/api/ai/nous-hermes?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            m.reply(response.data.data); // Balas dengan output dari AI
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'bett': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
const tecs = 'Keren king buttonnya simple wgwgg'
const textButtons = [
  { buttonId: `${prefix}info`, buttonText: { displayText: "Info ℹ️" } },
  { buttonId: `${prefix}help`, buttonText: { displayText: "Help ❓" } },
];

betontex(sho, m.chat, tecs, textButtons, hw);
}
break
case 'bett2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
const olin = 'I love you broo🔥'
const shovid = fs.readFileSync("./shoMedia/video/sych.mp4")
const vidButtons = [
  { buttonId: `${prefix}cc`, buttonText: { displayText: "Play ▶️" } },
  { buttonId: `${prefix}pause`, buttonText: { displayText: "Pause ⏸️" } },
];

betonvid(sho, m.chat, shovid, olin, namaBot, vidButtons, hw);
}
break
case 'bett3': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
const sica = 'Halo aku adalah sho'
const shogam = fs.readFileSync("./shoMedia/image/bot.jpg")
const imgButtons = [
  { buttonId: `${prefix}about`, buttonText: { displayText: "About 👤" } },
  { buttonId: `${prefix}contact`, buttonText: { displayText: "Contact 📞" } },
];

betonimg(sho, m.chat, shogam, sica, namaowner, imgButtons, hw);
}
break
case 'claudeai': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: claude-sonnet Apa kabar?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/claude-sonnet-35?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            m.reply(response.data.data); // Balas dengan output dari AI
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'dbrxai': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: dbrx-instruct Apa kabar?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            m.reply(response.data.data); // Balas dengan output dari AI
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
case 'bensin': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  const db = loadUserFire();
  const sender = m.sender;

  // Jika user belum terdaftar
  if (!db[sender]) {
    db[sender] = {
      limit: 100,
      role: 'user',
      lastClaim: 0
    };
    saveUserFire(db);
  }

  const userRole = db[sender]?.role || 'user'; // Default role adalah 'user'

  // Role owner (unlimited fire)
  if (userRole === 'owner') {
    return shorly('Lah ngapain king? Fire lu aja unli🗿');
  }

  const result = claimFire(m); // Panggil fungsi klaim bensin
  m.reply(result);
  break;
}
case 'deepseek': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: deepseek-chat Apa kabar?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.status) {
            m.reply(response.data.data); // Balas dengan output dari AI
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'setreply': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
				if (!isOwner) return shorly(mess.owners);
	
				if (!text) {
					return shorly(
						`Ada 4 pilihan reply (s1, s2, s3, s4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} s1`
					);
				}

				if (text.startsWith('s')) {
					typereply = text; // Set tipe reply
					return shorly(mess.dones); // Berikan konfirmasi sukses
				}

				// Jika input tidak valid
				return shorly(
					`Ada 4 pilihan reply (s1, s2, s3, s4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} s1`
				);
			}
			break;
    case 'privatechatonly':
        if (!isOwner) return shorly('⚠️ Hanya owner yang bisa menggunakan perintah ini.');
        const status = args[0]?.toLowerCase();
        if (status === 'on') {
            global.privateChatOnly = true;
            global.public = true;
            global.groupOnly = false;
            shorly('✅ Mode Private Chat Only telah diaktifkan.\n❌ Mode Group telah dinonaktifkan');
        } else if (status === 'off') {
            global.privateChatOnly = false;
            global.public = true;
            shorly('❌ Mode Private Chat Only telah dinonaktifkan.\n✅ Mode public telah diaktifkan');
        } else {
            shorly('❌ Gunakan: privatechatonly [on/off]');
        }
        break;
case 'dreamshaper': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan prompt untuk membuat gambar.\n\nContoh: dreamshaper buatkan gambar kucing');
if (!(await firely(m, mess.waits))) return;
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/dreamshaper?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' }); // Mengatur response untuk menangani buffer gambar

        if (response.status === 200) {
            const buffer = Buffer.from(response.data, 'binary'); // Konversi data menjadi buffer
            sho.sendMessage(m.chat, { 
                image: buffer, 
                caption: `Gambar berhasil dibuat berdasarkan prompt: "${text}"` 
            }, { quoted: m });
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'kontol': {

    let menu = `*_👋🏻 *Hello! I am Langz Bot Version 9999.*  
Ready products like nokos, and many more! Designed with precision and care, I ensure your experience is seamless and efficient.  

╭───❐ *I N F O R M A S I* ❐───✧  
├ 📜 *Bot Name* : Langz 
├ 👨‍💻 *Owner* : Galang  
├ 🌐 *Version* : 9999  
├ 🛒 *Product* : Nokos  
╰─────────────────────✧  

💡 *Feel free to explore all my features using the menu provided!*  
🔰 Powered by Galangz _*`;

    // Tombol utama
    let buttons = [
        { buttonId: ".bot mode self", buttonText: { displayText: " Self " }, type: 1 },
        { buttonId: ".bot mode public", buttonText: { displayText: " Public " }, type: 1 }
        
    ];

    // Pesan dengan media video
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${menu}`, // Teks menu
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: "Bot Status",
                body: "🟢 Active",
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Langz",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

    // Tambahan flow actions
    const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Powered by Galangz",
                        rows: [
                            { title: " All Menu", description: " Semua Menu", id: ".allmenuu" },
                            { title: " Owner", description: " Info Owner", id: ".pepek" },
                            { title: " Produk", description: " Produk Info", id: ".produk" },
                            { title: " Donasi", description: " Donasi Dong", id: ".donasi" },
                            { title: " Group Menu", description: " Menu Group", id: ".grupmenu" },
                            { title: " Setting Bot", description: " Pengaturan Bot", id: ".bot byy" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },

];


    // Tambahkan flowActions ke buttonMessage
    buttonMessage.buttons.push(...flowActions);

    // Kirim pesan
    await sho.sendMessage(m.chat, buttonMessage, { quoted: m });
    break;
}
case 'img2text': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    try {
        // Periksa apakah file media valid (gambar)
        if (/webp|jpg|jpeg|png/.test(mime)) {
            // Menambahkan pesan loading dan menyimpan key untuk edit nanti
            if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini

            // Emoji yang akan digunakan
            const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

            // Mengirimkan reaksi secara berurutan
            for (const emoji of reactEmojis) {
                await sho.sendMessage(m.chat, {
                    react: {
                        text: emoji,
                        key: m.key
                    }
                });
            }

            // Unduh media
            let media = await quoted.download();

            // Unggah media ke Uguu.se untuk mendapatkan URL
            let anu = await UguuSe(media);
            if (!anu.url) throw 'Gagal mengunggah media ke Uguu.se!';

            // Kirim URL ke API Anda
            let response = await fetch(`https://api.siputzx.my.id/api/ai/image2text?url=${anu.url}`);
            let result = await response.json();

            // Periksa respons API
            if (result.status && result.data) {
                // Terjemahkan hasil ke Bahasa Indonesia menggunakan translate-google-api
                let translatedText = await translate(result.data, {
                    from: 'en',
                    to: 'id'
                });

                // Kirim hasil terjemahan ke pengguna
                shorly(`*Hasil Deskripsi Gambar (Bahasa Indonesia):*\n\n${translatedText}`);
            } else {
                shorly('❌ Gagal mendapatkan deskripsi gambar dari API!');
            }
        } else {
            shorly('⚠️ Kirim atau reply gambar yang ingin diubah menjadi teks!');
        }
    } catch (e) {
        // Tangani error dan kirim pesan jika ada masalah
        console.error(e);
        shorly('❌ Terjadi kesalahan saat memproses gambar!');
    }
}
break
case 'venice': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan prompt untuk AI Venice.\n\nContoh: venice Hai, bagaimana kabarmu?');
    try {
        // Panggil API dengan prompt dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/venice?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            m.reply(response.data.message); // Balas dengan output dari AI Venice
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'tesload': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    const lod = [
        "█▒▒▒▒▒▒▒▒▒▒▒ 10%",
        "████▒▒▒▒▒▒▒▒ 30%",
        "███████▒▒▒▒▒ 50%",
        "██████████▒▒ 80%",
        "████████████ 100%"
    ];

    // Kirim pesan awal dan simpan key untuk diedit
    const { key } = await sho.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' });

    // Proses loading dengan update pesan secara bertahap
    for (let i = 0; i < lod.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
        await sho.sendMessage(m.chat, { text: lod[i], edit: key });
    }

    // Setelah semua update selesai, edit menjadi "Loading selesai"
    await sho.sendMessage(m.chat, { text: '✅ Loading selesai!', edit: key });

    // Kirim pesan lain setelah loading selesai
    shorly('Proses loading telah selesai!');
}
break;
case 'addthumb2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  if (!quoted || !/image/.test(mime)) return shorly(`Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.`);
  const namaThumb2 = text.trim();
  if (!namaThumb2) return shorly(`Masukkan nama thumbnail yang ingin ditambahkan.`);
  const resultAdd2 = await addThumb2(namaThumb2, quoted, mime);
  shorly(resultAdd2);
  }
  break;
  case 'delthumb2': {
  
if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  const namaHapus2 = text.trim();
  if (!namaHapus2) return shorly(`Masukkan nama thumbnail yang ingin dihapus.`);
  const resultDel2 = delThumb2(namaHapus2);
  shorly(resultDel2);
  }
  break;
  case 'listthumb2': {
  
if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  const listResult2 = listThumb2();
  shorly(listResult2);
  }
  break;
case 'addthumb3': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  if (!quoted || !/image/.test(mime)) return shorly(`Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.`);
  const namaThumb3 = text.trim();
  if (!namaThumb3) return shorly(`Masukkan nama thumbnail yang ingin ditambahkan.`);
  const resultAdd3 = await addThumb3(namaThumb3, quoted, mime);
  shorly(resultAdd3);
  }
  break;
  case 'delthumb3': {
  
if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  const namaHapus3 = text.trim();
  if (!namaHapus3) return shorly(`Masukkan nama thumbnail yang ingin dihapus.`);
  const resultDel3 = delThumb3(namaHapus3);
  shorly(resultDel3);
  }
  break;
  case 'listthumb3': {
  
if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  const listResult3 = listThumb3();
  shorly(listResult3);
  }
  break;
case 'revoke':
			case 'resetlink': {
			
if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwners) return shorly(mess.admins);
				if (!isBotAdmins) return shorly(mess.abots);
				await sho.groupRevokeInvite(m.chat)
				.then(res => {
					shorly(`Reset Success`)
				})
				}
			break;
case 'latukam': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan konten untuk AI Latukam.\n\nContoh: latukam Hai, bagaimana kabarmu?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/latukam?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            m.reply(response.data.data); // Balas dengan output dari AI Latukam
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'gwjgbskntl': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    const repshow = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: namabot,
                newsletterJid: idsaluran,
            },
            externalAdReply: {
                showAdAttribution: true,
                title: waktuucapan,
                body: namabot,
                thumbnail: getRandomThumb3(),
                sourceUrl: gh,
                mediaType: 1,
				renderLargerThumbnail: true
            },
        },
        audio: { url: './shoMedia/audio/audio.mp3' }, // Ganti dengan path file audio
        mimetype: 'audio/mpeg', // Tipe file audio
        fileName: 'sho-song.mp3', // Nama file audio
        ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
    };

    return sho.sendMessage(m.chat, repshow, {
        quoted: hw, // Pesan yang dikutip
    });
}
break
case 'qwq': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan konten untuk API QwQ-32B.\n\nContoh: qwq Hai, bagaimana kabarmu?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/qwq-32b-preview?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            m.reply(response.data.data); // Balas dengan output dari API QwQ-32B
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'stabilityai': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan prompt untuk Stability AI.\n\nContoh: stabilityai Buatkan gambar pohon');
    if (!(await firely(m, mess.waits))) return;
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/stabilityai?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer' // Pastikan menerima data dalam bentuk buffer
        });

        // Cek respons API
        if (response.status === 200) {
            const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
            sho.sendMessage(m.chat, {
                image: imageBuffer, // Kirim gambar sebagai buffer
                caption: `🖼️ Berikut adalah gambar hasil Stability AI untuk prompt:\n\n"${text}"`
            }, { quoted: m });
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'stable': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan prompt untuk Stable Diffusion.\n\nContoh: stable-diffusion Buatkan gambar ikan');
    if (!(await firely(m, mess.waits))) return;
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer' // Terima data dalam format buffer
        });

        // Cek respons API
        if (response.status === 200) {
            const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
            sho.sendMessage(m.chat, {
                image: imageBuffer, // Kirim gambar sebagai buffer
                caption: `🖼️ Berikut adalah gambar hasil Stable Diffusion untuk prompt:\n\n"${text}"`
            }, { quoted: m });
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'flux': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan prompt untuk Flux AI.\n\nContoh: flux Buatkan gambar cyberpunk lizard');
    if (!(await firely(m, mess.waits))) return;
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer' // Terima data dalam format buffer
        });

        // Cek respons API
        if (response.status === 200) {
            const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
            sho.sendMessage(m.chat, {
                image: imageBuffer, // Kirim gambar sebagai buffer
                caption: `🖼️ Berikut adalah gambar hasil Flux AI untuk prompt:\n\n"${text}"`
            }, { quoted: m });
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'gandalf': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan prompt untuk Gandalf AI.\n\nContoh: gandalf Kamu siapa?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/gandalf?prompt=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            m.reply(response.data.data); // Kirim teks hasil dari API Gandalf
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'gemini': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command // Nama case sesuai API
    if (!text) return shorly('⚠️ Harap masukkan konten untuk Gemini Pro AI.\n\nContoh: gemini-pro Hai, bagaimana kabarmu?');
    try {
        // Panggil API dengan input dari pengguna
        const apiUrl = `https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            m.reply(response.data.data); // Kirim teks hasil dari API Gemini Pro
        } else {
            shorly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat menghubungi API.');
    }
}
break
case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'Husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
if (!(await firely(m, mess.waits))) return;
				let data
				if (/akira/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akira.json')
				if (/akiyama/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akiyama.json')
				if (/ana/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ana.json')
				if (/art/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/art.json')
				if (/asuna/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/asuna.json')
				if (/ayuzawa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ayuzawa.json')
				if (/boneka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boneka.json')
				if (/boruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boruto.json')
				if (/bts/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/bts.json')
				if (/cecan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cecan.json')
				if (/chiho/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chiho.json')
				if (/chitoge/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chitoge.json')
				if (/cogan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cogan.json')
				if (/cosplay/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplay.json')
				if (/cosplayloli/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplayloli.json')
				if (/cosplaysagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplaysagiri.json')
				if (/cyber/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cyber.json')
				if (/deidara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/deidara.json')
				if (/doraemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/doraemon.json')
				if (/eba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/eba.json')
				if (/elaina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/elaina.json')
				if (/emilia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/emilia.json')
				if (/erza/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/erza.json')
				if (/exo/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/exo.json')
				if (/femdom/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/femdom.json')
				if (/freefire/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/freefire.json')
				if (/gamewallpaper/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gamewallpaper.json')
				if (/glasses/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/glasses.json')
				if (/gremory/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gremory.json')
				if (/hacker/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hekel.json')
				if (/hestia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hestia.json')
				if (/Husbu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/Husbu.json')
				if (/inori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/inori.json')
				if (/islamic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/islamic.json')
				if (/isuzu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/isuzu.json')
				if (/itachi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itachi.json')
				if (/itori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itori.json')
				if (/jennie/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jeni.json')
				if (/jiso/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jiso.json')
				if (/justina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/justina.json')
				if (/kaga/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaga.json')
				if (/kagura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kagura.json')
				if (/kakasih/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kakasih.json')
				if (/kaori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaori.json')
				if (/cartoon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kartun.json')
				if (/shortquote/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/katakata.json')
				if (/keneki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/keneki.json')
				if (/kotori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kotori.json')
				if (/kpop/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kpop.json')
				if (/kucing/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kucing.json')
				if (/kurumi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kurumi.json')
				if (/lisa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/lisa.json')
				if (/loli2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/loli.json')
				if (/madara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/madara.json')
				if (/megumin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/megumin.json')
				if (/mikasa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikasa.json')
				if (/mikey/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikey.json')
				if (/miku/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/miku.json')
				if (/minato/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/minato.json')
				if (/mobile/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mobil.json')
				if (/motor/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/motor.json')
				if (/mountain/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mountain.json')
				if (/naruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/naruto.json')
				if (/nekonime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nekonime.json')
				if (/nezuko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nezuko.json')
				if (/onepiece/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/onepiece.json')
				if (/pentol/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pentol.json')
				if (/pokemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pokemon.json')
				if (/profil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/profil.json')
				if (/progamming/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/programming.json')
				if (/pubg/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pubg.json')
				if (/randblackpink/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randblackpink.json')
				if (/randomnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime.json')
				if (/randomnime2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime2.json')
				if (/rize/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rize.json')
				if (/rose/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rose.json')
				if (/ryujin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ryujin.json')
				if (/sagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sagiri.json')
				if (/sakura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sakura.json')
				if (/sasuke/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sasuke.json')
				if (/satanic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/satanic.json')
				if (/shina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shina.json')
				if (/shinka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinka.json')
				if (/shinomiya/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinomiya.json')
				if (/shizuka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shizuka.json')
				if (/shota/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shota.json')
				if (/space/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tatasurya.json')
				if (/technology/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/technology.json')
				if (/tejina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tejina.json')
				if (/toukachan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/toukachan.json')
				if (/tsunade/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tsunade.json')
				if (/waifu2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/waifu.json')
				if (/wallhp/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallhp.json')
				if (/wallml/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallml.json')
				if (/wallmlnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallnime.json')
				if (/yotsuba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yotsuba.json')
				if (/yuki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yuki.json')
				if (/yulibocil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yulibocil.json')
				if (/yumeko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yumeko.json')
				const response = data[Math.floor(Math.random() * data.length)]
				const buffer = await getBuffer(response);
				await sho.sendMessage(m.chat,{
					image: buffer,
					caption: `Nih ${pushname}, ${command}-nya🐬`,
					footer: namabot,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: {
								displayText: "🔄 Lanjut Lagi"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "📜 Kembali ke Menu"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			};
			break;
case 'swm': case 'steal': case 'stickerwm': case 'take':{
				if (!q) return shorly(`Where is the text?`)
				await emote('⏱️');
				const pcknm = q.split("|")[0]
				const atnm = q.split("|")[1]
				if (m.quoted.isAnimated === true) {
					sho.downloadAndSaveMediaMessage(quoted, "gifee")
					sho.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
				} else if (/image/.test(mime)) {
					let media = await sho.downloadAndSaveMediaMessage(quoted)
					let encmedia = await sho.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return shorly('Maximum 10 Seconds!')
					let media = await sho.downloadAndSaveMediaMessage(quoted)
					let encmedia = await sho.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
				} else {
					shorly(`Photo/Video?`)
				}
			}
			break;
case 'quotesanime': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command 
    if (!(await firely(m, mess.waits))) return;
    try {
        // Panggil API untuk mendapatkan data quotes
        const apiUrl = `https://otakotaku.com/quote/view/1567/melihat-harapan`;
        const response = await axios.get(apiUrl);

        // Cek respons API
        if (response.data && response.data.status) {
            // Pilih satu quote secara acak
            const quotes = response.data.data;
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

            // Kirim pesan dengan quotes acak
            sho.sendMessage(m.chat, {
                image: { url: randomQuote.gambar }, // Gambar dari karakter
                caption: `🎭 *Quotes Anime* 🎭\n\n`
                        + `📺 *Anime*: ${randomQuote.anime}\n`
                        + `🎬 *Episode*: ${randomQuote.episode}\n`
                        + `🎭 *Karakter*: ${randomQuote.karakter}\n\n`
                        + `💬 *Quote*:\n"${randomQuote.quotes}"\n\n`
                        + `🔗 *Link*: ${randomQuote.link}`
            }, { quoted: hw });
        } else {
            shorly('❌ Tidak dapat menemukan quotes anime. Coba lagi nanti.');
        }
    } catch (error) {
        console.error(error);
        shorly('❌ Terjadi kesalahan saat mengambil data quotes anime.');
    }
}
break
case 'liststore':
case 'list':
case 'store': {
    try {
        if (!isGroup) return shorly(mess.groups);

        const listStorePath = './database/liststore.json';
        let listStore = {};

        if (fs.existsSync(listStorePath)) {
            listStore = JSON.parse(fs.readFileSync(listStorePath, 'utf8'));
        }

        const keys = Object.keys(listStore[m.chat] || {});
        if (keys.length === 0) return shorly('Belum ada list message di grup');

        let teks = `Halo @${m.sender.split("@")[0]}, berikut beberapa list yang tersedia saat ini.\n\n`;
        const result = [];
        const list = [];
        keys.forEach(key => {
            result.push({
                key: key
            });
            list.push({
                header: capitalizeWords(key.split('|')[0]) + " 🛒",
                title: "klik untuk lihat produk",
                id: key
            });
        });

        for (let i of result) {
            teks += ` · ${i.key.toUpperCase()}\n`;
        }

        teks += `\n_Klik untuk melihat produk store nya_`;

        let button = [{
            "name": "single_select",
            "buttonParamsJson": `{
                "title": "Store List 🛍️",
                "sections": [{
                    "title": "Eksplorasi Semua Store Official 🔥",
                    "highlight_label": "Teratas",
                    "rows": ${JSON.stringify(list)}
                }]
            }`
        }];
        
        await sendButtonImage(
            m.chat,
            "",
            teks,
            getRandomThumb2(),
            button,
            hw
        );
    } catch (error) {
        console.log(error);
    }
    break;
}
case 'addlist': {
    if (!isGroup) return shorly(mess.groups);
    if (!isAdmins && !isOwner) return shorly(mess.admins);

    const listStorePath = './database/liststore.json';
    let listStore = {};
    if (fs.existsSync(listStorePath)) {
        listStore = JSON.parse(fs.readFileSync(listStorePath, 'utf8'));
    }

    if (!q.includes('|')) return shorly(`Gunakan format: ${prefix}addlist <key>|<response>`);
    const [key, response] = q.split('|');

    // Pastikan response tidak kosong
    if (!key || !response) return shorly(`Format salah. Gunakan: ${prefix}addlist <key>|<response>`);
    
    // Pastikan key dan response tidak kosong
    if (key.trim() === "" || response.trim() === "") {
        return shorly(`Key dan response tidak boleh kosong.`);
    }

    if (listStore[m.chat]?.[key]) return shorly(`Key *${key}* sudah ada.`);
    if (!listStore[m.chat]) listStore[m.chat] = {};

    try {
        // Menangani media (gambar/video) jika ada
        if (quoted && quoted.mtype) {
            let mime = quoted.mtype;

            if (/image/.test(mime)) {
                let media = await sho.downloadAndSaveMediaMessage(quoted);
                const url = await CatBox(media); // Mengupload ke CatBox atau penyedia lainnya
                listStore[m.chat][key] = {
                    key,
                    response,
                    img: url,  // Menyimpan URL gambar
                    video: ""
                };
                m.reply(`Sukses set list message dengan key: *${key}* dan gambar.`);

            } else if (/video/.test(mime)) {
                let media = await sho.downloadAndSaveMediaMessage(quoted);
                const url = await CatBox(media); // Mengupload ke CatBox atau penyedia lainnya
                listStore[m.chat][key] = {
                    key,
                    response,
                    img: "",
                    video: url  // Menyimpan URL video
                };
                m.reply(`Sukses set list message dengan key: *${key}* dan video.`);

            } else {
                // Jika tidak ada gambar atau video, hanya teks yang disimpan
                listStore[m.chat][key] = {
                    key,
                    response,
                    img: "",
                    video: ""
                };
                m.reply(`Sukses set list message dengan key: *${key}* dan teks.`);
            }
        } else {
            // Jika tidak ada media yang dilampirkan, hanya menyimpan teks
            listStore[m.chat][key] = {
                key,
                response,
                img: "",
                video: ""
            };
            m.reply(`Sukses set list message dengan key: *${key}* dan teks.`);
        }

        // Menyimpan perubahan ke liststore.json
        fs.writeFileSync(listStorePath, JSON.stringify(listStore, null, 2));
    } catch (error) {
        console.log(error);
        m.reply("Terjadi kesalahan saat menambahkan list.");
    }
    break;
}
case 'cecanindo': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/indonesia', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Indonesia' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Cecan Indonesia. Silakan coba lagi nanti.');
    }
    break
}
case 'dellist': {
    if (!isGroup) return shorly(mess.groups);
    if (!isAdmins && !isOwner) return shorly(mess.admins);

    const listStorePath = './database/liststore.json';
    let listStore = {};
    
    // Membaca database liststore
    if (fs.existsSync(listStorePath)) {
        listStore = JSON.parse(fs.readFileSync(listStorePath, 'utf8'));
    }

    // Jika key tidak diberikan
    if (!q) return shorly(`Gunakan format: ${prefix}dellist <key>`);

    const key = q.toLowerCase(); // Gunakan lowercase untuk pencarian yang tidak case-sensitive

    // Debug: menampilkan daftar key yang ada di liststore
    console.log("Daftar key yang ada:", Object.keys(listStore[m.chat] || {}));

    // Jika key tidak ditemukan dalam liststore
    if (!listStore[m.chat]?.[key]) return shorly(`Key *${key}* tidak ditemukan.`);

    // Hapus key dari liststore
    delete listStore[m.chat][key];

    // Simpan perubahan ke file
    fs.writeFileSync(listStorePath, JSON.stringify(listStore, null, 2));

    m.reply(`Sukses menghapus list dengan key: *${key}*`);
    break;
}
case 'updatelist': {
    if (!isGroup) return shorly(mess.groups);
    if (!isAdmins && !isOwner) return shorly(mess.admins);

    const listStorePath = './database/liststore.json';
    let listStore = {};
    if (fs.existsSync(listStorePath)) {
        listStore = JSON.parse(fs.readFileSync(listStorePath, 'utf8'));
    }

    if (!q.includes('|')) return shorly(`Gunakan format: ${prefix}dellist <key>|<response>`);
    const [key, response] = q.split('|');
    if (!key || !response) return shorly(`Format salah. Gunakan: ${prefix}liststore update <key>|<response>`);

    if (!listStore[m.chat]?.[key]) return shorly(`Key *${key}* tidak ditemukan.`);
    listStore[m.chat][key].response = response;

    fs.writeFileSync(listStorePath, JSON.stringify(listStore, null, 2));
    m.reply(`Sukses memperbarui list dengan key: *${key}*`);
    break;
}
case 'bluearchive': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/blue-archive', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Blue Archive' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Blue Archive. Silakan coba lagi nanti.');
    }
    break
}
case 'cecanchina': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/china', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan China' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Cecan China. Silakan coba lagi nanti.');
    }
    break
}
case 'cecanjapan': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/japan', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Japan' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Cecan Japan. Silakan coba lagi nanti.');
    }
    break
}
case 'cecankorea': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/korea', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Korea' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Cecan Korea. Silakan coba lagi nanti.');
    }
    break
}
case 'cecanthai': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/thailand', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Thailand' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Cecan Thailand. Silakan coba lagi nanti.');
    }
    break
}
case 'cecanviet': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/vietnam', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Cecan Vietnam' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Cecan Vietnam. Silakan coba lagi nanti.');
    }
    break
}
case 'cats': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/cats', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar kucing lucu' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar kucing. Silakan coba lagi nanti.');
    }
    break
}
case 'neko': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/neko', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Neko' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Neko. Silakan coba lagi nanti.');
    }
    break
}
case 'waifu': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    try {
        let res = await axios.get('https://api.siputzx.my.id/api/r/waifu', { responseType: 'arraybuffer' });
        sho.sendMessage(m.chat, { image: res.data, caption: 'Berikut gambar Waifu' }, { quoted: hw });
    } catch (error) {
        shorly('Gagal mengambil gambar Waifu. Silakan coba lagi nanti.');
    }
    break
}
      case 'statusimg':
      case 'statusimage':
      case 'upswimg': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if(/image/.test(mime)) {
          // Unduh gambar dari pesan yang di-reply
          var imagesw = await sho.downloadAndSaveMediaMessage(quoted);
          // Dapatkan informasi default untuk caption
          let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
          let mediaType = mime || 'Tidak diketahui';
          let sendTime = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta'
          });
          let sender = `${m.pushName || namaowner}`;
          // Buat caption default
          let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` + `🖼️ *Tipe Media:* ${mediaType}\n` + `⏰ *Waktu Dikirim:* ${sendTime}\n` + `👤 *Dikirim oleh:* ${sender}`;
          // Kirim gambar ke status WhatsApp
          await sho.sendMessage('status@broadcast', {
            image: {
              url: imagesw
            },
            caption: q ? q : defaultCaption
          }, {
            statusJidList: Object.keys(global.db.data.users)
          });
          await shorly('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
        } else {
          shorly('⚠️ Tolong reply ke gambar dulu ya, Cik! 🖼️');
        }
      }
      break
      case 'hwaifu': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
				if (!isVip) return shorly(mess.vips);
				if (!(await firely(m, mess.waits))) return;
				const data = await fetchJson(`https://api.waifu.pics/nsfw/waifu`);
				await sho.sendMessage(m.chat, {
					image: { url: data.url },
					caption: `Dasar ${pushname}, otak sagne🗿`,
					footer: `${namabot} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: hw });
			}
			break;
case 'trap': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
if (!isVip) return shorly(mess.vips);
				if (!(await firely(m, mess.waits))) return;
				const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
				await sho.sendMessage(m.chat, {
					image: { url: data.url },
					caption: `Dasar ${pushname}, otak sagne🗿`,
					footer: `${namabot} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: hw });
			}
			break;

			case 'blowjob': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
			if (!isVip) return shorly(mess.vips);
				if (!(await firely(m, mess.waits))) return;
				const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
				await sho.sendMessage(m.chat, {
					image: { url: data.url },
					caption: `Dasar ${pushname}, otak sagne🗿`,
					footer: `${namabot} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: hw });
			}
			break;

			case 'hentai': 
			case 'hentai-video': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
			if (!isVip) return shorly(mess.vips);
				if (!(await firely(m, mess.waits))) return;
				const result = await hentai();
				await sho.sendMessage(m.chat, {
					video: { url: result[0].video_1 },
					caption: `Woilah dasar ${puahname}, otak sagne`,
					footer: `${namabot} • Gunakan fitur ini dengan bijak dan bertanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: hw });

			}
			break;
			case 'hneko': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
				if (!isVip) return shorly(mess.vips);
				if (!(await firely(m, mess.waits))) return;
				const data = await fetchJson(`https://api.waifu.pics/nsfw/neko`);
				await sho.sendMessage(m.chat, {
					image: { url: data.url },
					caption: `Dasar ${pushname}, otak sagne🗿`,
					footer: `${namabot} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true,
				}, { quoted: hw });
			}
			break;
      case 'rvo':
      case 'readviewonce': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!m.quoted) return shorly(`Reply to view once message`)
        if(m.quoted.mtype !== 'viewOnceMessageV2') return shorly(`This is not a view once message`)
        if (!(await firely(m, mess.waits))) return;
        let msg = m.quoted.message
        let type = Object.keys(msg)[0]
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
        let buffer = Buffer.from([])
        for await (const chunk of media) {
          buffer = Buffer.concat([buffer, chunk])
        }
        if(/video/.test(type)) {
          return sho.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
        } else if(/image/.test(type)) {
          return sho.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
        }
      }
      break
      //[ *CASE AI JOKO SIJAWA* ]
			case "joko": {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
				if (!text) return shorly("mau nanya apa sama joko\nExampel: .joko nama kamu siapa?")
				await sho.sendMessage(m.chat, {
					mimetype: 'audio/mp4',
					ptt: true,
					audio: {
						url: "https://api.siputzx.my.id/api/tools/tts?voice=jv-ID-DimasNeural&rate=0&pitch=0&volume=0&text=" + (await axios.get("https://api.siputzx.my.id/api/ai/joko?content=" + text)).data.data
					}
				}, {
					quoted: m
				});
			}
			break
      case 'statusaudio':
      case 'upswaudio': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if(/audio/.test(mime)) {
          var audiosw = await sho.downloadAndSaveMediaMessage(quoted);
          await sho.sendMessage('status@broadcast', {
            audio: {
              url: audiosw
            },
            mimetype: 'audio/mp4',
            ptt: true
          }, {
            backgroundColor: '#FF000000',
            statusJidList: Object.keys(global.db.data.users)
          });
          await shorly('Sukses kirim status audio!');
        } else {
          shorly('Reply audio dulu, ya!');
        }
      }
      break
      case 'contact': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        await sho.sendMessage(m.chat, {
          contacts: {
            displayName: "Owner",
            contacts: contacts
          }
        }, {
          quoted: hw
        });
      }
      break
      case 'getcontact':
      case 'getcon': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return shorly(mess.groups);
        if(!(isAdmins || isOwner)) return shorly(mess.admins); // Hanya admin atau pemilik yang bisa
        bigpp = await sho.sendMessage(m.chat, {
          text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
        }, {
          quoted: m,
          ephemeralExpiration: 86400
        });
        await sleep(1000);
        sho.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
      }
      break
      case 'savecontact':
      case 'svcontact': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return shorly(mess.groups);
        if(!(isAdmins || isOwner)) return shorly(mess.admins); // Hanya admin atau pemilik yang bisa
        let cmiggc = await sho.groupMetadata(m.chat);
        let orgiggc = participants.map(a => a.id);
        vcard = '';
        noPort = 0;
        for(let a of cmiggc.participants) {
          vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
        }
        let nmfilect = './contacts.vcf';
        shorly('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
        require('fs').writeFileSync(nmfilect, vcard.trim());
        await sleep(2000);
        sho.sendMessage(m.chat, {
          document: require('fs').readFileSync(nmfilect),
          mimetype: 'text/vcard',
          fileName: 'Contact.vcf',
          caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
        }, {
          ephemeralExpiration: 86400,
          quoted: m
        });
        require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
      }
      break
      case 'upfire': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return shorly(mess.owners);
    if (args.length < 2) return shorly(`⚠️ Gunakan format:\n\n.upfire @user/jid jumlah\n\nContoh:\n.upfire @user 100\n.upfire 6288888888888 100`);

    let target;
    let jumlah = parseInt(args[1]);

    // Cek apakah menggunakan tag atau nomor
    if (m.mentionedJid.length !== 0) {
        target = m.mentionedJid[0]; // Jika pakai tag
    } else if (/^\d+$/.test(args[0])) {
        target = args[0] + '@s.whatsapp.net'; // Jika pakai nomor
    } else {
        return shorly('⚠️ Masukkan nomor atau tag user yang valid!');
    }

    if (isNaN(jumlah) || jumlah <= 0) return shorly('⚠️ Masukkan jumlah limit yang valid!');

    const db = loadUserFire();

    // Tambahkan limit
    if (!db[target]) {
        db[target] = { limit: jumlah, role: 'user' };
    } else {
        db[target].limit += jumlah;
    }

    saveUserFire(db);
    shorly(`✅ Berhasil menambahkan ${jumlah} limit untuk @${target.split('@')[0]}`, { mentions: [target] });
}
break;

case 'delfire': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return shorly(mess.owners);
    if (m.mentionedJid.length === 0) return shorly(`⚠️ Tag user yang ingin direset limitnya!\n\nContoh: .delfire @user`);

    let target = m.mentionedJid[0];
    const db = loadUserFire();

    if (!db[target]) return shorly(`⚠️ User belum memiliki data limit!`);
    
    db[target].limit = 0;
    saveUserFire(db);

    shorly(`✅ Limit user @${target.split('@')[0]} berhasil direset ke 0!`, { mentions: [target] });
}
break;

case 'listuserfire':
case 'cekfireuser':
case 'cekuserfire':
case 'listfireuser': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return shorly(mess.owners);
  try {
    const db = loadUserFire();
    const userList = Object.entries(db)
      .map(([key, value]) => {
        const userNumber = key.split('@')[0]; // Mengambil nomor saja
        return `Nomor: ${userNumber}\n- Role: ${value.role}\n- Register: ${value.register}\n- Limit: ${value.limit}`;
      })
      .join('\n\n');

    if (userList) {
      reply(`📋 *Daftar Pengguna Terdaftar:*\n\n${userList}`);
    } else {
      reply('⚠️ Tidak ada pengguna yang terdaftar.');
    }
  } catch (error) {
    console.error(error);
    reply('⚠️ Terjadi kesalahan saat memproses data.');
  }
  break;
}

case 'deluser': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return shorly(mess.owners);
  try {
    const userNumber = args[0]; // Mengambil nomor pengguna dari input
    if (!userNumber) {
      reply('⚠️ Masukkan nomor pengguna yang ingin dihapus.\n\nContoh: deluser 628123456789');
      break;
    }

    const db = loadUserFire();
    const userId = `${userNumber}@s.whatsapp.net`; // Format nomor ke ID lengkap
    if (db[userId]) {
      delete db[userId];
      saveUserFire(db);
      reply(`✅ Pengguna dengan nomor *${userNumber}* berhasil dihapus.`);
    } else {
      reply(`⚠️ Pengguna dengan nomor *${userNumber}* tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    reply('⚠️ Terjadi kesalahan saat menghapus pengguna.');
  }
  break;
}
case 'repo': case 'repository': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!text || !text.includes('/')) {
					return shorly(`gunakan format ini ya: *${prefix + command} username/repository*\n\nContoh: *${prefix + command} WhiskeySockets/Baileys*`);
				}
				const [username, repoName] = text.split('/');
				try {
					const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
					if (response.status === 200) {
						const repoData = response.data
						const formattedInfo = `*Repository Name :* ${repoData.name}\n*Description :* ${repoData.description}\n*Owner :* ${repoData.owner.login}\n*Stars :* ${repoData.stargazers_count}\n*Forks :* ${repoData.forks_count}\n*URL :* ${repoData.html_url}\n`;
						shorly(formattedInfo);
					} else {
						await shorly(`Unable to fetch repository information`)
					}
				} catch (error) {
					console.error(error)
					await shorly(`Repository currently not available `)
				}
			}
			break
case 'cekfire': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    const db = loadUserFire();

    let target;

    // Jika pakai tag
    if (m.mentionedJid[0]) {
        target = m.mentionedJid[0];
    } 
    // Jika input berupa nomor
    else if (args[0]) {
        target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } 
    // Jika tidak ada input, cek limit diri sendiri
    else {
        target = m.sender;
    }

    // Cek apakah user sudah terdaftar di database
    if (!db[target]) {
        return sho.sendTextWithMentions(m.chat, `🔥 User @${target.split('@')[0]} belum memiliki limit.`, fgclink)
    }

    let role = db[target].role;
    let limit = db[target].limit;

    let message = `🔥 *Cek Fire Limit*\n\n`;
    message += `👤 User: @${target.split('@')[0]}\n`;
    message += `📛 Role: ${role}\n`;
    message += `🔥 Sisa Limit: ${limit === -1 ? '∞' : limit}\n`;

    sho.sendTextWithMentions(m.chat, message, fgclink)
}
break;
case 'cyus': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
shorly('anjay baru kah bangg??')
}
break
case 'imdb': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
				if (!text) return shorly(`🎬 *Judul film atau serialnya mana, Kak?*\n\nContoh:\n${prefix}${command} Inception`);

				try {
				if (!(await firely(m, mess.waits))) return;
					let { data } = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);

					if (data.Response === 'False') {
						return shorly(`❌ *Film atau serial tidak ditemukan!* Coba cek lagi judulnya ya, Kak.`);
					}

					let imdbInfo = `🎬 *Judul:* ${data.Title}\n`;
					imdbInfo += `📅 *Tahun:* ${data.Year}\n`;
					imdbInfo += `⭐ *Rating:* ${data.Rated}\n`;
					imdbInfo += `📆 *Rilis:* ${data.Released}\n`;
					imdbInfo += `⏳ *Durasi:* ${data.Runtime}\n`;
					imdbInfo += `🌀 *Genre:* ${data.Genre}\n`;
					imdbInfo += `👨‍💼 *Sutradara:* ${data.Director}\n`;
					imdbInfo += `✍️ *Penulis:* ${data.Writer}\n`;
					imdbInfo += `👥 *Aktor:* ${data.Actors}\n`;
					imdbInfo += `📖 *Plot:* ${data.Plot}\n`;
					imdbInfo += `🌐 *Bahasa:* ${data.Language}\n`;
					imdbInfo += `🌍 *Negara:* ${data.Country}\n`;
					imdbInfo += `🏆 *Penghargaan:* ${data.Awards}\n`;
					imdbInfo += `💵 *Box Office:* ${data.BoxOffice || '-'}\n`;
					imdbInfo += `🏙️ *Produksi:* ${data.Production || '-'}\n`;
					imdbInfo += `🌟 *IMDb Rating:* ${data.imdbRating}\n`;
					imdbInfo += `✅ *IMDb Votes:* ${data.imdbVotes}\n`;

					await sho.sendMessage(m.chat, {
						image: { url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster' },
						caption: imdbInfo,
					}, { quoted: m });

					shorly(`✅ *Berhasil menampilkan informasi film!*`);
				} catch (err) {
					console.error(err);
					shorly(`❌ *Terjadi kesalahan saat mencari film!* 😭\n${err.message || err}`);
				}
			}
			break;
			case 'pinterestdl': {
    if (!isRegistered(m)) {
        return sendRegister(sho, m, prefix, namabot);
    }
    updatePopularCommand(command);

    if (!text) return shorly(`Example: ${prefix + command} url_pinterest`);
    const pinterestRegex = /(?:https?:\/\/)?(?:www\.)?pinterest\.(com|co\.[a-z]{2})\/.+|pin\.it\/.+/;
    if (!pinterestRegex.test(text)) return shorly('❌ Url tidak mengandung tautan Pinterest yang valid!');

    try {
        // Panggil REST API untuk mendapatkan data Pinterest
        const response = await fetch(`https://api.siputzx.my.id/api/d/pinterest?url=${encodeURIComponent(text)}`);
        const data = await response.json();

        if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini

        // Periksa apakah API berhasil mengembalikan data
        if (data && data.status && data.data) {
            const media = data.data; // Ambil data dari respons API
            await sho.sendMessage(m.chat, {
                image: { url: media.url }, // Gambar dari URL yang diberikan API
                caption: `*✅ Gambar berhasil diunduh dari Pinterest!*\n\n📅 *Dibuat Pada:* ${media.created_at}\n🔗 *Url:* ${text}`,
                footer: namabot,
            }, { quoted: m });
        } else {
            shorly('❌ Tidak ada konten yang ditemukan untuk tautan ini!');
        }
    } catch (e) {
        console.error('Error saat memproses URL Pinterest:', e);
        shorly('❌ Gagal memproses tautan Pinterest! Detail error: ' + e.message);
    }
}
break;
/*
        * ANIME MENU CUMA BUAT NAMBAH CASE DOANK
        * YURINS, SHO, YUDA, SYCHYY, SYCHEE
*/
case 'anichindetail':
case 'anichindet': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    const url = args[0]; // Ambil URL dari argumen
    if (!url) {
        reply('⚠️ Harap masukkan URL. Contoh: anichindtl https://anichin.forum/renegade-immortal-episode-69-subtitle-indonesia');
        
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/anichin-detail?url=${encodeURIComponent(url)}`;
    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (!status) {
            reply('⚠️ Gagal mengambil data.');
            
        }

        const detailText = `🎥 *Detail Anime*\n\n🎬 *Judul:* ${data.title}\n📅 *Rilis:* ${data.released}\n🌟 *Rating:* ${data.rating}\n🎭 *Genre:* ${data.genres.join(', ')}\n🏢 *Studio:* ${data.studio}\n📺 *Jaringan:* ${data.network}\n⏱ *Durasi:* ${data.duration}\n🌍 *Negara:* ${data.country}\n🔖 *Tipe:* ${data.type}\n📂 *Status:* ${data.status}\n📜 *Sinopsis:* ${data.synopsis || 'Tidak tersedia'}\n`;

        const success = shorly(detailText);
        if (success) {
            sho.sendMessage(m.chat, {
                image: { url: data.thumbnail },
                caption: detailText,
            }, { quoted: m });
        }
    } catch (error) {
        reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}

case 'anichindl': 
case 'anichindownload': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    const url = args[0]; // Ambil URL dari argumen
    if (!url) {
        reply('⚠️ Harap masukkan URL. Contoh: anichindl https://anichin.forum/renegade-immortal-episode-69-subtitle-indonesia');
        
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/anichin-download?url=${encodeURIComponent(url)}`;
    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (!status) {
            reply('⚠️ Gagal mengambil data.');
            
        }

        let downloadLinks = '🔗 *Link Download*\n\n';
        data.forEach((item) => {
            downloadLinks += `🎥 *Resolusi:* ${item.resolution}\n`;
            item.links.forEach((link) => {
                downloadLinks += `🌐 *Host:* ${link.host}\n🔗 ${link.link}\n\n`;
            });
        });

        const success = shorly(downloadLinks);
        if (success) {
            reply(downloadLinks);
        }
    } catch (error) {
        reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}

case 'anichinepisode': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    const url = args[0]; // Ambil URL dari argumen
    if (!url) {
        reply('⚠️ Harap masukkan URL. Contoh: epsanichin https://anichin.forum/renegade-immortal');
        
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/anichin-episode?url=${encodeURIComponent(url)}`;
    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (!status) {
            reply('⚠️ Gagal mengambil data.');
            
        }

        let episodes = '🎬 *Daftar Episode*\n\n';
        data.forEach((episode) => {
            episodes += `📼 *Episode:* ${episode.episodeNumber}\n🎞 *Judul:* ${episode.title}\n📅 *Rilis:* ${episode.releaseDate}\n🔗 *Tautan:* ${episode.link}\n\n`;
        });

        const success = shorly(episodes);
        if (success) {
            reply(episodes);
        }
    } catch (error) {
        reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'anichinsearch': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    if (!text) return reply('Masukkan query pencarian, contoh: .anichinsearch ular');
    
    let url = `https://api.siputzx.my.id/api/anime/anichin-search?query=${text}`;
    try {
        let response = await axios.get(url);
        let result = response.data;

        if (result.status && result.data.length > 0) {
            let caption = '*Hasil Pencarian Anichin:*\n\n';
            result.data.forEach((anime, index) => {
                caption += `🔹 *${index + 1}. ${anime.title}*\n`;
                caption += `   - Tipe: ${anime.type}\n`;
                caption += `   - Status: ${anime.status}\n`;
                caption += `   - Link: ${anime.link}\n\n`;
            });

            sho.sendMessage(from, {
                text: caption,
                contextInfo: {
                    externalAdReply: {
                        title: 'Anichin Search',
                        body: 'Powered by Sho Botz',
                        thumbnail: await getBuffer(result.data[0].image),
                        sourceUrl: result.data[0].link
                    }
                }
            }, { quoted: m });
        } else {
            reply('Anime tidak ditemukan, coba dengan query lain.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    break;
}
case 'aurataildetail': 
case 'aurataildet': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    if (!text) return reply('Masukkan URL anime secara manual, contoh: .aurataildetail https://auratail.vip/the-war-of-cards');
if (!(await firely(m, mess.waits))) return;
    // URL API dengan input manual
    let apiUrl = `https://api.siputzx.my.id/api/anime/auratail-detail?url=${text}`;
    try {
        let response = await axios.get(apiUrl);
        let result = response.data;

        if (result.status && result.data) {
            const { title, image, status, studio, episodes, duration, type, releaseYear, producers, genres, synopsis } = result.data;

            // Format output untuk pengguna
            let caption = `*🎥 Detail Anime*\n\n`;
            caption += `📌 *Judul*: ${title}\n`;
            caption += `📀 *Tipe*: ${type}\n`;
            caption += `📅 *Tahun Rilis*: ${releaseYear}\n`;
            caption += `📡 *Studio*: ${studio || 'Tidak diketahui'}\n`;
            caption += `📜 *Status*: ${status}\n`;
            caption += `🎞️ *Jumlah Episode*: ${episodes || 'Tidak tersedia'}\n`;
            caption += `⏱️ *Durasi*: ${duration || 'Tidak tersedia'}\n`;
            caption += `🏢 *Produser*: ${producers || 'Tidak tersedia'}\n`;
            caption += `🎭 *Genre*: ${genres || 'Tidak diketahui'}\n\n`;
            caption += `📖 *Sinopsis*: ${synopsis || 'Tidak tersedia'}\n\n`;
            caption += `🔗 [Link Anime](https://auratail.vip/the-war-of-cards)\n`;

            // Kirim pesan dengan detail anime
            sho.sendMessage(from, {
                image: { url: image },
                caption: caption,
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: 'Detail Anime Auratail',
                        thumbnail: await getBuffer(image),
                        sourceUrl: text
                    }
                }
            }, { quoted: m });
        } else {
            reply('Anime tidak ditemukan, pastikan URL yang diberikan valid.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    break;
}
case 'animelast': 
case 'animelatest': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    const apiUrl = 'https://api.siputzx.my.id/api/anime/latest';
    const page = parseInt(args[0]) || 1; // Halaman saat ini, default halaman 1

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (!status) {
            reply('⚠️ Gagal mengambil data anime terbaru.');
            
        }

        if (page > data.length || page < 1) {
            reply('⚠️ Halaman tidak ditemukan atau sudah mencapai akhir daftar.');
            
        }

        const anime = data[page - 1]; // Ambil anime berdasarkan halaman
        const caption = `🎥 *Anime Terbaru*\n\n🎬 *Judul:* ${anime.title}\n📺 *Episode:* ${anime.episode}\n🔖 *Tipe:* ${anime.type}\n🌐 *URL:* ${anime.url}\n\n📄 *Halaman:* ${page} dari ${data.length}`;

        // Tombol Next jika masih ada anime berikutnya
        const buttons = [];
        if (page < data.length) {
            buttons.push({
                buttonId: `${prefix}animelast ${page + 1}`,
                buttonText: { displayText: "Next ➡️" },
                type: 1
            });
        }

        // Kirim pesan dengan thumbnail dan tombol
        sho.sendMessage(m.chat, {
            image: { url: anime.thumbnail }, // Gambar dari data API
            caption: caption,
            footer: namabot,
            buttons: buttons,
            viewOnce: true,
        }, { quoted: m });

    } catch (error) {
        reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'aurataillast': 
case 'aurataillatest': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    const apiUrl = 'https://api.siputzx.my.id/api/anime/auratail-latest';
    const page = parseInt(args[0]) || 1; // Halaman saat ini, default halaman 1

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (!status) {
            reply('⚠️ Gagal mengambil data anime terbaru.');
            
        }

        if (page > data.length || page < 1) {
            reply(`⚠️ Halaman tidak valid. Total halaman tersedia: ${data.length}`);
            
            
        }

        const anime = data[page - 1]; // Ambil anime berdasarkan halaman
        const caption = `*🎥 Anime Terbaru*\n\n`
            + `🎬 *Judul*: ${anime.title}\n`
            + `📺 *Episode*: ${anime.episode}\n`
            + `🌐 *Link*: [Tonton di sini](${anime.link})\n\n`
            + `📄 *Halaman*: ${page} dari ${data.length}`;

        // Tombol untuk navigasi halaman berikutnya
        const buttons = [];
        if (page < data.length) {
            buttons.push({
                buttonId: `${prefix}aurataillast ${page + 1}`,
                buttonText: { displayText: 'Next ➡️' },
                type: 1
            });
        }

        // Kirim pesan dengan thumbnail dan tombol navigasi
        sho.sendMessage(m.chat, {
            image: { url: anime.image },
            caption: caption,
            footer: namabot,
            buttons: buttons,
            viewOnce: true,
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'auratailsearch': 
case 'ats': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!text) {
        reply('Silakan masukkan judul anime yang ingin dicari. Contoh: `.auratailsearch war`');
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/auratail-search?query=${encodeURIComponent(text)}`;
    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status && data.length > 0) {
            let hasil = '🎥 *Hasil Pencarian:*\n\n';
            for (const anime of data) {
                hasil += `🔹 *Judul:* ${anime.title}\n`;
                hasil += `📡 *Status:* ${anime.status}\n`;
                hasil += `🔗 *Link:* ${anime.link})\n\n`;
            }

            sho.sendMessage(m.chat, {
                text: hasil,
                contextInfo: {
                    externalAdReply: {
                        title: 'Auratail Anime Search',
                        body: 'Klik tautan untuk menonton!',
                        thumbnail: await getBuffer(data[0].image),
                        sourceUrl: apiUrl
                    }
                }
            }, { quoted: m });
        } else {
            reply('Anime tidak ditemukan. Coba gunakan kata kunci lain.');
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data:', error.message);
        reply('Terjadi kesalahan saat mencari anime. Silakan coba lagi nanti.');
    }
    break;
}
case 'auratailpopular': 
case 'auratailpop': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    const apiUrl = 'https://api.siputzx.my.id/api/anime/auratail-popular';

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (!status || data.length === 0) {
            reply('⚠️ Gagal mengambil data anime populer.');
            
        }

        // Membuat daftar anime populer
        let caption = '*🎥 Anime Populer*\n\n';
        data.forEach((anime, index) => {
            caption += `🔹 *${index + 1}. ${anime.title}*\n`;
            caption += `🌐 ${anime.link}\n\n`;
        });

        // Kirim pesan
        sho.sendMessage(m.chat, {
            text: caption,
            footer: namabot,
            contextInfo: {
                externalAdReply: {
                    title: 'Auratail Popular Anime',
                    body: 'Daftar anime populer dari Auratail',
                    sourceUrl: apiUrl
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'animpopular': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
if (!(await firely(m, mess.waits))) return;
    const apiUrl = 'https://api.siputzx.my.id/api/anime/anichin-popular';
    const page = parseInt(args[0]) || 1; // Halaman saat ini, default halaman 1

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (!status) {
            reply('⚠️ Gagal mengambil data anime populer.');
            
        }

        if (page > data.length || page < 1) {
            reply('⚠️ Halaman tidak ditemukan atau sudah mencapai akhir daftar.');
            
        }

        const anime = data[page - 1]; // Ambil anime berdasarkan halaman
        const caption = `🎥 *Anime Populer*\n\n🎬 *Judul:* ${anime.title}\n📺 *Episode:* ${anime.episode}\n🔖 *Tipe:* ${anime.type}\n🌐 *URL:* ${anime.link}\n\n📄 *Halaman:* ${page} dari ${data.length}`;

        // Tombol Next jika masih ada anime berikutnya
        const buttons = [];
        if (page < data.length) {
            buttons.push({
                buttonId: `${prefix}animpopular ${page + 1}`,
                buttonText: { displayText: "Next ➡️" },
                type: 1
            });
        }

        // Kirim pesan dengan gambar dan tombol
        sho.sendMessage(m.chat, {
            image: { url: anime.image }, // Gambar dari data API
            caption: caption,
            footer: namabot,
            buttons: buttons,
            viewOnce: true,
        }, { quoted: m });

    } catch (error) {
        reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'komikindodetail': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    if (!text) {
        reply('Silakan masukkan URL komik. Contoh: `.komikindodetail https://komikindo.pw/komik/550578-solo-leveling`');
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/komikindo-detail?url=${encodeURIComponent(text)}`;
    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status) {
            const {
                title,
                altTitle,
                status: komikStatus,
                author,
                genre,
                description,
                imageUrl,
                chapters
            } = data;

            let hasil = `📖 *Detail Komik:*\n\n`;
            hasil += `🔹 *Judul:* ${title.trim()}\n`;
            hasil += `🔸 *Judul Alternatif:* ${altTitle}\n`;
            hasil += `📡 *Status:* ${komikStatus}\n`;
            hasil += `✍️ *Penulis:* ${author}\n`;
            hasil += `🏷️ *Genre:* ${genre.join(', ')}\n\n`;
            hasil += `📝 *Deskripsi:*\n${description.trim()}\n\n`;
            hasil += `📚 *Daftar Chapter Terbaru:*\n`;
            chapters.slice(0, 10).forEach((chapter, i) => {
                hasil += `${i + 1}. [${chapter.chapter.trim()}](${chapter.url})\n`;
            });

            hasil += `\n🔗 Link: ${text}`;

            sho.sendMessage(m.chat, {
                image: { url: imageUrl },
                caption: hasil
            }, { quoted: m });
        } else {
            reply('Komik tidak ditemukan. Pastikan URL yang Anda masukkan benar.');
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data:', error.message);
        reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
    }
    break;
}
case 'komikindodownload': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    if (!text) {
        reply('Silakan masukkan URL chapter komik. Contoh: `.komikindodownload https://komikindo.pw/solo-leveling-chapter-1`');
        
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/komikindo-download?url=${encodeURIComponent(text)}`;
    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status && Array.isArray(data) && data.length > 0) {
            reply('📚 *Menyiapkan carousel untuk gambar...*');

            // Batasi jumlah gambar di carousel (misalnya 10 gambar pertama)
            const carouselImages = data.slice(0, 50);
            const carouselCards = await Promise.all(carouselImages.map(async (url, index) => ({
                header: {
                    title: `Halaman ${index + 1}`,
                    hasMediaAttachment: true,
                    imageMessage: (await generateWAMessageContent({
                        image: { url }
                    }, { upload: sho.waUploadToServer })).imageMessage
                },
                body: {
                    text: `Gambar dari chapter komik yang Anda minta.`
                },
                footer: {
                    text: `Halaman ${index + 1}`
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Lihat Gambar",
                            url
                        })
                    }]
                }
            })));

            // Buat pesan carousel
            const carouselMessage = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: {
                                text: `📖 Gambar untuk chapter komik Anda.\n\nURL: ${text}`
                            },
                            footer: {
                                text: "Komikindo Bot by Sych"
                            },
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: carouselCards
                            })
                        })
                    }
                }
            }, {});

            // Kirim carousel
            await sho.relayMessage(m.chat, carouselMessage.message, { messageId: carouselMessage.key.id });
        } else {
            reply('Tidak dapat menemukan gambar untuk chapter ini. Pastikan URL yang Anda masukkan benar.');
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat membuat carousel:', error.message);
        reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
    }
    break;
}
case 'samehadakurelease': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    if (!text) {
        reply('Gunakan perintah dengan format: `.samehadakurelease <hari> <index>`.\nContoh: `.samehadakurelease sunday 0`');
        
    }
if (!(await firely(m, mess.waits))) return;
    const [day, indexText] = text.split(' ');
    const index = parseInt(indexText) || 0; // Default index 0 jika tidak ada input
    const apiUrl = `https://api.siputzx.my.id/api/anime/samehadaku/release`;

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status && data[day] && Array.isArray(data[day])) {
            const releases = data[day];
            const release = releases[index];

            if (!release) {
                reply(`Tidak ada data untuk hari "${day}" pada index ${index}.`);
                
            }

            // Format pesan
            const message = `
🎥 *${release.title}*
📅 Tanggal Rilis: ${release.date}
📜 Genre: ${release.genre}
⭐ Skor: ${release.east_score}
📂 Tipe: ${release.east_type}
🕒 Jadwal: ${release.east_schedule} ${release.east_time}
🔗 Link: ${release.url}
            `.trim();

            // Tombol Next
            const buttons = [];
            if (index + 1 < releases.length) {
                buttons.push({
                    buttonId: `.samehadakurelease ${day} ${index + 1}`,
                    buttonText: { displayText: "Next ➡️" },
                });
            }

            // Kirim pesan
            sho.sendMessage(m.chat, {
                image: { url: release.featured_img_src },
                caption: message,
                footer: "Samehadaku • Sho Bot",
                buttons,
                viewOnce: true,
            }, { quoted: m });
        } else {
            reply(`Tidak ada data untuk hari "${day}". Pastikan Anda memasukkan hari yang benar.`);
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
    }
    break;
}
case 'komikindosearch': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    if (!text) {
        reply('Silakan masukkan judul komik yang ingin dicari. Contoh: `.komikindosearch solo leveling`');
m
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/komikindo-serach?query=${encodeURIComponent(text)}`;
    const page = parseInt(args[0]) || 1; // Halaman saat ini, default halaman 1

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (!status || data.length === 0) {
            reply('⚠️ Tidak ada komik yang ditemukan.');
            
        }

        if (page > data.length || page < 1) {
            reply('⚠️ Halaman tidak ditemukan atau sudah mencapai akhir daftar.');
        }

        const komik = data[page - 1]; // Ambil komik berdasarkan halaman
        const caption = `📚 *Pencarian Komik*\n\n📖 *Judul:* ${komik.title}\n🌟 *Rating:* ${komik.rating}\n🔗 *URL:* ${komik.href}\n\n📄 *Halaman:* ${page} dari ${data.length}`;

        // Tombol navigasi
        const buttons = [];
        if (page < data.length) {
            buttons.push({
                buttonId: `${prefix}menu`,
                buttonText: { displayText: "MENU 📝" },
                type: 1
            });
        }
        if (page > 1) {
            buttons.push({
                buttonId: `${prefix}komikindosearch ${text} ${page - 1}`,
                buttonText: { displayText: "⬅️ Previous" },
                type: 1
            });
        }

        // Kirim pesan dengan gambar dan tombol
        sho.sendMessage(m.chat, {
            image: { url: komik.image }, // Gambar dari data API
            caption: caption,
            footer: namabot,
            buttons: buttons,
            viewOnce: true,
        }, { quoted: m });

    } catch (error) {
        reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}
case 'otakudesuongoing': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    if (!text) {
        reply('Gunakan perintah dengan format: `.otakudesuongoing <halaman>`.\nContoh: `.otakudesuongoing 1`');
    }
if (!(await firely(m, mess.waits))) return;
    const page = parseInt(text) || 1; // Halaman awal
    const itemsPerPage = 5; // Jumlah anime per halaman
    const apiUrl = `https://api.siputzx.my.id/api/anime/otakudesu/ongoing`;

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status && Array.isArray(data)) {
            // Tentukan batas data berdasarkan halaman
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentPageData = data.slice(startIndex, endIndex);

            // Jika tidak ada data untuk halaman tersebut
            if (currentPageData.length === 0) {
                reply(`Tidak ada data untuk halaman ${page}.`);
            }

            // Rangkai pesan anime
            let message = `📺 *Ongoing Anime - Halaman ${page}*\n\n`;
            currentPageData.forEach((anime, index) => {
                message += `🎥 *${anime.title}*\n`;
                message += `📅 Tayang: ${anime.type}, ${anime.date}\n`;
                message += `📜 Episode: ${anime.episode}\n`;
                message += `🔗 Link: ${anime.link}\n\n`;
            });

            // Tombol Next jika ada halaman selanjutnya
            const hasNextPage = endIndex < data.length;
            const buttons = [];
            if (hasNextPage) {
                buttons.push({
                    buttonId: `.otakudesuongoing ${page + 1}`,
                    buttonText: { displayText: "Next ➡️" }
                });
            }

            // Kirim pesan
            sho.sendMessage(m.chat, {
                image: getRandomThumb3(),
                caption: message,
                footer: "Otakudesu • Sho Bot",
                buttons,
                viewOnce: true,
            }, { quoted: m });
        } else {
            reply('Gagal mendapatkan data ongoing anime.');
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
    }
}
case 'otakudesusearch': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    if (!text) {
        reply('Silakan masukkan kata kunci pencarian. Contoh: `.otakudesusearch naruto`');
        
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/otakudesu/search?s=${encodeURIComponent(text)}`;

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status && Array.isArray(data) && data.length > 0) {
            data.forEach(async (anime) => {
                const message = `
🔍 *Hasil Pencarian:*
🎥 *${anime.title}*
📜 Genre: ${anime.genres}
📊 Rating: ${anime.rating}
📂 Status: ${anime.status}
🔗 Link: ${anime.link}
                `.trim();
const tombol = [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "WATCH ♨️",
                    url: `${anime.link}`,
                }),
            },
        ];
                // Kirim pesan dengan gambar
                await sendButtonImage(
            m.chat,
            "",
            message,
            { url: anime.imageUrl },
            tombol,
            hw
        );
            });
        } else {
            reply(`Tidak ditemukan hasil untuk kata kunci: "${text}".`);
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
    }
    break;
}
case 'otakudesudetail': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command

    if (!text) {
        reply('Silakan masukkan URL anime. Contoh: `.otakudesudetail https://otakudesu.cloud/anime/borto-sub-indo`');
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/otakudesu/detail?url=${encodeURIComponent(text)}`;

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status && data) {
            const { animeInfo, episodes } = data;

            // Informasi anime
            const animeText = `
🎥 *Detail Anime*
🔖 Judul: ${animeInfo.title}
🔖 Judul Jepang: ${animeInfo.japaneseTitle}
⭐ Skor: ${animeInfo.score}
📺 Tipe: ${animeInfo.type}
📅 Tanggal Rilis: ${animeInfo.releaseDate}
🖥️ Studio: ${animeInfo.studio}
⏳ Durasi: ${animeInfo.duration}
📜 Status: ${animeInfo.status}
🎭 Genre: ${animeInfo.genres}
👥 Produser: ${animeInfo.producer}
            `.trim();

            // Tampilkan episode terbaru
            let episodeText = '\n\n📚 *Episode Terbaru:*\n';
            episodes.forEach((episode) => {
                episodeText += `- *${episode.title}*\n  📅 ${episode.date}\n  🔗 *Link:* ${episode.link}\n`;
            });

            // Kirim informasi anime dan episode
            sho.sendMessage(m.chat, {
                image: { url: animeInfo.imageUrl },
                caption: `${animeText}${episodeText}`,
            }, { quoted: m });
        } else {
            reply('Gagal mendapatkan data. Pastikan URL yang Anda masukkan benar.');
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
    }
    break;
}
case 'samehadakudetail': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
i
    // Validasi input
    if (!text) {
        reply(`Contoh penggunaan:\n${prefix}samehadakudetail https://samehadaku.email/anime/blue-lock-season-2`);
        return;
    }
if (!(await firely(m, mess.waits))) return;
    try {
        const apiUrl = `https://api.siputzx.my.id/api/animesamehadaku/detail?link=${text}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.data) {
            reply("Anime tidak ditemukan atau terjadi kesalahan pada API.");
            return;
        }

        const animeData = result.data;

        // Format pesan untuk daftar episode
        let episodeList = animeData.episodes.map((episode, index) => 
            `*${index + 1}. ${episode.title}*\nTanggal: ${episode.date}\nLink: ${episode.link}`
        ).join('\n\n');

        // Kirim pesan
        const message = `*${animeData.title}*\n\n` +
                        `📅 *Tanggal Rilis*: ${animeData.published || 'Tidak tersedia'}\n` +
                        `⭐ *Rating*: ${animeData.rating}\n` +
                        `📖 *Deskripsi*: ${animeData.description}\n\n` +
                        `🎬 *Daftar Episode*:\n${episodeList}`;

        await sho.sendMessage(m.chat, {
            image: { url: animeData.thumbnail },
            caption: message
        });

    } catch (error) {
        console.error("Kesalahan saat memproses permintaan:", error.message);
        reply("Terjadi kesalahan saat memproses permintaan Anda.");
    }
    break;
}
case 'oploverzdownload': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!text) {
        reply('Silakan masukkan URL anime. Contoh: `.oploverzdownload https://oploverz.org/anime/captain-tsubasa-season-2-junior-youth-hen-1-episode-30-subtitle-indonesia`');
    }
if (!(await firely(m, mess.waits))) return;
    const apiUrl = `https://api.siputzx.my.id/api/anime/oploverz-download?url=${encodeURIComponent(text)}`;

    try {
        const response = await axios.get(apiUrl);
        const { status, data } = response.data;

        if (status && data) {
            const { title, date, iframeSrc } = data;

            // Kirim video streaming
            if (iframeSrc) {
                sho.sendMessage(m.chat, {
                    video: { url: iframeSrc },
                    caption: `🎥 *${title}*\n📅 Rilis: ${date}\n\nSelamat menikmati!`,
                }, { quoted: m });
            } else {
                reply('Tidak ditemukan video untuk URL yang diberikan.');
            }
        } else {
            reply('Gagal mendapatkan data. Pastikan URL yang Anda masukkan benar.');
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
    }
    break;
}
/* 
        * PEMBATAS DOANG HEHE
*/
case 'ig':
case 'instagram':
case 'igdl': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    console.log('📢 Memproses perintah IG Download...');

    if (!text) {
        console.log('⚠️ Tidak ada URL yang diberikan.');
        return shorly(`⚠️ Gunakan dengan cara: ${prefix + command} *url*\n\n🤔 *Contoh:*\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/`);
    }
if (!(await firely(m, mess.waits))) return;
    // Mengambil angka setelah URL jika ada
    const regex = /(\d+)$/;
    const match = text.match(regex);
    const numImages = match ? parseInt(match[1]) : 8; // Default ke 8 jika tidak ada angka

    console.log('🌐 URL yang dimasukkan:', text);
    console.log('🔢 Jumlah gambar yang akan dikirim:', numImages);

    try {
        console.log('📡 Menghubungi API...');
        let anu = await fetchJson(`https://api.siputzx.my.id/api/d/igdl?url=${text}`);
        console.log('🔍 Respons API:', JSON.stringify(anu, null, 2));

        if (!anu.status || !anu.data || anu.data.length === 0) {
            console.log('❌ Data tidak ditemukan atau kosong.');
            return shorly('❌ Konten tidak ditemukan. Pastikan tautannya benar!');
        }

        console.log('✅ Data ditemukan! Proses pengiriman...');
        let count = 0; // Untuk membatasi jumlah gambar/video yang dikirim

        // Batasi data yang dikirim sesuai jumlah yang diinginkan
        const totalItems = Math.min(anu.data.length, numImages);

        for (let i = 0; i < totalItems; i++) {
            let item = anu.data[i];

            console.log('📦 Item ditemukan:', item);

            // Ambil data file dari URL
            console.log('⏳ Mengunduh file untuk deteksi tipe...');
            const response = await axios.get(item.url, { responseType: 'arraybuffer' });

            // Periksa header Content-Type
            const contentType = response.headers['content-type'];
            console.log('Tipe file dari header:', contentType);

            // Deteksi tipe file jika header tidak memberikan informasi yang jelas
            let type;
            if (contentType) {
                if (contentType.startsWith('video')) {
                    type = { mime: 'video/mp4' }; // Asumsikan video mp4 jika tipe file adalah video
                } else if (contentType.startsWith('image')) {
                    type = { mime: 'image/jpeg' }; // Asumsikan gambar jpeg jika tipe file adalah image
                }
            }

            // Jika header tidak memberikan informasi, coba deteksi dari buffer
            if (!type) {
                const buffer = Buffer.from(response.data);
                type = await FileType.fromBuffer(buffer);
                console.log('🔎 Tipe file terdeteksi dari buffer:', type);
            }

            // Kirim file berdasarkan tipe yang terdeteksi
            if (type && type.mime.startsWith('video')) {
                console.log('🎥 Mengirim video...');
                const buffer = Buffer.from(response.data);
                await sho.sendMessage(m.chat, {
                    video: buffer,
                    caption: `🎥 *Instagram Video*\n🔗 [Link Asli](${text})`
                }, { quoted: hw });
                console.log('✅ Video berhasil dikirim!');
            } else if (type && type.mime.startsWith('image')) {
                console.log('🖼️ Mengirim gambar...');
                const buffer = Buffer.from(response.data);
                await sho.sendMessage(m.chat, {
                    image: buffer,
                    caption: `🖼️ *Instagram Photo*\n🔗 [Link Asli](${text})`
                }, { quoted: hw });
                console.log('✅ Gambar berhasil dikirim!');
            } else {
                console.log('❓ Jenis file tidak dikenali:', item.url);
                shorly('⚠️ Jenis file tidak dikenali!');
            }

            count++; // Increment count setiap gambar/video dikirim
        }

        if (count === 0) {
            shorly('⚠️ Tidak ada konten untuk dikirim.');
        }
    } catch (err) {
        console.error('❌ Error:', err);
        shorly('❌ Terjadi kesalahan. Coba lagi nanti.');
    }
}
break
case 'getq': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!m.quoted) return shorly('Balas pesan yang ingin diambil datanya!');
    let quotedMessage = m.quoted;
    let messageContent = quotedMessage.msg || quotedMessage;
    let messageType = Object.keys(messageContent)[0];
    let messageData = {
        key: {
            remoteJid: quotedMessage.chat,
            participant: quotedMessage.sender,
            fromMe: quotedMessage.fromMe,
            id: quotedMessage.id,
        },
        message: messageContent,
    };
    shorly(`Kode yang dihasilkan:\n\n` + monospace(JSON.stringify(messageData, null, 2)));
}
break;
      case 'sendcontact':
      case 'sencontact': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return shorly(mess.groups);
        if(!m.mentionedJid[0]) return shorly('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
        let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
        let snContact = {
          displayName: "Contact",
          contacts: [{
            displayName: snTak,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
          }]
        };
        sho.sendMessage(m.chat, {
          contacts: snContact
        }, {
          ephemeralExpiration: 86400
        });
      }
      break
      case 'getgc':
      case 'getgcid': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!text) return shorly('Enter Group Link!')
        let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
        if(code === null) return shorly('No invite url detected.');
        code = code[0].replace('chat.whatsapp.com/', '');
        await sho.groupGetInviteInfo(code).then(anu => {
          let {
            id,
            subject,
            owner,
            subjectOwner,
            creation,
            desc,
            descId,
            participants,
            size,
            descOwner
          } = anu
          console.log(anu);
          let par = `*Gc Name* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Number of Members* : ${size}\n*Gc Created Date* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*GC Name Changed By* : @${subjectOwner.split('@')[0]}` : '*GC Name Changed By* : -'}\n${descOwner ? `*Desc changed by* : @${descOwner.split('@')[0]}` : '*Desc changed by* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
          shorly(par);
        }).catch((res) => {
          if(res.data == 406) return shorly('Group Not Found❗');
          if(res.data == 410) return shorly('Group URL Has Been Reset❗');
        });
      }
      break
      case 'getch':
      case 'getchid': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!text) return shorly(`Ayo Kak, kirim perintah *${prefix + command}* URL saluran biar aku bantu! 😊`);
        if(!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return shorly(`Hmm, sepertinya linknya nggak valid, Kak! Coba lagi ya! 😣`);

        function formatDate(timestamp) {
          const date = new Date(timestamp * 1000);
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          const day = date.getDate();
          const month = months[date.getMonth()];
          const year = date.getFullYear();
          return `${day} ${month} ${year}`;
        }
        try {
          let result = args[0].split('https://whatsapp.com/channel/')[1];
          let data = await sho.newsletterMetadata("invite", result);
          let teks = `*Nama :* ${data.name}\n*ID :* ${data.id}\n*Status :* ${data.state}\n*Dibuat :* ${formatDate(data.creation_time)}\n*Subscribers :* ${data.subscribers}\n*Verification :* ${data.verification}\n*Reaction Codes :* ${data.reaction_codes}\n*Description :*\n${data.description}\n`;
          let button = [{
            "name": "cta_copy",
            "buttonParamsJson": `{\"display_text\":\"Salin ID\",\"id\":\"${data.id}\",\"copy_code\":\"${data.id}\"}`
          }];
          sho.sendButton(m.chat, button, teks, namabot, m);
        } catch (error) {
          shorly(`Aduh, sepertinya ada masalah nih, Kak! 😥 Coba cek lagi link channel-nya, ya?`);
        }
      }
      break
      case 'contacttag':
      case 'contag': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return shorly(mess.groups);
        if(!(isAdmins || isOwner)) return shorly(mess.admins); // Hanya admin atau pemilik yang bisa
        if(!m.mentionedJid[0]) return shorly('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
        let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
        let sngContact = {
          displayName: "Contact",
          contacts: [{
            displayName: sngTak,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
          }]
        };
        sho.sendMessage(m.chat, {
          contacts: sngContact,
          mentions: participants.map(a => a.id)
        }, {
          ephemeralExpiration: 86400
        });
      }
      break
      case 'tesbtn2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        const caption = "ini buttonnya tuan"
        sho.sendMessage(m.chat, {
          image: thum,
          caption: caption,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: m
        });
      }
      break
      case 'delsession': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        fs.readdir(`./${sessionName}`, async function(err, files) {
          if(err) {
            console.error('Unable to scan directory: ' + err);
            return shorly('Unable to scan directory: ' + err);
          }
          let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));
          let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
          if(filteredArray.length == 0) return shorly(teks);
          filteredArray.map(function(e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          if(text && text == 'true') {
            await shorly('Menghapus Session File..')
            await filteredArray.forEach(function(file) {
              fs.unlinkSync('./session/' + file)
            });
            sleep(2000)
            shorly('Berhasil Menghapus Semua Sampah Session')
          } else shorly(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
        });
      }
      break
      case 'setnamegc':
			case 'setsubject':
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (!isBotAdmins) return shorly(mess.abots);
				if (!text) return shorly('Text ?')
				await sho.groupUpdateSubject(m.chat, text)
				shorly(mess.dones)
			break

			case 'setppgroup': 
			case 'setppgrup': 
			case 'setppgc': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins) return shorly(mess.admins);
				if (!isBotAdmins) return shorly(mess.abots);
				if (!quoted) return shorly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return shorly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return shorly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await sho.downloadAndSaveMediaMessage(quoted)
				await sho.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
				shorly(mess.dones)
			}
			break
			case 'tesq': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  sho.sendMessage(m.chat, { text: "quoted: fpay" }, { quoted: fpay });
  sho.sendMessage(m.chat, { text: "quoted: ftroli" }, { quoted: ftroli });
  sho.sendMessage(m.chat, { text: "quoted: fdoc" }, { quoted: fdoc });
  sho.sendMessage(m.chat, { text: "quoted: fvn" }, { quoted: fvn });
  sho.sendMessage(m.chat, { text: "quoted: fgif" }, { quoted: fgif });
  sho.sendMessage(m.chat, { text: "quoted: fgclink" }, { quoted: fgclink });
  sho.sendMessage(m.chat, { text: "quoted: fvideo" }, { quoted: fvideo });
  sho.sendMessage(m.chat, { text: "quoted: floc" }, { quoted: floc });
  sho.sendMessage(m.chat, { text: "quoted: fkontak" }, { quoted: fkontak });
  sho.sendMessage(m.chat, { text: "quoted: fakestatus" }, { quoted: fakestatus });
  sho.sendMessage(m.chat, { text: "quoted: frpayment" }, { quoted: frpayment });
  break;
}
case "kudetagc":
case "kudeta": {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
    if (!isOwner) return shorly(mess.owners);
    
    // Fetch group metadata to get participants
    let metadata = await sho.groupMetadata(m.chat);
    let memberFilter = metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender);
    
    if (memberFilter.length < 1) return shorly("Grup Ini Sudah Tidak Ada Member!");
    
    await shorly("Kudeta Grup mulai bot hanya di sewa");
    
    for (let i of memberFilter) {
        await sho.groupParticipantsUpdate(m.chat, [i], 'remove');
        await sleep(1000); // Delay to avoid API limits
    }
    
    await shorly("Kamu telah Berhasil Kudeta Group 🏴‍☠️");
}
break;
			case 'deleteppgroup': 
			case 'delppgc': 
			case 'deleteppgc': 
			case 'delppgroup': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (!isBotAdmins) return shorly(mess.abots);
				await sho.removeProfilePicture(m.chat)
			}
			break
case 'setexif':
			case 'setwm':
			updatePopularCommand(command); // Mencatat command
				if (!isOwner) return shorly(mess.owners);
				if (!text) return shorly(`Contoh: ${prefix + command} packname|author`);
				global.packname = text.split("|")[0];
				global.author = text.split("|")[1];
				shorly(`Exif berhasil diubah!\n\n• Packname: ${global.packname}\n• Author: ${global.author}`);
			break
			case 'setppbot': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!isOwner) return shorly(mess.owners);
				if (!quoted) return shorly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return shorly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return shorly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await sho.downloadAndSaveMediaMessage(quoted)
				await sho.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				shorly('udah')
			}
			break
	
			case 'deleteppbot': 
			case 'delppbot': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!isOwner) return shorly(mess.owners);
				await sho.removeProfilePicture(sho.user.id)
				shorly('udah bro')
			}
			break

			case 'setbiobot':{
				if (!isOwner) return shorly(mess.owners);
				if (!text) return shorly(`Where is the text?\nExample: ${prefix + command} Sho AI`)
				await sho.updateProfileStatus(text)
				shorly('sipp')
			}
			break

			case 'setdesc':
			case 'setdesk':
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (!isBotAdmins) return shorly(mess.abots);
				if (!text) return shorly('Text ?')
				await sho.groupUpdateDescription(m.chat, text)
				shorly(mess.dones)
			break
      // Case untuk listthumb
      case 'listthumb': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        const thumbList = readThumbList();
        if(thumbList.length === 0) {
          return shorly('Tidak ada thumbnail yang tersimpan.');
        }
        let teks = '「 LIST THUMBNAIL 」\n\n';
        for(let thumb of thumbList) {
          teks += `*Name:* ${thumb.name}\n*URL:* ${thumb.url}\n───────────────\n`;
        }
        shorly(teks);
        break
      }
      // Case untuk addthumb
      case 'addthumb': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if(!text) return shorly(`*< / >* Example: ${prefix + command} thumbnail_name|image_url`);
        let [nama, url] = text.split('|');
        if(!nama || !url) return shorly(`Please provide both name and URL in the correct format.`);
        const thumbList = readThumbList();
        if(thumbList.find(thumb => thumb.name === nama)) {
          return shorly(`Thumbnail dengan nama '${nama}' sudah terdaftar.`);
        }
        thumbList.push({
          name: nama,
          url: url
        });
        writeThumbList(thumbList);
        shorly(`Thumbnail dengan nama '${nama}' berhasil ditambahkan!`);
        break
      }
      // Case untuk delthumb
      case 'delthumb':
      case 'deletethumb': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if(!text) return shorly('Nama thumbnail yang ingin dihapus?');
        const thumbList = readThumbList();
        const index = thumbList.findIndex(thumb => thumb.name === text.toLowerCase());
        if(index === -1) return shorly(`Thumbnail dengan nama '${text}' tidak ditemukan.`);
        thumbList.splice(index, 1);
        writeThumbList(thumbList);
        shorly(`Thumbnail dengan nama '${text}' berhasil dihapus.`);
        break
      }
      case "addcmd":
      case "setcmd": {
        if(isQuotedSticker) {
          if(!q) return shorly(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          if (!(await firely(m, mess.waits))) return;
          var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
          addCmd(kodenya, q);
          shorly(mess.dones);
          await sho.sendMessage(m.chat, {
            react: {
              text: '🔐', // Emoji yang diinginkan
              key: m.key // Memberikan reaksi pada pesan perintah
            }
          });
        } else {
          shorly("tag stickenya");
        }
        }
        break
        case 'remini':
			case 'hdr':
			case 'hd':{
				sho.enhancer = sho.enhancer ? sho.enhancer : {};
				if (m.sender in sho.enhancer) return shorly(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)
				let query = m.quoted ? m.quoted : m;
				let mime = (query.msg || query).mimetype || query.mediaType || "";
				if (!mime) return shorly(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
				if (!/image\/(jpe?g|png)/.test(mime)) return shorly(`Media tidak support!`)
				sho.enhancer[m.sender] = true;
				try {
				    if (!(await firely(m, mess.waits))) return;
					let media = await quoted.download();
					let proses = await remini(media, "enhance");
					await shorly('Gambar berhasil ditingkatkan kualitasnya! ✅');
					sho.sendMessage(m.chat, {image: proses, caption: "sudah bang"}, {quoted: m})
				} catch (err) {
					console.log(err);
					shorly('Terjadi kesalahan pada server.');
				}
				delete sho.enhancer[m.sender];
			}
			break
			case "ht":
case "hidetag": {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    if (!isGroup) return shorly(mess.groups);
    if (!isOwner && !isAdmins) return shorly(mess.admins);
    if (!text) return shorly(example("pesannya"));
    
    // Fetch group metadata to ensure participants are available
    let metadata = await sho.groupMetadata(m.chat);
    let member = metadata.participants.map(v => v.id);

    await sho.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m});
}
break;
			case 'add': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (!isBotAdmins) return shorly(mess.abots);

				if (!text && !m.quoted) {
					shorly(`Example: ${prefix + command} 62xxx`);
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try {
						await sho.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
							.then(async (res) => {
								for (let i of res) {
									let invv = await sho.groupInviteCode(m.chat);
						
									if (i.status == 408) return shorly('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
									if (i.status == 401) return shorly('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
									if (i.status == 409) return shorly('Wah, user ini udah masuk grup! 🎉');
									if (i.status == 500) return shorly('Maaf, grup ini sudah penuh! 😞');
									if (i.status == 403) {
										await sho.sendMessage(m.chat, { 
											text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`, 
											mentions: [numbersOnly] 
										}, { quoted: hw });
							
										await sho.sendMessage(`${numbersOnly ? numbersOnly : creator}`, { 
											text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nUndang kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`, 
											detectLink: true, 
											mentions: [numbersOnly] 
										}, { quoted: hw }).catch((err) => shorly('Gagal kirim undangan! 😔'));
									} else {
										shorly('udah bg');
									}
								}
							});
					} catch (e) {
						shorly('Gagal nambahin usernya nih, ada yang salah! 😢');
					}
				}
			}
			break
case 'texttospech': case 'tts': case 'tospech': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!text) return shorly('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				sho.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: hw })
			}
			break
			case 'translate': case 'tr': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					shorly(list_tr)
				} else {
					if (!m.quoted && (!text|| !args[1])) return shorly(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						shorly(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						shorly(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'promote':
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (!isBotAdmins) return shorly(mess.abots);
				let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await sho.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
				shorly('rampung bro')
			break

			case 'demote':
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (!isBotAdmins) return shorly(mess.abots);
				let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await sho.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
				shorly(mess.dones)
			break
      case 'bass':
      case 'blown':
      case 'deep':
      case 'earrape':
      case 'fast':
      case 'fat':
      case 'nightcore':
      case 'reverse':
      case 'robot':
      case 'slow':
      case 'smooth':
      case 'squirrel': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        try {
          let set
          if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
          if(/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
          if(/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
          if(/earrape/.test(command)) set = '-af volume=12'
          if(/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
          if(/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
          if(/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
          if(/reverse/.test(command)) set = '-filter_complex "areverse"'
          if(/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
          if(/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
          if(/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
          if(/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
          if(/audio/.test(mime)) {
            if (!(await firely(m, mess.waits))) return;
            let media = await sho.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if(err) return shorly(err)
              let buff = fs.readFileSync(ran)
              sho.sendMessage(m.chat, {
                audio: buff,
                mimetype: 'audio/mpeg'
              }, {
                quoted: m
              })
              fs.unlinkSync(ran)
            })
          } else shorly(`Reply to the audio you want to change with a caption *${prefix + command}*`)
        } catch (e) {
          shorly(e)
        }
      }
      break
      case 'autoswview':
			case 'autostatusview':{
				if (!isOwner) return shorly(mess.owners);
				if (args.length < 1) return shorly('on/off?')
				if (args[0] === 'on') {
					global.autoswview = true
					shorly(`${command} is enabled`)
				} else if (args[0] === 'off') {
					global.autoswview = false
					shorly(`${command} is disabled`)
				}
			}
			break;

			case 'anticall': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!isOwner) return shorly(mess.owners);
				if (args.length < 1) return shorly('on/off?')
				if (args[0] === 'on') {
					global.anticall = true
					shorly(`${command} is enabled`)
				} else if (args[0] === 'off') {
					global.anticall = false
					shorly(`${command} is disabled`)
				}
			}
			break;
      case 'kick':
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (!isGroup) return shorly(mess.groups);
				if (!isBotAdmins) return shorly(mess.abots);
				let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await sho.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
				shorly('udah di kick ya')
			break;
			case 'adminevent': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (args.length < 1) return shorly('on/off?')
				if (args[0] === 'on') {
					global.adminevent = true
					shorly(`${command} is enabled`)
				} else if (args[0] === 'off') {
					global.adminevent = false
					shorly(`${command} is disabled`)
				}
			}
			break;
			case 'groupevent': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!isGroup) return shorly(mess.groups);
				if (!isAdmins && !isOwner) return shorly(mess.admins);
				if (args.length < 1) return shorly('on/off?')
				if (args[0] === 'on') {
					global.groupevent = true
					shorly(`${command} is enabled`)
				} else if (args[0] === 'off') {
					global.groupevent = false
					shorly(`${command} is disabled`)
				}
			}
			break;
      case "delcmd":
        if(!isQuotedSticker) return shorly(`Penggunaan : ${command} tagsticker`);
        if (!(await firely(m, mess.waits))) return;
        var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        shorly(mess.dones);
        await sho.sendMessage(m.chat, {
          react: {
            text: '🚫', // Emoji yang diinginkan
            key: m.key // Memberikan reaksi pada pesan perintah
          }
        });
        break
      case 'creategc': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if(!text) {
          return shorly(`Uhm, cara pakainya : ${prefix + command} Sekolah Menjadi Anime, Kak! 😊`);
        }
        await emote('⏱️');
        let cret = await sho.groupCreate(text, []);
        let response = await sho.groupInviteCode(cret.id);
        let caption = `Buka tautan ini untuk bergabung ke grup WhatsApp saya, Kak: https://chat.whatsapp.com/${response}`.trim();
        await emote('✅');
        sho.sendMessage(m.chat, {
          text: caption,
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            externalAdReply: {
              showAdAttribution: true,
              title: cret.subject,
              body: `Undangan chat grup`,
              thumbnail: getRandomThumb3(),
              sourceUrl: `https://chat.whatsapp.com/${response}`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        });
      }
      break
      case 'mitos': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				const myths = [
					'🌕 *Mitos Bulan Purnama:* Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah:* Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin:* Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam:* Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah:* Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam:* Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal:* Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo:* Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh:* Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah:* Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan:* Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala:* Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu:* Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam:* Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi:* Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam:* Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu:* Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot:* Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang:* Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat:* Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri:* Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari:* Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala:* Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam:* Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru:* Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti:* Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari:* Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu:* Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih:* Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba:* Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu:* Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua:* Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak:* Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri:* Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				shorly(`🪄 *Mitos Menarik*\n\n${randomMyth}`);
				break
			}
      case 'faktaunik': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				const facts = [
					'🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!',
					'🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.',
					'🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.',
					'🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!',
					'🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.',
					'🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.',
					'🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.',
					'🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!',
					'🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.',
					'🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.',
					'🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.',
					'🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.',
					'🐌 Siput bisa tidur hingga 3 tahun lamanya!',
					'🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.',
					'🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.',
					'🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.',
					'🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.',
					'🎤 Hati manusia berdetak sekitar 100.000 kali sehari.',
					'🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.',
					'📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.',
					'🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.',
					'💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).',
					'⚡ Petir lebih panas dari permukaan matahari.',
					'🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.',
					'🐇 Kelinci tidak bisa muntah.',
					'🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.',
					'🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.',
					'🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.',
					'🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.',
					'🐨 Koala tidur hingga 20 jam sehari.',
					'🦁 Singa betina lebih sering berburu dibandingkan singa jantan.',
					'🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.',
					'🧠 Otak manusia terdiri dari sekitar 75% air.',
					'🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.',
					'🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.',
					'📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.',
					'🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.',
					'🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.',
					'🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.',
					'🐴 Kuda bisa tidur sambil berdiri.',
					'🐶 Anjing bisa memahami lebih dari 150 kata manusia.',
					'🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.',
					'🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.',
					'🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.',
					'🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.',
					'🐉 Komodo adalah kadal terbesar di dunia.',
					'🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.',
					'🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.',
					'🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'
				];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				shorly(`🧠 *Fakta Unik*\n\n${randomFact}`);
				break
			}
      case 'group':
      case 'grup': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return shorly(mess.groups);
        if(!isAdmins && !isOwner) return shorly(mess.admins);
        if(!isBotAdmins) return shorly(mess.abots);
        if(args[0] === 'close') {
          await sho.groupSettingUpdate(m.chat, 'announcement').then(() => shorly('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒')).catch((err) => shorly(`⚠️ Gagal menutup grup: ${err}`));
        } else if(args[0] === 'open') {
          await sho.groupSettingUpdate(m.chat, 'not_announcement').then(() => shorly('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓')).catch((err) => shorly(`⚠️ Gagal membuka grup: ${err}`));
        } else {
          botsett = `⚙️ SETTINGS YOUR GROUP`
          let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                    text: botsett
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                    text: namabot
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    gifPlayback: true,
                    subtitle: namaowner,
                    hasMediaAttachment: false
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "single_select",
                      "buttonParamsJson": `{
												"title": "Group Settings",
												"sections": [{
													"title": "Select Settimgs",
													"rows": [{
														"title": "⭐OPEN GROUP",
														"description": "Bot akan membuka grup",
														"id": "${prefix}grup open"
													},
													{
														"title": "🌕 CLOSE GROUP",
														"description": "Bot akan menutup grup",
														"id": "${prefix}grup close"
													},
													{
														"title": "⚡ WELCOME ON",
														"description": "Bot akan bot akan mengirim pesan welcome grup",
														"id": "${prefix}welkom on"
													},
													{
														"title": "🍄 WELCOME OFF",
														"description": "Bot akan mematikan welcome grup",
														"id": "${prefix}welkom off"
													},
													{
														"title": "⚓ GROUP-EVENT ON",
														"description": "Bot akan memberi pesan ketika mengganti sesuatu",
														"id": "${prefix}groupevent on"
													},
													{
														"title": "🪨 GROUP-EVENT OFF",
														"description": "Bot akan mematikan groupevent",
														"id": "${prefix}groupevent off"
													},
													{
														"title": "🛸 ADMIN-EVENT ON",
														"description": "Bot akan menyalakan adminevent grup",
														"id": "${prefix}adminevent on"
													},
													{
														"title": "📝 ADMIN-EVENT OFF",
														"description": "Bot akan mematikan adminvent",
														"id": "${prefix}adminevent off"
													}]
												}]
											}`
                    }],
                  }),
                  contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363383347233294@newsletter',
                      newsletterName: namaowner,
                      serverMessageId: 143
                    }
                  }
                })
              }
            },
          }, {})
          await sho.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
          })
        }
      }
      break
      case 'welkom':
      case 'metu': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!isGroup) return shorly(mess.groups);
        if(!isAdmins && !isOwner) return shorly(mess.admins);
        if(args.length < 1) return shorly('on/off?')
        if(args[0] === 'on') {
          global.welcome = true
          shorly(`${command} is enabled`)
        } else if(args[0] === 'off') {
          global.welcome = false
          shorly(`${command} is disabled`)
        }
      }
      break
      case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return shorly(`Example : ${prefix+command} Sho`) 
const lod = [
        "█▒▒▒▒▒▒▒▒▒▒▒ 10%",
        "████▒▒▒▒▒▒▒▒ 30%",
        "███████▒▒▒▒▒ 50%",
        "██████████▒▒ 80%",
        "████████████ 100%"
    ];

    // Kirim pesan awal dan simpan key untuk diedit
    const { key } = await sho.sendMessage(m.chat, { text: '⏳' });

    // Proses loading dengan update pesan secara bertahap
    for (let i = 0; i < lod.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
        await sho.sendMessage(m.chat, { text: lod[i], edit: key });
    }
const photooxy = require('./lib/photooxy')
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
sho.sendMessage(m.chat, { image: { url: dehe }, caption: mess.dones}, { quoted: hw })
}
break
      case 'lirik': 
			case 'lyrics': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				if (!text) return shorly(`⚠️ Mana liriknya?\nContoh: *${prefix + command} Someone Like You*`);
				if (!(await firely(m, mess.waits))) return;
				try {
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0) {
						return shorly('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let response = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					response += `📌 *Judul:* ${firstResult.title}\n`;
					response += `🎤 *Artis:* ${firstResult.artist}\n`;
					response += `💿 *Album:* ${firstResult.album}\n`;
					response += `🔗 *Lirik Lengkap:* ${firstResult.link}\n`;
					response += `🖼️ *Gambar:* ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					response += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await shorly(response);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis:* ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist:* ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis:* ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					shorly(lyricsResponse);
				} catch (error) {
					console.error(error);
					shorly('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
			}
			break;
      case 'realown': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
} // Replace 'contact' with 'realown'
        updatePopularCommand(command); // Mencatat command
        // Fetch the contacts data
        const contacts = await getContacts();
        if(contacts.length === 0) {
          return await sho.sendMessage(m.chat, {
            text: 'No contact information available at the moment.',
          });
        }
        // Send the contacts to the user
        await sho.sendMessage(m.chat, {
          contacts: {
            displayName: "Owners", // You can customize the display name as per your requirement
            contacts: contacts.map(contact => ({
              displayName: contact.displayName,
              vcard: contact.vcard,
            })),
          },
        }, {
          quoted: m, // Optional, to quote the original message
        });
      }
      break
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for(let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        shorly(teksnyee, cemde, true);
        break
      case 'yts':
case 'ytsearch': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  updatePopularCommand(command); // Mencatat command
  if (!text) return shorly(`Example : ${prefix + command} story wa anime`);

  try {
    // Cari hasil di YouTube menggunakan API
    let search = await yts(text);
    if (!search.all.length) return shorly("Tidak ada hasil pencarian ditemukan!");
    if (!(await firely(m, mess.waits))) return;
    // Batasi hasil pencarian ke 10 item teratas dan siapkan carousel card
    const carouselCards = await Promise.all(search.all.slice(0, 10).map(async (video, index) => ({
      header: {
        title: `Hasil ${index + 1}`,
        hasMediaAttachment: true,
        imageMessage: (await generateWAMessageContent({
          image: { url: video.thumbnail }
        }, { upload: sho.waUploadToServer })).imageMessage
      },
      body: {
        text: `🎥 *Judul:* ${video.title}\n👁 *Views:* ${video.views}\n⏱ *Durasi:* ${video.timestamp}\n📆 *Diupload:* ${video.ago}\n📝 *Url:* ${video.url}`
      },
      footer: {
        text: `Klik tombol di bawah untuk melihat atau salin tautan.`
      },
      nativeFlowMessage: {
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": JSON.stringify({
            "display_text": "LIHAT VIDEO 🎬",
            "url": `${video.url}`
            })
          },
          {
            "name": "cta_copy",
            "buttonParamsJson": JSON.stringify({
            "display_text": "SALIN URL 📝",
            "copy_code": `${video.url}`
            })
          }
        ]
      }
    })));

    // Buat pesan carousel
    const carouselMessage = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: {
              text: `🔎 *Hasil pencarian YouTube untuk:* _${text}_`
            },
            footer: {
              text: `YouTube Bot by Sho`
            },
            header: {
              hasMediaAttachment: false
            },
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: carouselCards
            })
          })
        }
      }
    }, {});

    // Kirim pesan carousel
    await sho.relayMessage(m.chat, carouselMessage.message, {
      messageId: carouselMessage.key.id
    });

  } catch (e) {
    console.error("Kesalahan saat memproses permintaan YouTube Search:", e);
    await sho.sendMessage(m.chat, {
      text: "❌ Terjadi kesalahan saat memproses pencarian YouTube. Silakan coba lagi."
    }, { quoted: hw });
  }
}
break;
case 'sound1':
			case 'sound2':
			case 'sound3':
			case 'sound4':
			case 'sound5':
			case 'sound6':
			case 'sound7':
			case 'sound8':
			case 'sound9':
			case 'sound10':
			case 'sound11':
			case 'sound12':
			case 'sound13':
			case 'sound14':
			case 'sound15':
			case 'sound16':
			case 'sound17':
			case 'sound18':
			case 'sound19':
			case 'sound20':
			case 'sound21':
			case 'sound22':
			case 'sound23':
			case 'sound24':
			case 'sound25':
			case 'sound26':
			case 'sound27':
			case 'sound28':
			case 'sound29':
			case 'sound30':
			case 'sound31':
			case 'sound32':
			case 'sound33':
			case 'sound34':
			case 'sound35':
			case 'sound36':
			case 'sound37':
			case 'sound38':
			case 'sound39':
			case 'sound40':
			case 'sound41':
			case 'sound42':
			case 'sound43':
			case 'sound44':
			case 'sound45':
			case 'sound46':
			case 'sound47':
			case 'sound48':
			case 'sound49':
			case 'sound50':
			case 'sound51':
			case 'sound52':
			case 'sound53':
			case 'sound54':
			case 'sound55':
			case 'sound56':
			case 'sound57':
			case 'sound58':
			case 'sound59':
			case 'sound60':
			case 'sound61':
			case 'sound62':
			case 'sound63':
			case 'sound64':
			case 'sound65':
			case 'sound66':
			case 'sound67':
			case 'sound68':
			case 'sound69':
			case 'sound70':
			case 'sound71':
			case 'sound72':
			case 'sound73':
			case 'sound74':
			case 'sound75':
			case 'sound76':
			case 'sound77':
			case 'sound78':
			case 'sound79':
			case 'sound80':
			case 'sound81':
			case 'sound82':
			case 'sound83':
			case 'sound84':
			case 'sound85':
			case 'sound86':
			case 'sound87':
			case 'sound88':
			case 'sound89':
			case 'sound90':
			case 'sound91':
			case 'sound92':
			case 'sound93':
			case 'sound94':
			case 'sound95':
			case 'sound96':
			case 'sound97':
			case 'sound98':
			case 'sound99':
			case 'sound100':{
				if (!(await firely(m, mess.waits))) return;
				const aud = await getBuffer(`https://github.com/aerovoid4/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
				await sho.sendMessage(m.chat, { audio: aud, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
			}
			db.data.users[m.sender].limit -= 1;
			break;
      case 'wanumber':
      case 'nowa':
      case 'searchno':
      case 'searchnumber': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if(!text) return shorly(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
        var inputnumber = text.split(" ")[0]
        shorly(`Searching for WhatsApp account in given range...`)

        function countInstances(string, word) {
          return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if(random_length == 1) {
          randomxx = 10
        } else if(random_length == 2) {
          randomxx = 100
        } else if(random_length == 3) {
          randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for(let i = 0; i < randomxx; i++) {
          var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          var status1 = nu[Math.floor(Math.random() * nu.length)]
          var status2 = nu[Math.floor(Math.random() * nu.length)]
          var status3 = nu[Math.floor(Math.random() * nu.length)]
          var dom4 = nu[Math.floor(Math.random() * nu.length)]
          var random21
          if(random_length == 1) {
            random21 = `${status1}`
          } else if(random_length == 2) {
            random21 = `${status1}${status2}`
          } else if(random_length == 3) {
            random21 = `${status1}${status2}${status3}`
          } else if(random_length == 4) {
            random21 = `${status1}${status2}${status3}${dom4}`
          }
          var anu = await sho.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
          var anuu = anu.length !== 0 ? anu : false
          try {
            try {
              var anu1 = await sho.fetchStatus(anu[0].jid)
            } catch {
              var anu1 = '401'
            }
            if(anu1 == '401' || anu1.status.length == 0) {
              nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
            } else {
              text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
            }
          } catch {
            nowhatsapp += `${number0}${i}${number1}\n`
          }
        }
        shorly(`${text66}${nobio}${nowhatsapp}`)
      }
      break
      case 'song': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    updatePopularCommand(command); // Update popular command log

    if (!text) {
        shorly(`Contoh penggunaan: ${prefix + command} anime whatsapp status`);
        return;
    }

    console.log('🔍 Mencari lagu berdasarkan query:', text);
    const yts = require("youtube-yts");
    const { youtube } = require("btch-downloader"); // Menggunakan btch-downloader

    try {
        if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini

        // Pencarian video
        const look = await yts(text);
        if (!look.videos || look.videos.length === 0) {
            return shorly('Maaf, tidak menemukan lagu sesuai query tersebut.');
        }

        const convert = look.videos[0]; // Ambil video pertama
        console.log('🎵 Lagu ditemukan:', convert.title, convert.url);

        // Mendapatkan tautan MP3
        const pl = await youtube(convert.url); // btch-downloader mengembalikan URL MP3
        if (!pl || !pl.mp3) {
            throw new Error('Gagal mendapatkan tautan MP3');
        }
        console.log('🔗 Link MP3 berhasil didapatkan:', pl.mp3);

        // Kirim audio
        await sho.sendMessage(m.chat, {
            audio: { url: pl.mp3 },
            fileName: `${convert.title}.mp3`,
            mimetype: 'audio/mpeg',
            contextInfo: {
                externalAdReply: {
                    title: convert.title,
                    body: namabot,
                    thumbnailUrl: convert.image,
                    sourceUrl: convert.url, // URL video YouTube
                    mediaType: 1,
                    mediaUrl: convert.url,
                }
            },
        }, { quoted: hw });

        shorly('🎶 Lagunya udah dikirim, selamat menikmati!');
    } catch (err) {
        console.error('❌ Error saat proses unduh/kirim audio:', err);
        shorly('Maaf, terjadi kesalahan saat mengambil lagu. Coba lagi nanti ya.');
    }
}
break;
      case 'pinterest':
      case 'pin':
      case 'pint': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        if(!text) return shorly(`*< / >* Example: ${prefix + command} hu tao`);
        try {
          if (!(await firely(m, mess.waits))) return;
          let anu = await pinterest(text); // Panggil API pencarian Pinterest
          if(anu.length < 1) return shorly('Pencarian tidak ditemukan!');
          // Batasi hasil ke 5 item teratas dan siapkan carousel card
          const carouselCards = await Promise.all(anu.slice(0, 5).map(async (url, index) => ({
            header: {
              title: `Hasil ${index + 1}`,
              hasMediaAttachment: true,
              imageMessage: (await generateWAMessageContent({
                image: {
                  url
                }
              }, {
                upload: sho.waUploadToServer
              })).imageMessage
            },
            body: {
              text: "Hasil pencarian Pinterest untuk: " + text
            },
            footer: {
              text: "Klik tombol di bawah untuk melihat sumber."
            },
            nativeFlowMessage: {
              buttons: [{
                "name": "cta_url",
                "buttonParamsJson": JSON.stringify({
                  display_text: "Lihat di Pinterest",
                  url
                })
              }]
            }
          })));
          // Buat pesan carousel
          const carouselMessage = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: {
                    text: `Hasil pencarian untuk: ${text}`
                  },
                  footer: {
                    text: "Pinterest Bot by Sych"
                  },
                  header: {
                    hasMediaAttachment: false
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: carouselCards
                  })
                })
              }
            }
          }, {});
          // Kirim pesan carousel
          await sho.relayMessage(m.chat, carouselMessage.message, {
            messageId: carouselMessage.key.id
          });
        } catch (e) {
          console.error("Kesalahan saat mengirim carousel:", e);
          await sho.sendMessage(m.chat, {
            text: "Terjadi kesalahan saat memproses permintaan. Silakan coba lagi atau hubungi admin."
          }, {
            quoted: m
          });
        }
      }
      break
      case 'upchannel': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        try {
          if(!mime && !text) {
            return shorly(`Oon! Lu belum kirim media atau teks apa pun. Coba lagi ya!`)
          }
          media = mime ? await quoted.download() : null
          let defaultCaption = "🐬 Media ini dikirim melalui sistem otomatis Sho! ⭐"
          if(/image/.test(mime)) {
            sho.sendMessage('120363383347233294@newsletter', {
              image: media,
              caption: text ? text : defaultCaption
            })
            shorly(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/video/.test(mime)) {
            sho.sendMessage('120363383347233294@newsletter', {
              video: media,
              caption: text ? text : defaultCaption
            })
            shorly(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/audio/.test(mime)) {
            sho.sendMessage('120363383347233294@newsletter', {
              audio: media,
              mimetype: mime,
              ptt: true
            })
            shorly(`🎵 Audio berhasil diunggah ke saluran, cik!`)
          } else if(/text/.test(mime) || text) {
            sho.sendMessage('120363383347233294@newsletter', {
              text: text ? text : defaultCaption
            })
            shorly(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
          } else {
            shorly(`Bjirlaah Sho gak tau ini jenis media apa. Coba dicek lagi ya, Anjg! 🧐`)
          }
        } catch (error) {
          console.error(error)
          shorly(`Alamak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
        }
      }
      break
      case 'upchannels': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    updatePopularCommand(command); // Mencatat command
    if (!isOwner) return shorly(mess.owners);
    try {
        if (!mime && !text) {
            return shorly(`Oon! Lu belum kirim media atau teks apa pun. Coba lagi ya!`);
        }

        const media = mime ? await quoted.download() : null;
        const defaultCaption = "🐬 Media ini dikirim melalui sistem otomatis Sho! ⭐";

        if (/image/.test(mime)) {
            const repshow = {
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: namabot,
                        newsletterJid: idsaluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        title: waktuucapan,
                        body: namabot,
                        thumbnail: getRandomThumb3(),
                        sourceUrl: gh,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
                image: media,
                caption: text ? text : defaultCaption,
            };

            sho.sendMessage('120363383347233294@newsletter', repshow, { quoted: hw });
            shorly(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`);
        } else if (/video/.test(mime)) {
            const repshow = {
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: namabot,
                        newsletterJid: idsaluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        title: waktuucapan,
                        body: namabot,
                        thumbnail: getRandomThumb3(),
                        sourceUrl: gh,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
                video: media,
                caption: text ? text : defaultCaption,
                mimetype: mime,
            };

            sho.sendMessage('120363383347233294@newsletter', repshow, { quoted: hw });
            shorly(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`);
        } else if (/audio/.test(mime)) {
            const repshow = {
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: namabot,
                        newsletterJid: idsaluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        title: waktuucapan,
                        body: namabot,
                        thumbnail: getRandomThumb3(),
                        sourceUrl: gh,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
                audio: media,
                mimetype: mime,
                ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
            };

            sho.sendMessage('120363383347233294@newsletter', repshow, { quoted: hw });
            shorly(`🎵 Audio berhasil diunggah ke saluran, cik!`);
        } else if (/text/.test(mime) || text) {
            const repshow = {
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: namabot,
                        newsletterJid: idsaluran,
                    },
                    externalAdReply: {
                        showAdAttribution: true,
                        title: waktuucapan,
                        body: namabot,
                        thumbnail: getRandomThumb3(),
                        sourceUrl: gh,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
                text: text ? text : defaultCaption,
            };

            sho.sendMessage('120363383347233294@newsletter', repshow, { quoted: hw });
            shorly(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`);
        } else {
            shorly(`Bjirlaah Sho gak tau ini jenis media apa. Coba dicek lagi ya, Anjg! 🧐`);
        }
    } catch (error) {
        console.error(error);
        shorly(`Alamak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`);
    }
    break;
}
      case 'sendsc':
case "kirimsc": {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
 if (!text) return shorly("nomor?")
if (!isOwner) return shorly(mess.owners)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await shorly(`proses pengiriman ke ${text}`)
var name = `ShoBotz` //gausah diganti njir🗿
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await sho.sendMessage(`${text}@s.whatsapp.net`, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return shorly(`Script bot berhasil dikirim ke ${text}`)
}
break
      case 'upsaluran': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        try {
          if(!mime && !text) {
            return shorly(`Oon, lu belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
          }
          media = mime ? await quoted.download() : null
          let defaultCaption = "🪀 Media ini dikirim melalui sistem otomatis Sho!"
          if(/image/.test(mime)) {
            sho.sendMessage(saluran, {
              image: media,
              caption: text ? text : defaultCaption
            })
            shorly(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/video/.test(mime)) {
            sho.sendMessage(saluran, {
              video: media,
              caption: text ? text : defaultCaption
            })
            shorly(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/audio/.test(mime)) {
            sho.sendMessage(saluran, {
              audio: media,
              mimetype: mime,
              ptt: true
            })
            shorly(`🎵 Audio berhasil diunggah ke saluran, cik!`)
          } else if(/text/.test(mime) || text) {
            sho.sendMessage(saluran, {
              text: text ? text : defaultCaption
            })
            shorly(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
          } else {
            shorly(`Hmm... Sho gak tau ini jenis media apa. Coba dicek lagi ya, cik! 🧐`)
          }
        } catch (error) {
          console.error(error)
          shorly(`Alamak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
        }
      }
      break
      case 'register': {
    const db = loadUserFire();
    const sender = m.sender;

    if (db[sender] && db[sender].register) {
        reply(`⚠️ Anda sudah terdaftar.\n- Role: ${db[sender].role}\n- Limit: ${db[sender].limit}`);
    } else {
        const role = isOwner ? 'owner' : isVip ? 'vip' : 'user'; // Atur role berdasarkan kondisi
        const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;

        db[sender] = {
            register: true,
            role: role,
            limit: limit
        };
        saveUserFire(db);

        reply(`🎉 Registrasi berhasil!\n- Role: ${role}\n- Limit: ${limit}`);
    }
    }
    break;
      case 'upsaluran2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        try {
          if(!mime && !text) {
            return shorly(`Oon, lu belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
          }
          media = mime ? await quoted.download() : null
          let defaultCaption = "🪨 Media ini dikirim melalui sistem otomatis Sho! 🍏"
          const buttons = [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }]
          if(/image/.test(mime)) {
            sho.sendMessage(saluran, {
              image: media,
              caption: text ? text : defaultCaption,
              footer: namabot,
              buttons: buttons,
              viewOnce: true
            })
            shorly(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/video/.test(mime)) {
            sho.sendMessage(saluran, {
              video: media,
              caption: text ? text : defaultCaption,
              footer: namabot,
              buttons: buttons,
              viewOnce: true
            })
            shorly(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
          } else if(/text/.test(mime) || text) {
            sho.sendMessage(saluran, {
              text: text ? text : defaultCaption,
              footer: namabot,
              buttons: buttons,
              viewOnce: true
            })
            shorly(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
          } else {
            shorly(`Hmm... Sho gak tau ini jenis media apa. Coba dicek lagi ya, cil! 🧐`)
          }
        } catch (error) {
          console.error(error)
          shorly(`Alamak 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
        }
      }
      break
      case 'tiktoksearch':
      case 'tiktoks':
      case 'ttsearch': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!text) return shorly(`⚠️ kurang lengkap su, gini loh: *${prefix + command} jj epep* biar Sho bisa bantu cari yang lu mau! 🔍💬`);
        if (!(await firely(m, mess.waits))) return;
        try {
          let search = await tiktokSearchVideo(text);
          let teks = `🎥 *${search.videos[0].title}*\n\n` + `🆔 *Video ID* : ${search.videos[0].video_id}\n` + `👤 *Username* : ${search.videos[0].author.unique_id}\n` + `🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` + `⏳ *Duration* : ${search.videos[0].duration} detik\n` + `❤️ *VT Like* : ${search.videos[0].digg_count}\n` + `💬 *Comment* : ${search.videos[0].comment_count}\n` + `🔄 *Share* : ${search.videos[0].share_count}\n\n` + `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;
          let list = '';
          let no = 1;
          for(let i of search.videos) {
            list += `\n${no++}. 🎵 *${i.title}*\n` + `⏳ Duration: ${i.duration} detik\n` + `❤️ Likes: ${i.digg_count}\n` + `💬 Comments: ${i.comment_count}\n` + `🔄 Shares: ${i.share_count}\n` + `🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
          }
          await sho.sendMessage(m.chat, {
            video: {
              url: `https://tikwm.com${search.videos[0].play}`
            },
            caption: teks
          }, {
            quoted: m
          });
          if(search.videos.length > 1) {
            await sho.sendMessage(m.chat, {
              text: `📚 *Daftar Video Lainnya:*\n${list}`
            }, {
              quoted: m
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      break
      case 'ping': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        let timestamp = speed()
        let latensi = speed() - timestamp
        respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_`
        shorly(respon)
      }
      break
      case 'sewa':
        updatePopularCommand(command);
        shorly(`*Price Sewa Bot*

🔏 3 hari = 1k
🔏 1 minggu = 5k
🔏 2 minggu = 10k
🔏 1 bulan = 5k

Untuk Melanjutkan Sewa Silahkan Hubungi Owner`)
        break
      case 'tiktok':
      case 'tiktokdown':
      case 'ttdown':
      case 'ttdl':
      case 'tt':
      case 'ttmp4':
      case 'ttvideo':
      case 'tiktokmp4':
      case 'tiktokvideo': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        if(!text) return shorly(`Example: ${prefix + command} url_tiktok`);
        const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
        if(!tiktokRegex.test(text)) return shorly('Url Tidak Mengandung Result Dari TikTok!');
        try {
          const hasil = await tiktokDl(text);
          console.log('Hasil dari tiktokDl:', JSON.stringify(hasil, null, 2));
          if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini
          if(hasil && hasil.data && hasil.data.length > 0) {
            if(hasil.size_nowm) {
              await sho.sendMessage(m.chat, {
                video: {
                  url: hasil.data[1].url
                },
                caption: `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`,
                footer: namabot,
                buttons: [{
                  buttonId: `${prefix}ttmp3 ${text}`,
                  buttonText: {
                    displayText: "Tiktok Mp3🎶"
                  }
                }],
                viewOnce: true,
              }, {
                quoted: m
              });
            } else {
              for(let i = 0; i < hasil.data.length; i++) {
                await sho.sendMessage(m.chat, {
                  video: {
                    url: hasil.data[i].url
                  },
                  caption: `*🚀Video:* ${i + 1}`,
                }, {
                  quoted: m
                });
              }
            }
          } else {
            shorly('Data TikTok tidak ditemukan atau tidak valid!');
          }
        } catch (e) {
          console.error('Error saat memproses URL TikTok:', e);
          shorly('Gagal memproses URL! Detail error: ' + e.message);
        }
      }
      break
      case 'toaud':
      case 'toaudio': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!/video|audio/.test(mime)) return shorly(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        shorly('sek dilit');
        // Emoji yang akan digunakan
        const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
        // Mengirimkan reaksi secara berurutan
        for(const emoji of reactEmojis) {
          await sho.sendMessage(m.chat, {
            react: {
              text: emoji,
              key: m.key
            }
          });
        }
        let media = await quoted.download()
        let audio = await toAudio(media, 'mp4')
        await sho.sendMessage(m.chat, {
          audio: audio,
          mimetype: 'audio/mpeg'
        }, {
          quoted: m
        })
      }
      break
      case 'settings': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        const teksnyo = "⚙️ BOT SETTINGS\nPilih fitur dibawah ini untuk mengatur\n💬typing\n🎤recording\n👁️‍🗨️autoviewsw\n🔇anticall\n📝setbio\n📖autoread"
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksnyo
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": `{
												"title": "Settings",
												"sections": [{
													"title": "Select Settings",
													"rows": [{
														"title": "💬 AUTOTYPING ON",
														"description": "Bot akan mengaktifkan auto typing",
														"id": "${prefix}autotypingon"
													},
													{
														"title": "💬 AUTOTYPING OFF",
														"description": "Bot akan mematikan auto typing",
														"id": "${prefix}autotypingoff"
													},
													{
														"title": "🎤 AUTOVN ON",
														"description": "Mengaktifkan fitur autovn",
														"id": "${prefix}autovnon"
													},
													{
														"title": "🎤AUTOVN OFF",
														"description": "Mematikan fitur autovn",
														"id": "${prefix}autovnoff"
													},
													{
														"title": "👁️‍🗨️ SW-VIEW ON",
														"description": "Bot akan mengaktifkan autoswview",
														"id": "${prefix}autoswview on"
													},
													{
														"title": "👁️‍🗨️ SW-VIEW OFF",
														"description": "Bot akan mematikan autoswview",
														"id": "${prefix}autoswview off"
													},
													{
														"title": "🔇 ANTI-CALL ON",
														"description": "Mengaktifkan fitur anticall",
														"id": "${prefix}anticall on"
													},
													{
														"title": "🔇 ANTI-CALL OFF",
														"description": "Mematikan fitur anticall",
														"id": "${prefix}anticall off"
													},
													{
														"title": "📝AUTOBIO ON",
														"description": "Mengaktifkan fitur autobio",
														"id": "${prefix}autobio on"
													},
													{
														"title": "📝 AUTOBIO OFF",
														"description": "Mematikan fitur autobio",
														"id": "${prefix}autobio off"
													},
													{
														"title": "📖 AUTOREAD ON",
														"description": "Mengaktifkan fitur autoread",
														"id": "${prefix}autoread true"
													},
													{
														"title": "📖 AUTOREAD OFF",
														"description": "Mematikan fitur autoread",
														"id": "${prefix}autoread false"
													}]
												}]
											}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363383347233294@newsletter',
                    newsletterName: namaowner,
                    serverMessageId: 143
                  }
                }
              })
            }
          },
        }, {})
        await sho.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'sendurlimg2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  if (!isOwner) return shorly(mess.owners);
  if (!args[0]) return shorly("Format: sendurlimg2 nomor|teks|footer|teks button|link|teks button|link...");

  // Pisahkan input
  const [target, teks, footer, ...buttonsData] = args.join(" ").split('|');

  // Validasi nomor tujuan
  const targetNumber = target.includes('@s.whatsapp.net') ? target : `${target}@s.whatsapp.net`;

  // Buat tombol URL (cta_url)
  const buttons = buttonsData.reduce((acc, curr, index, arr) => {
    if (index % 2 === 0) { // Setiap 2 elemen jadi satu button
      acc.push({
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: arr[index], // Teks button
          url: arr[index + 1] || 'https://wa.me' // Link
        })
      });
    }
    return acc;
  }, []);

  if (buttons.length === 0) return shorly("Minimal harus ada satu tombol dengan teks dan URL!");

  // Buat pesan
  const msg = generateWAMessageFromContent(targetNumber, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footer // Footer pesan
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({
              image: getRandomThumb2()
            }, {
              upload: sho.waUploadToServer
            })),
            title: ``,
            gifPlayback: true,
            subtitle: namaowner, // Subtitle header
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons // Array tombol yang telah dibuat
          }),
          contextInfo: {
            mentionedJid: [targetNumber],
            forwardingScore: 999,
            isForwarded: true
          }
        })
      }
    }
  }, {});

  // Kirim pesan
  await sho.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
shorly(`Pesan berhasil dikirim ke ${target}`);
}
break;
      case 'sendlist': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
      if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendlist teks|titleRow|title|desc|command|title|desc|command...");

  // Pisahkan input
  const [teks, titleRow, ...items] = args.join(" ").split('|');

  // Buat rows untuk menu
  const rows = items.reduce((acc, curr, index, arr) => {
    if (index % 3 === 0) { // Setiap 3 elemen jadi satu row
      acc.push({
        title: arr[index],
        description: arr[index + 1] || '',
        id: arr[index + 2] || `command${index / 3 + 1}`
      });
    }
    return acc;
  }, []);

  // Buat format JSON untuk buttons
  const buttonParamsJson = JSON.stringify({
    title: titleRow,
    sections: [{
      title: titleRow,
      rows
    }]
  });

  // Buat pesan
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot // Nama bot Anda
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            gifPlayback: true,
            subtitle: namaowner, // Nama owner Anda
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              "name": "single_select",
              "buttonParamsJson": buttonParamsJson // Format JSON valid
            }]
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
          }
        })
      }
    }
  }, {});

  // Kirim pesan
  await sho.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
  }
  break;
  case 'sendlistimg': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendlistimg teks|titleRow|title|desc|command|title|desc|command...");

  const [teks, titleRow, ...items] = args.join(" ").split('|');

  // Buat rows untuk menu
  const rows = items.reduce((acc, curr, index, arr) => {
    if (index % 3 === 0) {
      acc.push({
        title: arr[index],
        description: arr[index + 1] || '',
        id: arr[index + 2] || `command${index / 3 + 1}`
      });
    }
    return acc;
  }, []);

  const buttonParamsJson = JSON.stringify({
    title: titleRow,
    sections: [{
      title: titleRow,
      rows
    }]
  });

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot // Nama bot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({
                    image: getRandomThumb2()
                  }, {
                    upload: sho.waUploadToServer
                  })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              "name": "single_select",
              "buttonParamsJson": buttonParamsJson
            }]
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true
          }
        })
      }
    }
  }, {});

  await sho.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
}
break;
  case 'sendlist2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendlist2 nomor|teks|titleRow|title|desc|command|title|desc|command...");

  // Pisahkan input
  const [target, teks, titleRow, ...items] = args.join(" ").split('|');

  // Validasi nomor tujuan
  const targetNumber = target.includes('@s.whatsapp.net') ? target : `${target}@s.whatsapp.net`;

  // Buat rows untuk menu
  const rows = items.reduce((acc, curr, index, arr) => {
    if (index % 3 === 0) { // Setiap 3 elemen jadi satu row
      acc.push({
        title: arr[index],
        description: arr[index + 1] || '',
        id: arr[index + 2] || `command${index / 3 + 1}`
      });
    }
    return acc;
  }, []);

  // Buat format JSON untuk buttons
  const buttonParamsJson = JSON.stringify({
    title: titleRow,
    sections: [{
      title: titleRow,
      rows
    }]
  });

  // Buat pesan
  let msg = generateWAMessageFromContent(targetNumber, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot // Nama bot Anda
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            gifPlayback: true,
            subtitle: namaowner, // Nama owner Anda
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              "name": "single_select",
              "buttonParamsJson": buttonParamsJson // Format JSON valid
            }]
          }),
          contextInfo: {
            mentionedJid: [targetNumber],
            forwardingScore: 999,
            isForwarded: true
          }
        })
      }
    }
  }, {});

  // Kirim pesan
  await sho.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
  shorly(`Pesan berhasil dikirim ke ${target}`);
  }
  break;
  case 'sendlistimg2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
  if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendlistimg2 nomor|teks|titleRow|title|desc|command|title|desc|command...");

  // Pisahkan input
  const [target, teks, titleRow, ...items] = args.join(" ").split('|');

  // Validasi nomor tujuan
  const targetNumber = target.includes('@s.whatsapp.net') ? target : `${target}@s.whatsapp.net`;

  // Buat rows untuk menu
  const rows = items.reduce((acc, curr, index, arr) => {
    if (index % 3 === 0) { // Setiap 3 elemen jadi satu row
      acc.push({
        title: arr[index],
        description: arr[index + 1] || '',
        id: arr[index + 2] || `command${index / 3 + 1}`
      });
    }
    return acc;
  }, []);

  // Buat format JSON untuk buttons
  const buttonParamsJson = JSON.stringify({
    title: titleRow,
    sections: [{
      title: titleRow,
      rows
    }]
  });

  // Buat pesan
  let msg = generateWAMessageFromContent(targetNumber, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot // Nama bot Anda
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({
                    image: getRandomThumb2()
                  }, {
                    upload: sho.waUploadToServer
                  })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              "name": "single_select",
              "buttonParamsJson": buttonParamsJson // Format JSON valid
            }]
          }),
          contextInfo: {
            mentionedJid: [targetNumber],
            forwardingScore: 999,
            isForwarded: true
          }
        })
      }
    }
  }, {});

  // Kirim pesan
  await sho.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
  shorly(`Pesan berhasil dikirim ke ${target}`);
}
break;
case 'sendbutton': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendbutton teks|footer|buttonid|displaytext|buttonid|displaytext...");

  // Pisahkan input
  const [teks, footer, ...buttonData] = args.join(" ").split('|');

  // Validasi jumlah button
  if (buttonData.length % 2 !== 0) return shorly("Format tombol salah! Pastikan setiap button memiliki ID dan DisplayText.");

  // Buat array tombol
  const buttons = [];
  for (let i = 0; i < buttonData.length; i += 2) {
    buttons.push({
      buttonId: buttonData[i],
      buttonText: { displayText: buttonData[i + 1] }
    });
  }

  // Kirim pesan dengan tombol
  sho.sendMessage(m.chat, {
    text: teks,
    footer: footer,
    buttons: buttons,
    viewOnce: true,
  });
}
break;
case 'sendbutton2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendbutton2 nomor|teks|footer|buttonid|displaytext|buttonid|displaytext...");

  // Pisahkan input
  const [nomor, teks, footer, ...buttonData] = args.join(" ").split('|');

  // Validasi nomor tujuan
  const targetNumber = nomor.includes('@s.whatsapp.net') ? nomor : `${nomor}@s.whatsapp.net`;

  // Validasi jumlah button
  if (buttonData.length % 2 !== 0) return shorly("Format tombol salah! Pastikan setiap button memiliki ID dan DisplayText.");

  // Buat array tombol
  const buttons = [];
  for (let i = 0; i < buttonData.length; i += 2) {
    buttons.push({
      buttonId: buttonData[i],
      buttonText: { displayText: buttonData[i + 1] }
    });
  }

  // Kirim pesan dengan tombol ke nomor target
  sho.sendMessage(targetNumber, {
    text: teks,
    footer: footer,
    buttons: buttons,
    viewOnce: true,
  });

  shorly(`Pesan berhasil dikirim ke ${nomor}`);
}
break;
case 'sendbuttonimg': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendbuttonimg teks|footer|buttonid|displaytext|buttonid|displaytext...");

  // Pisahkan input
  const [teks, footer, ...buttonData] = args.join(" ").split('|');

  // Validasi jumlah button
  if (buttonData.length % 2 !== 0) return shorly("Format tombol salah! Pastikan setiap button memiliki ID dan DisplayText.");

  // Buat array tombol
  const buttons = [];
  for (let i = 0; i < buttonData.length; i += 2) {
    buttons.push({
      buttonId: buttonData[i],
      buttonText: { displayText: buttonData[i + 1] }
    });
  }

  // Kirim pesan dengan tombol
  sho.sendMessage(m.chat, {
    image: getRandomThumb2(),
    caption: teks,
    footer: footer,
    buttons: buttons,
    viewOnce: true,
  });
}
break;
case 'sendlistch': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendlistch channelID|teks|titleRow|title|desc|command|title|desc|command...");

  // Pisahkan input
  const [target, teks, titleRow, ...items] = args.join(" ").split('|');

  // Validasi target tujuan
  const targetID = target.includes('@') ? target : `${target}@newslatter`;

  // Buat rows untuk menu
  const rows = items.reduce((acc, curr, index, arr) => {
    if (index % 3 === 0) { // Setiap 3 elemen jadi satu row
      acc.push({
        title: arr[index],
        description: arr[index + 1] || '',
        id: arr[index + 2] || `command${index / 3 + 1}`
      });
    }
    return acc;
  }, []);

  // Buat format JSON untuk buttons
  const buttonParamsJson = JSON.stringify({
    title: titleRow,
    sections: [{
      title: titleRow,
      rows
    }]
  });

  // Buat pesan
  let msg = generateWAMessageFromContent(targetID, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot // Nama bot Anda
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({
              image: getRandomThumb2()
            }, {
              upload: sho.waUploadToServer
            })),
            title: '',
            gifPlayback: true,
            subtitle: namaowner,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              "name": "single_select",
              "buttonParamsJson": buttonParamsJson // Format JSON valid
            }]
          }),
          contextInfo: {
            mentionedJid: [targetID],
            forwardingScore: 999,
            isForwarded: true
          }
        })
      }
    }
  }, {});

  // Kirim pesan
  await sho.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });

  shorly(`Pesan berhasil dikirim ke channel ${targetID}`);
}
break;
case 'sendbuttonimg2': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
if (!isOwner) return shorly(mess.owners)
  if (!args[0]) return shorly("Format: sendbutton2 nomor|teks|footer|buttonid|displaytext|buttonid|displaytext...");

  // Pisahkan input
  const [nomor, teks, footer, ...buttonData] = args.join(" ").split('|');

  // Validasi nomor tujuan
  const targetNumber = nomor.includes('@s.whatsapp.net') ? nomor : `${nomor}@s.whatsapp.net`;

  // Validasi jumlah button
  if (buttonData.length % 2 !== 0) return shorly("Format tombol salah! Pastikan setiap button memiliki ID dan DisplayText.");

  // Buat array tombol
  const buttons = [];
  for (let i = 0; i < buttonData.length; i += 2) {
    buttons.push({
      buttonId: buttonData[i],
      buttonText: { displayText: buttonData[i + 1] }
    });
  }

  // Kirim pesan dengan tombol ke nomor target
  sho.sendMessage(targetNumber, {
    image: getRandomThumb2(),
    caption: teks,
    footer: footer,
    buttons: buttons,
    viewOnce: true,
  });

  shorly(`Pesan berhasil dikirim ke ${nomor}`);
}
break;
      case 'autotypingon': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
      if (!isOwner) return shorly(mess.owners);
        botSettings.autotyping = true;
        botSettings.autovn = false;
        shorly('AutoTyping diaktifkan, AutoVN dinonaktifkan.');
        }
        break
      case 'autotypingoff': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
      if (!isOwner) return shorly(mess.owners);
        botSettings.autotyping = false;
        shorly('AutoTyping dinonaktifkan.');
        }
        break
      case 'autovnon': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
      if (!isOwner) return shorly(mess.owners);
        botSettings.autovn = true;
        botSettings.autotyping = false;
        shorly('AutoVN diaktifkan, AutoTyping dinonaktifkan.');
        }
        break
      case 'autovnoff': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
      if (!isOwner) return shorly(mess.owners);
        botSettings.autovn = false;
        shorly('AutoVN dinonaktifkan.');
        }
        break
      case 'tomp3': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!/video|audio/.test(mime)) return shorly(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        if (!(await firely(m, mess.waits))) return;
        // Emoji yang akan digunakan
        const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
        // Mengirimkan reaksi secara berurutan
        for(const emoji of reactEmojis) {
          await sho.sendMessage(m.chat, {
            react: {
              text: emoji,
              key: m.key
            }
          });
        }
        let media = await quoted.download()
        let audio = await toAudio(media, 'mp4')
        await sho.sendMessage(m.chat, {
          document: audio,
          mimetype: 'audio/mpeg',
          fileName: `Convert By Sych Bot.mp3`
        }, {
          quoted: m
        })
      }
      break
      case 'restart': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        if (!isOwner) return shorly(mess.owners);
        shorly(`restarting ${global.namabot}`)
        shorly(mess.dones)
        await sleep(3000)
        process.exit()
        }
        break
      case 'tovn':
      case 'toptt':
      case 'tovoice': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!/video|audio/.test(mime)) return shorly(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        if (!(await firely(m, mess.waits))) return;
        // Emoji yang akan digunakan
        const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
        // Mengirimkan reaksi secara berurutan
        for(const emoji of reactEmojis) {
          await sho.sendMessage(m.chat, {
            react: {
              text: emoji,
              key: m.key
            }
          });
        }
        let media = await quoted.download()
        let audio = await toPTT(media, 'mp4')
        await sho.sendMessage(m.chat, {
          audio: audio,
          mimetype: 'audio/ogg; codecs=opus',
          ptt: true
        }, {
          quoted: m
        })
      }
      break
      case 'togif': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!/webp|video/.test(mime)) return shorly(`Reply Video/Stiker dengan caption *${prefix + command}*`);
        shorly('sek dilit');
        // Emoji yang akan digunakan
        const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
        // Mengirimkan reaksi secara berurutan
        for(const emoji of reactEmojis) {
          await sho.sendMessage(m.chat, {
            react: {
              text: emoji,
              key: m.key
            }
          });
        }
        let filename = 'sticker_gif'; // Nama file default jika tidak ada filename
        let media = await sho.downloadAndSaveMediaMessage(qmsg, filename); // Menyertakan nama file yang valid
        if(!media) {
          return shorly('Gagal mengunduh media!');
        }
        let ran = `./database/sampah/${getRandom('.gif')}`;
        exec(`convert ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if(err) return shorly('Gagal mengonversi stiker❗');
          let buffer = fs.readFileSync(ran);
          sho.sendMessage(m.chat, {
            video: buffer,
            gifPlayback: true
          }, {
            quoted: m
          });
          fs.unlinkSync(ran);
        });
      }
      break
      case 'brat': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    updatePopularCommand(command); // Mencatat command
    if (!text) {
        return shorly('⚠️ Harap masukkan teks untuk digunakan pada stiker!\n\nContoh: brat hai');
    }

    if (!(await firely(m, mess.waits))) return;
    try {
        // Panggil API brat dengan teks yang diberikan
        const apiUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        // Konversi data gambar ke WebP manual tanpa library eksternal
        const { exec } = require('child_process');
        const fs = require('fs');
        const inputPath = './temp/input.png'; // Lokasi sementara file input
        const outputPath = './temp/output.webp'; // Lokasi sementara file output

        // Simpan file input sementara
        fs.writeFileSync(inputPath, response.data);

        // Gunakan `cwebp` untuk konversi ke WebP
        exec(`cwebp ${inputPath} -o ${outputPath}`, async (err) => {
            if (err) {
                console.error('❌ Gagal mengonversi gambar ke WebP:', err.message);
                return shorly('❌ Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
            }

            // Baca file output dan kirim sebagai stiker
            const webpBuffer = fs.readFileSync(outputPath);
            await sho.sendMessage(m.chat, {
                sticker: webpBuffer,
            }, { quoted: hw });

            // Hapus file sementara
            fs.unlinkSync(inputPath);
            fs.unlinkSync(outputPath);

            console.log('✅ Proses selesai, stiker berhasil dikirim.');
        });
    } catch (error) {
        console.error('❌ Terjadi kesalahan:', error.message);
        shorly('❌ Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}
break;
      case 'toimage':
      case 'toimg': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!quoted) return shorly('Reply Image')
        if(!/webp/.test(mime)) return shorly(`Balas sticker dengan caption *${prefix + command}*`)
        if (!(await firely(m, mess.waits))) return;
        let media = await sho.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if(err) throw err
          let buffer = fs.readFileSync(ran)
          sho.sendMessage(m.chat, {
            image: buffer
          }, {
            quoted: m
          })
          fs.unlinkSync(ran)
        })
      }
      break
      case 'toptv': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(/video/.test(mime)) return shorly(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
        if((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
          const anu = await quoted.download()
          const msg = await generateWAMessageContent({
            video: anu
          }, {
            upload: sho.waUploadToServer
          })
          await sho.relayMessage(m.chat, {
            ptvMessage: msg.videoMessage
          }, {})
        } else {
          shorly('Reply Video Yang Mau Di Ubah Ke PTV Message!')
        }
      }
      break
      case 'tourl': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        try {
          if(/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
            // Menambahkan pesan loading dan menyimpan key untuk edit nanti
            if (!(await firely(m, mess.waits))) return;
            // Emoji yang akan digunakan
            const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
            // Mengirimkan reaksi secara berurutan
            for(const emoji of reactEmojis) {
              await sho.sendMessage(m.chat, {
                react: {
                  text: emoji,
                  key: m.key
                }
              });
            }
            let media = await quoted.download();
            let anu = await UguuSe(media);
            // Mengedit pesan setelah URL dihasilkan
            shorly('Url : ' + anu.url);
          } else {
            shorly('Send Media yg ingin di Upload!');
          }
        } catch (e) {
          // Mengedit pesan error jika terjadi masalah
          shorly('Server Uploader sedang offline!');
        }
      }
      break
      case 'img2ibb': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!(await firely(m, mess.waits))) return;
        try {
          if(/webp|jpg|jpeg|png/.test(mime)) {
            // Menambahkan pesan loading
            await sho.sendMessage(m.chat, {
              react: {
                text: '⏳',
                key: m.key
              }
            });
            // Unduh media
            let media = await quoted.download();
            let base64Media = media.toString('base64');
            // Kirim ke imgbb
            let response = await axios.post('https://api.imgbb.com/1/upload', qs.stringify({
              expiration: 31536000000, // 1000 tahun
              key: ibbKey,
              image: base64Media
            }), {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });
            // Ambil URL hasil
            let url = response.data.data.url;
            // Kirim URL ke pengguna
            shorly(`Berhasil diunggah!\nURL: ${url}`);
          } else {
            shorly('Harap kirim file media yang valid (jpg, png, dll.)!');
          }
        } catch (e) {
          console.error(e);
          shorly('Terjadi kesalahan saat mengunggah file!');
        }
      }
      break
      case 'ttmp3':
      case 'tiktokmp3':
      case 'ttaudio':
      case 'tiktokaudio': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        if(!text) return shorly(`Example: ${prefix + command} url_tiktok`);
        const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
        if(!tiktokRegex.test(text)) return shorly('Url Tidak Mengandung Result Dari TikTok!');
        try {
          const hasil = await tiktokDl(text);
          console.log('Hasil dari tiktokDl (audio):', JSON.stringify(hasil, null, 2));
          if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini
          if(hasil && hasil.music_info && hasil.music_info.url) {
            await sho.sendMessage(m.chat, {
              audio: {
                url: hasil.music_info.url
              },
              mimetype: 'audio/mpeg',
              contextInfo: {
                externalAdReply: {
                  title: 'TikTok • ' + hasil.author.nickname,
                  body: `${hasil.stats.likes} suka, ${hasil.stats.comment} komentar. ${hasil.title}`,
                  previewType: 'PHOTO',
                  thumbnailUrl: hasil.cover,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  sourceUrl: text,
                },
              },
            }, {
              quoted: m
            });
          } else {
            shorly('Audio TikTok tidak ditemukan atau tidak valid!');
          }
        } catch (e) {
          console.error('Error saat memproses audio TikTok:', e);
          shorly('Gagal memproses URL! Detail error: ' + e.message);
        }
      }
      break
      case 'addsewa':
        updatePopularCommand(command);
        if (!isOwner) return shorly(mess.owners);
        if(!isGroup) return shorly(mess.groups);
        pler.push(m.chat)
        fs.writeFileSync('./database/sewa.json', JSON.stringify(pler))
        shorly(`${command} Sukses Menambahkan Ke List Sewa✅`)
        break
      case 'delsewa':
        updatePopularCommand(command);
        if (!isOwner) return shorly(mess.owners);
        if(!isGroup) return shorly(mess.groups);
        var ini = pler.indexOf(m.chat)
        pler.splice(ini, 1)
        fs.writeFileSync('./database/sewa.json', JSON.stringify(pler))
        shorly(`${command} Sukses Menghapus Dari List Sewa✅`)
        break
      case 'ytmp3':
        updatePopularCommand(command); // Mencatat command
        if(!text) return shorly('Kirim perintah dengan link YouTube!\nContoh: .ytmp3 https://youtu.be/xxxx');
        if(!isUrl(text)) return shorly('Link yang Anda kirim tidak valid!');
        if (!(await firely(m, mess.waits))) return;
        await downloadMp3(text); // Panggil fungsi downloadMp3
        break
      case 'ytmp4':
        updatePopularCommand(command); // Mencatat command
        if(!text) return shorly('Kirim perintah dengan link YouTube!\nContoh: .ytmp4 https://youtu.be/xxxx');
        if(!isUrl(text)) return shorly('Link yang Anda kirim tidak valid!');
        if (!(await firely(m, mess.waits))) return;
        await downloadMp4(text); // Panggil fungsi downloadMp4
        break
      case 'owner': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        try {
          const carouselCards = [{
            header: {
              title: "Owner Bot",
              hasMediaAttachment: true,
              imageMessage: (await generateWAMessageContent({
                image: {
                  url: './shoMedia/image/owner.jpg'
                }
              }, {
                upload: sho.waUploadToServer
              })).imageMessage
            },
            body: {
              text: `━━━━━━ ✨ *${namabot}* ✨ ━━━━━━\n🔰 *OWNER RULES* 🔰\n🚫 Jangan spam\n🤝 Gunakan sopan\n📵 Hindari panggilan\n━━━━━━ 🌟 *Terima Kasih* 🌟 ━━━━━━`
            },
            footer: {
              text: `${namaowner}`
            },
            nativeFlowMessage: {
              buttons: [{
                "name": "cta_url",
                "buttonParamsJson": JSON.stringify({
                  display_text: `Owner (yDa🔱)`, //ganti jadi (${namaowner})
                  url: `https://wa.me/+${owner}`
                })
              }]
            }
          }, {
            header: {
              title: "Bot WhatsApp",
              hasMediaAttachment: true,
              imageMessage: (await generateWAMessageContent({
                image: {
                  url: './shoMedia/image/bot.jpg'
                }
              }, {
                upload: sho.waUploadToServer
              })).imageMessage
            },
            body: {
              text: `━━━━━━ ✨ *${namabot}* ✨ ━━━━━━\n🔰 *BOT RULES* 🔰\n🚷 Tidak boleh spam\n💬 Tidak boleh berkata kasar\n📴 Tidak boleh call\n━━━━━━ 🔥 *Terima Kasih* 🔥 ━━━━━━`
            },
            footer: {
              text: `${namabot}`
            },
            nativeFlowMessage: {
              buttons: [{
                "name": "cta_url",
                "buttonParamsJson": JSON.stringify({
                  display_text: `Botz (${namabot})🔑`,
                  url: `https://wa.me/+${botnum}`
                })
              }]
            }
          }];
          // Generate carousel message
          const carouselMessage = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: {
                    text: "Berikut ada kontak owner dan bot, silakan hubungi jika diperlukan! ✨📱"
                  },
                  footer: {
                    text: `${namabot}`
                  },
                  header: {
                    hasMediaAttachment: false
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: carouselCards
                  })
                })
              }
            }
          }, {});
          // Kirim pesan carousel
          await sho.relayMessage(m.chat, carouselMessage.message, {
            messageId: carouselMessage.key.id
          });
        } catch (error) {
          console.error("Kesalahan saat mengirim carousel:", error);
          await sho.sendMessage(m.chat, {
            text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
          }, {
            quoted: m
          });
        }
      }
      break
      case 'about': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        shorly(`Hai! Kenalin, aku ShoBotz, bot kesayangan yang dibuat sama YuRin’S. Nah, biar makin akrab, aku ceritain sedikit tentang YuRin’S, ya. 🌱✨\n\nYuRin’S itu nama unik yang gabungan dari Yu = Yuda, Rin = Orlin, dan S = Sho. Yuda, si ownerku, sekarang lagi sekolah di SMA Negeri 2 Wonogiri, kelas 11. Dia tinggal di daerah Wonogiri, Jawa Tengah, tempat yang adem dan penuh inspirasi. Hobi utamanya coding, tapi dia juga suka banget nyoba hal-hal baru. 🍃 Orangnya kreatif, semangat belajarnya tinggi, dan nggak takut eksplor hal-hal yang beda! Oh iya, ada Orlin nih, pacar ownerku yang juga bagian dari nama YuRin’S 🌸💕\n\nYuda udah mulai bikin bot sejak tahun 2021, jadi bisa dibilang dia punya pengalaman yang oke banget. Walaupun sempat berhenti di akhir 2022 sampai akhir 2024, sekarang dia aktif lagi dan makin jago bikin bot-bot keren kayak aku. 🐾 Kalau ada yang mau ngobrol, belajar coding, atau tanya-tanya soal bot, santai aja, yuda siap bantu kapan pun! 🌟`);
      }
      break
      case 'shoai': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if(args[0] === 'on') {
          if(autoAiStatus) {
            return shorly('Peringatan: autoAi sudah diaktifkan sebelumnya!');
          }
          autoAiStatus = true;
          return shorly('autoAi diaktifkan! Sekarang semua pesan akan diproses secara otomatis.');
        } else if(args[0] === 'off') {
          if(!autoAiStatus) {
            return shorly('Peringatan: autoAi sudah dinonaktifkan sebelumnya!');
          }
          autoAiStatus = false;
          return shorly('autoAi dinonaktifkan! Pesan tidak akan diproses secara otomatis.');
        } else {
          const warnn = "Click button ShoAi di bawah ini sesuai dengan perintah yang king mau 👑";
          sho.sendMessage(m.chat, {
            text: warnn,
            footer: namabot,
            buttons: [{
              buttonId: `${prefix}shoai on`,
              buttonText: {
                displayText: "SHOOAI ON🌵"
              }
            }, {
              buttonId: `${prefix}shoai off`,
              buttonText: {
                displayText: "SHOOAi OFF🥦"
              }
            }],
            viewOnce: true,
          });
        }
        break
      }
      case 'setprompt': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if(!text) return shorly(`Example: ${prefix + command} prompt text`);
        prompt = text;
        shorly(`Prompt berhasil diatur:\n"${prompt}"`);
        break
      }
      case 'delcase': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        if (!isOwner) return shorly(mess.owners);
        if(!q) return shorly(`Contoh: ${prefix+command} nama case`);
        const fs = require('fs').promises;
        async function dellCase(filePath, caseNameToRemove) {
          try {
            let data = await fs.readFile(filePath, 'utf8');
            const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
            const modifiedData = data.replace(regex, '');
            if(data === modifiedData) {
              shorly('Case tidak ditemukan atau sudah dihapus.');
              return;
            }
            await fs.writeFile(filePath, modifiedData, 'utf8');
            shorly('Sukses menghapus case!');
          } catch (err) {
            shorly(`Terjadi kesalahan: ${err.message}`);
          }
        }
        dellCase('./case.js', q);
      }
      break
      case 'addcase': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        if(!isCreator && !isOwner) return shorly(mess.owners)
        if(!text) return shorly('Tambahkan case yang ingin di masukan');
        const namaFile = './case.js';
        const caseBaru = `${text}`;
        fs.readFile(namaFile, 'utf8', (err, data) => {
          if(err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
          }
          const posisiAwalGimage = data.indexOf("case 'addcase':");
          if(posisiAwalGimage !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
              if(err) {
                shorly('Error File:', err);
              } else {
                shorly('Sukses Menambahkan case');
              }
            });
          } else {
            shorly('Gagal Menambahkan case');
          }
        });
      }
      break
      case 'pushcontact': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if(!isGroup) return shorly(mess.groups);
        var name = text.split('/')[0];
        var chet = text.split('/')[1];
        if(!name) return shorly(`Contoh: ${prefix + command} nama/pesan`);
        if(!chet) return shorly(`Contoh: ${prefix + command} nama/pesan`);
        let kontak = {
          displayName: "Contact",
          contacts: [{
            displayName: name,
            vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
          }]
        }
        let push = await sho.groupMetadata(m.chat)
        if(push.participants.length > 300) return shorly('Batas member maksimal: *300*')
        await shorly('sabar ajg');
        for(let a of push.participants) {
          const repf = await sho.sendMessage(a.id, {
            contacts: kontak
          })
          sho.sendMessage(a.id, {
            text: chet
          }, {
            quoted: repf
          })
          await sleep(1000);
        }
        await shorly('uwes cik');
      }
      break
      case 'pushkontak3':
if (!isOwner) return shorly(mess.owners)
if (!text) return shorly(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .getgcid`)
await shorly("Otw Boskuuu")
const groupMetadataa = !m.isGroup? await sho.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await sho.downloadAndSaveMediaMessage(quoted)
memk = await UguuSe(media)
await sho.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await sho.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
shorly("Succes Boss!")
break
case 'pushkontak4':
if (!isOwner) return shorly(mess.owners)
if (isGroup) return shorly(mess.privates)
if (!text) return shorly(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await shorly("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await sho.downloadAndSaveMediaMessage(quoted)
mem = await UguuSe(media)
await sho.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await sho.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
shorly("Succes Boss!")
break
      case "closetime":
        updatePopularCommand(command);
        if(!isGroup) return shorly(mess.groups);
        if(!isAdmins) return shorly(mess.admins);
        if(!isBotAdmins) return shorly(mess.abots);
        if(args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if(args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if(args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if(args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return shorly("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        shorly(`Close time grup ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          sho.groupSettingUpdate(from, "announcement");
          shorly(close);
        }, timer);
        break
      case 'spotify':
      case 'spotifysearch': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!text) return shorly(`Example: ${prefix + command} alan walker alone`)
        if (!(await firely(m, mess.waits))) return;
        try {
          let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
          let txt = hasil.map(a => {
            return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
          }).join`\n\n`
          shorly(txt)
        } catch (e) {
          shorly('Server Search Offline!')
        }
      }
      break
      case 'suit': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return shorly('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
				} else {
					hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
				}
				shorly(hasil);
				break
				}
      case 'delete':
      case 'del':
      case 'd': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!m.quoted) return shorly('Reply pesan yang mau di delete')
        await sho.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: m.isBotAdmins ? false : true,
            id: m.quoted.id,
            participant: m.quoted.sender
          }
        })
      }
      break
      case 'spotifydl': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Mencatat command
        if(!text) return shorly(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
        if(!isUrl(args[0]) || !args[0].includes('open.spotify.com/track')) return shorly('Url Invalid!');
        if (!(await firely(m, mess.waits))) return;
        try {
          // Fetching data from the API
          let res = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${text}`);
          let json = await res.json();
          if(!json.status) return shorly('Error: Unable to fetch data from the API.');
          let {
            metadata,
            download
          } = json;
          // Sending audio with context info
          await sho.sendMessage(m.chat, {
            audio: {
              url: download
            },
            fileName: `${metadata.name} - ${metadata.artist}.mp3`,
            mimetype: 'audio/mpeg',
            contextInfo: {
              externalAdReply: {
                title: metadata.name,
                body: `${metadata.album_name} - ${metadata.artist}`,
                thumbnailUrl: metadata.cover_url,
                sourceUrl: metadata.url, // Spotify URL
                mediaType: 1,
                mediaUrl: metadata.url, // Spotify URL
              },
            },
          }, {
            quoted: hw
          });
          shorly('Musik berhasil dikirim, selamat menikmati!');
        } catch (e) {
          console.error(e);
          shorly('Error: Server download sedang offline atau API bermasalah!');
        }
      }
      break
      //OPENTIME
      case "opentime":
        updatePopularCommand(command);
        if(!isGroup) return shorly(mess.groups);
        if(!isAdmins) return shorly(mess.admins);
        if(!isBotAdmins) return shorly(mess.abots);
        if(args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if(args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if(args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if(args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return shorly("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        shorly(`Open time grup ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          sho.groupSettingUpdate(from, "not_announcement");
          shorly(open);
        }, timer);
        break
// Menyusun perintah ffmpeg untuk membuat gambar dengan overlay
case 'qc': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    if (!text) return shorly('Input teksnya!');
    
    const sender = m.sender;
    const username = await sho.getName(m.quoted ? m.quoted.sender : sender);
    const avatar = await sho.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => './media/avatar_contact.png');
    
    // Lokasi file gambar avatar
    const avatarPath = './media/avatar.jpg';  // Pastikan gambar diunduh dan disimpan secara lokal
    
    // Tentukan lokasi output
    const outputPath = './media/output.png';
    
    // Membuat gambar dengan ffmpeg
    ffmpeg()
        .input('color=c=white:s=512x512:d=1')  // Warna latar belakang putih
        .input(avatarPath)  // Gambar avatar
        .complexFilter([
            '[0:v][1:v]overlay=W-w-10:H-h-10', // Overlay gambar avatar di atas latar belakang
        ])
        .output(outputPath)
        .on('end', async () => {
            // Jika berhasil, kirimkan gambar yang telah dihasilkan
            const buffer = fs.readFileSync(outputPath);
            let encmedia = await sho.sendImage(m.chat, buffer, m, { caption: text });
            fs.unlinkSync(outputPath);  // Hapus file output setelah dikirim
        })
        .on('error', (err) => {
            console.error('Error executing ffmpeg command:', err);
        })
        .run();
}
break;
      case 's':
      case 'sticker':
      case 'stiker': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        if(!quoted) return shorly(`Kirim/Balas Gambar/Video dengan caption ${prefix + command}\nDurasi video maksimal 9 detik!`);
        if(!mime) return shorly('Mime type tidak dikenali!');
        if (!(await firely(m, mess.waits))) return;
        if(/image|webp/.test(mime)) {
          try {
            let media = await quoted.download();
            const mediaPath = './temp/media_image.jpg';
            const outputPath = './temp/cropped_image.webp';
            fs.writeFileSync(mediaPath, media);
            if(!fs.existsSync(mediaPath)) {
              return shorly('File gambar gagal disimpan!');
            }
            ffmpeg(mediaPath).outputOptions(['-vf', 'crop=\'min(iw,ih)\':\'min(iw,ih)\',scale=512:512']).outputFormat('webp').output(outputPath).on('end', () => {
              sho.sendMessage(m.chat, {
                sticker: fs.readFileSync(outputPath),
                packname: global.packname,
                author: global.author
              }, {
                quoted: m
              })
              fs.unlinkSync(mediaPath);
              fs.unlinkSync(outputPath);
            }).on('error', (err) => {
              console.error('Error saat membuat stiker gambar:', err);
              shorly('Terjadi kesalahan saat membuat stiker gambar. 😞');
              fs.unlinkSync(mediaPath);
            }).run();
          } catch (err) {
            console.error('Error download gambar:', err);
            shorly('Gagal mendownload gambar! 😞');
          }
        } else if(/video/.test(mime)) {
          if((quoted.msg || quoted).seconds > 11) {
            return shorly('Durasi video maksimal 9 detik untuk stiker!');
          }
          try {
            let media = await quoted.download();
            const mediaPath = './temp/media_video.mp4';
            const outputPath = './temp/cropped_video.webp';
            fs.writeFileSync(mediaPath, media);
            if(!fs.existsSync(mediaPath)) {
              return shorly('File video gagal disimpan!');
            }
            ffmpeg(mediaPath).outputOptions(['-vf', 'crop=\'min(iw,ih)\':\'min(iw,ih)\',scale=512:512']).outputFormat('webp').output(outputPath).on('end', () => {
              sho.sendMessage(m.chat, {
                sticker: fs.readFileSync(outputPath),
                packname: global.packname,
                author: global.author
              }, {
                quoted: m
              })
              fs.unlinkSync(mediaPath);
              fs.unlinkSync(outputPath);
            }).on('error', (err) => {
              console.error('Error saat membuat stiker video:', err);
              shorly('Terjadi kesalahan saat membuat stiker video. 😞');
              fs.unlinkSync(mediaPath);
            }).run();
          } catch (err) {
            console.error('Error download video:', err);
            shorly('Gagal mendownload video! 😞');
          }
        } else {
          shorly(`Kirim atau balas gambar/video dengan caption ${prefix + command}`);
        }
      }
      break
case 'smeme': case 'stickermeme': case 'stickmeme': {
				if (!/webp/.test(mime) && /image/.test(mime)) {
					if (!text) return shorly(`Penggunaan: ${prefix + command} teks_atas|teks_bawah`);
		
					atas = text.split('|')[0] ? text.split('|')[0] : '';
					bawah = text.split('|')[1] ? text.split('|')[1] : '';
		
					let mee = await sho.downloadAndSaveMediaMessage(quoted);
					let mem = await CatBox(mee);
					let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
		
					await sho.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });
				} else {
					shorly(`Kirim atau balas gambar dengan caption ${prefix + command} teks_atas|teks_bawah untuk membuat meme!`);
				}
			}
			break;
      case 'tqto': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command); // Jika menggunakan fungsi untuk mencatat penggunaan command
        const url = 'https://raw.githubusercontent.com/sychyy/sychyy/refs/heads/main/data.json';
        const response = await fetch(url);
        const data = await response.json();
        // Kirim pesan dengan data yang didapatkan menggunakan shorly()
        const message = `*${c}Thanks To:${c}*\n${data.tqto}\n\n*${c}Owner Bot:${c}*\n${data.owners}\n\n${c}Group & Channel${c}\n*Gc:* ${wagc}\n*Ch:* ${wach}`;
        sho.sendMessage(m.chat, {
          image: tqq,
          caption: message,
          footer: namabot,
          buttons: [{
            buttonId: `${prefix}about`,
            buttonText: {
              displayText: "About 👤"
            }
          }, {
            buttonId: `${prefix}contact`,
            buttonText: {
              displayText: "Contact 📞"
            }
          }],
          viewOnce: true,
        }, {
          quoted: hw
        });
      }
      break
      case 'play': {
    if (!isRegistered(m)) {
        return sendRegister(sho, m, prefix, namabot);
    }
    updatePopularCommand(command); // Mencatat command
    if (!text) return shorly(`Contoh: ${prefix + command} judul lagu`);

    try {
        // Cari hasil di YouTube menggunakan API
        let search = await yts(text);
        if (!search.all.length) return shorly("❌ Tidak ada hasil pencarian ditemukan!");

        if (!(await firely(m, mess.waits))) return;

        // Ambil hanya hasil pertama
        let video = search.all[0];
        let message = `🎥 *Judul:* ${video.title}\n👁 *Views:* ${video.views}\n⏱ *Durasi:* ${video.timestamp}\n📆 *Diupload:* ${video.ago}\n🔗 *URL:* ${video.url}`;

        // Kirim pesan dengan dua tombol (YTMP3 dan YTMP4)
        await sho.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: message,
            footer: namabot,
            buttons: [
                {
                    buttonId: `${prefix}ytmp3 ${video.url}`,
                    buttonText: { displayText: "YTMP3 🎵" }
                },
                {
                    buttonId: `${prefix}ytmp4 ${video.url}`,
                    buttonText: { displayText: "YTMP4 🎥" }
                }
            ],
            viewOnce: true,
        }, {
            quoted: hw
        });

    } catch (e) {
        console.error("Kesalahan saat memproses permintaan YouTube Search:", e);
        await sho.sendMessage(m.chat, {
            text: "❌ Terjadi kesalahan saat memproses pencarian YouTube. Silakan coba lagi."
        }, { quoted: hw });
    }
}
break;
      case 'wogwogg': {
     const teki = 'yess bisaa'
     let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: teki
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    gifPlayback: true,
                    subtitle: namaowner,
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                        "name": "single_select",
                        "buttonParamsJson": `{
                            "title": "Settings",
                            "sections": [{
                                "title": "Select Settings",
                                "rows": [{
                                    "title": "💬 AUTOTYPING ON",
                                    "description": "Bot akan mengaktifkan auto typing",
                                    "id": "${prefix}autotypingon"
                                },
                                {
                                    "title": "📝 AUTOBIO OFF",
                                    "description": "Mematikan fitur autobio",
                                    "id": "${prefix}autobio off"
                                },
                                            {
                "buttonId": "${prefix}about",
                "buttonText": { "displayText": "About 👤" }
            },
            {
                "buttonId": "${prefix}contact",
                buttonText: { "displayText": "Contact 📞" }
            }]
                            }]
                        }`
                    }]
                }),
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363383347233294@newsletter',
                        newsletterName: namaowner,
                        serverMessageId: 143
                    }
                }
            })
        }
    },
}, {});

// Kirim pesan gabungan
await sho.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break
      case 'tiktokslide':
      case 'ttslide': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        if(!text) {
          console.log('Teks URL TikTok tidak ditemukan.');
          return shorly(`Example: ${prefix + command} url_tiktok`);
        }
        const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
        if(!tiktokRegex.test(text)) {
          console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
          return shorly('URL Tidak Mengandung Result Dari TikTok!');
        }
        if (!(await firely(m, mess.waits))) return;
        try {
          console.log('Memulai proses pengunduhan dari URL TikTok:', text);
          const hasil = await tiktokDl(text);
          if(!hasil || !hasil.data || hasil.data.length === 0) {
            console.log('Tidak ada gambar atau media yang ditemukan.');
            return shorly('Tidak ada foto yang ditemukan!');
          }
          // Buat carousel card untuk setiap gambar
          const carouselCards = await Promise.all(hasil.data.map(async (item, index) => {
            return {
              header: {
                title: `Foto ${index + 1}`,
                hasMediaAttachment: true,
                imageMessage: (await generateWAMessageContent({
                  image: {
                    url: item.url
                  }
                }, {
                  upload: sho.waUploadToServer
                })).imageMessage,
              },
              body: {
                text: `Foto ${index + 1} dari TikTok`,
              },
              footer: {
                text: "Klik tombol untuk melihat lebih detail",
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Lihat di TikTok",
                    url: text,
                  }),
                }, {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Unduh Foto",
                    url: item.url,
                  }),
                }],
              },
            };
          }));
          // Buat pesan carousel
          const carouselMessage = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: {
                    text: `Hasil foto dari TikTok: ${text}`
                  },
                  footer: {
                    text: "TikTok Slide Bot by Sho"
                  },
                  header: {
                    hasMediaAttachment: false
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: carouselCards,
                  }),
                }),
              },
            },
          }, {});
          // Kirim pesan carousel
          await sho.relayMessage(m.chat, carouselMessage.message, {
            messageId: carouselMessage.key.id
          });
          console.log('Carousel dikirimkan dengan sukses.');
        } catch (e) {
          console.error('Gagal mengunduh atau membuat carousel:', e);
          shorly('Gagal memproses permintaan Anda. Silakan coba lagi.');
        }
      }
      break
      case 'tesbtn': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        const wawa = `halo njir wkwk`
        let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: wawa
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({
                    image: fs.readFileSync('./shoMedia/image/owner.jpg')
                  }, {
                    upload: sho.waUploadToServer
                  })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"YouTube 💛\",\"url\":\"https://www.youtube.com/@Kiqozho_official\",\"merchant_url\":\"https://www.google.com\"}"
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/QozhoStore\",\"merchant_url\":\"https://www.google.com\"}"
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VanqPsCEFeXhWmSSis33\",\"merchant_url\":\"https://www.google.com\"}"
                  }, {
                    "name": "quick_reply",
                    "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
                  }, {
                    "name": "quick_reply",
                    "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
                  }, {
                    "name": "quick_reply",
                    "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363383347233294@newsletter',
                    newsletterName: namaowner,
                    serverMessageId: 143
                  }
                }
              })
            }
          },
        }, {})
        await sho.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
      }
      break
      case 'getcase': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
updatePopularCommand(command); // Mencatat command
        if (!isOwner) return shorly(mess.owners);
        if (!text) return shorly('Masukkan Nama Casenya!')
        try {
          const getCase = (cases) => {
            return "case" + `'${cases}'` + fs.readFileSync("case.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
          }
          shorly(`${getCase(text)}`)
        } catch (e) {
          shorly(`case ${text} tidak ditemukan!`)
        }
      }
      break
      case 'mode': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
        updatePopularCommand(command);
        if(!isOwner) return sho.sendMessage(from, {
          text: mess.owners
        });
        if(!text) {
          const warnn = "⚙️ Pilih mode bot di bawah ini:";
          let msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: warnn
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: ``,
                  gifPlayback: true,
                  subtitle: namaowner,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": `{
												"title": "🪀 Bot Mode",
												"sections": [{
													"title": "Select Mode",
													"rows": [{
														"title": "🚀 PUBLIC MODE",
														"description": "Bot akan membalas semua pesan",
														"id": "${prefix}mode public"
													},
													{
														"title": "🚀 SELF MODE",
														"description": "Bot tidak akan membalas semua chat yang ada",
														"id": "${prefix}mode self"
													},
													{
														"title": "🛸 MODE GROUP ON",
														"description": "Bot hanya akan membalas pesan group",
														"id": "${prefix}groupon"
													},
													{
														"title": "🛸 MODE GROUP OFF",
														"description": "bot akan membalas semua pesan yang ada",
														"id": "${prefix}groupoff"
													},
													{
														"title": "✈️ MODE PRIVATE ON",
														"description": "Bot hanya akan membalas pesan yang bersifat private chat",
														"id": "${prefix}privatechatonly on"
													},
													{
														"title": "✈️ MODE PRIVATE OFF",
														"description": "bot akan membalas semua pesan yang bersifat private chat",
														"id": "${prefix}privatechatonly off"
													}]
												}]
											}`
                  }],
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363383347233294@newsletter',
                    newsletterName: namaowner,
                    serverMessageId: 143
                  }
                }
              })
            }
          },
        }, {})
        await sho.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        })
          return;
        }
        if(text.toLowerCase() === 'self') {
          global.public = false;
          sho.sendMessage(from, {
            text: '✅ Bot sekarang dalam mode *SELF*. Hanya pemilik yang dapat menggunakan bot.'
          });
        } else if(text.toLowerCase() === 'public') {
          global.public = true;
          sho.sendMessage(from, {
            text: '✅ Bot sekarang dalam mode *PUBLIC*. Semua orang dapat menggunakan bot.'
          });
        } else {
          sho.sendMessage(from, {
            text: '❌ Mode tidak valid! Gunakan *self* atau *public*.'
          });
        }
        break
      }
      // Case: Aktifkan Mode Group Only
case 'groupon': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    if (!isOwner) return shorly(mess.owners)
    if (global.groupOnly) return shorly('⚠️ Mode Group Only sudah aktif.')
    global.groupOnly = true
    global.privateChatOnly = false
    global.public = true // Nonaktifkan mode public
    shorly('✅ Mode Group Only diaktifkan!\n❌ Mode Private dimatikan.')
}
break

// Case: Nonaktifkan Mode Group Only
case 'groupoff': {

if (!isRegistered(m)) {
    return sendRegister(sho, m, prefix, namabot);
}
    if (!isOwner) return shorly(mess.owners)
    if (!global.groupOnly) return shorly('⚠️ Mode Group Only sudah nonaktif.')
    global.groupOnly = false
    global.public = true // Aktifkan kembali mode public
    shorly('❌ Mode Group Only dimatikan!\n✅ Mode Public diaktifkan.')
}
break
      case "casecek": {
        updatePopularCommand(command);
        if (!isOwner) return shorly(mess.owners);
        fs.readFile("./case.js", "utf8", (err, data) => {
          if(err) throw err
          let regex = /case\s"(\w+)"/g
          let match, caseNames = []
          while((match = regex.exec(data)) !== null) {
            caseNames.push(match[1])
          }
          let output = `${simbols} ` + caseNames.join(`\n${simbols} `)
          shorly(output + `\n\nTotal case : ${caseNames.length}`)
        })
      }
      break
      //===========[ YANG UDAH SUPPORT MKSH YH ]=============\\
      /*
             •       #SCBOTWATERMUX #TERMUXNEVERDIE🔥   
             •    #BOTWAONLYTERMUX #WHATSAPPBOTTERMUX
             •       #SYCHYY #SYCHEE # SHOBOTZ #YURIN'S
             
         * 💬NOTE : 
         * ⚠️ DILARANG MENJUAL SCRIPT INI WAHAI PARA JB KONTOL
         * ⚠️ DILARANG MENGKLAIM BAHWA INI BOT BUATAN SENDIRI‼️
         * ⚠️ JANGAN HAPUS KREDIT DIBAWAH‼️⚡
         * 🔥 SUPPORT KAMI SHOBOTZ && SYCHYY && YURIN'S
         * 👑 SC BY SHO - YuRin's [Yuda-Orlin]
         * 💧 ©Sho-YuRin's - 2025
      */
      //===================[ BATAS CASE ]=====================\\
      // AutoAI Message Handling
      default:
        // Jika AutoAI aktif dan pengirim bukan bot atau respons dari AI, proses pesan
        if(autoAiStatus 
        && m.sender !== botNumber 
        && !(m.quoted 
        && m.quoted.sender === botNumber) 
        && !m.key.fromMe
        ) {
          const chatId = m.chat; // Gunakan ID chat untuk membedakan percakapan
          const userMessage = m.text;
          // Inisialisasi riwayat percakapan jika belum ada
          if(!conversationHistory[chatId]) {
            conversationHistory[chatId] = [{
              role: "system",
              content: prompt
            }];
          }
          // Tambahkan pesan pengguna ke riwayat percakapan
          conversationHistory[chatId].push({
            role: "user",
            content: userMessage
          });
          // Buat prompt tanpa format "User:" atau "AI:"
          const fullPrompt = conversationHistory[chatId].map(entry => entry.content) // Hanya ambil isi pesan
            .join("\n");
          try {
            let hasil = await yanzGpt(fullPrompt); // Kirim riwayat ke AI
            const aiReply = hasil.choices[0].message.content;
            // Tambahkan balasan AI ke riwayat percakapan
            conversationHistory[chatId].push({
              role: "ai",
              content: aiReply
            });
            // Kirim balasan ke pengguna
            m.reply(aiReply);
            // Tambahkan pencatatan command
            updatePopularCommand('ai');
          } catch (e) {
            try {
              let hasil = await bk9Ai(fullPrompt);
              const aiReply = hasil.BK9;
              // Tambahkan balasan AI ke riwayat percakapan
              conversationHistory[chatId].push({
                role: "ai",
                content: aiReply
              });
              // Kirim balasan ke pengguna
              m.reply(aiReply);
              updatePopularCommand('ai');
            } catch (e) {
              m.reply(pickRandom(['Fitur AI sedang bermasalah!', 'Tidak dapat terhubung ke AI!', 'Sistem AI sedang sibuk sekarang!', 'Fitur sedang tidak dapat digunakan!', ]));
            }
          }
        }
        if((budy) && ["assalamu'alaikum", "Assalamu'alaikum", "Assalamualaikum", "assalamualaikum", "Assalammualaikum", "assalammualaikum", "Asalamualaikum", "asalamualaikum", "Asalamu'alaikum", " asalamu'alaikum"].includes(budy) && !isCmd) {
          sho.sendMessage(from, {
            text: `${pickRandom(["*Wa'alaikumussalam*","*Wa'alaikumussalam Wb.*","*Wa'alaikumussalam Wr. Wb.*","*Wa'alaikumussalam Warahmatullahi Wabarakatuh*"])}`
          })
        }
        if((budy) && ["tes", "Tes", "TES", "Test", "test"].includes(budy) && !isCmd) {
          sho.sendMessage(from, {
            text: `*${runtime(os.uptime())}*⏰`
          })
        }
        if(budy.startsWith('=>')) {
          if(!isOwner) return

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if(sat == undefined) {
              bang = util.format(sul)
            }
            return shorly(bang)
          }
          try {
            shorly(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
          } catch (e) {
            shorly(String(e))
          }
        }
        if(budy.startsWith('>')) {
          if(!isOwner) return
          let kode = budy.trim().split(/ +/)[0]
          let teks
          try {
            teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
          } catch (e) {
            teks = e
          } finally {
            await shorly(require('util').format(teks))
          }
        }
        if(budy.startsWith('$')) {
          if(!isOwner) return
          exec(budy.slice(2), (err, stdout) => {
            if(err) return shorly(`${err}`)
            if(stdout) return shorly(stdout)
          })
        }
    }
  } catch (err) {
    console.log(util.format(err))
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update ${__filename}`)
  delete require.cache[file]
  require(file)
})
/*
     Thanks You For:
     Sho Botz ⚡
     Yurins? Yuda-Orlin 💘💧
     Zoi 🪨
     Ruri 🌈
     HenriqueX ☢️
     Puguh 🛡️
     RicoRoyco 🔥
     Case Copas by Khalid ⬇️
*/