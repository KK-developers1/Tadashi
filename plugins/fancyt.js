const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const FANCY_DESC = 'Generates fancy texts with your text.'



Mizuki.addCommand({ pattern: 'fancyt ?(.*)', desc: FANCY_DESC, fromMe: workt }, async (message, match) => {

const ntext = match[1]
if (!ntext) return await message.sendMessage(" *Please Input Some text* ")

await message.sendMessage('```Text converting...```')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${ntext}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const gent = `π πΈππππ π΄πππππ π­ππππ π»πππ π\n\n ${result} \n\n πππππ π’ππ πππ πππππ πππππ πΌππ£πππ`
	
	 await message.client.sendMessage(message.jid, gent , MessageType.text, {
          quoted: message.data,
        })
	})    

})
  




















