/**
   * Created By LoRD.
   * Contact Me on wa.me/919778383987
   * Follow https://github.com/Lord-official
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '«𝒍𝒐𝒓𝒅.𝒐𝒇𝒄»🇮'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/CUCsW6BWfmJLJwJgPQIaKM'
global.linkig = 'https://www.instagram.com/reel/Ccx79E0A8Rt/?igshid=YmMyMTA2M2Y='
global.linkyt = 'https://youtu.be/RnpyRe_7jZA'
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.web = 'https://raselcomel.github.io'
global.web1 = 'https://anu.rasell.repl.co'
global.linkgh = 'https://github.com/Lord-official'

function _0x71c1(){var _0x2abefd=['6363fLbJxp','1304035AYRtWg','142956VgozWY','6xKLBVx','SESSION_ID','session_id','5545000PGsTFU','410432IAEgZx','351661kyaRpc','2024RIieNz','16OoKsCa','env','44271NPtvIe'];_0x71c1=function(){return _0x2abefd;};return _0x71c1();}var _0x3a6654=_0x55ff;function _0x55ff(_0x3c168d,_0x15d8f8){var _0x71c1c1=_0x71c1();return _0x55ff=function(_0x55ffbb,_0x109421){_0x55ffbb=_0x55ffbb-0xa8;var _0x51ae7f=_0x71c1c1[_0x55ffbb];return _0x51ae7f;},_0x55ff(_0x3c168d,_0x15d8f8);}(function(_0x24c638,_0x428293){var _0x168818=_0x55ff,_0x387129=_0x24c638();while(!![]){try{var _0x3b883c=parseInt(_0x168818(0xb3))/0x1+parseInt(_0x168818(0xa8))/0x2*(-parseInt(_0x168818(0xaa))/0x3)+-parseInt(_0x168818(0xb2))/0x4+parseInt(_0x168818(0xac))/0x5*(-parseInt(_0x168818(0xae))/0x6)+-parseInt(_0x168818(0xab))/0x7*(parseInt(_0x168818(0xb4))/0x8)+-parseInt(_0x168818(0xad))/0x9+parseInt(_0x168818(0xb1))/0xa;if(_0x3b883c===_0x428293)break;else _0x387129['push'](_0x387129['shift']());}catch(_0x335fe5){_0x387129['push'](_0x387129['shift']());}}}(_0x71c1,0x2ba8d),global[_0x3a6654(0xb0)]=process[_0x3a6654(0xa9)][_0x3a6654(0xaf)]);

global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'Lord-official'
// Other
global.watermark = '«𝒍𝒐𝒓𝒅.𝒐𝒇𝒄»🇮🇳'
global.owner = ['919778383987']
global.premium = ['919778383987']
global.packname = '𝐋𝐨𝐑𝐃-𝐌𝐃'
global.author = '𝐿𝑜𝑟𝑑-𝑜𝑓𝑓𝑖𝑐𝑖𝑎𝑙'
global.sessionName = 'lord'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
