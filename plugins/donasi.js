let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6287719424487
│┝‷✧ *Dana:* 
│┝‷✧ *Linkaja:* 
│┝‷✧ *Gopay:* 
│┝‷✧ *Ovo:* 
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6287719424487?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
