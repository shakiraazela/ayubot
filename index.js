/*
]=====> RISKA GANSS
*/
// ANAK ANJING PASTI YANG ATAS DI UBAH
// NGOTAK KOMTOL
// KASIH NAMA GW ASU
const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { animesaran } = require('./src/animesaran')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { nekopoi } = require('./src/nekopoi')
const tambahan = require('./lib/tambahan.js')
const { kodenuklir } = require('./src/kodenuklir')

const setiker = JSON.parse(fs.readFileSync('./add/stik.json'))

const imagenye = JSON.parse(fs.readFileSync('./add/image.json'))
const { virtex } = require('./src/virtex')

const { bahasa } = require('./src/bahasa')

const { negara } = require('./src/kodenegara')

const videonye = JSON.parse(fs.readFileSync('./add/video.json'))


const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))

const { murothal } = require('./src/murothal')

const { listsurah } = require('./src/listsurah')

const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))

const { daftarvip } = require('./daftarvip')

const { iklan } = require('./src/iklan')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:AYUKINO ADMIN\n' 
            + 'ORG: Pengembang AYUKINO ;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6285787487696:+6285787487696\n' 
            + 'END:VCARD' 
blocked = []   
prefix = '!'
limitawal = 999999
memberlimit = 0
ator = 'AHMAD'
namo = 'AYUKINO'
cr = 'AHMAD PRASETYO'

/*
]=====> SETTINGS <=====[
*/
const TobzKey = 'BotWeA'
const VhtearKey = 'RamlanID'
const TechApi = '5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ'
const ZeksApi = 'apivinz'
const shizukaapi = 'itsmeiky633'
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa' // APIKEY DOWNLOAD FILE
const apivhtear = 'alpinbotwa' // YANG DI YOUTUBE
const TobzApi = 'BotWeA' // JANGAN MAU ENAK DOANG
const XteamKey = 'APIKEY' // APIKEY XTEAM BELI SENDIRI:V
/*
]=====> SC BY RISKA ADMIN <=====[
*/

/*       

/*************************************/

/******** OWNER NUMBER**********/
const ownerNumber = ["6285787487696@s.whatsapp.net","@s.whatsapp.net"] 

const mod = [ownerNumber,"6285787487696@s.whatsapp.net","6287869984953@s.whatsapp.net"]

const adminbotnumber = ["6285787487696@s.whatsapp.net","6287869984953@s.whatsapp.net"]

const frendsowner = ["6285787487696@s.whatsapp.net","6287869984953@s.whatsapp.net"]

const premium = ["6285787487696@s.whatsapp.net","6287869984953@s.whatsapp.net"]

const donator = ["6285787487696@s.whatsapp.net","6287869984953@s.whatsapp.net"]
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const publik = JSON.parse(fs.readFileSync('./database/group/public.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
/*********** END LOAD ***********/

/*
â¥THANKS TOâ¥
AHMAD CHð
AMPIBI GAMINGð
FADHIL GRAPHYð
XPTNð
AYUKINO
*/



/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        
         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}


        /*********** FUNCTION PREM ***********/

        const getPremiumExpired = (sender) => {

		    let position = null

		    Object.keys(prem).forEach((i) => {

		        if (prem[i].id === sender) {

		            position = i

		        }

		    })

		    if (position !== null) {

		        return prem[position].expired

		    }

		} 

		

		const expiredCheck = () => {

		    setInterval(() => {

		        let position = null

		        Object.keys(prem).forEach((i) => {

		            if (Date.now() >= prem[i].expired) {

		                position = i

		            }

		        })

		        if (position !== null) {

		            console.log(`Premium expired: ${prem[position].id}`)

		            prem.splice(position, 1)

		            fs.writeFileSync('./database/user/prem.json', JSON.stringify(prem))

		        }

		    }, 1000)

		} 

		

		const getAllPremiumUser = () => {

		    const array = []

		    Object.keys(prem).forEach((i) => {

		        array.push(prem[i].id)

		    })

		    return array

		}

        

function kyun(seconds){

  function pad(s){

    return (s < 10 ? '0' : '') + s;

  }

  var hours = Math.floor(seconds / (60*60));

  var minutes = Math.floor(seconds % (60*60) / 60);

  var seconds = Math.floor(seconds % 60);



  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`

}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('â','green'),color('â¡','red'),color('ð','white'),color('JANGAN LUPA SUBS CHANEL','white'),color('YOU','red'),color('TUBE','white'),color('AMINAH BOTZ','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*WELCOME @${num.split('@')[0]}\ð*\n*Jangan Lupa Introð¤*\nââââââââââââââââââââ\n*â¸ Nama:*\n*â¸ Umur:*\n*â¸ gender:*\n*â¸ Askot:*\nââââââââââââââââââââ\n*Note: KETIK ${prefix}HELP UNTUK MENU BOT*`
				let buff = await getBuffer(ppimg)
				const bot = fs.readFileSync('./assets/bot');
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Bye @${num.split('@')[0]} `
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            client.chatRead (from)



			mess = {

				wait: '*ã â ãSedang di proses...*\n\nsilahkan tunggu Â± 1 min! Jika Tidak Muncul\nKemungkinan ERROR Mohon Jangan Spam.',

				asik: '*ã â ãSedang di proses...*\n\nsilahkan tunggu Â± 1 min! Jika Tidak Muncul\nKemungkinan ERROR Mohon Jangan Spam.',

				success: '*ã âï¸ ãBerhasil!*',

				levelon: '*ã âï¸ ãSukses Mengaktifkan Fitur Leveling!*',

				leveloff: '*ã âï¸ ãSukses Menonaktifkan Fitur Leveling!*',

				levelnoton: '*ã â ãFitur Leveling Tidak Aktif, Segera Hubungi Owner Untuk Mengaktifkan Fitur Tersebut.*   \n\n*Nomor owner https://wa.me/6287869984953*',

				levelnol: '*LEVEL KAKAK KOK MASIH * 0 >_<',

				error: {

					stick: '*ã â ãGagal, terjadi kesalahan saat mengkonversi gambar ke sticker.*',

					Iv: '*ã â ãLink yang anda kirim tidak valid.*'

				},

				only: {

					group: '*ã â ãPerintah ini hanya bisa di gunakan dalam group.*',

					premium: '*ã â ãFitur Ini Hanya Untuk Penggunaan Premium.*',

					mod: '*ã â ãFitur Ini Hanya Untuk Penggunaan Mods Aminah',

					benned: `*ã USER BANNED DETECTED ã* \nAnda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda`,

					ownerG: '*ã â ãFitur Ini Khusus Owner.*',

					ownerB: '*ã â ãFitur Ini Khusus Owner.*',

					daftarB: `*ã NOT REGISTERED DETECTED ã* \nHalo Human, Yuk Daftar Dulu Soalnya Anda Belum Terdaftar Dalam Database Aminah\n\n *ââSegera Registrasi Data Diri Andaââ* \n\nKetik : ${prefix}register nama|umur\nContoh : ${prefix}register  AHMAD|15`,

					admin: '*ã â ã*  Perintah ini hanya bisa di gunakan oleh admin group.',

					Badmin: ' *ã â ã*  Perintah ini hanya bisa di gunakan ketika bot menjadi admin.',

					publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',

					donator: '*Fitur ini khusus donator*',

				}

			}

            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
	    const isBanned = ban.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const totalchat = await client.chats.all()
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isPublic = isGroup ? publik.includes(from) : false 
			const isBadWord = isGroup ? badword.includes(from) : false
      

  	const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'

			
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
	        /*****************END SCURITY FEATURE ********/
			
			
			//role level
const levelRole = getLevelingLevel(sender)
   	     var role = 'Training(tengkorak)'
        if (levelRole <= 2) {
            role = 'Training(tengkorak)'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 âÂ¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 âÂ²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 âÂ³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ââ´'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 âÂ¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 âÂ²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 âÂ³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ââ´'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ââµ'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 â°Â¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 â°Â²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 â°Â³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 â°â´'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 â°âµ'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 â£Â¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 â£Â²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 â£Â³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 â£â´'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 â£âµ'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ï¹Â¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ï¹Â²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ï¹Â³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ï¹â´'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ï¹âµ'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ï¸¾Â¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ï¸¾Â²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ï¸¾Â³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ï¸¾â´'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ï¸¾âµ'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 â¢Â¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 â¢Â²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 â¢Â³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 â¢â´'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 â¢âµ'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 â¢â¢Â¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 â¢â¢Â²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 â¢â¢Â³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 â¢â¢â´'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 â¢â¢âµ'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 â·Â¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 â·Â²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 â·Â³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 â·â´'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 â·âµ'
        } else if (levelRole <= 92) {
            role = 'Brigaider Grade 1 â·â·Â¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 â·â·Â²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 â·â·Â³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 â·â·â´'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 â·â·âµ'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early â°'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver â©'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold â¯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum â¬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond âª'
        } else if (levelRole <= 112) {
            role = 'Major General Early â°'
        } else if (levelRole <= 114) {
            role = 'Major General Silver â©'
        } else if (levelRole <= 116) {
            role = 'Major General gold â¯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum â¬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond âª'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early â°'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver â©'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold â¯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum â¬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond âª'
        } else if (levelRole <= 132) {
            role = 'General Early â°'
        } else if (levelRole <= 134) {
            role = 'General Silver â©'
        } else if (levelRole <= 136) {
            role = 'General gold â¯'
        } else if (levelRole <= 138) {
            role = 'General Platinum â¬'
        } else if (levelRole <= 140) {
            role = 'General Diamond âª'
        } else if (levelRole <= 142) {
            role = 'Commander Early â'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate â£'
        } else if (levelRole <= 146) {
            role = 'Commander Elite â'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero â'
        } else if (levelRole <= 152) {
            role = 'Legends I å¿'
        } else if (levelRole <= 154) {
            role = 'Legends I å¿'
        } else if (levelRole <= 156) {
            role = 'Legends I å¿'
        } else if (levelRole <= 158) {
            role = 'Legends I å¿'
        } else if (levelRole <= 160) {
            role = 'Legends I å¿'
        } else if (levelRole <= 162) {
            role = 'Legends I å¿'
        } else if (levelRole <= 164) {
            role = 'Legends I å¿'
        } else if (levelRole <= 166) {
            role = 'Legends II å¿'
        } else if (levelRole <= 168) {
            role = 'Legends II å¿'
        } else if (levelRole <= 170) {
            role = 'Legends II å¿'
        } else if (levelRole <= 172) {
            role = 'Legends II å¿'
        } else if (levelRole <= 174) {
            role = 'Legends II å¿'
        } else if (levelRole <= 176) {
            role = 'Legends II å¿'
        } else if (levelRole <= 178) {
            role = 'Legends II å¿'
        } else if (levelRole <= 180) {
            role = 'Legends II å¿'
        } else if (levelRole <= 182) {
            role = 'Legends II å¿'
        } else if (levelRole <= 184) {
            role = 'Legends II å¿'
        } else if (levelRole <= 186) {
            role = 'Legends II å¿'
        } else if (levelRole <= 188) {
            role = 'Legends II å¿'
        } else if (levelRole <= 190) {
            role = 'Legends II å¿'
        } else if (levelRole <= 192) {
            role = 'Legends I å¿'
        } else if (levelRole <= 194) {
            role = 'Legends II å¿'
        } else if (levelRole <= 196) {
            role = 'Legends II å¿'
        } else if (levelRole <= 198) {
            role = 'Legends II å¿'
        } else if (levelRole <= 200) {
            role = 'Legends III å¿'
        } else if (levelRole <= 210) {
            role = 'Legends III å¿'
        } else if (levelRole <= 220) {
            role = 'Legends III å¿'
        } else if (levelRole <= 230) {
            role = 'Legends III å¿'
        } else if (levelRole <= 240) {
            role = 'Legends III å¿'
        } else if (levelRole <= 250) {
            role = 'Legends III å¿'
        } else if (levelRole <= 260) {
            role = 'Legends III å¿'
        } else if (levelRole <= 270) {
            role = 'Legends III å¿'
        } else if (levelRole <= 280) {
            role = 'Legends III å¿'
        } else if (levelRole <= 290) {
            role = 'Legends III å¿'
        } else if (levelRole <= 300) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 310) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 320) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 330) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 340) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 350) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 360) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 370) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 380) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 390) {
            role = 'Legends IV å¿'
        } else if (levelRole <= 400) {
            role = 'Legends V å¿'
        } else if (levelRole <= 410) {
            role = 'Legends V å¿'
        } else if (levelRole <= 420) {
            role = 'Legends V å¿'
        } else if (levelRole <= 430) {
            role = 'Legends V å¿'
        } else if (levelRole <= 440) {
            role = 'Legends V å¿'
        } else if (levelRole <= 450) {
            role = 'Legends V å¿'
        } else if (levelRole <= 460) {
            role = 'Legends V å¿'
        } else if (levelRole <= 470) {
            role = 'Legends V å¿'
        } else if (levelRole <= 480) {
            role = 'Legends V å¿'
        } else if (levelRole <= 490) {
            role = 'Legends V å¿'
        } else if (levelRole <= 500) {
            role = 'Legends VI å¿'
        } else if (levelRole <= 600) {
            role = 'Legends VII å¿'
        } else if (levelRole <= 700) {
            role = 'Legends VIII å¿'
        } else if (levelRole <= 800) {
            role = 'Legends IX å¿'
        } else if (levelRole <= 900) {
            role = 'Legends X å¿'
        } else if (levelRole <= 1000) {
            role = 'Mythic I ä¸å¸'
        } else if (levelRole <= 2000) {
            role = 'Mythic II ä¸å¸'
        } else if (levelRole <= 3000) {
            role = 'Mythic III ä¸å¸'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV ä¸å¸'
        } else if (levelRole <= 5000) {
            role = 'Mythic V ä¸å¸'
        } else if (levelRole <= 6000) {
            role = 'Mythical Glory ä¸å¸'
        } else if (levelRole <= 7000) {
            role = 'Mythical Glory x1000å¸'
        } else if (levelRole <= 8000) {
            role = 'Mythical Glory 1100 ä¸å¸'
        } else if (levelRole <= 9000) {
            role = 'Mythical Glory 2000 ä¸å¸'
        } else if (levelRole <= 10000) {
            role = 'Awakend Mythical Glory ç¹å°é¦è´¡'
	    } else if (levelRole <= 99999999999) {
   	         role = 'End level ç¨åº¦â'
   	     }
   	     
   	     
   	     
   	  				/*********** FUNCTION LIMITED ***********/

           const isLimit = (sender) =>{ 

		      let position = false

              for (let i of _limit) {

              if (i.id === sender) {

              	let limits = i.limit

              if (limits >= limitawal ) {

              	  position = true

                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})

                    return true

              } else {

              	_limit

                  position = true

                  return false

               }

             }

           }

           if (position === false) {

           	const obj = { id: sender, limit: 0 }

                _limit.push(obj)

                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))

           return false

       }

     }



        

            if (isGroup) {

				try {

					const getmemex = groupMembers.length

					    if (getmemex <= memberlimit) {

                            client.groupLeave(from)

					    }

		       } catch (err) { console.error(err)  }

        }

      

        /*********** BADWORD ***********/

if (bad.includes(messagesC)){
	if (!isGroup) return
	if (!isBadWord) return
	if (isGroupAdmins) return reply('*JAGA UCAPAN DONG!!*\n*Jangan MentangÂ² admin')
	client.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *ã KATA KASAR TERDETEKSI ã*\nMaaf *_${sender.split("@")[0]}_* Anda Akan Di Kick Dari Group, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara\n\nMaaf? Chat Owner BOT wa.me/6287869984953`)
	setTimeout( () => {
	    client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}, 1000)
	setTimeout( () => {
	    client.updatePresence(from, Presence.composing)
	    reply("ã MENGENANG ãKITA DOAKAN SEMOGA DIA MENDAPATKAN HIDAYAH AGAR  TIDAK MNEGUCAPKAN BIACARA KASAR.")
	}, 0)
    }
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
           
            
	// ANTI LINK GRUP
               	        if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        client.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinadmin")) return reply("Izin Admin Di Terima")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        client.groupRemove(from, [kic]).catch((e)=>{reply(`*AYUKINO  HARUS JADI ADMINâ*`)})
		        }, 3000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }

/*********** TEXT ***********/

if (budy.includes(`Bot`)) {
reply('assalamualaikum kak\nAda Yang Bisa Ayukino Bantu?')
}
if (budy.includes('Cek prefix')) {
  reply(`*Prefix Yang Sedang Di gunakan : ${prefix}`)
}
if (budy.includes(`Lee`)) {
reply('Istighfar kk')
}
if (budy.includes(`Aminah`)) {
reply(`Silahkan Ketik ${prefix}menu\nUntuk Melihat Fitur Bot `)
}
if (budy.includes(`Ig`)) {
reply('https://www.instagram.com/ahmad_prasetyo7/')
} 
if (budy.includes(`assalamualaikum`)) {
reply('Waalaikumussalam')
} 
if (budy.includes(`Assalamualaikum`)) {
reply('waalaikumussalam')
} 
if (budy.includes(`Assalamu'alaikum`)) {
reply('waalaikumussalam')
} 
if (budy.includes(`Intro`)) {
reply (`Assalamualaikum\nSilahkan Isi Bio Dibawah, Jangan Lupa Perkenalkan Dirinya ya Sobatkuh, salam kenal Dan slam Ukhwah ð¹\n_____________\n\nNama :\nUmur :\nAlamat :\nInstagram :\n\nKalau Udah Isi Absen\nKetik ${prefix}daftar Nama|umur \nAgar Kamu bisa Menggunakan Bot WhatsApp Di Grup ini\n\njangan Lupa Save Nomor owner https://wa.me/6287869984953\nâ¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬\n ð *Waalaikumsallam*`)
}

/*********** SOUND ***********/

if (budy.includes(`Assalamualaikum`)) {
satu = fs.readFileSync('./arifirazzaq/waalaikumsalam.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`Bot`)) {
dua = fs.readFileSync('./arifirazzaq/sapamember.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes(`halo`)) {
tiga = fs.readFileSync('./arifirazzaq/haysayabot.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
			  case 'hidetag2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					case 'hidetag5':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'hidetag20':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'hidetag50':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
			  					case 'bass':                 

       if (!isRegister) return reply(mess.only.daftarB)

                if (isBanned) return reply(mess.only.benned)

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(media)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

					break

					case 'tupai':

if (!isRegister) return reply(mess.only.daftarB)

                if (isBanned) return reply(mess.only.benned)

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(media)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break

				case 'gemuk':

if (!isRegister) return reply(mess.only.daftarB)

                if (isBanned) return reply(mess.only.benned)

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')

					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {

						fs.unlinkSync(media)

						if (err) return reply('Error!')

						hah = fs.readFileSync(ran)

						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})

						fs.unlinkSync(ran)

					})

				break
					case 'tts':

				   client.updatePresence(from, Presence.recording) 

				   if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})

                                   if (!isRegister) return reply(mess.only.daftarB)

                                   if (isLimit(sender)) return reply(ind.limitend(pusname))

					const gtts = require('./lib/gtts')(args[0])

					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})

					dtt = body.slice(8)

					ranm = getRandom('.mp3')

					rano = getRandom('.ogg')

					dtt.length > 600

					? reply('Textnya kebanyakan om')

					: gtts.save(ranm, dtt, function() {

						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {

							fs.unlinkSync(ranm)

							buff = fs.readFileSync(rano)

							if (err) return reply('Gagal om:(')

							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})

							fs.unlinkSync(rano)

						})

					})

                                        await limitAdd(sender)

					break
			case 'katailham':
			
				if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`http://itsmeikygans.my.id/bacotanilham?apikey=${apikey}`, {method: 'get'})
				kata = anu.result
				client.sendMessage(from, kata, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'giftlimit': 

				if (!isOwner,!isPrem) return reply(ind.premon(pushname))

				const nomerr = args[0].replace('@','')

                const jmla = args[1]

                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)

                if (isNaN(jmla)) return reply(`limit harus berupa angka`)

                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6287869984953 20`)

                const cysz = nomerr + '@s.whatsapp.net'

                var found = false

                        Object.keys(_limit).forEach((i) => {

                            if(_limit[i].id === cysz){

                                found = i

                            }

                        })

                        if (found !== false) {

                            _limit[found].limit -= jmla

                            const updated = _limit[found]

                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}

*ã GIFT KUOTA LIMIT ã*



â¢ User : @${updated.id.replace('@s.whatsapp.net','')}

â¢ Limit: ${limitawal-updated.limit}`

                            console.log(_limit[found])

                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));

                            reply(result)

                        } else {

                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)

                        }

                break

                case 'leaderboard':

                case 'lb':

			if (isBanned) return reply(mess.only.benned)    

if (!isRegistered) return reply(ind.noregis())

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					const lvl = getLevelingXp(sender)

                const exp = getLevelingXp(sender)

					random = Math.floor(Math.random() * 150) + 1

					members_id = []

					teks = (args.length > 1) ? body.slice(8).trim() : ''

					teks += '\n\n'

					for (let mem of groupMembers) {

						teks += `*â â¥ * @${mem.jid.split('@')[0]}\n*â â¥ * XP:${exp}\n*â â¥ * User Level : ${lvl}\n*â â¥ * Random:${random}`

						members_id.push(mem.jid)

					}

					mentions(teks, members_id, true)

					break

				case 'spamcall':
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isRegistered) return reply(ind.noregis())
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'listmenu':
					case 'allmenu':
					case 'all':
					if (isBanned) return reply(mess.only.benned)    
				if (!isPublic) return reply(mess.only.publikG)
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffergbl = await getBuffer(ppUrl)
		        client.sendMessage(from, buffergbl, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*Total Chat* : ${totalchat.length}\n*Total User Premium*: ${premium.length}\n*Public:* ON\n*Author* : *Ahmad*\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}

âââã *OWNER* ã
â
â â°â¥*${prefix}block 62858xxxxx*
â â°â¥*${prefix}unblock 62858xxxxx*
â â°â¥*${prefix}promote @tagmember*
â â°â¥*${prefix}demote @tagadmin*
â â°â¥*${prefix}bc*
â â°â¥*${prefix}leave*
â â°â¥*${prefix}bc2*
â â°â¥*${prefix}bc3*
â â°â¥*${prefix}leave*
â â°â¥*${prefix}kick*
â â°â¥*${prefix}add*
â â°â¥*${prefix}clearall*
â â°â¥*${prefix}clone*
â â°â¥*${prefix}hidetag*
â â°â¥*${prefix}hidetag2*
â â°â¥*${prefix}hidetag3*
â â°â¥*${prefix}hidetag50*
â â°â¥*${prefix}hidetag20*
â â°â¥*${prefix}hidetag5*
â â°â¥*${prefix}setprefix*
â â°â¥*${prefix}unban*
â â°â¥*${prefix}ban*
â â°â¥*${prefix}banlist*
â â°â¥*${prefix}runtime*
â â°â¥*${prefix}tutuptime*
â â°â¥*${prefix}turnoff*
â â°â¥*${prefix}getses*
â â°â¥*${prefix}addadmin*
â â°â¥*${prefix}public [1/0]*


âââã *ADMIN* ã
â
â â°â¥*${prefix}ban @tagmember*
â â°â¥*${prefix}unban @tagmember*
â â°â¥*${prefix}spamcall [81273xxxx]*
â â°â¥*${prefix}kickall*
â â°â¥*${prefix}leave*
â â°â¥*${prefix}promote*
â â°â¥*${prefix}demote*
â â°â¥*${prefix}delete*
â â°â¥*${prefix}add 62813xxxxx*
â â°â¥*${prefix}kickall*
â â°â¥*${prefix}tagall*
â â°â¥*${prefix}otagall*
â â°â¥*${prefix}otagall2*
â â°â¥*${prefix}tagall*
â â°â¥*${prefix}setdesc*
â â°â¥*${prefix}setname*
â â°â¥*${prefix}kick* [tag]
â â°â¥*${prefix}kicktime [tag]*
â â°â¥*${prefix}add* [628xxx]
â â°â¥*${prefix}promote* [tag]
â â°â¥*${prefix}demote* [tag]
â â°â¥*${prefix}group* [buka]
â â°â¥*${prefix}group* [tutup]
â â°â¥*${prefix}linkgc*
â â°â¥*${prefix}setpp* [your]
â â°â¥*${prefix}groupinfo*
â â°â¥*${prefix}tagme*
â â°â¥*${prefix}nsfw* [1/0]
â â°â¥*${prefix}anime* [1/0]
â â°â¥*${prefix}simih* [1/0]
â â°â¥*${prefix}welcome* [1/0]
â â°â¥*${prefix}edotensei*
â â°â¥*${prefix}listadmins*
â â°â¥*${prefix}ping*


âââã *FUN AND GAME* ã
â
â â°â¥*${prefix}tebakgambar*
â â°â¥*${prefix}caklontong*
â â°â¥*${prefix}family100*
â â°â¥*${prefix}game*
â â°â¥*${prefix}truth*
â â°â¥*${prefix}dare*
â â°â¥*${prefix}pantun*
â â°â¥*${prefix}quotes*
â â°â¥*${prefix}katakata*
â â°â¥*${prefix}hilih*
â â°â¥*${prefix}kiss*
â â°â¥*${prefix}alay [text]*
â â°â¥*${prefix}simi [text]*
â â°â¥*${prefix}bucin*
â â°â¥*${prefix}peluk*
â â°â¥*${prefix}cium*
â â°â¥*${prefix}say*
â â°â¥*${prefix}addsay*
â â°â¥*${prefix}resetsay*
â â°â¥*${prefix}saylist*
â â°â¥*${prefix}gtts [text]*
â â°â¥*${prefix}tts*


âââã *KERANG* ã
â
â â°â¥*${prefix}apakah [optional]*
â â°â¥*${prefix}rate [optional]*
â â°â¥*${prefix}bisakah [optional]*
â â°â¥*${prefix}kapankah [optional]*
â â°â¥*${prefix}gantengcek*
â â°â¥*${prefix}toxic*
â â°â¥*${prefix}bucin*
â â°â¥*${prefix}katailham*
â â°â¥*${prefix}katadilan*
â â°â¥*${prefix}fakta*
â â°â¥*${prefix}citacita*
â â°â¥*${prefix}afk*
â â°â¥*${prefix}unafk*
â â°â¥*${prefix}cerpen*
â â°â¥*${prefix}hobby*
â â°â¥*${prefix}watak*
â â°â¥*${prefix}cantikcek*
â â°â¥*${prefix}nilai [text]*
â â°â¥*${prefix}te*
â â°â¥*${prefix}ramalhp*
â â°â¥*${prefix}primbonjodoh*
â â°â¥*${prefix}slap*
â â°â¥*${prefix}akugay*
â â°â¥*${prefix}cry*
â â°â¥*${prefix}jadian*
â â°â¥*${prefix}nangis*
â â°â¥*${prefix}hunti*
â â°â¥*${prefix}persengay*


âââã *USER* ã
â
â â°â¥*${prefix}reqwest [opsional]*
â â°â¥*${prefix}laporbug [opsional]*
â â°â¥*${prefix}infoalamat [opsional]*
â â°â¥*${prefix}bugreport [text]*
â â°â¥*${prefix}apkmod*
â â°â¥*${prefix}donasi*
â â°â¥*${prefix}tagme*
â â°â¥*${prefix}wame*
â â°â¥*${prefix}speed*
â â°â¥*${prefix}ping*
â â°â¥*${prefix}assalamualaikum*
â â°â¥*${prefix}lirik [opsional]*
â â°â¥*${prefix}modroid [opsional]*
â â°â¥*${prefix}happymod [opsional]*
â â°â¥*${prefix}bfont*
â â°â¥*${prefix}textstyle*
â â°â¥*${prefix}fitnah*
â â°â¥*${prefix}jd*
â â°â¥*${prefix}pe*
â â°â¥*${prefix}all*
â â°â¥*${prefix}news*
â â°â¥*${prefix}memobot*
â â°â¥*${prefix}cekup*
â â°â¥*${prefix}bycc*
â â°â¥*${prefix}imagepest*
â â°â¥*${prefix}qoutes*
â â°â¥*${prefix}meme*
â â°â¥*${prefix}memeindo*
â â°â¥*${prefix}hug
â â°â¥*${prefix}walpaperhd*
â â°â¥*${prefix}cekprefix*
â â°â¥*${prefix}qrcode*
â â°â¥*${prefix}shota*
â â°â¥*${prefix}husbu*
â â°â¥*${prefix}husbu2*
â â°â¥*${prefix}covid*
â â°â¥*${prefix}imoji*

âââã *MAKER* ã
â
â â°â¥*${prefix}cslogo [text]*
â â°â¥*${prefix}tahta [text]*
â â°â¥*${prefix}tahta2 [text]*
â â°â¥*${prefix}pronlogo [text]*
â â°â¥*${prefix}snow [text]*
â â°â¥*${prefix}marvelogo [text]*
â â°â¥*${prefix}mlogo [text]*
â â°â¥*${prefix}text3d [text]*
â â°â¥*${prefix}blackpink [text]*
â â°â¥*${prefix}ninjalogo [text]*
â â°â¥*${prefix}wolflogo [text]*
â â°â¥*${prefix}lionlogo [text]*
â â°â¥*${prefix}textscreen* [text
â â°â¥*${prefix}rtext [text]*
â â°â¥*${prefix}thunder [text]*
â â°â¥*${prefix}stiltext [text]*
â â°â¥*${prefix}party [text]*
â â°â¥*${prefix}galaxtext [text]*
â â°â¥*${prefix}lovemake [text]*
â â°â¥*${prefix}walpaperhd [text]*
â â°â¥*${prefix}watercolor [text]*
â â°â¥*${prefix}quotemaker* [tx|tx|random]
â â°â¥*${prefix}water [text]*
â â°â¥*${prefix}epep [text]*
â â°â¥*${prefix}glitch [text]*
â â°â¥*${prefix}fire [text]*
â â°â¥*${prefix}wood [text]*
â â°â¥*${prefix}ffbaner [text]*
â â°â¥*${prefix}light [text]*
â â°â¥*${prefix}sandwriting [text]*
â â°â¥*${prefix}embuntext [text] *
â â°â¥*${prefix}textsky [text]*
â â°â¥*${prefix}textblue [text]*
â â°â¥*${prefix}textdark [text*
â â°â¥*${prefix}apiteks [text*
â â°â¥*${prefix}quoteit [tx|tx|random]*
â â°â¥*${prefix}marvelogo [text]*
â â°â¥*${prefix}jokerlogo [teks]*


âââã *MEDIA* ã
â
â â°â¥*${prefix}yt* [link]
â â°â¥*${prefix}tiktok* [link]
â â°â¥*${prefix}ytsearch* [yt search]
â â°â¥*${prefix}lirik* [judul lagu]
â â°â¥*${prefix}chord* [judul lagu]
â â°â¥*${prefix}igstalk [text]*
â â°â¥*${prefix}wikien* [love]
â â°â¥*${prefix}tiktokstalk* [username]
â â°â¥*${prefix}tomp3*
â â°â¥*${prefix}url2img* [link]
â â°â¥*${prefix}fototiktok* [username]
â â°â¥*${prefix}map* [kota]
â â°â¥*${prefix}kbbi* [kamus]
â â°â¥*${prefix}brainly* [tau sendiri kan]
â â°â¥*${prefix}infoghitub* 
â â°â¥*${prefix}infocuaca* [kota]
â â°â¥*${prefix}infogempa*
â â°â¥*${prefix}artinama [nama]*
â â°â¥*${prefix}covid [negara]*
â â°â¥*${prefix}nulis [teks]*
â â°â¥*${prefix}sandwriting [teks]*
â â°â¥*${prefix}quotemaker [|teks|author|theme]*
â â°â¥*${prefix}resepmasakan [optional]*
â â°â¥*${prefix}tts [kode bhs] [teks]*
â â°â¥*${prefix}igstalk [@username]*
â â°â¥*${prefix}tiktokstalk [@username]*
â â°â¥*${prefix}wiki [query]*
â â°â¥*${prefix}qrcode [optional]*
â â°â¥*${prefix}map [optional]*
â â°â¥*${prefix}textmaker [teks1|teks2]*
â â°â¥*${prefix}ssweb [linkWeb]*
â â°â¥*${prefix}shorturl [linkWeb]*
â â°â¥*${prefix}image [opsional]*
â â°â¥*${prefix}animesaran*
â â°â¥*${prefix}animesaran2*


âââã *PENGGUNA VIP* ã
â
â â°â¥*${prefix}ytmp4 [link]*
â â°â¥*${prefix}ytmp3 [link]*
â â°â¥*${prefix}hidetag2*
â â°â¥*${prefix}joox [lagu]*
â â°â¥*${prefix}setprefix*
â â°â¥*${prefix}tomp3 [replay video]*
â â°â¥*${prefix}randomanime*
â â°â¥*${prefix}randomhentai*
â â°â¥*${prefix}nsfwloli*
â â°â¥*${prefix}nsfwblowjob*
â â°â¥*${prefix}nsfwneko*
â â°â¥*${prefix}nsfwtrap*
â â°â¥*${prefix}indohot*
â â°â¥*${prefix}otagall2*
â â°â¥*${prefix}otagall3*
â â°â¥*${prefix}hidetag5*


âââã *NSFW* ã
â
â â°â¥*${prefix}randomhentai*
â â°â¥*${prefix}hentai*
â â°â¥*${prefix}cersex*
â â°â¥*${prefix}xxx*
â â°â¥*${prefix}nsfwblowjob*
â â°â¥*${prefix}nsfwtrap*
â â°â¥*${prefix}nsfwneko*
â â°â¥*${prefix}loli*
â â°â¥*${prefix}nsfwloli*
â â°â¥*${prefix}bokep*
â â°â¥*${prefix}kodenuklir2*
â â°â¥*${prefix}randomanime*
â â°â¥*${prefix}randombokep*
â â°â¥*${prefix}cry*
â â°â¥*${prefix}kiss*
â â°â¥*${prefix}randomhug*
â â°â¥*${prefix}nekonime*
â â°â¥*${prefix}waifu*
â â°â¥*${prefix}waifu2*
â â°â¥*${prefix}kodenuklir*
â â°â¥*${prefix}nenen*
â â°â¥*${prefix}p*
â â°â¥*${prefix}cak*
â â°â¥*${prefix}pps*
â â°â¥*${prefix}teus*
â â°â¥*${prefix}walpaperanime*
â â°â¥*${prefix}animerandom*
â â°â¥*${prefix}nekopoi*


âââã *OTHER* ã
â
â â°â¥*${prefix}sticker*
â â°â¥*${prefix}stickergif*
â â°â¥*${prefix}ttp [teks]*
â â°â¥*${prefix}toimg [replay sticker]*
â â°â¥*${prefix}neko*
â â°â¥*${prefix}pokemon*
â â°â¥*${prefix}inu*
â â°â¥*${prefix}infoGempa*
â â°â¥*${prefix}quotes*
â â°â¥*${prefix}dadu*
â â°â¥*${prefix}quotes*
â â°â¥*${prefix}thunder [teks]*
â â°â¥*${prefix}nulis [teks]*
â â°â¥*${prefix}ocr [gambar]*
â â°â¥*${prefix}meme*
â â°â¥*${prefix}memindo*
â â°â¥*${prefix}testime*
â â°â¥*${prefix}testing*
â â°â¥*${prefix}ttp [teks]*
â â°â¥*${prefix}hobby*
â â°â¥*${prefix}beritahoax*
â â°â¥*${prefix}watak*
â â°â¥*${prefix}jsholat [daerah]*
â â°â¥*${prefix}jarak*
â â°â¥*${prefix}report*
â â°â¥*${prefix}hilih [teks]*
â â°â¥*${prefix}cekjodoh* [nama]
â â°â¥*${prefix}chroman*
â â°â¥*${prefix}artinama [text]*
â â°â¥*${prefix}listsurah*
â â°â¥*${prefix}reminder*
â â°â¥*${prefix}zodiak [zodiak kamu]*
â â°â¥*${prefix}listzodiak*


âââã *ANIME* ã
â
â â°â¥*${prefix}miku*
â â°â¥*${prefix}ram*
â â°â¥*${prefix}rem*
â â°â¥*${prefix}kurumi*
â â°â¥*${prefix}pictwaifu*
â â°â¥*${prefix}pictlolicon*
â â°â¥*${prefix}goku*
â â°â¥*${prefix}dxd*
â â°â¥*${prefix}itori*
â â°â¥*${prefix}rize*
â â°â¥*${prefix}minato*
â â°â¥*${prefix}naruto*
â â°â¥*${prefix}boruto*
â â°â¥*${prefix}toukachan*
â â°â¥*${prefix}sakura*
â â°â¥*${prefix}sasuke*
â â°â¥*${prefix}hentai*
â â°â¥*${prefix}waifu*
â â°â¥*${prefix}waifu2*
â â°â¥*${prefix}wibu*
â â°â¥*${prefix}loli*
â â°â¥*${prefix}loli4*
â â°â¥*${prefix}waifu3*
â â°â¥*${prefix}quotesanime'*
â â°â¥*${prefix}akira*

âââã *ANIMALS* ã
â
â â°â¥*${prefix}randomanimals*
â â°â¥*${prefix}unta*
â â°â¥*${prefix}kucing*
â â°â¥*${prefix}binatang*
â â°â¥*${prefix}elang*
â â°â¥*${prefix}anjing*
â â°â¥*${prefix}pokemon*
â â°â¥*${prefix}inu*
â â°â¥*${prefix}animehug*
â â°â¥*${prefix}ban*
â â°â¥*${prefix}randomcat*


âââã *UANG AND LIMIT* ã
â
â â°â¥*${prefix}limit*
â â°â¥*${prefix}buylimit*
â â°â¥*${prefix}transfer*
â â°â¥*${prefix}atm*
â â°â¥*${prefix}mining*
â â°â¥*${prefix}resetlimit*


âââã *SYSYEM* ã
â
â â°â¥*${prefix}nsfw [1/0]*
â â°â¥*${prefix}event [1/0]*
â â°â¥*${prefix}public [1/0]*
â â°â¥*${prefix}welcome [1/0]*
â â°â¥*${prefix}antilinkgroup [1/0]*
â â°â¥*${prefix}leveling [enable/disable]*
â â°â¥*${prefix}simih [1/0]*
â â°â¥*${prefix}anime [1/0]*

âââã *LOVE ISLAM* ã
â
â â°â¥*${prefix}quran*
â â°â¥*${prefix}jsholat [daerah]*
â â°â¥*${prefix}murrotal [surah]*
â â°â¥*${prefix}sholawat [judul]*
â â°â¥*${prefix}videodakwah [hukum memakai cadar]*
â â°â¥*${prefix}listsurah*

âââã *SOUND AND EFFECT* ã
â
â â°â¥*${prefix}tupai [nominal]*
â â°â¥*${prefix}bass [nominal]*
â â°â¥*${prefix}gemuk [nominal]*
â â°â¥*${prefix}fast [nominal]*
â â°â¥*${prefix}slow [nominal]*
â â°â¥*${prefix}iri*
â â°â¥*${prefix}pale*
â â°â¥*${prefix}dj1*
â â°â¥*${prefix}dj2*
â â°â¥*${prefix}sound*
â â°â¥*${prefix}sound2*
â â°â¥*${prefix}sound3*
â â°â¥*${prefix}sound4*
â â°â¥*${prefix}sound5*
â â°â¥*${prefix}sound6*
â â°â¥*${prefix}sound7*
â â°â¥*${prefix}baka*


âââã *SCOPE* ã
â
â â°â¥*${prefix}tiktok*
â â°â¥*${prefix}wolfmetal*
â â°â¥*${prefix}mutgrass*
â â°â¥*${prefix}randomkpop*
â â°â¥*${prefix}run*
â â°â¥*${prefix}resepmasakan*
â â°â¥*${prefix}xd*
â â°â¥*${prefix}emailtome*
â â°â¥*${prefix}aguse*
â â°â¥*${prefix}qowhea*

âââã *TARGET JAHAT* ã
â
â â°â¥*${prefix}spamcall [822ÃÃÃÃ]*
â â°â¥*${prefix}spamchat [822ÃÃÃÃ]*
â â°â¥*${prefix}spamgmail [gmail]*

âââã *HACKING TOOLS [mux]* ã
â
â â°â¥*${prefix}darkfb*
â â°â¥*${prefix}hackfb*
â â°â¥*${prefix}bruteforcefb*
â â°â¥*${prefix}pluginactive*
â â°â¥*${prefix}sreenfetch*

âââã *BUG* ã
â
â  â°â¥*${prefix}sideoopai*


`})


				case 'fakta':
		if (!isGroup) return reply(ind.groupo())
               if (!isRegistered) return reply(ind.noregis())
               data = await fetchJson('http://xptnewapi.xp3.biz/Faktaaas.php?apikey=xptn3')
               hasil = data.result
                client.sendMessage(from, hasil, text, {quoted: mek})
				case 'randomquran':
			data = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
			teks = `Nama: ${data.result.nama}\nArti: ${data.result.arti}\nayat: ${data.result.ayat}\nAsma: ${data.result.asma}\nRukuk: ${data.result.rukuk}\nNomor: ${data.result.nomor}\nType: ${data.result.type}\nKeterangan: ${data.result.keterangan}`
			buffs = await getBuffer(data.result.audio)
		    client.sendMessage(from, `${teks}`, MessageType.text, {quoted: mek})
			client.sendMessage(from, buffs, audio, {mimetype: 'audio/mp4', filename: `quran.mp3`, quoted: mek})
			break
			case 'infocuaca':
	 if (isBanned) return reply(mess.only.benned)    
     if (!isRegistered) return reply(ind.noregis())
     if (!isPublic) return reply(mess.only.publikG)
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             client.sendMessage(from, `â¸ Tempat : ${weather.result.tempat}\n\nâ¸ Angin : ${weather.result.angin}\nâ¸ Cuaca : ${weather.result.cuaca}\nâ¸ Deskripsi : ${weather.result.desc}\nâ¸ Kelembapan : ${weather.result.kelembapan}\nâ¸ Suhu : ${weather.result.suhu}\nâ¸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            break
                case 'tebakgambar':
                if (!isPublic) return reply(mess.only.publikG)
if (isBanned) return reply(mess.only.benned)    
				if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=RamlanID`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					client.sendMessage(from, '*â¸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagiâ¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_â¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_â¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'nekopoi':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
			if (!isGroup) return reply(ind.groupo()) 
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
			reply(ind.wait())
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
				
				case 'jomblo':
                                         if (!isRegistered) return reply(ind.noregis())
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/animu/pat?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
				case 'spamsms':
				  	
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isRegistered) return reply(ind.noregis())
			sms = `${body.slice(9)}`
			nomer = sms.split("/")[0];
			jumlah = sms.split("/")[1];
			anu = await fetchJson(`http://itsmeikygans.my.id/spamsms?apikey=${ItsApi}&no=${body.slice(10)}&jum=${jumlah}`, {method: 'get'})
			client.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
				case 'randomhusbu':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/husbu?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				case 'randomgame':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/wpgame?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				    case 'nsfwtrap':
				    try {
				    if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '```dosa gk ditanggung bot```'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'randomanime3':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/randomanime?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				case 'nulis3':
				case 'tulis3':
				  client.updatePresence(from, Presence.composing)
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply(ind.wait())
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					client.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cshadow':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					shad = `${body.slice(9)}`
					reply(ind.wait())
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					client.sendMessage(from, ssha, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cminion':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					minio = `${body.slice(9)}`
					reply(ind.wait())
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					client.sendMessage(from, minn, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'blackpink':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					shizuka = await fetchJson(`https://api-shizuka.herokuapp.com/blackpink?apikey=${shizukaapi}`)
					shizukaa = await getBuffer(shizuka.result)
					client.sendMessage(from, shizukaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				case 'cneon':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					nneoo = `${body.slice(7)}`
					reply(ind.wait())
					nooe = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neontext?text=${nneoo}`)
					client.sendMessage(from, nooe, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cneongreen':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					grre = `${body.slice(12)}`
					reply(ind.wait())
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cneon2':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					duadua = `${body.slice(8)}`
					reply(ind.wait())
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					client.sendMessage(from, duaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'c3d':
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					dimen = `${body.slice(5)}`
					reply(ind.wait())
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					client.sendMessage(from, tigaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
					case 'croman':
                if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek})
                  await limitAdd(sender) 
                  break 
					case 'clove':
					  if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
					  if (isLimit(sender)) return reply(limitend(pushname2))
					  if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					 love = `${body.slice(7)}`
					 buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 client.sendMessage(from, buff, image, {quoted: mek})
					 await limitAdd(sender)
					 break 
				case 'cmwolf':
					  if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
					  if (isLimit(sender)) return reply(limitend(pushname2))
					  if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					 mwolf = `${body.slice(8)}`
					 anu = await fetchJson(`http://itsmeikygans.my.id/wolfmetal?apikey=${ItsApi}&text=${mwolf}`, {method: 'get'})
					 cmwolf = await getBuffer(anu.result)
					 client.sendMessage(from, cmwolf, image, {quoted: mek})
					 await limitAdd(sender)
					 break  
				case 'cml':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=ling&text=${cml}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cpubg':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					cpubg = `${body.slice(7)}`
					cpubg1 = cpubg.split("/")[0];
					cpubg2 = cpubg.split("/")[1];
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${cpubg1}&text2=${cpubg2}&apikey=${TobzApi}`, {method: 'get'})
					cpubg = await getBuffer(anu.result)
					client.sendMessage(from, cpubg, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'csky':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					sky = `${body.slice(6)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/skytext?text=${sky}&apikey=${ZeksApi}`, {method: 'get'})
					gools7 = await getBuffer(anu.result)
					client.sendMessage(from, gools7, image, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cwooden':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					wood = `${body.slice(9)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/woodentext?text=${wood}&apikey=${ZeksApi}`, {method: 'get'})
					gools6 = await getBuffer(anu.result)
					client.sendMessage(from, gools6, image, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'ccrossfire':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					cf = `${body.slice(12)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${cf}&apikey=${ZeksApi}`, {method: 'get'})
					gools5 = await getBuffer(anu.result)
					client.sendMessage(from, gools5, image, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cflower':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					flower = `${body.slice(9)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/flowertext?text=${flower}&apikey=${ZeksApi}`, {method: 'get'})
					gools3 = await getBuffer(anu.result)
					client.sendMessage(from, gools3, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cnaruto':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
					naruto = `${body.slice(9)}`
					if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					anu = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${naruto}&apikey=${ZeksApi}`, {method: 'get'})
					gools4 = await getBuffer(anu.result)
					client.sendMessage(from, gools4, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'randomanime2':
           			if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
                                    if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					reply(ind.wait())
					pok = await getBuffer(anu.result)
					client.sendMessage(from, pok, image, { quoted: mek , caption: '*NIH RANIMENYA*'})
					await limitAdd(sender) 
					break  
				case 'kucing':
                if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek , caption: '*meongðº*'})
					await limitAdd(sender) 
					break 
			    case 'nsfwneko':
				    try {
				    if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Dosa Gk Ditanggung Bot'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
			case 'loli2':
				    try {
				    if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '```lolinya ngab```'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			case 'runtime':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
				client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot AMINAH  Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
				case 'totaluser':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					teks = `â­ââââã *TOTAL USER AMINAH * ã\n`
					no = 0
					for (let hehehe of registered.json) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `â+ Total Pengguna : ${registered.json.length}\nâ°ââââââ*â¿ *AMINAH  BOT* â*ââââ`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": Registered}})
					break
				case 'nsfwblowjob':
				    try {
				    if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli ya ingat ada tuhanð¤'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'hilih':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(ind.wait())
					if (args.length < 1) return reply('Teksnya mana gan?')
					anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'walpaper':
				client.updatePresence(from, Presence.composing) 
					if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
					 data = fs.readFileSync('./src/sakura.js');
		        	         jsonData = JSON.parse(data);
	        		         randIndex = Math.floor(Math.random() * jsonData.length);
		        	         randKey = jsonData[randIndex];
	        		        hasil = await getBuffer(randKey.result)
		        	        sendImage(hasil, mek, '\`\`\`NIH WALPAPERNYA KAK\`\`\`')
					break
				case 'antilinkgrup':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('ãSUKSESãMENGAKTIFKAN ANTI LINK DI GROUP')
						client.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('ãSUKSESãMEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'gambar':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					const items = ["anime high school dxd", "anime high school dxd hd", "karakter anime high school dxd", "anime high school dxd aesthetic", "wallpaper komputer high school dxd", "wallpaper android high school dxd"];
					const pepw = items[Math.floor(Math.random() * items.length)]
					tod = await getBuffer(`https://api.fdci.se/rep.php?gambar=${items}`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: 'tes'+pepw })
					await limitAdd(sender)
					break
				case 'listsurah':
					if (isBanned) return reply(ind.baned())
                                        if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, listsurah() , text, tescuk, cr)
					break
				case 'animesaran':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
	 				qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
				case 'animesaran2':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					costum( `*Dá´Òá´á´Ê á´É´Éªá´á´+É¢á´É´Êá´*
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
DRAMA+KESEDIHAN
- PÊá´sá´Éªá´ á´á´á´á´ÊÉªá´s
- SÊÉªÉ¢á´á´sá´ á´¡á´ KÉªá´Éª É´á´ Usá´
- Ká´á´ É´á´ Ká´á´á´á´ÊÉª
- Ká´á´á´Êá´ Cá´É´É´á´á´á´
- CÊá´á´É´ÉªÊÊá´á´ Dá´á´á´ Ká´Éª É¢á´ SÊÉªá´á´Éª
- Sá´á´á´Êá´sá´á´ É´á´ Pá´á´ É´á´ Ká´É´á´á´á´
- Ná´É¢Éª É´á´ Asá´á´á´Êá´ (Rá´á´á´á´á´É´á´á´á´)
- Já´sá´ Bá´á´á´á´sá´
- IÉ´á´Êá´sÊÉªá´Éª
- CÊá´É´É´á´á´
- AÉ´É¢á´Ê Bá´á´á´s
- Yá´Êá´ÊÉª OÊá´ É´á´ Sá´ÉªsÊá´á´É´ Lá´á´ á´ Cá´á´á´á´Ê Má´á´ÊÉªÉ¢á´á´á´á´ÉªÊá´
- Rá´ : LIFE
- AÉ´á´ Há´É´á´
- Ká´Éª á´á´ Usá´
- Ká´á´Éªsá´á´á´ Há´á´Éªá´á´á´á´sÊÉªá´á´
- Há´á´á´Êá´ÊÉª É´á´ Má´ÊÉª E
- Sá´É´á´á´ Rá´á´
- KÊá´á´á´á´Éª É´á´ Ká´É´á´á´á´
- Gá´ÉªÊá´Ê CÊá´á´¡É´ 

GENRE HAREM:

- Tá´ Lá´á´ á´ - Êá´
- HÉªÉ¢Êsá´Êá´á´Ê DxD 
- Há´É´á´á´Éª Oá´á´Éª Wá´Êá´á´¡á´É´á´Éª Ná´á´á´
- Isá´á´á´Éª á´¡á´ Sá´á´Êá´á´Êá´É´á´ Tá´á´á´ É´Éª 
- Gá´á´á´sá´É´ Tá´sÊÉª Asá´á´ÊÉªsá´
- Má´sá´á´á´É´á´ - Ká´É´ Rá´á´ á´É´É¢á´
- Lá´á´Éªá´s Vs Bá´á´Êá´Ê
- OÊá´ É´á´ Iá´á´á´á´á´ É¢á´ Ká´É´É´á´É´Éª Ká´á´¡á´Éª Wá´á´á´ É¢á´ Ná´Éª
- Má´sá´á´ Gá´á´á´á´É´ HxH 
- Má´É´sá´á´Ê Má´sá´á´á´ 
- Sá´ÉªÊá´Éª Tsá´á´á´Éª É´á´ BÊá´á´á´ Dá´É´á´á´
- Sá´Éªá´á´É´ Tsá´á´á´Éª É´á´ Wá´ÊÊá´ BÊá´á´á´
- Sá´Éªá´á´á´á´ Má´Êá´Éª É´á´ Bá´Êá´á´á´á´
- Má´sá´ÉªÉ¢á´É´ É´á´ PÊá´É´á´á´á´ Wá´ÊÊá´
- TÊÉªÉ´Éªá´Ê Sá´á´ á´É´
- Há´É´á´Êá´á´
- Dá´á´á´Êá´ Bá´á´á´ á´¡á´ H, Dá´á´ÉªÉ´á´Éª? 
- Ká´Êá´ á´¡á´ Zá´á´ÊÉªá´ Dá´sá´ Ká´?
- SÊÉªá´á´ÉªÉ´ Sá´á´á´Êá´
- SÊÉªÉ´á´á´Éª Má´á´á´ É´á´ Tá´sá´á´á´á´É´á´ 
- Dá´á´á´ A LÉªá´ á´
- Ká´É´á´ Ná´á´á´ É´Éª HÉªá´á´ÊÉª, Iá´á´á´á´á´ É¢á´ IÊá´
- OÉ´ÉªÉª - CÊá´É´ Dá´á´á´á´á´ AÉª Sá´Êá´Êá´ Ká´É´á´á´Éª Ná´ÉªÊá´É´á´
- OÊá´ É´á´ Ná´á´É´á´Éª Sá´É´á´á´á´á´sÊÉª É¢á´, Gá´á´á´á´É´ Lá´á´ á´ Cá´á´á´á´Ê Zá´É´ÊÊá´á´á´ á´á´ Já´á´á´ SÊÉªá´á´Êá´ 
- OÊá´ É´á´ Ká´É´á´á´á´ á´á´ Osá´É´á´É´á´á´Éªá´Éª É¢á´ SÊá´Êá´Êá´ Sá´É¢ÉªÊá´
- Ká´É´á´á´á´É´
- Rá´á´á´á´á´á´á´ É´á´ SÊÉªÉ´ÊÊá´á´á´sÊá´
- NÉªsá´á´á´Éª
- Sá´á´É´á´Éª Há´Êá´ÉªÉ´á´ Sá´á´á´á´á´á´á´á´á´
- Bá´á´á´ á´¡á´ Tá´á´á´á´á´á´ÊÉª É¢á´ Sá´á´á´É´á´Éª
- Ká´á´Éª Ná´á´Éª á´¢á´ SÊÉªÊá´ Sá´á´á´Éª
- Rá´É´á´Éª Bá´á´á´á´É´
- IÉ´ÒÉªÉ´Éªá´á´ Sá´Êá´á´á´s
- Yá´sá´É¢á´ É´á´ Sá´Êá´

GENRE COMEDY

- GÉªÉ´á´á´á´á´ 
- Tá´É´á´á´á´ - á´á´É´ á´¡á´ Iá´sá´á´á´ Ká´á´á´Êá´É¢á´
- Wá´Êá´ÉªÉ´É¢!!!
- Bá´Êá´á´á´á´á´É´
- BÊá´É´á´ S
- HÉªá´á´á´á´á´ Uá´á´Êá´ - CÊá´É´
- Ná´á´¡ Gá´á´á´
- AÉ´Éªá´á´É¢á´á´á´ÊÉªs
- Gá´á´á´á´É´ SÊá´á´á´á´ Ná´á´¢á´á´Éª - á´á´É´
- Gá´ÊÊÉªá´Ê DÊá´á´Oá´á´
- Ká´Êá´Êá´sÊÉª - á´Êá´É´ CÊÉª É´á´ Má´Éªá´ DÊá´É¢á´É´
- Dá´É´sÊÉª Ká´á´á´á´sá´Éª É´á´ NÉªá´ÊÉªá´á´á´ 

GENRE ROMANCE

- Iá´á´á´á´á´ Sá´á´ IÊá´Êá´ IÉª
- EÊá´á´á´É´É¢á´ Sá´É´sá´Éª
- OÊá´ É´á´ Iá´á´á´á´á´ Ká´É´É´á´É´Éª Ká´á´¡á´ÉªÉª Wá´á´á´ É¢á´ Ná´Éª
- Yá´Êá´ÊÉª OÊá´ É´á´ Sá´ÉªsÊá´á´É´ á´¡á´ Lá´á´ á´ Cá´á´á´á´Ê Má´á´ÊÉªÉ¢á´á´á´á´ÉªÊá´
- Bá´á´á´ á´¡á´ Tá´á´á´á´á´á´ÊÉª É¢á´ Sá´á´á´É´á´Éª
- Ká´á´Éªsá´á´á´ Há´á´Éªá´á´á´á´sÊÉªá´á´

GENRE ACTION

- Fá´á´á´/Sá´á´Ê NÉªÉ¢Êá´ 
- UQ Há´Êá´á´Ê! Má´Êá´á´ Ná´É¢Éªá´á´ Sá´É´sá´Éª 2
- AÊsá´Êá´á´á´ Dá´á´
- Rá´á´á´á´á´É´á´sÊÉª Má´á´á´á´sá´ Ká´á´sÉª É´á´ Aá´á´sÊÉªá´ Rá´á´á´Êá´
- Oá´ á´ÊÊá´Êá´
- Ká´á´á´á´Éª Sá´É´sá´É´
- Sá´¡á´Êá´ AÊá´ OÉ´ÊÉªÉ´á´
- Gá´ÉªÊá´Ê CÊá´á´¡É´
- Sá´Éªá´á´á´á´ Má´Êá´Éª É´á´ Bá´Êá´á´á´á´
- IÉ´ÒÉªÉ´Éªá´á´ Sá´Êá´á´á´s
- Sá´á´ÉªÉ´ Gá´á´á´
- Tá´á´Êá´ Ká´É¢á´á´á´ É´á´ Rá´ÉªÊÉ¢á´É´
- BÊá´á´á´ Bá´ÊÊá´á´
- IÉ´á´Êá´sÊÉªá´Éª
- OÉ´á´ Pá´É´á´Ê Má´É´
- Má´Ê PsÊá´Êá´ 100
- Gá´á´á´sá´É´ Tá´sÊÉª Asá´á´ÊÉªsá´
- SÊÉªÉ´á´á´Éª Má´á´á´ É´á´ Tá´sá´á´á´á´É´á´
- Bá´É´É¢á´á´ Sá´Êá´Ê Dá´É¢s

GENRE PHSYCOLOGICAL
- IÉ´á´Êá´sÊÉªá´Éª
- Má´á´á´á´á´ Má´É¢Éªá´á´
- MÉªÊá´Éª NÉªá´á´Éª
- Ká´á´á´É¢á´Êá´Éª
- K-PÊá´á´á´á´á´
- GÊÉªsá´Éªá´ É´á´ Rá´á´á´á´É´ & Ká´á´Éªá´sá´
- Dá´á´á´Ê Ná´á´á´
- Dá´á´á´Ê Pá´Êá´á´á´
- Dá´á´á´á´á´É´ Wá´É´á´á´ÊÊá´É´á´
- Rá´ : Zá´Êá´ Ká´Êá´ Há´á´Éªá´á´Êá´ Isá´á´á´Éª Sá´Éªá´á´á´sá´
- Dá´É´É¢á´É´Êá´É´á´á´
- BTOOOM!
- PsÊá´Êá´ Pá´ss
- KÉªsá´Éªá´á´á´ : Sá´Éª É´á´ Ká´á´á´ÊÉªá´sá´
- Tá´á´Êá´ GÊá´á´Ê
- NHK É´Éª Yá´á´á´á´sá´ 

GENRE GAME & ISEKAI

- Má´É´á´á´Éªá´Éª - á´á´á´ÊÉª É¢á´ Isá´á´á´Éª Ká´Êá´ Ká´Êá´ Sá´ Dá´sá´ Yá´?
- Ná´ Gá´á´á´ Ná´ LÉªÒá´
- Aá´á´á´Ê Wá´ÊÊá´
- Ká´É´á´ Sá´Êá´Êá´sÊÉª Isá´á´á´Éª Sá´É´á´ SÊá´á´á´Òá´á´á´ á´¡
- 3 Gá´á´sá´ É´á´ LÉªá´É´
- Sá´¡á´Êá´ AÊá´ OÉ´ÊÉªÉ´á´
- Má´á´á´É´ Oá´ Vá´É´á´á´Éªs

GENRE MYSTERI

- Sá´á´á´Êá´á´á´ Rá´sá´á´
- HÊá´á´á´á´
- Má´É´á´É¢á´á´á´ÊÉª á´Êá´á´á´É´ á´á´ÊÉªá´á´É´Êá´
1. KÉªá´¢á´á´á´É´á´É¢á´á´á´ÊÉª 
2. Ná´á´á´á´á´É´á´É¢á´á´á´ÊÉª : Ká´Êá´
3. Bá´á´á´á´á´É´á´É¢á´á´á´ÊÉª
4. NÉªsá´á´á´É´á´É¢á´á´á´ÊÉª
5. Má´É´á´É¢á´á´á´ÊÉª Sá´ÊÉªá´s Sá´á´á´É´á´ Sá´á´sá´É´
6. Tsá´á´Éªá´á´É´á´É¢á´á´á´ÊÉª
7. Ká´Êá´á´Éªá´á´É´á´É¢á´á´á´ÊÉª (Dá´Êá´sÉª 12 á´ÉªÉ´)
8. Oá´¡á´ÊÉªá´á´É´á´É¢á´á´á´ÊÉª S1
9. Oá´¡á´ÊÉªá´á´É´á´É¢á´á´á´ÊÉª S2
10. Há´É´á´á´á´É´á´É¢á´á´á´ÊÉª
- Dá´É´É¢á´É´Êá´É´á´á´
- MÉªÊá´Éª NÉªá´á´Éª
- Dá´á´á´Ê Ná´á´á´
- BÊá´á´á´ Bá´ÊÊá´á´
- AÉ´á´á´Êá´Ê

SPORT :

- Yá´á´¡á´á´á´sÊÉª á´á´á´á´Ê
- Má´á´á´Ê
- EÊá´sÊÉªÊá´á´ 21
- DÉªá´á´á´É´á´ É´á´ á´á´á´
- SÊá´á´ á´á´É´á´
- Há´á´Éªá´á´ É´á´ Éªá´á´á´
- FÊá´á´
- PÉªÉ´É¢ á´á´É´É¢ á´Êá´ á´É´Éªá´á´á´Éªá´É´
- Bá´ÊÊ sá´á´á´
- AÊá´á´ É´á´ á´ÉªsÊÉª
- Cá´á´á´á´ÉªÉ´ á´sá´Êá´á´á´
- AÉªÊ É¢á´á´Ê
- CÊÉªÊá´Òá´Êá´
- CÊá´ss É¢á´á´á´
- IÉ´á´á´¢á´á´á´ á´Êá´á´ á´É´

 ROMANCE SAD

- KÉªá´Éªá´Éªss á´á´Êá´ Êá´á´á´É¢á´
- Ká´á´Éªá´Éªss
- Tá´Êá´á´á´Êá´
- Lá´á´ á´ÊÊ á´á´á´á´Êá´x
- Sá´á´á´Êá´sá´á´
- WÊÉªá´á´ á´ÊÊá´á´
- Tá´É´á´ÊÉª É´á´ á´á´ÉªÊá´á´sá´-á´á´É´
- 11á´Êá´s
- AÉ´É¢á´Ê Êá´á´á´s
- PÊá´sá´Éªá´ á´á´á´á´ÊÉªá´
- Aá´á´á´á´ É¢á´ á´ÉªÊÊ
- Aá´á´á´sá´á´Éª É´á´ Êá´É´á´
- Bá´Êsá´Êá´
- Sá´á´
- Bá´á´á´ á´¡á´ á´á´á´á´á´á´á´ÊÉª á´¡á´ sá´á´á´É´á´Éª
- Bá´á´á´Êá´ á´¡á´ á´ÉªÉ´É´á´ á´á´á´¡á´Éªsá´á´
- Bá´á´á´á´á´
- Bá´É´É¢á´á´á´ sÊá´á´á´á´
- C á´Êá´ á´á´É´á´Ê á´Ò sá´á´Ê á´É´á´ á´á´ssÉªÊÉªÊÉªá´Ê á´á´É´á´Êá´Ê
- CÊá´ÊÊá´á´á´á´
- CÊÉªÊá´Êá´Òá´Êá´
- CÊá´á´É´ÉªÊÊá´á´
- CÊá´É´É´á´á´
- Dá´É´á´á´ ÉªÉ´ á´Êá´ á´ á´á´á´ÉªÊá´ Êá´É´á´
- Dá´É´sá´Éª Êá´É´ÊÉª É´á´ á´ÊÉªá´á´ á´á´É¢á´
- Dá´Êá´á´É´ á´Êá´É´ ÊÊá´á´á´
- Dá´á´ ÉªÊs ÊÉªÉ´á´
- Dá´á´á´ á´ ÊÉªá´ á´
- Dá´ á´á´á´Éª sá´ÊÉªá´s
- TÊá´á´á´ á´á´á´Ês
- á´á´á´á´á´á´á´É´ á´¡á´É´á´á´ÊÊá´É´á´
- ÊÊá´á´á´ Êá´á´
- á´á´É´sá´á´sá´ É´á´ Êá´sá´ É´á´ á´á´É´sá´á´sá´
- á´Êá´á´á´á´Éª É´á´ á´á´É´á´á´á´
- Fá´á´á´/sá´á´Ê 
- Má´É¢Éª
- Gá´á´á´á´É´ sÊá´á´á´á´
- Gá´Êá´á´É´ á´Éªá´á´
- Gá´ÉªÊá´Ê á´Êá´á´¡É´
- Gá´sÉªá´á´
- Há´É´á´á´Éª á´á´á´Éª á´á´ á´¡á´Êá´á´¡á´É´á´Éª É´á´á´á´
- KÉªsá´Éªá´á´á´
- Ká´á´á´Êá´ á´á´É´É´á´á´á´
- MÉªá´á´á´á´É´ÉªÉ´
- MÉªÊá´Éª É´Éªá´Éª
- Ná´É¢Éª É´á´ á´sá´á´á´Êá´
- OÊá´Êá´á´
- Pá´É´á´Ê ÊÉªÉ´á´
- Rá´á´á´á´ É´á´ Êá´á´sÊá´
- SÊÉªÉ¢á´á´á´ á´¡á´ á´Éªá´Éª É´á´ á´sá´
- Ká´á´á´É´á´Êá´ É´á´ á´Éªá´¡á´
- KÉªá´Éª É´á´ É´á´á´¡á´
- Ká´Éªá´Êá´á´ á´¡á´ á´á´Éªá´ sá´á´á´
- OÊá´É¢á´ÉªÊá´
- Oá´á´á´á´Éª É´á´ á´á´á´sÊÉªÉ´ÊÊá´á´
- Zá´Êá´ É´á´ á´sá´á´á´Éªá´á´
- Asá´á´ÊÉªá´
- Ká´Êá´ á´¡á´ á´¢á´á´ÊÉªá´ á´á´sá´ á´á´
- Ká´á´ É´á´ á´á´á´á´á´ÊÉª
- KÉªá´Éª É´á´ á´á´á´á´á´á´
- Rá´ÊÉªÒá´
- Tsá´á´ÉªÉ¢á´ á´ÉªÊá´Éª
- Tá´á´á´á´á´ á´á´Êá´á´á´
- Sá´á´Éªá´á´á´ ÊÉª É´á´Êá´á´
- OÊá´ á´á´É´á´É¢á´á´á´ÊÉª
- Má´É´á´É¢á´á´á´ÊÉª
- Aá´á´É¢á´á´Éª É´á´ sÊÉªÊá´Êá´á´Éª
- Sá´É´á´á´Êá´á´
- Aá´á´É¢á´á´Éª ss
- Issá´á´á´É´ ÒÊÉªá´É´á´
- Aá´ Êá´Êá´ ÊÉªá´á´
- NÉªá´ÉªÊá´ á´á´Ês
- Fá´á´á´á´
- AÉ´á´ Êá´É´á´
- Yá´sá´É¢á´ É´á´ sá´Êá´
MYSTERI:
- Dá´á´á´Ê É´á´á´á´
- Gá´sÉªá´á´
- Bá´á´á´ á´á´á´á´ É¢á´ ÉªÉ´á´Éª á´á´á´ÊÉª
- Bá´á´á´á´É´á´
- Dá´Êá´Êá´Êá´
- SÊÉªÉ´sá´á´á´Éª Êá´ÊÉª
- Bá´á´á´á´á´É´á´É¢á´á´á´ÊÉª
- Dá´á´á´Ê á´á´Êá´á´á´
- Dá´Êá´á´É´ á´Êá´É´ ÊÊá´á´á´
- Zá´á´sá´á´É´ É´á´ á´á´á´á´á´sá´
- EÒ: A á´á´Êá´ á´á´Êá´á´Éªá´s
- HÉªÉ¢á´Êá´sÊÉª É´á´ É´á´á´á´ á´á´Êá´ É´Éª
- Pá´á´ÊÉªá´á´
- TÉªÉ¢á´Ê á´É´á´ Êá´É´É´Ê
- Tá´sá´É¢á´Êá´ á´á´á´á´á´ x á´á´É´á´sÉªá´
- MÉªÊá´Éª É´Éªá´Éª
- Tá´á´Êá´á´ É¢Êá´á´Ê
- EÊÉ¢á´ á´Êá´xÊ 
- AÉ´á´á´Êá´Ê
- Yá´á´á´á´á´ á´á´É´ á´á´ 7 É´ÉªÉ´ É´á´ á´á´á´á´
- Gá´á´á´á´á´ É¢á´Êá´sÊÉª
- Ká´á´Éªsá´á´á´ É´á´ á´á´á´á´á´Êá´á´
- Há´á´á´á´á´Êá´
- BÊá´á´á´ Êá´ÊÊá´á´
- Ká´á´Éªsá´á´á´ É´á´ ÉªÉ´á´Éª É´Éªá´ÊÉªÊá´ÊÉª
- Dá´É´á´á´ÊÉªá´É´ É´á´ sÊá´á´á´
- Ká´á´ÉªÊá´ É´á´ á´á´Êá´ á´¡á´ sá´á´á´á´ É´Éª  á´á´á´
- Sá´Êá´á´á´ É¢á´ Ò É´Éª É´á´Êá´
- Gá´á´á´á´á´á´á´ É´á´ ÊÊÊÉ´ÊÉªÊá´Ê
- Sá´Éªá´Éªá´á´á´sá´ á´á´á´á´Êá´ É¢á´á´á´ÉªÉ´
- Ká´É´Éª É´á´á´á´ É´Éª ÊÉªá´á´ÊÉª Éªá´á´á´á´á´ É¢á´ ÉªÊá´ 
- Má´Êá´ÉªÉ¢á´
- KÊá´á´á´ á´á´Êá´á´á´á´ÊÉª sá´É´á´á´á´ É´á´ Êá´Êá´á´s
- 18ÉªÒ
- á´á´sá´á´á´ É¢á´á´á´ á´Êá´ á´É´Éªá´á´á´Éªá´É´
- á´á´á´á´ ÉªÉ´ á´ÊÊss

COMEDY SCHOOL :
- PÊá´sá´É´ sá´Êá´á´Ê
- Gá´á´á´á´É´ sÊá´á´á´á´ É´á´á´¢á´á´Éª á´á´É´
- Bá´á´Êá´¢á´Êá´Ê
- SÊÉªá´á´É´á´á´á´
- AÊá´ É¢ÉªÊÊ
- Tá´É´á´á´á´ á´á´É´
- D ÒÊá´É¢
- Há´É´á´á´ á´á´É´
- Tá´É´á´Êá´ É´á´ sá´á´Éª á´á´É´
- AÉ´sá´á´sá´ á´Êá´á´sÊÉªá´á´
- Sá´Éªá´Éª á´á´sá´á´
- Tá´Êá´á´á´Êá´
- Bá´á´á´ á´á´ á´á´sá´
- Sá´á´á´á´á´á´á´ á´á´sá´ É¢á´
- GÊá´á´á´ á´á´á´á´ÊsÊ á´É´Éªá´¢á´á´á´
- NÉªá´ÊÉªá´á´á´
- Sá´á´á´ á´á´É´á´á´
- Dá´É´sÊÉª á´á´á´á´á´á´sá´Éª É´á´ É´Éªá´ÊÉªá´á´

AÉ´Éªá´á´ á´á´Êá´sÉª á´á´É´á´á´á´:
AÊá´ É¢ÉªÊÊ
Tsá´Êá´á´á´¢á´Êá´ á´ÊÉªÊá´á´ÊÉ´
Uá´Êá´á´ sá´É´á´á´É´ á´ÉªÊá´á´Éªsá´
Má´É´É¢á´á´á´ sá´É´ á´á´ á´ssÉªsá´á´É´á´ sá´É´
Tá´É´á´ÊÉª É´á´ sá´á´Éª á´á´É´
Dá´É´É´á´ É¢á´ Éªá´á´á´ÉªÊá´ á´á´ á´¡á´á´á´Êá´É´á´Éª á´á´É´
Fá´á´Éªá´ÉªÊÉª á´Éªá´á´É´
OÉ´á´á´ á´Êá´É´ É¢á´ á´Éªá´á´
Osá´á´á´ Òá´Òá´ É´ÉªÉ´á´á´á´á´
Aá´á´Éªá´É´ Sá´á´á´ÊÉ´á´á´á´Êá´Ê :
- Sá´Éªá´Éª á´á´sá´á´
- Oá´ á´ÊÊá´Êá´
- Há´á´á´Êá´á´á´ á´á´á´ sá´á´á´
- Má´Êá´á´á´á´ á´á´á´á´á´
- BÊá´á´á´ Êá´á´
- Sá´á´
- Ná´É´á´á´sá´ É´á´ á´á´Éªá´¢á´Éª
- AÉ´sÊá´á´sá´ á´Êá´á´ÊÉªá´sá´
- Cá´á´á´ É¢á´á´ss
- Ná´ É¢á´á´á´ É´á´ ÊÉªÒá´
- Má´Ê á´sÊá´á´ 100
- Má´É´á´á´Éªá´Éª-á´á´á´ÊÉª É¢á´ Éªsá´á´á´Éª á´á´Êá´ á´á´Êá´ á´¢á´á´ á´á´sá´ Êá´

Rá´á´á´É´á´á´ SÊá´á´á´á´
- Sá´á´Éªá´á´É´á´
- Sá´á´á´Éªá´Ê A
- Cá´á´á´Êá´ á´á´É´É´á´á´á´
- Ká´á´ÉªsÊá´á´á´ Êá´á´Éªá´á´á´á´sÊÉªá´á´
- Lá´á´ á´ÊÊ á´á´á´á´Êá´x
- Gá´Êá´á´É´ á´Éªá´á´
- Tá´É´á´ÊÉª É´á´ á´á´ÉªÊá´á´sá´-á´á´É´
- SÉªá´Éªá´á´á´ ÊÉª É´á´ Êá´
- Bá´á´á´ á´á´ á´á´sá´
- CÊá´á´É´ÉªÊÊá´á´
- AÉ´á´ É´á´á´sá´ á´á´ á´á´á´á´á´Êá´
- Aá´ Êá´Êá´ ÊÉªá´á´
- NÉªá´ÉªÊá´ á´á´Ês
- Rá´ á´¢á´Êá´ á´á´Êá´
- Dá´É´sá´á´sá´ É´á´ Êá´á´sÊá´ É´á´ á´á´É´sá´á´sá´
- Dá´É´á´á´á´ÊÉª
- Sá´á´á´sá´á´á´
- Rá´á´á´á´á´Ê á´ÉªsÊÊ É´á´ á´á´á´ á´ÊÊÊ
- Cá´á´á´:Rá´á´ÊÉªá´¢á´
- Cá´á´á´ ÊÊá´á´á´á´Ê
- á´¢á´Êá´ É´á´ á´sá´á´á´Éªá´á´

CÊá´Êá´ GENIUS :
-á´á´sá´á´á´É´á´ á´á´É´ É´á´ Êá´á´ á´É´É¢á´
-á´á´á´É¢Éª ÊÊÉªÊÊÉªá´É´á´ á´á´Êá´
-ÊÊá´á´á´á´
-á´Êá´É¢á´ÉªÊá´
-á´á´É´á´á´á´ á´á´É´
-á´ÉªsÊá´á´á´ É¢á´á´á´á´á´ á´á´ÊÊÉªá´á´
-Êá´á´á´á´sá´ á´á´á´sá´ÊÊá´á´á´ sÊÉªá´á´á´ sÊá´É¢Éª É´á´ á´Êá´á´sÊÉªá´sá´ á´
-á´á´á´É¢á´á´Éª SS
HOROR:
- GÊá´sá´ á´á´ sá´Êá´á´Ê
- Bá´á´É¢Éªá´á´á´á´ á´Êá´É´á´á´á´
- Pá´á´ sÊá´á´s á´Ò Êá´ÊÊá´Ê
- Cá´á´ sá´á´á´
- HÉªÊá´Êá´sÊÉª É´á´ É´á´á´á´ á´á´Êá´ É´Éª

- Iá´á´á´ á´á´É´á´Éª
- AÉ´á´á´Êá´Ê
- Ká´á´¡á´Êá´É´
- BÊá´á´á´ á´
- BÊá´á´á´ +
- Ká´á´á´Êá´É´Êá´
- JÉªá´á´É¢á´ sÊá´á´á´á´
- GÊá´sá´ Êá´É´á´
- Ká´É¢á´á´¡á´É´Éª
- Yá´á´Éª sÊÉªÊá´ÉªÉª
- HÉªÉ¢á´Êá´sÊÉª É´á´ É´á´á´á´ á´á´Êá´ É´Éª
- Cá´Êá´sá´ á´á´Êá´Ê
- Sá´ÊÉªá´Ê á´xá´á´ÊÉªá´á´É´á´ Êá´ÉªÉ´
- EÊÒá´É´ Êá´Éªá´
- SÊÉªá´Éª
- Gá´É´á´á´¢
- GÊá´ : Tá´á´Êá´ ÒÉªsÊ á´á´á´á´á´á´
- Tá´á´Êá´ É¢Êá´á´Ê
- KÉªsá´Éªá´á´
- Má´É´á´É´á´á´á´
- Aá´ÉªÉ´
- Gá´á´á´á´á´É¢á´Êá´sÊÉª
- Dá´á´á´á´á´É´ á´¡á´É´á´á´ÊÊá´É´á´
- Há´ÊÊsÉªÉ´É¢
Cá´ÊÉª ÊÉ¢ Êá´ sá´á´á´
[11/5 20:43] EÊÒ: Rá´á´á´á´á´É´á´á´sÉª AÉ´Éªá´á´

Aá´á´Éªá´É´
1. OÉ´á´ PÉªá´á´á´
2. Ná´Êá´á´á´
3. DÊá´É¢á´É´ Bá´ÊÊ
4. SÊÉªÉ´É¢á´á´Éª É´á´ KÊá´á´ÉªÉ´
5. OÉ´á´ Pá´É´á´Ê Má´É´
6. Há´É´á´á´Ê x Há´É´á´á´Ê
7. BÊá´á´á´Ê
8. Cá´á´á´: BÊá´á´á´á´Ê
9. Fá´ÊÊá´á´á´á´Ê AÊá´Êá´á´Éªsá´ : BÊá´á´Êá´ÊÊá´á´á´
10. Fá´ÉªÊÊ Tá´ÉªÊ
11. GÉªÉ´á´á´á´á´
12. Sá´¡á´Êá´ AÊá´ OÉ´ÊÉªÉ´á´
13. 91 Dá´Ês
14. Aá´á´á´Ê Wá´ÊÊá´
15. AÉªÊ Gá´á´Ê
16. Aá´á´á´á´ É¢á´ KÉªÊÊ!
17. AÊá´É´á´á´Ê.Zá´Êá´
18. AÉ´sá´á´sá´ KÊá´á´sÊÉªá´sá´
19. Aá´ É´á´ Exá´Êá´Éªsá´
20. AÊsÊá´É´ Sá´É´á´Éª
21. Bá´á´á´á´É´á´!
22. Bá´á´Êá´¢á´Êá´Ê
23. Bá´Êsá´Êá´
24. BÊá´á´á´ Bá´ÊÊá´á´
25. BÊá´á´á´ Lá´á´
26. BÊá´á´á´+
27. Bá´á´á´ É´á´ Há´Êá´ Aá´á´á´á´á´Éªá´
28. Bá´Êá´á´á´
29. Bá´á´á´á´á´!
30. CÊá´Êá´á´Êá´
31. Cá´á´á´ Gá´á´ss
32. Cá´á´¡Êá´Ê Bá´Êá´á´
33. D.GÊá´Ê-á´á´É´
34. Dá´É´É¢á´É´Êá´É´á´á´ Sá´ÊÉªá´s
35. Dá´Êá´á´Ê á´Êá´É´ BÊá´á´á´ Sá´ÊÉªá´s
36. Dá´á´á´á´á´É´ Wá´É´á´á´ÊÊá´É´á´
37. Fá´á´á´ Sá´ÊÉªá´s
38. FÊá´á´á´ á´Ò Rá´á´á´á´
39. Fá´ÊÊ Má´á´á´Ê Pá´É´Éªá´!
40. Gá´É´É¢sá´á´
41. Gá´É´á´á´¢
42. Gá´-Rá´Éª: Zá´Êá´
43. Gá´á´ Eá´á´á´Ê
44. Gá´ÉªÊá´Ê CÊá´á´¡É´
45. Há´ÊÊsÉªÉ´É¢
46. HÉªÉ¢á´sÊÉª É´á´ Eá´á´É´
47. HÉªÉ¢Êsá´Êá´á´Ê á´Ò á´Êá´ Dá´á´á´
48. IÉ´á´Yá´sÊá´
49. K (PÊá´á´á´á´á´ K)
50. Ká´á´á´É´á´É¢á´á´á´ÊÉª
51. Ká´á´á´á´Êá´ HÉªá´á´á´É´ Rá´Êá´ÊÉ´!
52. KÉªÊÊ Êá´ KÉªÊÊ
53. KÉªsá´Éªá´á´á´: Sá´Éª É´á´ Ká´á´á´ÊÉªá´sá´
54. Ká´á´á´á´á´sá´á´á´á´ É´á´ Ká´Êá´É´á´ÊÉª
55. Ká´Êá´sÊÉªá´sá´á´Éª (BÊá´á´á´ Bá´á´Êá´Ê)
56. Má´É¢Éª Sá´ÊÉªá´s
57. MÉªÊá´Éª NÉªá´á´Éª
58. Má´Ê PsÊá´Êá´ 100
59. Ná´É´á´á´sá´ É´á´ Tá´Éªá´¢á´Éª
60. Ná´á´É´ Gá´É´á´sÉªs Eá´ á´É´É¢á´ÊÉªá´É´
61. Ná´Êá´É¢á´á´Éª
62. Ná´Êá´ÊÉªÊÊá´É´ É´á´ Má´É¢á´
63. Oá´ á´ÊÊá´Êá´
64. Oá´¡á´ÊÉª É´á´ Sá´Êá´á´Ê
65. PsÊá´Êá´-Pá´ss
66. Rá´Êá´á´É´Éª Ká´É´sÊÉªÉ´
67. Sá´á´á´Êá´Éª CÊá´á´á´Êá´á´
68. SÊá´á´á´É¢á´É´ É´á´ SÊá´É´á´
69. SÊÉªá´á´á´ Sá´Éªá´Êá´á´ É´á´ Dá´sÊÉª Ká´É´Éªá´ÊÉª
70. SÊÉªÉ´É¢á´á´Éª É´á´ Bá´Êá´á´á´á´ Sá´ÊÉªá´s
71. Sá´á´Ê Eá´á´á´Ê
72. Sá´ÊÉªá´á´ á´Êá´ BÊá´á´á´
73. Tá´Êá´s á´Ò Zá´sá´ÉªÊÉªá´ á´Êá´ X
74. Tá´á´Êá´ Sá´ÊÉªá´s
75. Tá´á´Êá´ GÊá´á´Ê
76. UsÊÉªá´ á´á´ Tá´Êá´
77. Zá´á´sá´á´É´ É´á´ Tá´á´á´á´sá´

Aá´á´ á´É´á´á´Êá´
1. OÉ´á´ PÉªá´á´á´
2. Má´sÊÉªsÊÉª
3. Zá´Êá´ É´á´ Tsá´á´á´Éªá´á´
4. Má´á´á´ IÉ´ AÊÊss
5. CÊá´Êá´á´Êá´
6. BTOOOM
7. SÊÉªÉ´É¢á´á´Éª É´á´ Bá´Êá´á´á´á´ Sá´ÊÉªá´s
8. Rá´á´á´á´ Ná´ Yá´á´sÊá´
9. Fá´ÊÊá´á´á´á´Ê AÊá´Êá´á´Éªsá´: BÊá´á´Êá´ÊÊá´á´á´
10. Má´É¢Éª Sá´ÊÉªá´s
11. Há´É´á´á´Ê x Há´É´á´á´Ê 
12. Aá´á´á´sá´á´Éª É´á´ Yá´É´á´ 
13. Ná´Êá´á´á´ Sá´ÊÉªá´s
14. Oá´á´á´á´Éª á´á´ Ká´á´sÊÉªÉ´ÊÊá´á´ 
15. Fá´ÉªÊÊ Tá´ÉªÊ
16. Há´á´¡Ê É´á´ UÉ¢á´á´á´ SÊÉªÊá´
17. Ká´á´á´É´á´É¢á´á´á´ÊÉª 
18. Cá´á´á´ Gá´á´ss
19. KÉªÉ´á´ É´á´ Tá´ÊÉª: TÊá´ Bá´á´á´á´ÉªÒá´Ê Wá´ÊÊá´
20. Sá´á´Ê Eá´á´á´Ê
21. Tá´É´É¢á´É´ Tá´á´á´á´ Gá´ÊÊá´É´ Lá´É¢á´É´É´
22. Aá´á´á´á´ É¢á´ KÉªÊÊ!
23. Sá´¡á´Êá´ AÊá´ OÉ´ÊÉªÉ´á´
24. DÊá´É¢á´É´ Bá´ÊÊ
25. Ná´É´á´á´sá´ É´á´ Tá´Éªá´¢á´Éª 
26. LÉªá´á´Êá´ WÉªá´á´Ê Aá´á´á´á´á´Éªá´
27. Rá´á´á´á´ É´á´ Aá´Éª Sá´Êá´
28. Sá´Êá´ Êá´ÊÉª á´á´ Tá´á´Éª Bá´sÊá´
29. Cá´á´¡Êá´Ê Bá´Êá´á´
30. Sá´É´ á´á´ CÊÉªÊÉªÊá´ É´á´ Ká´á´Éªá´á´á´á´sÊÉª
31. Ná´Êá´ÊÉªÊÊá´É´ Ná´ Má´É¢á´
32. Lá´É¢ Há´ÊÉªá´¢á´É´
33. Tá´ÊÉªá´á´
34. Gá´ÊÉ¢á´É´á´Éªá´ á´É´ á´Êá´ Vá´Êá´á´Êá´á´s PÊá´É´á´á´
35. Já´á´á´âs BÉªá´¢á´ÊÊá´ Aá´á´ á´É´á´á´Êá´
36. Eá´Êá´á´á´ Sá´á´ á´É´
37. BÊá´á´á´ Lá´É¢á´á´É´
38. D.GÊá´Ê-á´á´É´
39. Aá´á´á´á´á´ á´É´ TÉªá´á´É´
40. IÉ´á´Yá´sÊá´
41. Sá´á´á´Êá´Éª CÊá´á´á´Êá´á´
42. Ná´Êá´É¢á´á´Éª
43. Ná´ Gá´á´á´ Ná´ LÉªÒá´
44. Rá´á´Éªá´É´á´

Má´á´Êá´
1. Tá´É´É¢á´É´ Tá´á´á´á´ Gá´ÊÊá´É´ Lá´É¢á´É´É´
2. Fá´ÊÊ Má´á´á´Ê Pá´É´Éªá´!
3. CÊá´ss AÉ´É¢á´: Tá´É´sÊÉª á´á´ RÊá´á´ É´á´ Rá´É´á´á´
4. Ná´á´É´ Gá´É´á´sÉªs Eá´ á´É´É¢á´ÊÉªá´É´
5. Eá´Êá´á´á´ Sá´á´ á´É´
6. Ká´á´á´á´á´Éªá´Éª Vá´Êá´ Êá´á´ á´ (Vá´Êá´ Êá´á´ á´ á´Êá´ LÉªÊá´Êá´á´á´Ê)
7. Má´ÊÉªÊá´ Sá´Éªá´ Gá´É´á´á´á´ 00
8. Bá´á´á´Ê Cá´á´á´Êá´x
9. AÊá´É´á´á´Ê.Zá´Êá´
10. Cá´á´á´ Gá´á´ss
11. Dá´á´á´ A LÉªá´ á´
12. Gá´É´á´sÉªs á´Ò AÏá´á´ÊÉªá´É´ (Sá´á´sá´Éª É´á´ AÏá´á´ÊÉªá´É´)
13. VÉªsÉªá´É´ á´Ò Esá´á´ÒÊá´á´¡É´á´ 
14. Má´á´Êá´ss Sá´ÊÉªá´s
15. GÊá´sá´ ÉªÉ´ á´Êá´ SÊá´ÊÊ: Sá´á´É´á´ AÊá´É´á´ Cá´á´á´Êá´x
16. Rá´ÊXá´á´Êá´É´
17. Yá´á´sÊá´-Oá´ Gá´á´Gá´ÉªGá´Ê
18. FLCL
19. IS: IÉ´ÒÉªÉ´Éªá´á´ Sá´Êá´á´á´s
20. Dá´ÊÊÉªÉ´É¢ ÉªÉ´ á´Êá´ FÊá´É´XX
21. Sá´Éªsá´Éª É´á´ Gá´ÊÉ¢á´É´á´Éªá´
22. UÉ´á´á´Òá´á´á´á´á´ Bá´Êá´á´á´á´ CÊÊá´É´Éªá´Êá´
23. Há´É´á´Êá´á´
24. SÉªá´á´É´Éªá´ É´á´ KÉªsÊÉª
25. Rá´Êá´á´Éªá´s;Ná´á´á´s
26. Há´sÊÉª É´á´ Ká´á´
27. Gá´É´á´á´á´ WÉªÉ´É¢
28. Bá´á´á´Êá´É´á´
29. Má´ÊÉªÊá´Sá´Éªá´Gá´É´á´á´á´:IÊá´É´-BÊá´á´á´á´á´ OÊá´Êá´É´s
30. KÉ´ÉªÉ¢Êá´âs & Má´É¢Éªá´
31. Há´á´á´ Ê OÊá´á´á´á´
32. Sá´á´á´Êá´Éª Sá´á´ á´É´
33. Cá´á´á´á´ Lá´á´ÉªÒá´Ê
34. Sá´á´Ê DÊÉªá´ á´Ê: Ká´É¢á´Êá´á´Éª É´á´ Tá´á´á´á´á´
35. Asá´Êá´ CÊÊÉªÉ´'
36. Há´Êá´Éªá´ AÉ¢á´
37. AÏá´á´ÊÉªá´É´ Eá´ á´Ê
38. Ká´Êá´á´á´á´á´Êá´
39. Ná´Êá´É´á´É¢á´ á´Êá´ Fá´á´Ê
40. Sá´Êá´¡á´Êá´¢á´sá´á´Êá´á´É´
41. Tá´á´ á´¡á´ Ná´Êá´á´! Gá´É´Êá´sá´á´Ê
42. Sá´Êá´á´á´á´á´ PÊÉªÉ´á´á´ss
43. BÊá´á´á´ BÊá´á´á´
44. Má´á´ -Lá´á´  AÊá´á´ÊÉ´á´á´Éªá´ á´: Tá´á´á´Ê Eá´ÊÉªá´sá´
45. Rá´á´á´á´É´ Tsá´ÉªÊá´á´ 
46. Vá´É´á´Êá´á´á´
47. Bá´Êá´á´Éª Bá´Êá´É´á´Éª
48. Aá´á´Êá´sá´á´á´ (2004)
49. DÊá´É¢á´É´á´á´á´: TÊá´ Rá´sá´É´á´É´á´á´
50. Gá´É´ X Sá´¡á´Êá´

Cá´Ês
1. Tá´á´á´á´Éª's AE86 / IÉ´Éªá´Éªá´Ê D
2. Aá´Éªá´'s Fá´ÉªÊ Lá´á´Ê Z / Wá´É´É¢á´É´ MÉªá´É´ÉªÉ¢Êá´
3. JP's TÊá´É´sá´á´ / Rá´á´ÊÉªÉ´á´
4. NÉªá´á´'s Má´Êá´á´á´á´s A-á´Êá´ss / Ná´xá´ A-á´Êá´ss
5. Ká´á´á´Êá´'s Rá´ÉªÊÊÉªÊá´ / CÊá´á´sá´á´á´ Há´É´á´á´Éª GÊÊá´á´¢á´á´á´á´Ê
6. Sá´Éªá´ÊÉª's Lá´á´á´s Sá´á´á´Ê 7 / á´X-DÊÉªá´ á´Ê: TÊá´ á´á´á´ Éªá´
7. SÊÉªÊá´'s á´á´á´ÉªÒÉªá´á´ F-1 / Tá´ÉªÊá´É´á´á´Ês
8. VÉªá´á´ PÊÉªÉ´á´Éªá´á´Ê Uá´ÊÉªÊá´á´á´á´á´'s Tá´Êá´á´á´ CÊá´sá´á´ / GTO
9. Cá´á´á´á´á´'s Fá´Êá´á´Êá´ OÉ´á´ / Cá´á´á´á´á´
10. Rá´á´á´É´ á´É´á´ Oá´á´á´'s sÊá´Êá´ á´á´Ê / Cá´á´á´á´ Lá´á´ÉªÒá´Ê

DÊá´á´á´
1. Rá´LIFE
2. Tsá´á´Éª É¢á´ KÉªÊá´Éª
3. AÉ´á´Há´É´á´
4. SÊÉªÉ¢á´á´sá´ á´¡á´ KÉªá´Éª É´á´ Usá´
5. Má´á´á´ IÉ´ AÊÊss
6. KÉªá´Éª É´á´ Ná´á´¡á´
7. Rá´: Zá´Êá´ á´á´Êá´ Há´á´Éªá´á´Êá´ Isá´á´á´Éª Sá´Éªá´á´á´sá´
8. Fá´ÊÊá´á´á´á´Ê AÊá´Êá´á´Éªsá´: BÊá´á´Êá´ÊÊá´á´á´
9. AÉ´É¢á´Ê Bá´á´á´s
10. CÊá´á´É´ÉªÊÊá´á´ á´á´á´á´ Ká´Éª É¢á´ SÊÉªá´á´Éª!
11. CÊá´ÊÊá´á´á´á´
12. Sá´á´á´Êá´sá´á´ É´á´ Pá´á´ É´á´ Ká´É´á´á´á´
13. Ká´á´¢á´ É´á´ Há´É´á´á´Éª
14. EÊá´á´á´É´É¢á´-sá´É´sá´Éª
15. Aá´ Há´Êá´ RÉªá´á´
16. Ká´á´ É´á´ Ká´á´á´á´ÊÉª
17. SÊÉªÉ´É¢á´á´Éª É´á´ KÊá´á´á´ÉªÉ´
18. CÊá´É´É´á´á´
19. WÊÉªá´á´ AÊÊá´á´

Fá´É´á´á´sÊ
1. OÉ´á´ PÉªá´á´á´
2. Má´á´á´ ÉªÉ´ AÊÊss
3. Rá´:Zá´Êá´ á´á´Êá´ Há´á´Éªá´á´Êá´ Isá´á´á´Éª Sá´Éªá´á´á´sá´
4. Dá´É´Má´á´ÊÉª
5. Oá´ á´ÊLá´Êá´
6. Sá´Êá´É´á´Êá´ É´á´ Asá´ É´Éª Yá´á´á´sá´á´á´hÉ´á´ Há´É´á´ á´¡á´ 
7. Tá´Êá´s á´Ò Zá´sá´ÉªÊÉªá´ á´Êá´ X
8. Oá´á´á´á´Éª á´á´ Ká´á´sÊÉªÉ´ÊÊá´á´
9. Aá´á´á´sá´á´Éª É´á´ Yá´É´á´
10. Fá´ÊÊá´á´á´á´Ê AÊá´Êá´á´Éªsá´: BÊá´á´Êá´ÊÊá´á´á´
11. Lá´É¢ Há´ÊÉªá´¢á´É´
12. Bá´Êsá´Êá´
13. Ná´ Gá´á´á´ Ná´ LÉªÒá´
14. Ná´É´á´á´sá´ É´á´ Tá´Éªá´¢á´Éª
15. Má´É¢Éª Sá´ÊÉªá´s
16. Fá´ÉªÊÊ Tá´ÉªÊ
17. Há´É´á´á´Ê x Há´É´á´á´Ê
18. Ná´á´sá´á´á´ Yá´á´á´ÉªÉ´á´Êá´á´
19. Sá´á´Ê Eá´á´á´Ê
20. Fá´á´á´/sá´á´Ê É´ÉªÉ¢Êá´: UÉ´ÊÉªá´Éªá´á´á´ BÊá´á´á´ Wá´Êá´s
21. Zá´á´sá´á´É´ É´á´ Tá´á´á´á´sá´
22. Ká´á´á´á´Éª Sá´É´sá´É´
23. Ká´Êá´á´á´.
24. DÊÉªÒá´á´Ês
25. Há´ÉªÊá´É´á´ Rá´É´á´á´Éª
26. Má´Êá´á´á´ÉªÉ´ Gá´Êá´É¢á´Êá´
27. Gá´á´á´: JÉªá´Éªá´á´Éª Ká´É´á´á´ÊÉª NÉªá´á´, Ká´á´á´ Tá´á´á´á´á´á´ÊÉª
28. SÊÉªÉ´É¢á´á´Éª É´á´ Bá´Êá´á´á´á´ Sá´ÊÉªá´s
29. Ká´É´á´sá´Êá´
30. Sá´¡á´Êá´ AÊá´ OÉ´ÊÉªÉ´á´
31. VÉªá´Êá´á´ Eá´ á´ÊÉ¢á´Êá´á´É´
32. Má´sÊÉªsÊÉª
33. Há´á´¡Ê É´á´ UÉ¢á´á´á´ SÊÉªÊá´
34. AÊÉªá´ TÊá´ OÊÉªÉ¢ÉªÉ´á´á´Éªá´É´
35. Ká´á´Éªsá´á´á´ Há´á´Éªá´á´á´á´sÊÉªá´á´
36. Há´á´sá´á´Éª É´á´ Ká´É´Éª
37. PÊÉªÉ´á´á´ss Má´É´á´É´á´á´á´
38. Ká´á´á´É´á´ É´á´ Sá´á´á´á´ EÊÉªÉ´
39. Yá´á´É¢á´á´Éª MÉªÉ´É¢á´á´É´
40. Já´á´É´Éª Ká´á´á´á´Éª
41. Cá´Êá´á´á´á´á´á´Ê Sá´á´á´Êá´: CÊá´á´Ê Cá´Êá´-Êá´É´
42. Ká´Êá´Êá´sÊÉª-sá´É´ CÊÉª É´á´ Má´Éªá´ DÊá´É¢á´É´
43. Uá´Êá´á´á´á´É´ Ká´á´¢á´á´á´
44. Ná´É¢Éª É´á´ Asá´á´á´Êá´
45. Má´Êá´á´á´sá´á´á´Éª É´á´ Yá´á´á´
46. LÉªá´á´Êá´ WÉªá´á´Ê Aá´á´á´á´á´Éªá´

Sá´Êá´á´Ê LÉªÒá´
1. Aá´ Há´Êá´ RÉªá´á´
2. HÊá´á´á´á´
3. CÊá´ÊÊá´á´á´á´
4. Ká´á´á´Êá´ Cá´É´É´á´á´á´
5. Ká´Êá´á´á´Éª Já´á´á´¢á´ É´á´ Tá´á´á´É¢Éª-sá´É´
6. Bá´á´á´ Dá´á´á´ É¢á´ IÉ´á´Éª Má´á´ÊÉª
7. Tá´Êá´á´á´Êá´!
8. Tsá´á´Éª É¢á´ KÉªÊá´Éª
9. KÊá´á´á´á´Éª É´á´ Ká´É´á´á´á´
10. Rá´LIFE
11. Sá´¡á´Êá´ AÊá´ OÉ´ÊÉªÉ´á´
12. AÉ´á´Há´É´á´
13. IssÊá´á´á´É´ FÊÉªá´É´á´s
14. SÊÉªÉ¢á´á´sá´ á´¡á´ KÉªá´Éª É´á´ Usá´
15. Ká´á´¢á´ É´á´ Há´É´á´á´Éª
16. KÉªá´Éª É´á´ Ná´á´¡á´
17. Sá´á´Éªá´á´á´ IÉª É´á´ Êá´
18. Sá´á´á´Êá´sá´á´ É´á´ Pá´á´ É´á´ Ká´É´á´á´á´
19. Tá´á´Êá´ Rá´á´ á´É´s
20. HÉªá´á´á´á´á´ Uá´á´Êá´-á´Êá´É´
21. Má´sá´á´á´É´á´-á´á´É´ É´á´ Rá´á´ á´É´É¢á´
22. TÊÉªÉ´Éªá´Ê Sá´á´ á´É´
23. AÉ´É¢á´Ê Bá´á´á´s
24. BÊá´á´á´Ê
25. BÊá´á´á´-C
26. HÉªÉ¢Ê Sá´Êá´á´Ê DxD
27. Bá´á´á´ É´á´ Há´Êá´ Aá´á´á´á´á´Éªá´
28. SÊá´á´á´É¢á´á´Éª É´á´ Sá´á´á´á´
29. AÉ´sá´á´sá´ KÊá´á´sÊÉªá´sá´
30. Tá´É´á´ÊÉª É´á´ Ká´ÉªÊá´á´sá´-á´á´É´
31. OÊá´É´É¢á´
32. KÉªá´Éª É´Éª Tá´á´á´á´á´
33. Sá´á´á´á´á´á´á´ á´á´sá´ É¢á´?
34. CÊá´á´É´ÉªÊÊá´á´ á´á´á´á´ Ká´Éª É¢á´ SÊÉªá´á´Éª!
35. Ká´Êá´á´á´ É´á´ Bá´sá´á´á´
36. NÉªsá´á´á´Éª
37. Sá´á´É´á´Éª Há´Êá´ÉªÉ´á´ É´á´ Sá´á´á´á´á´á´á´á´á´
38. HÉªÊÉªá´á´! Eá´á´Êá´É´Éªá´á´
39. Ná´É´ Ná´É´ BÉªÊá´ÊÉª
40. Gá´ÊÊÉªá´Ê DÊá´á´Oá´á´
41. AÊá´ GÉªÊÊ
42. Iá´sá´á´á´á´á´á´ Bá´á´á´Êá´ É´á´ Ká´Éª á´¡á´ 10-Cá´É´á´Éªá´á´á´á´Ês Dá´á´á´á´
43. Já´sá´ Bá´á´á´á´sá´!
44. Ká´á´ É´á´ Ká´á´á´á´ÊÉª
45. Ká´á´á´Êá´ É¢á´ Sá´á´á´ÊÉªá´á´É¢á´á´á´á´Êá´É´á´á´

SÊÉªá´á´ á´Ò LÉªÒá´
1. Gá´É´sÊÉªá´á´É´
2. SÊÉªÉ´ÊÊá´á´á´! Iá´á´ Má´sá´á´á´
3. Uá´Êá´á´á´á´É´ Ká´á´¢á´á´á´
4. Ká´á´á´É´á´Êá´ É´á´ NÉªá´¡á´
5. Má´sÊÉªsÊÉª
6. Pá´á´á´ É´á´ Iá´á´á´á´á´ á´¡á´ KÉªá´ÉªÉ´á´sá´Éª!
7. AÉªÊ
8. AÉ´á´ HÉª MÉªá´á´ Há´É´á´ É´á´ Ná´á´á´á´ á´¡á´ Bá´á´á´á´á´á´ÊÉª á´¡á´ Má´á´á´ SÊÉªÊá´É´á´Éª.
9. Ná´á´sá´á´á´ Yá´á´á´ÉªÉ´á´Êá´á´
10. Bá´Êá´á´á´á´á´É´ á´á´É´ Há´É´á´á´-á´á´É´
11. Dá´É¢á´sÊÉª Ká´sÊÉª
12. Aá´á´á´á´á´ á´á´ IÉ´á´á´¢á´á´á´
13. CÊá´É´É´á´á´
14. Ká´Êá´Êá´sÊÉª-sá´É´ CÊÉª É´á´ Má´Éªá´ DÊá´É¢á´É´
15. HÉªá´á´á´á´á´! Uá´á´Êá´-á´Êá´É´
16. Sá´á´á´Êá´ Qá´á´sá´
17. Má´Êá´á´á´sá´á´á´Éª É´á´ Yá´á´á´
18. Ká´Êá´á´á´Éª Já´á´á´¢á´ É´á´ Tá´á´á´É¢Éª-sá´É´
19. Sá´Êá´ Êá´ÊÉª á´á´ Tá´á´Éª Bá´sÊá´
20. Sá´Êá´ á´É´á´ x Sá´Êá´ Éªá´á´
21. Tá´á´á´á´á´ Lá´á´ á´ Sá´á´ÊÊ
22. Ná´É´ Ná´É´ BÉªÊá´ÊÉª
23. Usá´É¢Éª DÊá´á´
24. Ná´á´¡ Gá´á´á´!
25. Wá´Êá´ÉªÉ´É¢!! (Wá´É¢É´á´ÊÉªá´!!) Sá´ÊÉªá´s
26. Gá´á´Êá´á´á´á´É´ á´¡á´ Usá´É¢Éª á´á´sá´ á´á´??
27. AÊÉªá´ TÊá´ OÊÉªÉ¢ÉªÉ´á´á´Éªá´É´
28. Uá´Êá´á´ KÊá´á´á´á´Éª
28. NÉªá´ÊÉªá´á´á´
30. Ná´É´á´
31. Ká´á´á´É´á´ É´á´ Sá´á´á´á´ EÊÉªÉ´
32. Ná´á´á´á´á´ Cá´É´á´á´ÊÉªÊá´
33. Dá´É´sÊÉª Ká´á´á´á´á´sá´Éª É´á´ NÉªá´ÊÉªá´á´á´
34. K-OÉ´!
35. Yá´Êá´ Cá´á´á´
36. GÉªÉ´ É´á´ Sá´á´Éª
37. Há´á´ÊÉªá´Éªá´sá´ á´á´ CÊá´á´ á´Ê
38. Sá´á´á´Êá´sá´á´ É´á´ Pá´á´ É´á´ Ká´É´á´á´á´
39. Rá´LIFE
40. Ká´Êá´É¢á´ÊÉªá´á´
41. SÊá´á´á´á´ SÊá´á´á´á´á´sá´ RÊá´á´á´á´
42. Eá´ á´ É´á´ JÉªá´á´É´
43. HÊá´á´á´á´
44. Iá´ Ná´á´Éª Ká´ Rá´á´Ê
45. Tá´É´á´á´á´-á´á´É´ á´¡á´ Iá´sá´á´á´ Ká´á´á´Êá´É¢á´
46. SÊÉªÊá´Êá´á´á´
47. GÊá´á´á´ Tá´á´á´Êá´Ê OÉ´Éªá´¢á´á´á´
48. Sá´Éªá´Éª Ká´sá´á´ É´á´ Î¨ Ná´É´
49. VÉªá´Êá´á´ Eá´ á´ÊÉ¢á´Êá´á´É´
50. 3-É¢á´á´sá´ É´á´ LÉªá´É´
51. Gá´á´á´á´É´ Bá´ÊÊsÉªá´á´á´Ês
52. MÉªá´sá´Êá´sÊÉª Cá´Êá´Ês
53. HÉªÉ´á´á´á´á´sá´ÊÉª
54. Tá´á´á´-á´á´É´ á´¡á´ Ká´Éª á´¡á´ SÊÉªÉ´á´Éª
55. Cá´á´Éªá´ GÉªÊÊs
56. BÊá´á´sá´á´á´ 5 Cá´É´á´Éªá´á´á´á´Ê
57. Há´É´á´sá´á´á´ IÊá´Êá´
58. Dá´É´á´á´ OÉ´É´á´ á´á´ Sá´ÉªsÊá´É´ Oá´á´á´á´

Sá´á´á´Êá´Éª
1. Sá´á´á´Êá´Éª 7
2. Rá´Êá´á´É´Éª Ká´É´sÊÉªÉ´
3. Sá´á´á´Êá´Éª CÊá´á´á´Êá´á´
4. AÒÊá´ Sá´á´á´Êá´Éª
5. Sá´É´É¢á´á´á´ Bá´sá´Êá´: Sá´á´á´Êá´Éª KÉªÉ´É¢s
6. GÉªÉ´á´á´á´á´
7. Há´á´á´á´á´á´Éª
8. Sá´¡á´Êá´ á´Ò á´Êá´ Sá´Êá´É´É¢á´Ê
9. BÊá´á´á´ á´Ò á´Êá´ Iá´á´á´Êá´á´Ê
10. Rá´É´ÉªÉ´ Wá´ÊÊÉªá´Ês
11.Sá´á´á´Êá´Éª X

MÉªÊÉªá´á´ÊÊ
1. Fá´ÊÊá´á´á´á´Ê AÊá´Êá´á´Éªsá´: BÊá´á´Êá´ÊÊá´á´á´
2. SÊÉªÉ´É¢á´á´Éª É´á´ KÊá´á´ÉªÉ´
3. Cá´á´á´ Gá´á´ss: Há´É´É¢Êá´á´á´ É´á´ Lá´Êá´á´á´Ê
4. Oá´¡á´ÊÉª É´á´ Sá´Êá´á´Ê
5. Gá´á´á´: JÉªá´Éªá´á´Éª Ká´É´á´á´ÊÉª É´Éªá´á´, Ká´á´á´ Tá´á´á´á´á´á´ÊÉª
6. AÊá´É´á´á´Ê .Zá´Êá´
7. Gá´á´ Eá´á´á´Ê
8. Yá´á´á´á´ Sá´É´á´Éª 
9. SAO AÊá´á´ÊÉ´á´á´Éªá´ á´: Gá´É´ Gá´Êá´ OÉ´ÊÉªÉ´á´
10. Ná´á´Éªá´á´á´Éª Sá´ÉªÊá´Éª Sá´É´á´Éª: Tá´É´á´Êá´á´ É´á´ AÊá´á´Êá´á´ÉªÉ´
11. GÉªÊÊs á´É´á´ Pá´É´á´¢á´Ê
12. Ká´É´á´á´Éª Cá´ÊÊá´á´á´Éªá´É´
13. Má´á´ -Lá´á´  AÊá´á´ÊÉ´á´á´Éªá´ á´: Tá´á´á´Ê Eá´ÊÉªá´sá´
14. 07-GÊá´sá´
15. Má´ÊÉªÊá´ Sá´Éªá´ Gá´É´á´á´á´ 00
16. KÉªÉ´É¢á´á´á´
17. Ká´á´á´á´á´Éªá´Éª Vá´Êá´ Êá´á´ á´
18. Sá´ÊÉªá´á´ WÉªá´á´Êá´s
19. Má´á´Êá´ss FÊá´É´á´Éªá´Ê
20. Sá´ Rá´ Ná´ Wá´ Tá´
21. Há´á´á´ Ê OÊá´á´á´á´
22. Sá´É´á´á´á´ É´á´ Vá´Êá´ÊÊÉªá´
23. Oá´á´á´á´ Yá´á´á´á´Éª Zá´á´á´Êá´
24. AÉ´É¢á´Êá´á´Éªs: Gá´É´á´á´á´ Ká´ssá´É´á´Éª
25. BÊá´á´á´ BÊá´á´á´
26. HÉªÉ¢Ê Sá´Êá´á´Ê FÊá´á´á´
27. Tá´sÊá´á´á´É´ Sá´É´sá´á´
28. Sá´Êá´É¢á´Êá´!
29. Tá´Éªá´á´á´á´á´ Gá´á´á´á´É´ 35 SÊÉªá´á´É´ SÊá´á´á´á´Éª
30. Já´á´á´Ê Gá´á´á´

HÉªsá´á´ÊÉªá´á´Ê
1. GÉªÉ´á´á´á´á´
2. Má´sÊÉªsÊÉª
3. Dá´Êá´Êá´
4. Sá´á´á´Êá´Éª CÊá´á´á´Êá´á´
5. Bá´á´á´á´É´á´!
6. Ká´á´á´É´á´É¢á´á´á´ÊÉª
7. Rá´Êá´á´É´Éª Ká´É´sÊÉªÉ´: Má´Éªá´Éª Ká´É´á´á´á´á´ Rá´á´á´É´á´á´É´
8. Gá´sÉªá´á´
9. KÉªÉ´É¢á´á´á´
10. Ká´Êá´sÊÉªá´sá´á´Éª
11. Aá´Éª Bá´É´É¢á´á´á´ Sá´ÊÉªá´s
12. Há´á´á´ÊÉªá´ AxÉªs Pá´á´¡á´Ês
13. Há´á´á´á´á´á´Éª
14. Sá´É´É¢á´á´á´ Bá´sá´Êá´
15. Já´á´á´Ê Gá´á´á´
16. Ká´É¢á´Êá´ HÉªá´á´ É´á´ Má´É´á´É¢á´á´á´ÊÉª
17. EÉªá´á´á´á´ Ká´Éª Má´É´á´É¢á´á´á´ÊÉª 

Pá´ÊÉªá´á´
1. Tá´ÉªÊá´ SÊÉªá´Êá´á´ á´¢á´
2. GÊá´sá´ ÉªÉ´ á´Êá´ SÊá´ÊÊ
3. Ká´á´ÊÉªÊá´ Ká´á´sá´sÊÉªá´á´á´á´ Ká´á´á´á´ÊÉª Ká´á´á´É´á´á´á´ 
4. Há´sÊá´á´sá´á´á´
5. PsÊá´Êá´-Pá´ss
6. Má´ÊÉªÊá´ Pá´ÊÉªá´á´ Pá´á´Êá´Êá´Ê
7. MÉªÊá´Éª Ká´Éªsá´á´sá´ UÊá´sÊÉªá´á´É´
8. WÉªÊá´ 7
9. Yá´á´sÊá´ Ká´Éªsá´á´sá´ J-Dá´á´á´á´Ê
10. HÉªá´Éªá´sá´: TÊá´ Rá´á´ á´Êá´á´Éªá´É´
11. Sá´á´á´Êá´Éª FÊá´á´á´É´á´á´
12. B: TÊá´ Bá´É¢ÉªÉ´É´ÉªÉ´É¢
13. JÉªÉ´-Rá´Ê: TÊá´ Wá´ÊÒ BÊÉªÉ¢á´á´á´
14. OÉ´ÉªÊá´Éª
15. KÉªá´á´á´ Ká´Éªsá´á´sá´ Pá´á´Êá´Êá´Ê: OÉ´ á´á´Êá´á´ ÉªsÉªá´É´
16. Má´á´sá´á´ Dá´ÉªÊÉªÉ´ÉªÉ´
17. Pá´á´á´á´ Má´á´á´Ê Ká´Êá´É¢á´É´á´
18. HÊá´á´Ê Pá´ÊÉªá´á´

Sá´Éª-ÒÉª
1. Sá´á´ÉªÉ´s;Gá´á´á´
2. IÉ´á´Êá´sÊÉªá´Éª
3. Má´á´á´ ÉªÉ´ AÊÊss
4. Cá´á´¡Êá´Ê Bá´Êá´á´
5. PÊá´sá´Éªá´ Má´á´á´ÊÉªá´s
6. Eá´Êá´á´á´ Sá´á´ á´É´
7. Má´Êá´á´á´á´ Ká´á´á´á´á´ É´á´ Rá´á´á´á´á´sá´Éª
8. DÉªá´á´É´sÉªá´É´ W
9. Dá´ÊÊÉªÉ´É¢ ÉªÉ´ á´Êá´ FÊá´É´XX
10. Dá´É´É´á´á´ Cá´ÉªÊ
11. Sá´á´á´á´âDá´É´á´Ê
12. KÉªá´¢É´á´Éªá´ á´Ê
13. Ná´á´É´ Gá´É´á´sÉªs Eá´ á´É´É¢á´ÊÉªá´É´
14. Rá´Êá´á´Éªá´s;Ná´á´á´s
15. Pá´á´ÊÉªá´á´
16. Má´É¢á´Êá´ Bá´x
17. GÊá´sá´ ÉªÉ´ á´Êá´ SÊá´ÊÊ
18. Gá´á´á´Êá´á´á´É´ CÊá´á´¡á´s
19. Gá´á´á´sá´É´ Tá´sÊÉª Asá´á´ÊÉªsá´
20. GÉªÉ´á´á´á´á´
21. Sá´á´á´sá´á´á´ É´á´ Pá´á´á´á´á´
22. Eá´ á´ É´á´ JÉªá´á´É´
23. PsÊá´Êá´-Pá´ss
24. Dá´É´á´á´ OÉ´É´á´ á´á´ Sá´ÉªsÊá´É´ Oá´á´á´á´
25. Má´á´á´á´á´á´Éªá´Ê Aá´á´á´Ês
26. PÊá´É´á´á´á´s
27. Bá´á´á´Ê Cá´á´á´Êá´x
28. Pá´Êsá´É´á´ Sá´ÊÉªá´s
29. Sá´Êá´ É´á´ Oá´á´sÊÉªá´á´É´á´

Sá´á´Êá´
1. Cá´á´á´á´ÉªÉ´ Tsá´Êá´sá´
2. GÉªá´É´á´ KÉªÊÊÉªÉ´É¢
3. TÊá´ KÉ´ÉªÉ¢Êá´ ÉªÉ´ TÊá´ AÊá´á´ (AÊá´á´ É´á´ KÉªsÊÉª )
4. Aá´á´Éª Dá´É´sá´á´sá´ SÊá´á´á´! (BÊá´á´ Lá´É¢á´É´á´ SÊá´á´á´!)
5. Dá´Ês
6. WÊÉªsá´Êá´!
7. OÒÒsÉªá´á´
8. DÊá´É¢á´É´ Lá´á´É¢á´á´
9. Fá´É´á´á´sÉªsá´á´ Sá´á´ÊÊá´
10. IÉ´á´á´¢á´á´á´ EÊá´á´ á´É´
11. GÉªÉ´É¢á´ á´ KÉªá´á´á´ÒÒ!!
12. Há´É´É¢ÊÊ Há´á´Êá´ WÉªÊá´ Sá´ÊÉªá´á´Ê
13. Gá´É´Êá´Êá´ KÉªá´á´á´Ês
14. Ká´Êá´á´á´ Ná´ Bá´sá´á´á´
15. SÊá´á´ Dá´É´á´
16. Dá´á´Ê Bá´Ês
17. IâÊÊ/CKBC
18. Bá´á´¢á´¢á´Ê Bá´á´á´á´Ê
19. Bá´sÏá´á´sÊ!
20. Rá´-KÊá´-Bá´!
21. Dá´sÊ Ká´á´á´á´Éª
22. DÉªá´á´á´É´á´ É´á´ Aá´á´ (Aá´á´ á´Ò DÉªá´á´á´É´á´)
23. PÊÉªÉ´á´á´ss NÉªÉ´á´: KÉªsá´Êá´É¢Éª Já´sÊÉªá´á´á´ Yá´á´Êá´á´Êá´
24. Má´á´á´Ê
25. Tá´á´á´Ê
26. H2
27. CÊá´ss Gá´á´á´
28. Tá´ÉªsÊá´á´ Yá´á´Êá´á´ Má´sá´á´á´
29. Má´sÊÉªá´á´Êá´ (WÊá´á´ IÒ á´ Fá´á´á´Êá´ Má´É´á´É¢á´Ê á´Ò á´ HÉªÉ¢Ê Sá´Êá´á´Ê Bá´sá´Êá´ÊÊ Tá´á´á´ Rá´á´á´ DÊá´á´á´á´Êâs)
30. OÉ´á´ Oá´á´s
31. Oá´á´Éªá´á´ Fá´ÊÉªá´á´Êá´á´á´á´ (BÉªÉ¢ WÉªÉ´á´á´á´!)
32. Há´Éªá´Êá´á´
33. Aá´á´á´á´á´ á´É´ Tá´á´á´ÊÊá´á´¡
34. Aá´á´á´á´á´ Ná´.1
35. Aá´á´á´á´á´á´Ê Yá´á´
36. Yá´á´¡á´á´á´sÊÉª Pá´á´á´Ê
37. Iá´á´á´á´É´ Já´á´á´
38. Oá´ á´Ê DÊÉªá´ á´
39. Ná´sá´: Sá´á´á´á´Ê ÉªÉ´ AÉ´á´á´Êá´sÉªá´
40. Ná´sá´ : A MÉªÉ¢Êá´á´á´ÊÊ BÉªÊá´ á´¡Éªá´Ê Sá´Éªá´á´á´sá´
41. Há´á´Éªá´á´ É´á´ Iá´á´á´
42. AsÊÉªá´á´ É´á´ Já´á´
43. Gá´É´Êá´Êá´ Gá´É´á´Éª
44. Ná´á´¢á´á´Éª WÉªá´á´Êá´s
45. OÉ´á´ Pá´á´É´á´ Gá´sá´á´Ê
46. AÉªá´ Òá´Ê á´Êá´ Aá´á´!
47. TÊá´ PÊÉªÉ´á´á´ á´Ò Tá´É´É´Éªs
48. Bá´ÊÊ Sá´á´á´s
49. EÊá´sÊÉªá´Êá´ 21
50. Sá´á´sÊ
51. SÊá´á´á´É´á´á´sá´ É´á´ á´á´á´á´Êá´á´ á´á´sá´á´á´
52. AÉªÊ É¢á´á´Ê
53. PÊÉªÉ´á´á´ OÒ Sá´ÊÉªá´á´ AÊá´á´ÊÉ´á´á´Éªá´ á´
54. FÊá´á´!
55. Ká´É´á´á´á´ Zá´É´Êá´á´á´Éª Sá´Éªá´ÉªÊá´ Uá´ÉªsÊá´á´

Má´Êá´Éªá´Ê AÊá´
1. Bá´Êá´á´á´: Ná´Êá´á´á´ Ná´xá´ Gá´É´á´Êá´á´Éªá´É´s
2. SÊÉªá´á´Êá´É´á´ HÉªá´á´: Aá´á´
3. Ká´á´á´É´á´É¢á´á´á´ÊÉª
4. SÊÉªá´á´á´ Sá´Éªá´Êá´á´ É´á´ Dá´sÊÉª Ká´É´Éªá´ÊÉª (Ká´É´Iá´ÊÉª: TÊá´ MÉªÉ¢Êá´Éªá´sá´ DÉªsá´Éªá´Êá´)
5. Má´á´Éª á´á´ Wá´á´á´sÊÉª É´Éª Ká´Éª SÊÉªÉ´á´sá´Éª!
6. Tá´Êá´á´ Tá´á´á´á´á´
7. Sá´É´É¢á´á´á´ Bá´sá´Êá´
8. Bá´É´-á´á´
9. Má´á´á´á´á´ Bá´x
10. Má´sÊÉªÊá´É¢Êá´á´
11. Má´á´á´É´-á´Éª!
12. BÊá´á´á´ & Sá´á´Ê
13. FÊá´á´á´¢ÉªÉ´É¢
14. Iá´á´Éªá´á´á´sá´É´ (Iá´á´Éª Tá´á´sá´É´)
15. Asá´ É´á´ Yá´Éªá´ÊÉª!
16. Ká´Êá´á´á´á´Éª TÊá´ AÉ´Éªá´á´á´Éªá´É´
17. Tá´á´Êá´ Má´á´ÉªÉ´ Gá´á´á´á´É´ Ká´É´á´á´á´Êá´: Tá´á´
18. Tá´É´á´á´á´ Tá´É´É¢á´
19. Bá´á´Éª (2018)
20. Ká´ÉªÊÉªá´á´ â Má´sá´á´
21. DÊá´É¢á´É´ Bá´ÊÊ

Má´sÉªá´
1. SÊÉªÉ¢á´á´sá´ á´¡á´ KÉªá´Éª É´á´ Usá´
2. HÉªÊÉªá´á´! Eá´á´Êá´É´Éªá´á´
3. Zá´á´ÊÉªá´Êá´É´á´ Sá´É¢á´
4. K-OÉ´!
5. Ná´á´á´á´á´ Cá´É´á´á´ÊÉªÊá´
6. Sá´ Rá´ Ná´ Wá´ Tá´
7. Bá´á´á´
8. Bá´É´G DÊá´á´á´!
9. TÊá´ ÉªDOLM@STER
10. Lá´á´ á´ LÉªá´ á´! Sá´Êá´á´Ê Iá´á´Ê PÊá´á´á´á´á´
11. Dá´á´Êá´Éªá´ Má´á´á´Ê CÉªá´Ê
12. Ná´É´á´
13. IDOLÉªSH7
14. Sá´á´á´á´Éªá´ÊÉª É´á´ Aá´á´ÊÊá´É´
15. KÉªÉ´ÉªÊá´ É´á´ Cá´Êá´á´
16. Má´É¢Éªá´-KÊá´É´! Rá´É´á´Éªssá´É´á´á´
17. PÉªá´É´á´ É´á´ Má´ÊÉª
18. Fá´ÊÊ Má´á´É´ á´¡á´ Sá´É¢á´sÊÉªá´á´
19. WÊÉªá´á´ AÊÊá´á´
20. Wá´á´á´ Uá´, GÉªÊÊs!
21. Tá´ÊÉª Tá´ÊÉª
22. GÊá´á´ Éªá´á´á´Éªá´É´
23. Má´á´Êá´ss Sá´ÊÉªá´s
24. á´Ò: A Tá´Êá´ á´Ò Má´á´á´ÊÉªá´s.
25. Ká´á´Êá´á´ Oá´á´Éª
26. LÉªá´¢ á´á´ Aá´Éª Tá´ÊÉª
27. Yá´á´á´á´ Tsá´É¢á´Êá´ Lá´ É´á´ Uá´á´
28. AÉªá´á´á´sá´!
29. Sá´á´Êá´Êá´
30. Fá´á´á´á´
31. SÊá´Êá´á´Ê
32. AKB0048
33. SÊá´á´¡ BÊ Rá´á´á´!!
34. SÊá´á´Êá´É¢á´á´Ê 

Há´Êá´á´
1. Dá´á´á´ á´ LÉªá´ á´
2.Má´Êá´ CÊÉªá´Éª!
3. Má´É´sá´á´Ê Má´sá´á´á´ Ná´ IÊá´ NÉªá´ÊÉªá´á´á´
4. Tá´Éªá´á´á´á´á´ Gá´á´á´á´É´ 35 SÊá´á´á´á´Éª
5. TÊá´ Wá´ÊÊá´ Gá´á´ OÉ´ÊÊ KÉ´á´á´¡s
6. Dá´É´á´á´ KÊá´á´sÊÉª
7. Ká´Êá´ Wá´ Zá´á´ÊÉªá´ Dá´sá´á´á´
8. Má´É´á´É¢á´á´á´ÊÉª Sá´ÊÉªá´s
9. OÊá´Iá´á´
10. Zá´Êá´ É´á´ Tsá´á´á´Éªá´á´
11. Má´Êá´á´ Sá´É´sá´Éª Ná´É¢Éªá´á´!
12. Isá´á´á´Éª É´á´ Sá´Éªá´ÉªsÊÉª Má´É´á´É¢á´á´á´ÊÉª
13. Má´É´É¢á´á´á´-sá´É´ á´á´ AssÉªsá´á´É´á´-sá´É´ á´á´ TÊá´ AÉ´Éªá´á´á´Éªá´É´
14. Iá´ÊÉªÉ¢á´ 100%
15. Há´ÉªÊá´Êá´! NÊá´Êá´á´á´-sá´É´
16. Sá´¡á´Êá´ AÊá´ OÉ´ÊÉªÉ´á´
17. Cá´á´á´Éªá´É´á´!
18. GÊÉªsá´Éªá´ Sá´ÊÉªá´s
19. FÊá´á´á´¢ÉªÉ´É¢
20. MM!
21. Ná´á´Cá´á´á´
22. AÊ, MÊ Gá´á´á´á´ss
23. Lá´á´ á´ HÉªÉ´á´
24. HÉªÉ¢Ê Sá´Êá´á´Ê á´Ò á´Êá´ Dá´á´á´
25. KÉªss x sÉªs
26. Há´É´á´á´Éª Oá´á´Éª á´á´ Wá´Êá´á´¡á´É´á´Éª Ná´á´á´.
27. SÊÉªÉ´á´á´Éª Má´á´á´ É´á´ Tá´sá´á´á´á´É´á´
28. Sá´á´ÉªÊá´Éª
29. Gá´á´á´sá´É´ Tá´sÊÉª Asá´á´ÊÉªsá´
30. Sá´á´É´á´Éª Há´Êá´ÉªÉ´á´ É´á´ Sá´á´á´á´á´á´á´á´á´
31. Má´sá´á´á´É´á´-á´á´É´ É´á´ Rá´á´ á´É´É¢á´
32. OÊá´ É´á´ Ká´É´á´á´á´ á´á´ Osá´É´á´É´á´á´Éªá´Éª É¢á´ SÊá´Êá´Êá´ Sá´É¢ÉªÊá´
33. SÊá´ÒÒÊá´!
34. NÊá´É´ Ká´Éª!
35. Oá´á´ÊÊá´á´á´ Cá´á´á´á´É´Ê
36. Má´á´á´É´ É´á´ Oá´ á´á´ Vá´É´á´á´Éªs
37. Má´á´Éª á´á´ Wá´á´á´sÊÉª É´Éª Ká´Éª SÊÉªÉ´á´sá´Éª!
38. PÊÉªÉ´á´á´ss Lá´á´ á´Ê!
29. Sá´Éªá´á´É´ Tsá´á´á´Éª É´á´ Wá´ÊÊá´ BÊá´á´á´
40. Rá´á´á´á´á´á´á´á´ É´á´ SÊÉªÉ´ÊÊá´á´á´sÊá´!?
41. HÉªÉ¢Ê Sá´Êá´á´Ê DxD
42. NÉªsá´á´á´Éª
43. Bá´á´á´ á´¡á´ Tá´á´á´á´á´á´ÊÉª É¢á´ Sá´á´á´É´á´Éª
44. Rá´sá´ÊÉªá´ á´á´ Vá´á´á´ÉªÊá´
45. IS: IÉ´ÒÉªÉ´Éªá´á´ Sá´Êá´á´á´s
46. Tá´ LOVE-Rá´ Sá´ÊÉªá´s
47. Sá´Êá´ É´á´ Oá´á´sÊÉªá´á´É´á´
48. TÊÉªÉ´Éªá´Ê Sá´á´ á´É´
49. Yá´á´á´á´á´-á´á´É´ á´á´ 7-É´ÉªÉ´ É´á´ Má´á´á´
50. Iá´ÊÉªÊá´É´ UsÊÉªÊá´ É´á´ Dá´Éªá´á´á´á´

Rá´á´ á´Êsá´ Há´Êá´á´
1. Há´É´á´sá´á´á´Êá´ Sá´ÉªsÊá´á´É´á´É´
2. Uá´á´ É´á´âPÊÉªÉ´á´á´-sá´á´á´âª
3. Há´á´á´á´á´á´Éª
4. Yá´á´á´á´á´ Ná´á´á´sÊÉªá´á´ SÊÉªá´ÊÉª Há´É´É¢á´
5. Aá´á´á´sá´á´Éª É´á´ Yá´É´á´
6. Fá´sÊÉªÉ¢Éª Yá´á´É¢Éª (MÊsá´á´ÊÉªá´á´s PÊá´Ê)
7. DÉªá´Êá´ÊÉªá´ Lá´á´ á´Ês
8. AÊá´á´É´á´ Fá´á´ÉªÉ¢ÊÉªá´
9. BÊá´á´Êá´Ês Cá´É´ÒÊÉªá´á´
10. Dá´É´á´á´ á´¡Éªá´Ê Dá´á´ ÉªÊs
11. Oá´Êá´É´ HÉªÉ¢Ê Sá´Êá´á´Ê Há´sá´ CÊá´Ê
12. Ká´á´Éªsá´á´á´ Há´á´Éªá´á´á´á´sÊÉªá´á´
13. Aá´É´á´sÉªá´
14. Bá´É´á´á´á´Ê Sá´¡á´á´á´ Lá´á´ á´ Pá´á´Éªssá´ÊÉªá´
15. Ká´á´ÉªÉ¢á´á´Éª É´á´ Asá´ÊÉª
16. HÉªÉªÊá´ É´á´ Ká´á´á´Êá´

Rá´á´á´É´á´á´
1 CÊá´Ê & Má´ÊÉªá´
2. WÊÉªá´á´ AÊÊá´á´ 
3. CÊá´É´É´á´á´ AÒá´á´Ê Sá´á´ÊÊ
4. AÉ´É¢á´Ê Bá´á´á´s
5. IsÊá´á´á´á´É´ FÊÉªá´É´á´s.
6. SÊÉªÉ¢á´á´sá´ á´¡á´ KÉªá´Éª É´á´ Usá´
7. NÉªsá´á´á´Éª
8. Gá´Êá´á´É´ TÉªá´á´
9. Ná´É¢Éª É´á´ Asá´á´á´Êá´
10. Aá´ Há´Êá´ RÉªá´á´
11. OÊá´ Má´É´á´É¢á´á´á´ÊÉª
12. Sá´á´É´á´Éª Há´Êá´ÉªÉ´á´ Ná´ Sá´á´á´á´á´á´á´
13. Gá´á´á´á´É´ SÊá´á´á´á´ Ná´á´¢á´á´Éª-Ká´É´
14. Sá´É´á´á´Êá´á´
15. Ká´á´á´Êá´ Cá´É´É´á´á´á´
16. Aá´á´É¢á´á´Éª SS
17. Ká´á´á´á´Êá´-sá´É´ (Má´sá´á´ÉªÉ´ Dá´Òá´á´Ê Cá´á´á´É´É¢á´É´ Aá´á´Ê)
18. Há´É´á´á´Éª Oá´á´Éª á´á´ Wá´Êá´á´¡á´É´á´Éª Ná´á´á´
19. Tá´É´á´ÊÉª É´á´ Ká´ÉªÊá´á´sá´-á´á´É´
20. Ká´Éªá´Êá´á´ á´¡á´ Má´Éªá´-sá´á´á´!
21. PÊá´sá´Éªá´ Má´á´á´ÊÉªá´s
22. Tá´Êá´á´á´Êá´!
23. AÉ´á´ HÉª MÉªá´á´ Há´É´á´
24. Zá´Êá´ É´á´ Tsá´á´á´Éªá´á´
25. Bá´á´á´Êá´ á´¡á´ MÉªÉ´É´á´ Ká´á´¡á´Éªsá´á´
26. Iá´á´á´¢á´Êá´ É´á´ KÉªss
27. Yá´á´á´á´á´-á´á´É´ á´á´ 7 É´ÉªÉ´ É´á´ Má´á´á´
28. Aá´á´á´sá´á´Éª Ná´ Yá´É´á´
29. OÊá´ É´á´ Ká´É´á´á´á´ á´á´ Osá´É´á´É´á´á´Éªá´Éª É¢á´ SÊá´Êá´Êá´ Sá´É¢ÉªÊá´
30. Yá´sá´É¢á´ É´á´ Sá´Êá´
31. Sá´¡á´Êá´ AÊá´ OÉ´ÊÉªÉ´á´
32. AÉ´á´ Ná´á´sá´ á´á´ Má´á´á´á´Êá´
33. Ná´Êá´á´á´ SÊÉªá´á´á´á´á´É´ : TÊá´ Lá´sá´
34. KÉªá´Éª É´Éª Tá´á´á´á´á´
35. Gá´sÉªá´á´
36. Ná´É¢á´á´á´ Yá´á´Éª-CÊá´É´ É´á´ Sá´á´sÊÉªá´sá´ (Gá´á´Êá´Ê á´á´ÊÉª Sá´¢á´á´ÉªÊá´ Há´Êá´ÊÉª É´á´ Sá´á´sÊÉªá´sá´)
37. Ká´á´Éªsá´á´á´ Há´á´Éªá´á´á´á´sÊÉªá´á´
38. OÊá´É¢á´ÉªÊá´
39. Sá´Êá´á´á´á´á´ Sá´á´á´Éª á´¡á´ Uá´sá´á´á´sÊÉªÉª
42. Sá´Êá´ á´É´á´ x Sá´Êá´ Éªá´á´
43. Wá´Êá´ÉªÉ´É¢
44. Aá´á´É¢á´á´Éª É´á´ SÊÉªÊá´Êá´á´Éª HÉªá´á´
45. Dá´É´á´á´ OÉ´É´á´ á´á´ Sá´ÉªsÊá´É´ Oá´á´á´á´
46. Tá´sá´É¢á´Êá´ Oá´á´á´á´ x Aá´É´á´sÉªá´
47. NHK NÉª Yá´á´á´á´sá´
48. Bá´á´á´ Dá´á´á´ É¢á´ IÉ´á´Éª Má´á´ÊÉª
49. IÉ´á´ x Bá´á´á´ Sá´á´Êá´á´ Sá´Êá´ Éªá´á´
50. Ná´á´¢á´ É´á´ Ká´É´á´á´á´ X
51. Sá´á´á´Éªá´Ê A
52. Lá´á´ á´ÊÊ Cá´á´á´Êá´x
53. Sá´á´Éªá´á´á´ IÉª É´á´ Êá´
54. EÉªá´á´á´á´ Ká´Éª Má´É´á´É¢á´á´á´ÊÉª Eá´á´á´
55. Ná´É´á´
56. Rá´á´á´á´ x Já´ÊÉªá´á´
57. Há´á´ÊÉªá´Éªá´sá´ á´á´ CÊá´á´ á´Ê
58. BÊá´á´sá´á´á´ 5 Cá´É´á´Éªá´á´á´á´Ê
59. Bá´á´á´Êá´ É¢á´ Iá´á´
60. Ká´Éª Ká´á´¢á´
61. Oá´á´á´á´Éª á´á´ Ká´á´sÊÉªÉ´ÊÊá´á´
62. Ná´á´á´á´á´ Cá´É´á´á´ÊÉªÊá´ 
63. Há´á´á´Êá´ÊÉª É´á´ Má´ÊÉª á´
64. KÉªá´Éª É´á´ Ná´ Wá´?
65. Há´ÊÉª-sá´É´ á´á´ MÉªÊá´á´á´Êá´-á´á´É´
66. Rá´á´
67. CÊÉªÊá´Êá´Òá´Êá´
68. Má´sÊÉªÊá´-ÉªÊá´ SÊá´á´Êá´É´Ê
70. CÊá´ss Gá´á´á´
71. TÊá´á´ Tá´á´Ês
72. Má´sá´á´á´É´á´-á´á´É´ É´á´ Rá´á´ á´É´É¢á´ 
73. Sá´ÉªÊá´É´ 
74. Rá´LIFE
75. Há´sÊÉªá´¢á´Êá´ á´ Ká´á´á´Êá´ Há´sÊÉª
76. EÊá´á´á´É´É¢á´-Sá´É´sá´Éª
77. Ká´á´ É´á´ Ká´á´á´á´ÊÉª
78. Ná´É¢Éªá´¢á´á´á´ Há´Êá´á´á´ É´á´ HÉªá´Éªá´sá´
79. KÉªá´¢É´á´Éªá´ á´Ê
80. Gá´ÉªÊá´Ê CÊá´á´¡É´
81. OÊá´É´É¢á´
82. Tsá´á´Éª É¢á´ KÉªÊá´Éª
83. Gá´á´á´Ês
84. Sá´á´á´Êá´sá´á´ É´á´ á´á´á´ É´á´ á´á´É´á´á´á´á´
85. OÊá´ É´á´ Iá´á´á´á´á´ É¢á´ Ká´É´É´á´É´Éª Ká´á´¡á´ÉªÉª Wá´á´á´ É¢á´ Ná´Éª`, text, tescuk, cr)
					break
				case 'amv':
				client.updatePresence(from, Presence.composing) 
				if (isBanned) return reply(ind.baned())
				 if (!isRegistered) return reply(ind.noregis())
		                if (isLimit(sender)) return reply(ind.limitend(pusname))
				 reply(`sedang diproses 2+ menit, btw yang buat Xptn/ownerð¿`)
				 data = fs.readFileSync('./src/amv.js');
		                 jsonData = JSON.parse(data);
		                 randIndex = Math.floor(Math.random() * jsonData.length);
	                	 randKey = jsonData[randIndex];
	                	buffer = await getBuffer(randKey.result)
        		        client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
				case 'p':
				case 'asli':
					client.sendMessage(from, 'AMINAH Gans', text, { quoted: mek })
					break
				case 'rulestext':
                                        client.sendMessage(from, '*ðRULES BOT AMINAH ð*\n*ââââââââââââââââââââââ*\n*â*\n*â£â£Patuhi Aturan yað*\n*â*\n*ââââââââââââââââââââââ*\n*[1]DILARANG SPAMâ*\n*[2]DILARANG VC\NELPONâ*\n*[3]DILARANG MEMBANDING BOTâ*\n*[4]WAJIB SV NOMOR OWNERâ­*\n*[5]DILARANG NGATAIN BOTâ*\n*ââââââââââââââââââââ*\n*_NOTE:JANGAN LUPA DONASI DENGAN KETIK ,DONASI_*', text, { quoted: mek })
                                        break
				if (text.includes('P')){
                  client.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text, {quoted: mek});
                   }
				case 'jadian':
				if (isBanned) return reply(ind.baned())
				    if (!isRegistered) return reply(ind.noregis())
		                if (isLimit(sender)) return reply(ind.limitend(pusname))
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} â¥ï¸ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
				case 'artinama':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
				break
				case 'addsticker':

					if (!isQuotedSticker) return reply('Reply stiker nya')

					svst = body.slice(12)

					if (!svst) return reply('Nama sticker nya apa?')

					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

					delb = await client.downloadMediaMessage(boij)

					setiker.push(`${svst}`)

					fs.writeFileSync(`./add/sticker/${svst}.webp`, delb)

					fs.writeFileSync(`./add/stik.json`, JSON.stringify(setiker))

					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })

					break
					case 'stickerlist':

				case 'liststicker':

					teks = '*Sticker List :*\n\n'

					for (let awokwkwk of setiker) {

						teks += `- ${awokwkwk}\n`

					}

					teks += `\n*Total : ${setiker.length}*`

					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })

					break

				case 'addvn':

					if (!isQuotedAudio) return reply('Reply vnnya blokk!')

					svst = body.slice(7)

					if (!svst) return reply('Nama audionya apa su?')

					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

					delb = await client.downloadMediaMessage(boij)

					audionye.push(`${svst}`)

					fs.writeFileSync(`./add/audio/${svst}.mp3`, delb)

					fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))

					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })

					break

				case 'getvn':

					namastc = body.slice(7)

					buffer = fs.readFileSync(`./add/audio/${namastc}.mp3`)

					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })

					break

				case 'listvn':

				case 'vnlist':

					teks = '*List Vn:*\n\n'

					for (let awokwkwk of audionye) {

						teks += `- ${awokwkwk}\n`

					}

					teks += `\n*Total : ${audionye.length}*`

					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })

					break

				case 'addimage':

					if (!isQuotedImage) return reply('Reply imagenya blokk!')

					svst = body.slice(10)

					if (!svst) return reply('Nama imagenya apa su?')

					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

					delb = await client.downloadMediaMessage(boij)

					imagenye.push(`${svst}`)

					fs.writeFileSync(`./add/image/${svst}.jpeg`, delb)

					fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))

					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })

					break

				case 'getimage':

					namastc = body.slice(10)

					buffer = fs.readFileSync(`./add/image/${namastc}.jpeg`)

					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })

					break

				case 'imagelist':

				case 'listimage':

					teks = '*List Image :*\n\n'

					for (let awokwkwk of imagenye) {

						teks += `- ${awokwkwk}\n`

					}

					teks += `\n*Total : ${imagenye.length}*`

					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })

					break

				case 'addvideo':

					if (!isQuotedVideo) return reply('Reply videonya blokk!')

					svst = body.slice(10)

					if (!svst) return reply('Nama videonya apa su?')

					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

					delb = await client.downloadMediaMessage(boij)

					videonye.push(`${svst}`)

					fs.writeFileSync(`./add/video/${svst}.mp4`, delb)

					fs.writeFileSync('./add/video.json', JSON.stringify(videonye))

					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })

					break

				case 'getvideo':

					namastc = body.slice(10)

					buffer = fs.readFileSync(`./add/video/${namastc}.mp4`)

					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })

					break

				case 'listvideo':

				case 'videolist':

					teks = '*List Video :*\n\n'

					for (let awokwkwk of videonye) {

						teks += `- ${awokwkwk}\n`

					}

					teks += `\n*Total : ${videonye.length}*`

					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })

					break	
					/*********** PUBLIC ***********/

					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegistered) return reply(ind.noregis())

					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`ððð«ð¢ð§ð­ðð¡ ðð¢ð­ðð«ð¢ð¦ð, ððð«ð¡ðð¬ð¢ð¥ ð¦ðð§ð ð®ððð¡ ð ð«ð¨ð®ð© ð¬ðð¦ð®ð ð¨ð«ðð§ð  ðð¢ð¬ð ð¦ðð§ð ð¢ð«ð¢ð¦ ð©ðð¬ðð§`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`ððð«ð¢ð§ð­ðð¡ ðð¢ð­ðð«ð¢ð¦ð, ððð«ð¡ðð¬ð¢ð¥ ð¦ðð§ð ð®ððð¡ ð ð«ð¨ð®ð© ð¡ðð§ð²ð ððð¦ð¢ð§ ð²ðð§ð  ðð¢ð¬ð ð¦ðð§ð ð¢ð«ð¢ð¦ ð©ðð¬ðð§`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'readmore':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('*teks nya mana kak?*')
					var kls = body.slice(9)
					var has = kls.split("|")[0];
					var kas = kls.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
				client.sendMessage(from, `${has}âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ${kas}` , text, { quoted: mek })
					break
				case 'kodenuklir':
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
                                        if (!isNsfw) return reply(ind.nsfwoff())
                                        if (!isRegistered) return reply(ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					costum( kodenuklir(), text, tescuk, cr)
					break
				case 'nekopoi':
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
                                if (!isRegistered) return reply(ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.sendMessage(from, nekopoi() , text, tescuk, cr)
					break
				case 'kpop':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        randomkpop = `*PLASTIQUE:V*`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break
				case 'asupan':
				client.updatePresence(from, Presence.composing) 
				 if (!isOwner) return reply(ind.ownerb())
				 data = fs.readFileSync('./src/asupan.js');
		                 jsonData = JSON.parse(data);
                		 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                buffer = await getBuffer(randKey.result)
		                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
				case 'naruto':
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: '**UZUMAKI NARUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: '*MINATO NAMIKAZE*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: '*UZUMAKI BORUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: '*HINATA HYOUGA*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: '*SASUKE UCIHA', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: '*SAKURA*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rem':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: '*REM-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'chika':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(limits.limitend(pushname2))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'kaneki':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${apikey}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					client.sendMessage(from, ki, image, { caption: '*KANEKI-KUN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					client.sendMessage(from, nye, image, { caption: '*TOUKA-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: '*RIZE-CHAN*', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'AKIRA-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'ITORI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'kurumi':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'KURUMI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: '*I LOVE MIKUâ¡*', quoted: mek })
					await limitAdd(sender) 
					break 
										case 'antivirtex':
                    if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiVirtex) return reply('anti virtex group sudah aktif')
						_antivirtex.push(from)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif')
						_antivirtex.splice(from, 1)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`âSukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'howgay':
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                                        client.sendMessage(from, '*Si Tukang Gay Adalah:*\nwa.me/${anug}', text, { quoted: mek })
                                        break
		

					
					
					case 'kodebahasa':

		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})

                break

					case 'kodenegara':

               client.sendMessage(from, negara(prefix, sender), text, {quoted: mek})

               break

					case 'virtex':

					 if (!isOwner) return reply(mess.only.ownerB)

               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})

               break

               case 'murrotal':
               case 'murotal':

		client.sendMessage(from, murothal(prefix, sender), text, {quoted: mek})

                break

					case 'listsurah':

					if (isBanned) return reply(mess.only.benned)    

					if (!isRegistered) return reply(ind.noregis())

					client.sendMessage(from, listsurah(prefix) , text, { quoted: mek })

					break

					case 'tnc':

					if (isBanned) return reply(mess.only.benned)    

					if (!isRegistered) return reply(ind.noregis())

					client.sendMessage(from, tnc(prefix) , text, { quoted: mek })

					break
				case 'darkjokes':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*TOLONGG GELAP BANGET KA*')
				break	
				case 'antilinkgrup':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*[SUKSES]MENGAKTIFKAN ANTI LINK DI GROUP*')
						client.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*[SUKSES]MEMATIKAN ANTI LINK DI GROUP*')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break		
				case 'family100':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${apivhtear}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*â¸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi... cepet kak!_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi... cepetan woe!_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi... cepet!_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakin':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${VhtearKey}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soalImg)
					tebak = `â¸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					client.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, ngebuff, image, { caption: '_Tebak kak gk bisa jawab ke kick:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
				case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isRegistered) return reply(ind.noregis())
                                        nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break
				case 'bokep':
				client.updatePresence(from, Presence.composing) 
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('*JANGAN SANGEAN YA!*')
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'asupan':
					if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                anu = await fetchJson(`http://itsmeikygans.my.id/asupan?apikey=${apikey}`)
                asup = await getBuffer(anu.result)
                client.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'Asupannya Tuan:v'})
                await limitAdd(sender) 
                break
				case 'kalkulator':
					if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
				     if (args.length < 1) return reply(`[â] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    client.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
					break
				case 'memeindo':
				if (isBanned) return reply(ind.baned())
                                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*MEME*'})
					await limitAdd(sender)
					break
				case 'caklontong':

                if (isBanned) return reply(mess.only.benned)    

				if (!isPublic) return reply(mess.only.publikG)
            if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=0JOMBLOHIGHQUALITY0`, {method: 'get'})

					setTimeout( () => {

					client.sendMessage(from, '*â¸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods

					}, 30000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_10 Detik lagiâ¦_', text) // ur cods

					}, 20000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_20 Detik lagi_â¦', text) // ur cods

					}, 10000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_30 Detik lagi_â¦', text) // ur cods

					}, 1000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods

					}, 0) // 1000 = 1s,

					break

				case 'family100':

				if (isBanned) return reply(mess.only.benned)    

				if (!isPublic) return reply(mess.only.publikG)
            if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=0JOMBLOHIGHQUALITY0`, {method: 'get'})

					setTimeout( () => {

					client.sendMessage(from, '*â¸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods

					}, 30000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_10 Detik lagiâ¦_', text) // ur cods

					}, 20000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_20 Detik lagi_â¦', text) // ur cods

					}, 10000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, '_30 Detik lagi_â¦', text) // ur cods

					}, 1000) // 1000 = 1s,

					setTimeout( () => {

					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods

					}, 0) // 1000 = 1s,

					break
				case 'emoji':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(ind.baned())
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=%F0%9F%98%82&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'tiktok':
				  if (!isPublic) return reply(mess.only.publikG)
				anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args[0]}`, {method : 'get' })
				if (anu.error) return reply(anu.error)
					teks = `*From* : ${anu.result.from}\n*Judul* : ${anu.result.title}\n*Upload* : ${anu.result.uploaded}`
					thumb = await getBuffer(anu.result.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'profile':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(ind.baned())
    				if (!isRegistered) return reply(ind.noregis())
				reply(ind.wait())
    				try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `â­âã *PROFILE ANDA* ã\nââ¢ *Name:* ${pushname}\nââ¢ *User Terdaftar:* â\nââ¢ *Link:* wa.me/${sender.split("@")[0]}\nâ°âââââââââââââââââââââ`
					prof = await getBuffer(anu.result.profil)
		 			client.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
				case 'nulis2':
				case 'tulis2':
				  if (!isPublic) return reply(mess.only.publikG)
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 Ramlan baik hati')
				laysha = body.slice(8)
				reply('Ã£â¬ÅÃ¢âÃ£â¬WAIT BRO GUE NULIS DUMLU YAKAN')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				break
				case 'nulis':
				case 'tulis':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
                                if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('Yang mau di tulis apa kak?')
					tulis = body.slice(6)
					reply(ind.wait())
					buffer4 = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=${VhtearKey}`, {method: 'get'})
					client.sendMessage(from, buffer4, image, {quoted: mek, caption: 'Awas Ketahuan guru'})
					break
					
					case 'addprem':

				if (!isOwner) return reply(ind.ownerb())

				expired = "30d"

				if (args.length < 1 ) return reply(' tag member')

				mente = `${args[0].replace('@','')}@s.whatsapp.net`

				const pnom = {id: mente , expired: Date.now() + toMs(expired) }

				prem.push(pnom) 

				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))

				reply(ind.premadd(args[0]))

				break

				

				case 'delprem':

				if (!isOwner) return reply(ind.ownerb())

				if (args.length < 1 ) return reply(' tag member')

				mente = `${args[0].replace('@','')}@s.whatsapp.net`

 			   for( var i = 0; i < arr.length; i++){ 

 		       if ( arr[i] === mente) { 

    		      	  arr.splice(i, 1); 

      		   	  i--; 

      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))

       			 }

 			    }

				reply(ind.dellprem(args[0]))

				break 

				case 'premlist':

	            case 'listprem':

	                if (!isRegistered) return reply( ind.noregis())

	                let listPremi = 'ã *PREMIUM USER LIST* ã\n\n'

	                let nomorList = 0

	                const deret = getAllPremiumUser()

	                const arrayPremi = []

	                for (let i = 0; i < deret.length; i++) {

	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())

	                    arrayPremi.push(getAllPremiumUser()[i])

	                    nomorList++

	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\nâ¸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`

	                }

	                await reply(listPremi)

	            break
				case 'jadwaltv':
						if (isBanned) return reply(ind.baned())
			        	       client.updatePresence(from, Presence.composing) 
		        	               data = await fetchJson(`https://mhankbarbars.herokuapp.com/api/jdtv?ch=${body.slice(10)}&apiKey=${apiKey}`)
					       if (data.error) return reply(data.error)
					       reply(data.result)
					       break
				case 'assalamualaikum':
		               			client.reply(from, `Waalaikumsalam ${pushname2}:)`)
		                		break
				case 'lirik':
				if (isBanned) return reply(ind.baned())
		                if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
			                reply(ind.wait())
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('*Lirik dari lagu '+teks+' adalah* :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break
		   		 case 'wa.me':
				  case 'wame':
  					client.updatePresence(from, Presence.composing) 
				        options = {
			                text: `ã *SELF WHATSAPP* ã\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
			                contextInfo: { mentionedJid: [sender] }
				        }
                case 'chord':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=BotWeA`)
                client.sendMessage(from, anu.result, text, {quoted:mek})
                break
				case 'leaderboard':
				case 'lbAMINAH ':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL BOT* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG BOT* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\nââ± *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\nâ£â± *Uang*: _Rp${uang[i].uang}_\nââ± *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
				case 'mutual':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Parter AMINAH ')
                await reply(`wa.me/${anug}`)
                await reply( `Partner Ketemuð: ð¿\n*${prefix}next* â New partner AMINAH `)
            break
		case 'report':
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('62895355566000@s.whatsapp.net', options, text, {quoted: mek})
                    reply('*ðDEAR USERð*\n*ââââââââââââââââââââ*\nMasalah telah di laporkan ke owner BOT AMINAH , laporan palsu/mainÂ² tidak akan ditanggapi.\n*ââââââââââââââââââââ*')
                    break
            case 'next':
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Parter AMINAH ')
                await reply(`wa.me/${anug}`)
                await reply( `Partner Ketemuð: ð¿\n*${prefix}next* â  new partner AMINAH `)
            break
				case 'transfer':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895355566000@s.whatsapp.net', fee)
                reply(`*ã SUKSES CUY ã*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}\nNote:Jangan Lupa Donasi:)`)
                break
				case 'bank':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				const koinPerlimit = 30
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*ã PEMBAYARAN SUKES ã*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
		case 'memeindo':  
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*MEME*'})
					await limitAdd(sender)
					break 
		case 'waifu':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(mess.only.group)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=${VthearApi}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: '*DARLING OHAYOU!*', quoted: mek })
					break
	
                case 'fakereplay':
                   client.fakeReply("ange mas", "mending lari", "0816-5466-368", MessageType.text)
                   break
                   case 'infogithub':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegistered) return reply(ind.noregis())
                if (!isPublic) return reply(mess.only.publikG)
                   teks = body.slice(5)
                   anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/githubprofile?user=${teks}&apikey=RamlanID)`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   bufferjjj = await getBuffer(anu.avatar_url)
                   hasil = ` *username* \n ${anu.followers} *following* \n${anu.following} *bio* \n${anu.bio} *public_repos* \n${anu.public_repos} *created_at* \n${anu.created_at} *updated_at* \n${anu.updated_at}`
                   client.sendMessage(from, bufferjjj, image, {quoted: mek, caption: hasil})
                   break
		case 'infogc':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
	     	                   client.updatePresence(from, Presence.composing)
                	       	   ppUrl = await client.getProfilePicture(from)
	                	   reply(ind.wait())
	      		           buffer = await getBuffer(ppUrl)
			           client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
	                	   break
                case 'moddroid':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'apiteks':
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)

				if (!isPublic) return reply(mess.only.publikG)
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/fire_maker?text=${love}&apikey=iwjdh72726338bsbwg`, {method: 'get'})
					client.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					break
			case 'happymod':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
            case 'bitly':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
                case 'nangis':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'randomhentai':
                                        gatauda = body.slice(6)
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
		                        if (!isNsfw) return reply(ind.nsfwoff())
                                        if (!isRegistered) return reply(ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroupAdmins) return reply(ind.admin())
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
		case 'pornhub':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(9)
					var alan2 = gh.split("&")[0];
					var alan3 = gh.split("&")[1];
					if (args.length < 1) return reply(ind.wrongf())
					reply(ind.wait())
					buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${alan2}&text2=${alan3}&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'hentai':
				    try {
				    if (isBanned) return reply(ind.baned())
				    if (!isRegistered) return reply(ind.noregis())
				   if (!isGroup) return reply(ind.groupo())
                                      if (!isGroupAdmins) return reply(ind.admin())
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://ferdiz-api.herokuapp.com/api/anime/hentai`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hati hati ketawan bisa ke ben '})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
		case 'shota':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isGroup) return reply(ind.groupo())
                        if (!isNsfw) return reply(ind.nsfwoff())
	    		     res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzKey}`)
 		             buffer = await getBuffer(res.image)
			     client.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
			     await limitAdd(sender)
			     break
		case 'loli':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
			gatauda = body.slice(6)
			reply(ind.wait())
			anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VhtearKey}`, {method: 'get'})
			buffer = await getBuffer(anu.result.result)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: '*LOLINYA NGAB*'})
			await limitAdd(sender)
			break
		case 'nekonime':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                if (!isGroup) return reply(ind.groupo())
             		        if (!isNsfw) return reply(ind.nsfwoff())
		   		      gatauda = body.slice(10)
				      reply(ind.wait())
			   	      anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${VhtearKey}`, {method: 'get'})
				      buffer = await getBuffer(anu.result.result)
			    	      client.sendMessage(from, buffer, image, {quoted: mek, caption: '*KUCINGNYA NI OM:V*'})
				      await limitAdd(sender)
				      break
                case 'blowjob':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				   if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
				        reply('[â] Awas Ketawan Owner Bisa Ke block/kick')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'getsticker':

				case 'gets':

					namastc = body.slice(12)

					result = fs.readFileSync(`./add/sticker/${namastc}.webp`)

					client.sendMessage(from, result, sticker, {quoted :mek})

					break
					case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('â *ERROR* â')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*AWAS ADA FBI*'})
					})
					case 'cium':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		      case 'ttp':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
		    	        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*PARAMETER SALAHâ*\nContoh= ${prefix}ttp AMINAH  chan')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
						})
                      case 'qrcode':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '*PARAMETERSALAHâ*\nContoh= ${prefix}qrcode AMINAH  bot', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'dadu':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			client.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
		case 'fake':
			costum('kamu gay', '0@s.whatsapp.net', `njir`, {quoted: mek})
			break
		case 'delete':
		case 'del':
		case 'd':
			if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
		case 'wibu':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
			data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VhtearKey}`)
			buffer = await getBuffer(data.result.foto)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: '*IH WIBU*'})
			await limitAdd(sender)
			break
                case 'husbu':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*HUSBU FROM AMINAH  BOT*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR* â')
					}
					await limitAdd(sender)
					break
		case 'randomhentong':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(15)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/randomhentai?apikey=${VhtearKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'ranime':
		case 'randomanime':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek ,caption:'*RANIMENYA BANG*'})
					await limitAdd(sender)
					break
	                        case 'gacha cewek':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   var cewe =['ullzang girl','cewe cantik','hijab cantik','korean girl','cewe sexy']
                   anu = await fetchJson('https://api.fdci.se/rep.php?gambar= '+ cewe,)
                   var n = JSON.parse(JSON.stringify(anu));
                   var nimek =  n[Math.floor(Math.random() * n.length)];
					reply(ind.wait())
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gacha cowok':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   var cewe =['cowo ganteng', 'cogan', 'korean boy', 'chinese boy', 'japan boy']
                   anu = await fetchJson('https://api.fdci.se/rep.php?gambar= '+ cewe,)
                   var n = JSON.parse(JSON.stringify(anu));
                   var nimek =  n[Math.floor(Math.random() * n.length)];
					reply(ind.wait())
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kickbeban':
			if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                                if (!isGroup) return reply(ind.groupo())
                                if (!isGroupAdmins) return reply(ind.admin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan beban grup :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`*otw kick kita!,kasih waktu dlu yamkanð : @${mentioned[0].split('@')[0]}*`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, '*Sayonara Beban Grupðð*', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, '*2 Sabarr...ð*', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, '*3ð¿*', text) // ur cods
					}, 1000) // 1000 = 10s,
					setTimeout( () => {
					client.sendMessage(from, '*Bissmillah hedshot ð¤¾ââ*', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
					case 'kicktime':
			if (isBanned) return reply(mess.only.benned)    
				
					if (!isGroup) return reply(mess.only.group)
					
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_selamat tinggal Titip gorengan Ya jangan Balik Lagi...._', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_ucapkan selamat tinggal mmwaah muwwah..._', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_ciiee calon bakalan dikick..._', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_siap siap ya bot Kick nih_', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
		case 'kpop':
		if (isBanned) return reply(ind.baned())
              if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
              anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${tobzapi}`, {method: 'get'})
              buffte = await getBuffer(anu.result)
              client.sendMessage(from, buffte, image, {quoted: mek, caption: '*Ih gay*'})
              break 
	       case 'hartatahta':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Contoh : ${prefix}hartatahta botwea')
				har = body.slice(12)
					reply('*[ð]Error kak ............*')
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${har}&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'joox':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isGroup) return reply(ind.groupo())
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Berhasil Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}\n*Note: LAGU BENTAR LAGI DIKIRIM JDI JAN SPAM*`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                reply('[â³] Orang Sabar Disayang Dajjal')
		client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
                case 'play':
              
                
                if (!isPremium) return reply(mess.only.premium)
                  if (!isPublic) return reply(mess.only.publikG)
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${VhtearKey}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*ãðãLagu Ditemukan*\nâ¸ Judul : ${anu.result.title}\nâ¸ Durasi : ${anu.result.duration}\nâ¸ Size : ${anu.result.size}\n\n*[WAIT] Sabar Ya kak Sekitar 1 Menit*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break			
				case 'quotesanime':
				    try {
					if (!isRegistered) return reply(ind.noregis())
					if (!isPublic) return reply(mess.only.publikG)
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomquotes`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hug'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
					}
					break
					case 'waifu':
					  if (!isPublic) return reply(mess.only.publikG)
			if (isBanned) return reply(ind.baned())
                        if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        waifu = `*${anu.desc}`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
                                        break
				case 'limit':
				  if (!isPublic) return reply(mess.only.publikG)
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
                 case 'avengers':
                   if (!isPublic) return reply(mess.only.publikG)
                 if (!isRegistered) return reply(ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					if (!q.includes('|')) return  reply(ind.wrongf())
                   const aruga1 = q.substring(0, q.indexOf('|') - 0)
                    const aruga2 = q.substring(q.lastIndexOf('|') + 1)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=${aruga1}&text2=${aruga2}`)
						client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'wolfmetal':
					  if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*teksnya mana kak?*')
					wometal = body.slice(10)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'pubg':
					  if (!isPublic) return reply(mess.only.publikG)
                			if (!isRegistered) return reply(ind.noregis())
		                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(5)
					var tels5 = gh.split("|")[0];
					var tels6 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${tels5}&text2=${tels6}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case '8bit':
					  if (!isPublic) return reply(mess.only.publikG)
	        	        	if (!isRegistered) return reply(ind.noregis())
        	        	 if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(5)
					var tels8 = gh.split("|")[0];
					var tels7 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${tels8}&text2=${tels7}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'goldbutton':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
	                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					gol = body.slice(12)
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/gplaybutton?text=${gol}&apikey=apivinz`, {method: 'get'})
					gools = await getBuffer(anu.result)
					client.sendMessage(from, gools, image, {quoted: mek})
					break
					case 'halloweentext':
if (!isPublic) return reply(mess.only.publikG)

				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    client.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
					case 'summer':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sandwrite':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'metaldark':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'dropwater':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'grenneon':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'neontext':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
						client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'toxic':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sumery':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'blood':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'firework':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					arugazzz = body.slice(10)
					reply(ind.wait())
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					        /*********** GROUP LIMIT ***********/

        if (isGroup) {

					try {

						const getmemex = groupMembers.length	

					    if (getmemex <= memberlimit) {

						reply(`maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)

						setTimeout( () => {

 	                           client.groupLeave(from) 

 					   	}, 5000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("1detik")

							}, 4000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("2detik")

							}, 3000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("3detik")

							}, 2000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("4detik")

							}, 1000)

								setTimeout( () => {

								client.updatePresence(from, Presence.composing)

								reply("5detik")

							}, 0)

					    }

		       } catch (err) { console.error(err)  }

 	       }
					case 'notif':
					  if (!isRegistered) return reply(ind.noregis())
if (!isGroupAdmins) return reply(mess.only.admin)
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await client.sendMessage(from, options, text)
break
					/*********** ABOUT ***********/

					case 'info':

				if (isBanned) return reply(mess.only.benned)    

				if (!isRegistered) return reply(ind.noregis())

					me = client.user

					uptime = process.uptime()

					teks = `*Nama bot* : ${me.name}\n*Author* : *AHMAD PRASETYO*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Public:* ON\n*Total User Premium*: ${premium.length}\n*Total Chat* : ${totalchat.length}\n*Instagram* : *ahmad_prasetyo7*\n*Github* : *https://github.com/ahmad-swat*\n*Youtube* : *Ahmad Prasetyo Official*`

					buffer = await getBuffer(me.imgUrl)

					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})

					break

					case 'lava':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					reply('[â] Menunya Rusak')
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
if (budy.includes(`Iri`)) {
const iri = fs.readFileSync('./assets/iri');
client.sendMessage(from, iri, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
		case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
		case 'oyasumi':
const oyasumi = fs.readFileSync('./assets/oyasumi');
client.sendMessage(from, oyasumi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
if (budy.includes(`Bot`)) {
const bot = fs.readFileSync('./assets/bot');
client.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
		case 'bot':
const bot = fs.readFileSync('./assets/bot');
client.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'yamete':
const yamete = fs.readFileSync('./assets/yamete');
client.sendMessage(from, yamete, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
                case '1cak':
				    try {
			    	            if (!isRegistered) return reply(ind.noregis())
if (!isPublic) return reply(mess.only.publikG)
				            if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
                case 'quotes':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break		
					case 'infonomor':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `â â¥ internasional : ${data.international}\nâ â¥ nomor : ${data.nomor}\nâ â¥ operator : ${data.op}\nâ â¥ Note:Jangan Lupa Donasi:D`
                reply(hasil)
                await limitAdd(sender)
					break 
                case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
  					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'beritahoax':
if (!isPublic) return reply(mess.only.publikG)
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih beb profil barunya')
					break 
					case 'brainly':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = 'âââââââââââââ\n'
					for (let Y of res.data) {
						teks += `\n*ã _BRAINLY_ ã*\n\n*â¸ Pertanyaan:* ${Y.pertanyaan}\n\n*â¸ Jawaban:* ${Y.jawaban[0].text}\nâââââââââââââ\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*ã BC GROUP ã*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*ã BC GROUP AMINAH  ã*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}\nNote:Jangan Lupa Donasi:D`)
						}
						reply('Sukses broadcast group')
					}
					break 
	      				case 'pinterest':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST AMINAH  BOT*`})
					await limitAdd(sender)
					break 
					case 'resepmasakan':
if (!isPublic) return reply(mess.only.publikG)
					if (!isRegistered) return reply(ind.noregis())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
                   case 'igstalk':
                     	if (!isPremium) return reply(mess.only.premium)
if (!isPublic) return reply(mess.only.publikG)
   				if (!isRegistered) return reply(ind.noregis())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://ferdiz-api.herokuapp.com/api/stalkig/user/name=${body.slice(9)}`, {method: 'get'})
					buffer = await getBuffer(data.img)
					reply(ind.wait())
					hasil = `*username* : ${data.username}\n*Fullname* : ${data.fullname}\n*pengikut* : ${data.followers}\n*Mengikuti* : ${data.following}\n*POSTS* : ${data.posts}\n*bio* :\n ${data.bio}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
		                        await limitAdd(sender) 
		                        break
                    case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*ð* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
					case 'grouplist':
					case 'listgroup':
					if (!isRegistered) return reply(ind.noregis())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list GROUP BOT AMINAH  :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
				case 'daftar':
				case 'register':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('*Umur harus berupa angka!*')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 50) return reply(`*UMUR KAMU TERLALU TUA UNTUK MENJADI TEMAN AMINAH *`)
                if (umurUser < 10) return reply(`*UMUR KAMU TERLALU MUDA UNTUK MRNJADI TEMAN AMINAH *`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser,  serialUser, time, sender))
                    reply('Terima Kasih Sudah Daftar')
		    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
		    reply('Terima Kasih Sudah Daftar')
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'mining':
            	  if (!isPublic) return reply(mess.only.publikG)
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 99999999999999999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena kamu owner bot AMINAH  ini ${one}Xp untuk kamuð`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'bisakah':
				  if (!isPublic) return reply(mess.only.publikG)
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				  if (!isPublic) return reply(mess.only.publikG)
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
             if (!isPublic) return reply(mess.only.publikG)
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				const katailham = [
				'lu bacod anying\nKatailham'
				]
				case 'seberapagay':
				  if (!isPublic) return reply(mess.only.publikG)
		                if (!isRegistered) return reply(ind.noregis())
		                if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = body.slice(1)
		     		        anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
	   		        	hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${res.data.persen}%\nAlert!!! : ${res.data.desc}`
		         	        reply(hasil)
				        await limitAdd(sender)
					break
				case 'hobby':
		                if (!isRegistered) return reply(ind.noregis())
		                if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi',`Jual Cewe`,`Sholat Bercandaan`,'Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nobadword':

                    if (!isGroup) return reply(ind.groupo())

                if (!isGroupAdmins) return reply(ind.admin())

                if (args.length < 1) return reply('enable/disable')

                if (args[0] === 'enable') {

                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')

                 	   badword.push(from)

                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))

                  	   reply(`badword is enable`)

              	  } else if (args[0] === 'disable') {

                  	  badword.splice(from, 1)

                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))

                 	    reply(`badword is disable`)

             	   } else {

                 	   reply(ind.satukos())

                	}

                    break
case 'public':

					if (isBanned) return reply(mess.only.benned)    

							if (!isRegistered) return reply(ind.noregis())

					if (!isGroup) return reply(mess.only.group)

					if (!isGroupAdmins) return reply(mess.only.admin)

					if (args.length < 1) return reply('Pilih enable atau disable!')

					if (args[0] === 'aktif') {

						if (isPublic) return reply('Sudah Aktif')

						publik.push(from)

						fs.writeFileSync('./database/json/public.json', JSON.stringify(publik))

						reply(`Sukses Silahkan Ketik ${prefix}menu Untuk Fitur Bot`)

					} else if (args[0] === 'nonaktif') {

						publik.splice(from, 1)

						fs.writeFileSync('./database/json/public.json', JSON.stringify(publik))

						reply(`Sukses Sekarang Member Tidak Bisa Menggunakan Bot`)

					} else {

						reply('Pilih aktif / nonaktif')

					}

					break

				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
          case 'ping':
          		if (!isRegistered) return reply(ind.noregis())
           		 await client.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
               case 'help': 
				case 'menu':
				    if (!isPublic) return reply(mess.only.publikG)
            if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)

				    const uangku = checkATMuser(sender)

                 client.sendMessage(from, ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, time), text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": "ð§ðð¥ð©ðð¥ðððððð¦ð", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer(`https://f.top4top.io/p_1825v0sij0.jpeg`)} } }})
					break

					break
                case 'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `ââââ *LEVEL AKUN* âââ\nâ£â± *Nama* : ${pushname}\nâ£â± Nomor : wa.me/${sender.split("@")[0]}\nâ£â± User XP :  ${userXp}/${requiredXp}\nâ£â± User Level : ${userLevel}\nâââââââââââââ`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *AMINAH*\n*AUTHOR* : AMINAH\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*BOT AKTIF SELAMA* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = 'ððð¢ðð ððð¦ð§ :\n'
					for (let block of blocked) {
						teks += `â£â¢ @${block.split('@')[0]}\n`
					}
					teks += `ð§ð¼ðð®ð¹ : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
                  	if (!isPremium) return reply(mess.only.premium)
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                case 'quotemaker':
                  	if (!ispremium) return reply(mess.only.premium)
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
                    case 'truth':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "ð¦ð¨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\nHarusDilakuinDanBerjanji\n\n'+ der })
					await limitAdd(sender)
					break				
				case 'ssweb':
				  if (!isPublic) return reply(mess.only.publikG)
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                     case 'ytmp4':
                       
                if (!ispremium) return reply(mess.only.premium)
    		if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(ind.error.Iv)
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `ã *YOUTUBE MP4 DOWNLOADER* ã\n\nâ¢ Title : *${anu.result.title}*\nâ¢ *Size:* ${anu.result.size}\nâ¢ *Link:* https://www.youtu.be/${anu.result.id}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buff = await getBuffer(anu.result.imgUrl)
					reply(ind.wait)
					buffer = await getBuffer(anu.result.UrlVideo)
					client.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek, caption: 'Nih Anjim'})
					await limitAdd(sender) 
					break 
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    reply('[â] Menunya Rusak')
		    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
					break
			    case 'fototiktok':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
					break
			    case 'map':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('ð¸ð¶ð¿ð¶ðº ð³ð¼ðð¼ ð±ð²ð»ð´ð®ð» ð°ð²ð½ðð¶ð¼ð» ${prefix}ð¼ð°ð¿')
					}
					await limitAdd(sender)
					break
				case 'stiker': 
				case 'sticker':
				case 's':
				case 'stickergif':
				case 'gif':
				  if (!isPublic) return reply(mess.only.publikG)
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								reply('*Here You Sticker~*')
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
				
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`Ganti Prefix ${prefix} SUCCESS!`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`Mengubah Peraturan Member Menjadi ${memberlimit} SUCCESS!`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return client.sendMessage(from, 'ððð²??ð»ð®ðºð² ðºð®ð»ð® ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[ðð¥ð¥ð¢ð¥] ð¸ð²ðºðð»ð´ð¸ð¶ð»ð®ð» ððð²ð¿ð»ð®ðºð² ðð¶ð±ð®ð¸ ðð®ð¹ð¶ð±')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'ownergrup':
				  case 'ownergroup':
			               client.updatePresence(from, Presence.composing) 
			               options = {
			               text: `*Owner di Group ini adalah : @${from.split("-")[0]} Tadaaa*`,
			               contextInfo: { mentionedJid: [from] }
			               }
			               client.sendMessage(from, options, text, { quoted: mek } )
			     	       break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` â® *TAG ALL AMINAH * â¯\nâ£â¥ @${mem.jid.split('@')[0]}\nâ`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*perintah diterima* , ðºð²ðºð¯ðð¸ð® block ${body.slice(9)}@c.us`, text)
					break
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => client.groupLeave(groupId))
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `â® *BROADCAST AMINAH * â¯\n\n${body.slice(4)}`})
						}
						reply('ð¨ðªðððð¨ð¨ ðð§ð¤ððððð¨ð© ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*ã BROADCAST BOT ã*\n\n${body.slice(4)}`)
						}
						reply('ð¨ðªðððð¨ð¨ ðð§ð¤ððððð¨ð© ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('*SUKSES MENGGANTI PP GRUP')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan , Mungkin Abis left di grup')
					}
					break
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*â`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*â`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Tuh kontak owner aku:), jangan spam atau ku block kamuâ','save nomornya jan lupað',MessageType.text, { quoted: mek} )
                  tod = await getBuffer(`https://f.top4top.io/p_1825v0sij0.jpeg`)
                 client.sendMessage(from, tod, image, { quoted: mek, caption: '*Halo Sobat! Saya Ownernya Kalau Mau Tanya Tanya Chat Aja Ya Sob!, Salam kenal ð¤*'})
                 break
					break    
           case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ð§ð®ð´ ðð®ð¿ð´ð²ð ðð®ð»ð´ ð¶ð»ð´ð¶ð» ð±ð¶ ðð²ð»ð±ð®ð»ð´!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*YAH GK JDI ADMIN LAGI MAKANYA JADI ADMIN JANGAN NAKAL*ð¤£ð :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*@${mentioned[0].split('@')[0]} YAH GK JDI ADMIN LAGI:)*`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ð§ð®ð´ ??ð®??ð´ð²ð ðð®ð»ð´ ð¶ð»ð´ð¶ð» ð±ð¶ ðð²ð»ð±ð®ð»ð´!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `ð¦ð²ð¹ð®ðºð®ðð¥³ ð®ð»ð±ð® ð»ð®ð¶ð¸ ðºð²ð»ð·ð®ð±ð¶ ð®ð±ðºð¶ð» ð´ð¿ð¼ðð½ (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*SELAMAT @${mentioned[0].split('@')[0]} KAMU JADI ADMIN GRUP* ð¥³`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ð§ð®ð´ ðð®ð¿ð´ð²ð ??ð®ð»ð´ ð¶ð»ð´ð¶ð» ð±?? ðð²ð»ð±ð®ð»ð´!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `ððð²ð¸ ð±ð®ð½ð®ð ðºð®ð¸ð®ð»ð®ð»,ð¼ðð ð¸ð¶ð°ð¸ ð :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`*ASEEK BEBAN GRUP DI KICK* @${mentioned[0].split('@')[0]} ð`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `ðð¶ðð ð®ð±ðºð¶ð» ð¼ð³ ð´ð¿ð¼ðð½ *${groupMetadata.subject}*\nð§ð¼ðð®ð¹ : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('ð¥ð²ð½ð¹ð/ðð®ð´ ððð¶ð°ð¸ð²ð¿ !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Udah Jadi Nih*'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(':v')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('ððð±ð®ðµ ð®ð¸ðð¶ð³â')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('*â¬ ð¦ð¨ðð¦ðð¦ â­ Mengaktifkan Fitur Simihâ*')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('â¬ * SUKES* â­ ð ð²ð»ð¼ð»ð®ð¸ðð¶ð³ð¸ð®ð» ð³ð¶ððð¿ ðð¶ðºð¶ ð±ð¶ ð´ð¿ð¼ðð½ ð¶ð»ð¶ï¸ï¸â')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(':D')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*â')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('â¬ ð¦ð¨ðð¦ðð¦ â­ ð ð²ð»ð´ð®ð¸ðð¶ð³ð¸ð®ð» ð³ð¶ððð¿ ð»ðð³ð ð±ð¶ ð´ð¿ð¼ðð½ ð¶ð»ð¶â')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('â¬ ð¦ð¨ðð¦ðð¦ â­ ð ð²ð»ð¼ð»ð®ð¸ðð¶ð³ð¸ð®ð» ð³ð¶ððð¿ ð»ðð³ð ð±ð¶ ð´ð¿ð¼ðð½ ð¶ð»ð¶ï¸â')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(':D')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nyaâ*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
                 case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
					break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(':D')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF*â')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('â¬ ð¦ð¨ðð¦ðð¦ â­ ð ð²ð»ð´ð®ð¸ðð¶ð³ð¸ð®ð» ð³ð¶ððð¿ ðð²ð¹ð°ð¼ðºð²/ð¹ð²ð³ð ð±ð¶ ð´ð¿ð¼ðð½ ð¶ð»ð¶ï¸â')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('â¬ ð¦ð¨ðð¦ðð¦ â­ ð ð²ð»ð¼ð»ð®ð¸ðð¶ð³ð¸ð®ð» ð³ð¶ððð¿ ðð²ð¹ð°ð¼ðºð²/ð¹ð²ð³ð ð±ð¶ ð´ð¿ð¼ðð½ ð¶ð»ð¶ï¸â')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply(':D')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF*â')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*â¬ ð¦ð¨ðð¦ðð¦ â­ ð ð²ð»ð´ð®ð¸ðð¶ð³ð¸ð®ð» EVENT ð±ð¶ ð´ð¿ð¼ðð½ ð¶ð»ð¶ï¸*âï¸')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*â¬ ð¦ð¨ðð¦ðð¦ â­ Menonaktifkan EVENN Di Group iniâï¸')
					} else {
						reply(ind.satukos())
					}
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu Bot AMINAH !*`)
		const none = fs.readFileSync('./assets/none');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
