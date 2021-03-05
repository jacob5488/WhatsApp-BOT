let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Made with javascript via NodeJs, Ffmpeg, and ImageMagick

Recreated: JACOB VARGHESE
Owner: ARYA274
Github:
https://github.com/jacob5488/WhatsApp-BOT


}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
