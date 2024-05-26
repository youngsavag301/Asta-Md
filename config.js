const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""
global.email ="astromedia0010@gmail.com"
global.location="Astro,World"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Astropeda/Asta-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/JMsAFRD.jpeg" ;
global.caption = process.env.CAPTION || global.caption || "αѕтα-м∂ 2024" 
global.BUTTONS = process.env.BUTTONS || process.env.MENU_BTN || "1";


global.devs = "2348039607375"
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348039607375";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348039607375";
global.style = process.env.STYLE   || '2'
global.flush = process.env.FLUSH   || "false"; 
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" 
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/mHEqQgr.jpg,https://i.imgur.com/lSdca7B.jpg,https://i.imgur.com/XakNh3r.jpg,https://i.imgur.com/UslG8eB.jpg,https://i.imgur.com/0OQxTyt.jpg,https://i.imgur.com/MJCmdiA.jpg,https://i.imgur.com/K7zFZl2.jpg"
global.waPresence= process.env.WAPRESENCE ||  "online" ;


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348039607375";


global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348039607375";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348039607375";

global.api_smd = "https://api-amd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9ZcVdKWUdCYUZYN3R2dmttQlhVSCtNektHbnA3MmxsTVcvQ2t3MUIzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpVQVkyNUdPdVZPbVNsdjh6ZFM5QnRuVzRjZlN5U3YrNlBOOW14NFlTQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T255dUhxNGdFVGhndVhlWFUxek1zUjhRSXZXUDcwSCtYUGhIeXVyazBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxNld1Vm8wTzZJMVhEZTg5cnFaTEZzOEtzaUV5ZTIvd1FmYVNuUTJrV2hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRDd3l5cFFVSzd5aGtVdDdQYzhrRlY4TVlaZHBXSzUyUmdGQzBZYTlmbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxON1ZUWjRmQmd0NXZzK3NEVGVrcnFuUk9wMHJoMUhLbTRMSm5xbkxiUkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01GTVVld1E5MkJrOGRWUnFrRnBIZWtIV1E2dms4V1A2RGtaUjVvQk9tcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVI5NkpqNCtsRllZZ1JieW9vVDhGL2FmMk5XUlJId2JpOE91M0VkSlZUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNzbmFycXBRTy9KQ1lWb004RHZsREhjRVgxVk5RSkNpS2xwQ040dllHTWsxN3dSemVvY1diY3pQVk1RTTczb1ltOUJDVFR6VVhwWlJ3VzRTQUtRcGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJSZDkvdk1kZU5lU0liRG1EOHVzcXFBcHhzcTdKSnZGcms1d0VjcjRwMFNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuQk9talIwcVQ1YXhnRmdkVzVITElnIiwicGhvbmVJZCI6ImI1OWE5YTI4LTAxYWEtNDc2Yi1iMjFhLThlNjE1ZWJlYzQyNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZ1VVdWgzc283d09rZ0pvYnFZUFlKK0JzVkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1ltRzE2VTJIUlg2bFkyTEEwMTkzK2FRazZBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhNWlhIUTZTIiwibWUiOnsiaWQiOiIyNjM3ODA4NTg2NTU6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSU91K1EwUXZKZkxzZ1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidzJEcTQrc1lPZVV0QjBranQrNmVlQUtvMWY0U1ZGT3JXQzdKTkdqdkJXYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiLzFSdE9GazMvWmtMUjhIU05LV1pLWEppTzNua0laWWtRZHl6TXlNK0Z3TS9CaG5ZOXo5V3pkdnR3UkFXc2ZFQ3lPRGxTUWhMcUhNczFKT3JoVVlpQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlFGczVjeitTOGJTM1dpbm5xNUhaK3BKajN1YVZhSmszWm81WWtKT1ZrRml2b1pkZGw4ZWNRUDVJZDJSS0w5eG13R2libGJCRlNLdFlVVFdseUVGNGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzgwODU4NjU1OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY05nNnVQckdEbmxMUWRKSTdmdW5uZ0NxTlgrRWxSVHExZ3V5VFJvN3dWbiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjcwMjE1MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGUEsifQ=="


module.exports = {

  menu: process.env.MENU || "v1", 

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.0",
  caption : global.caption || "αѕтα-м∂ 2024" , 
 
  author : process.env.PACK_AUTHER|| "αѕтяσ",
  packname: process.env.PACK_NAME || "αѕтяσ",
  botname : process.env.BOT_NAME  || "ᴀsᴛᴀ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "αѕтяσ",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "main"  ).toUpperCase(),
};
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated" // Don't Touch
global.isMongodb = false; // Don't Touch Else Bot Won't Work
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
