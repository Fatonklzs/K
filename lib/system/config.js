const fs = require('fs')
const { color } = require('../../lib/myfunc')
global.owner = ['992927994628']
global.nomerowner = ["992927994628"]
global.packname = 'ʙʏ'
global.author = '𝗛𝗮𝗺𝘁𝘇𝘆'
global.urldb = ''; 
global.thumurl = "https://img5.pixhost.to/images/2974/568687755_vexaa.jpg"
global.thumurl2 = "https://img5.pixhost.to/images/2974/568687755_vexaa.jpg"
global.urls = "https://chat.whatsapp.com/Fg7lZNth6WPCkTmxfNzvdh"
global.ids = "120363366790950043@newsletter"
global.nems = "ᴏɴɪᴋᴀᴛᴀ ᴋᴀʏᴏᴋᴏ - ᴋʏᴀᴍɪ sɪʟᴇɴᴄᴇ"
global.domain = 'https://' // isi domain
global.apikey = 'ptla' // Isi Apikey Plta Lu
global.capikey = 'ptlc' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.mess = {
    done: '*`sᴜᴄᴄᴇss ʙʏ ᴏɴɪᴋᴀᴛᴀ ᴋᴀʏᴏᴋᴏ`*', 
    owner: '*`ᴏɴʟʏ ᴏᴡɴᴇʀ ᴏɴɪᴋᴀᴛᴀ ᴋᴀʏᴏᴋᴏ`*',
    private: '*`ᴏɴʟʏ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ`*',
    group: '*`ᴏɴʟʏ ɢʀᴏᴜᴘ ᴄʜᴀᴛ`*',
    wait: '*`ᴡᴀɪᴛ ғᴏʀ ᴋᴀʏᴏᴋᴏ ᴘʀᴏᴄᴇssɪɴɢ`*',
    check: {
    premium: '*`ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ ᴋᴀʏᴏᴋᴏ`*',
    jadibot: '*ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ ᴋᴀʏᴏᴋᴏ`*',
    },
}
global.title = "ᴏɴɪᴋᴀᴛᴀ ᴋᴀʏᴏᴋᴏ"
global.body = "ᴋʏᴀᴍɪ sɪʟᴇɴᴄᴇ"
global.filename = "ʏᴏᴜ ᴋɴᴏᴡ ᴀᴘɪᴘ? ʏᴇs ɪᴛs ᴋʏᴀᴍɪ sɪʟᴇɴᴄᴇ"
global.jpegfile = "ʏᴏᴜ ᴋɴᴏᴡ ᴀᴘɪᴘ? ʏᴇs ɪᴛs ᴋʏᴀᴍɪ sɪʟᴇɴᴄᴇ"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
