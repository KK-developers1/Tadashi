const Mizuki = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const GM = "It sends Good Morning messages"
const GN = "It sends Good Night messages"
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true



    Mizuki.addCommand({ pattern: 'gm', fromMe: workt, deleteCommand: true, desc: GM, }, (async (message, match) => {

        var r_text = new Array();

        r_text[0] = "𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 𝐛𝐨𝐢𝐬 𝐚𝐧𝐝 𝐠𝐫𝐢𝐥𝐥𝐬 ♥️☀️";
        r_text[1] = "♥️ ᴳᴼᴼᴰ / ᴍᴏʀɴɪɴɢ 💚🌚";
        r_text[2] = "🌚♥️ 𝔤 𝔬 𝔬 𝔡  𝔪 𝔬 𝔯 𝔫 𝔦 𝔫 𝔤 💫 💚";
        r_text[3] = "GOOᗪ ᗰOᖇᑎIᑎG ☀️♥️";
        r_text[4] = "*🍏ඉර මාමා වින්ඩෝ එකෙන් එබී බලන🍒✰පෙරේතෙයො දකුනු පැත්තේද ♥᭄⋆ කුම්භාංඩයො වම් පැත්තේද  ✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡₂̶̶₀̶̶₂̶̶₁➳̶̶̶᭄➤හීරී යකා ඇද පාමුල ද ✯▋̱̱̱̱̱̱̱̱̄̄̄̄̄✪⃢⃢͚͚͚͚͚͚͚͚۝̭̭̭̭̭̭̭̬̬̬̬̬̬͍͍සොම්බී යක්කු ශුක්‍රාණු බොන්න එන මේ භයානක උදෑසන...➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡👌 ✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡❀⃝̶̶̶̶̶̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̇͜͟͟͟͟͟͝✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡➳̶̶̶᭄➤ඔබට සුභම සුබ උදෑසනක් වෙන්න ඔන█̷™̶➳̶➳̶̶̶᭄➤✺۟۟۟۟۟۟۟۟۟۟۟۟☝🙏✿⃝➤⃟̱̱̱̱̄̄̄̄😹͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙̽̽̽♚͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙̽̽̽❤️⚊͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙̽̽☞*";
        r_text[5] = "💚💫 𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 🌚♥️";
        r_text[6] = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ʙᴏɪꜱ ᴀɴᴅ ɢʀɪʟʟꜱ ☀️♥️";
        r_text[7] = "Ｇｏｏｄ Ｍｏｒｎｉｎｇ 🌅♥️";

        var i = Math.floor(8 * Math.random())

        await message.client.sendMessage(
            message.jid, (r_text[i]), MessageType.text);

    }));


 Mizuki.addCommand({ pattern: 'gn', fromMe: workt, deleteCommand: true, desc: GN, }, (async (message, match) => {

        var r_text = new Array();

        r_text[0] = "𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 𝐛𝐨𝐢𝐬 𝐚𝐧𝐝 𝐠𝐫𝐢𝐥𝐥𝐬 ♥️🌛";
        r_text[1] = "ɢ ᴏ ᴏ ᴅ  /\n    / ɴ ɪ ɢ ʜ ᴛ  🙂💚🖐️";
        r_text[2] = "💚 𝘎 𝘰 𝘰 𝘥   𝘕 𝘪 𝘨 𝘩 𝘵  🌚♥️";
        r_text[3] = "*⃝l⃟⍤⃝🍏මහසෝනා ඇද යටින් ඉද පෙරේත කුම් බාන්ඩයෝ ඇදයටින් එබී බලන🍒✰මොහිනීගේ බබා දකුනු පැත්තේද ♥᭄⋆ මෝහිනී වම් පැත්තේද මිහිහා දොර මුල්ලෙද ✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡₂₀₂₁➳̶̶̶᭄➤හීරී යකා ඇද පාමුල ද ✯▋̱̱̱̱̱̱̱̱̄̄̄̄̄✪⃢⃢͚͚͚͚͚͚͚͚۝̭̭̭̭̭̭̭̬̬̬̬̬̬͍͍සොම්බී යක්කු කුක්කු බොන්න එන මේ භයානක රාත්‍රිය....➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡👌 ✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡❀⃝̶̶̶̶̶̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̲̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̇͜͟͟͟͟͟͝✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡➳̶̶̶᭄➤ඔබට සුභම සුබ රාත්‍රීයක් වෙන්න ඔන█̷™̶➳̶➳̶̶̶᭄➤✺۟۟۟۟۟۟۟۟۟۟۟۟☝🙏✿⃝➤⃟̱̱̱̱̄̄̄̄😹͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙̽̽̽♚͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙̽̽̽❤️⚊͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙̽̽☞*";
        r_text[4] = "ɢᴏᴏᴅ ɴɪɢʜᴛ ʙᴏɪꜱ ᴀɴᴅ ɢʀɪʟʟꜱ 🌠";
        r_text[5] = "Ｇｏｏｄ Ｎｉｇｈｔ 🌠♥️";
       


        var i = Math.floor(6 * Math.random())

        await message.client.sendMessage(
            message.jid, (r_text[i]), MessageType.text);

    }));
  
 
  
 
