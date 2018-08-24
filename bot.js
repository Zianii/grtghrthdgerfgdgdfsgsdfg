const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`3mri's Server`,"http://twitch.tv/xmas")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`Start ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
	
});








client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم وصاحب البوت ',`XMAS`)
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});




client.on('message', message => {
      if(!message.channel.guild) return;
var prefix = ".";
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "BY XMAS";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});





client.on('message', message => {
var args = message.content.split(/[ ]+/)
if(message.content.includes('https://')){
if(!message.member.hasPermission('ADMINISTRATOR'))
message.delete()
return message.reply(`** يمنع نشر الروابط بهذا السيرفر  :angry: ! **`)
}
});



client.on('message', async message => {
if(message.content.startsWith(prefix + "msg")) {
let i = client.users.size;
if(message.author.id !== '283580465862934539') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
var args = message.content.split(' ').slice(1).join(' ');
if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
setTimeout(() => {
message.channel.send(`تم الارسال لـ ${i} شخص`)
}, client.users.size * 500);
client.users.forEach(s => {
s.send(args).catch(e => i--);
});
}
});


client.on("message", message => {
if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
message.delete();
message.reply(`you sent your token! Do not worry you've deleted it`);
return;
}
                      if(message.channel.type === "dm"){
if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
message.delete();
message.reply(`you sent your token! Do not worry you've deleted it`);
return;
}
}
});



var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

if(message.content == ".roles"){
var 
ros=message.guild.roles.size,
data = [['Rank', 'RoleName']]
for(let i =0;i<ros;i++){
    if(message.guild.roles.array()[i].id !== message.guild.id){
 data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
}}
let res = AsciiTable.table(data)

message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
}
});



client.on('message', message => {
if(message.content.startsWith (".marry")) {
if(!message.channel.guild) return message.reply('** This command only for servers **')
var proposed = message.mentions.members.first()

if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
      message.channel.send(`**${proposed} 
بدك تقبلي عرض الزواج من ${message.author} 
العرض لمدة 15 ثانية  
اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
message.channel.send(`  **${message.author} تم رفض عرضك** `);
})

}
});	




  client.on('message', message => { //-MaX PicAssO#8266 codes©
  if (message.content === "-id") {
  let embed = new Discord.RichEmbed()//-MaX PicAssO#8266 codes©
.setThumbnail(message.author.avatarURL)  
.setAuthor(message.author.username)//-MaX PicAssO#8266 codes©
.setDescription("**معلومات عن الحــساب**")
            .setFooter(`-MaX PicAssO#8266.©`, 'codes.©')//-MaX PicAssO#8266 codes©
.setColor("#9B59B6")
.addField("**اســـم الحســاب**", `${message.author.username}`)//-MaX PicAssO#8266 codes©
.addField('**تاق الحساب الخاص**', message.author.discriminator)
.addField("**الرقـــم الشـــخصي**", message.author.id)//-MaX PicAssO#8266 codes©
.addField('**بــــوت**', message.author.bot)
.addField("**تاريخ التسجيل**", message.author.createdAt)//-MaX PicAssO#8266 codes©
  //-MaX PicAssO#8266 codes©

message.channel.sendEmbed(embed);
 }
});



var requestHelp = async function(type, user, message) {
    switch(type) {
        case "games":
            var gamesHelp = await new Discord.RichEmbed()
            // .addField("معلومات عن الكومند مثلا اكتب اسم العاصمة" ," اسم الكومند مثلا عواصم ")
                .addField("test", "games")
                .addField("test", "games")
            user.send(gamesHelp);
        break;
        case "general":
            var generalHelp = await new Discord.RichEmbed()
            // .addField("معلومات عن الامر", "الامر ")
                .addField("test", "general")
                .addField("test", "general")
            user.send(generalHelp);
        break;
        case "admin":
        if(message.member.hasPermission("ADMINISTRATOR")) {
            var adminHelp = await new Discord.RichEmbed()
                .addField("test", "admin")
                .addField("test", "admin")
            user.send(adminHelp); 
        } else {
            return;
        }
        break;
    }
}






var reactForGamesHelp = {
    messageId: null,
    reaction: null
}, 
reactForGeneralHelp = {
    messageId: null,
    reaction: null
}, 
reactForAdminHelp = {
    messageId: null,
    reaction: null
};


                                                                                // (C) codes. offical server

function define(identify) {
    var data = {}
    data["user"] = client.users.find("id", identify.user_id)
    data["channel"] = client.channels.find("id", identify.channel_id);
    data["emoji"] = identify.emoji.id ? `${identify.emoji.name}:${identify.emoji.id}` : identify.emoji.name;
    data["member"] = data["channel"].guild.members.find("id", identify.user_id)
    data["message"] = data["channel"].messages.find("id", identify.message_id);
    data["reaction"] = data["message"].reactions.get(data.emoji)
    return data;
}


client.on('raw',  packet  => {
    if(packet.t == "MESSAGE_REACTION_ADD") {
        var data = define(packet.d)
        if(data.user.id == client.user.id) return;
            switch (packet.d.message_id) {
            case reactForGamesHelp.messageId:
                if(reactForGamesHelp.reaction === data.emoji) {
                    requestHelp("games", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;

            case reactForGeneralHelp.messageId:
                if(reactForGeneralHelp.reaction === data.emoji) {
                    requestHelp("general", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;


            case reactForAdminHelp.messageId:
                if(reactForAdminHelp.reaction === data.emoji) {
                    requestHelp("admin", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;
        }
    }
});






client.on("message", message => {
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content == prefix + `set ${args[1]} help`) {
        if(args[1] == "games" || args[1] == "general" || args[1] == "admin") {
            var  filter = m => m.author.id === message.author.id
            message.channel.send("give me the channel id now !");        
            message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
            .then(collected => {
                var toSetChannel = collected.first();
                var channel = message.guild.channels.find("id", toSetChannel.content);
                if(channel) {
                    message.channel.send("give me the message id now !")
                    var  filter = m => m.author.id === message.author.id
                    message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                    .then(collected => {
                        var ToSetMessage = collected.first();
                        channel.fetchMessages().then(messages => {
                            var defined =  messages.filter(message => message.id == ToSetMessage.content);
                            var msg = defined.first()
                            if(defined) {
                                message.channel.send("send the emoji now!")
                                message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                                .then(collected => {
                                    msg.react(collected.first().content)
                                    var rect = collected.first().content
                                    setReactionData(channel, msg, rect, args[1])
                                })
                            } 
                        })
                        .catch(console.error)
                    });
                } else {
                    message.channel.send("sorry i can't find this channel")
                }
            })
        }
    }
})
var setReactionData = function(channel, message, reaction, identify) {
    if(identify == "games") {
        reactForGamesHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "general") {
        reactForGeneralHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "admin") {
        reactForAdminHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    }
}   




//! KinG66S.❤#0045
var KinG66S = {};//! KinG66S.❤#0045
client.on('guildMemberRemove', member => {//! KinG66S.❤#0045
KinG66S[member.id] = {roles: member.roles.array()};//! KinG66S.❤#0045
});
//! KinG66S.❤#0045 //! KinG66S.❤#0045 //! KinG66S.❤#0045 
client.on('guildMemberAdd', member => {//! KinG66S.❤#0045
if(!KinG66S[member.user.id]) return;//! KinG66S.❤#0045
console.log(KinG66S[member.user.id].roles.length);//! KinG66S.❤#0045
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {//! KinG66S.❤#0045
member.addRole(KinG66S[member.user.id].roles.shift());//! KinG66S.❤#0045
}//! KinG66S.❤#0045
});//! KinG66S.❤#0045




  client.on('guildMemberAdd', (member) => {
let channel = client.channels.get('480335481415008256')
if(member.user.bot) {
channel.send(`${member} ولكم يا عمو البوت`)
}
})
  

  client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "481756739948118037") return console.log("أيرور . ");
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
    rebeeel.setParent("481756673795686411");
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
  console.log("تــــــم .");
  let scan = setInterval(()=>{
if(!ReBeL.voiceChannel) {
  rebeeel.delete();
}
  }, 1700);
});
});
});
  




client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "MyRole")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});





client.on('message', message =>{
  let args = message.content.split(' ');
  let prefix = '.';
if(args[0] === `${prefix}emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**أدخل الايموجي**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`**لم استطع العثور على الايموجي المطلوب**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});




client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط بهذا السيرفر  :angry: ! **`)
    }
});





client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});






  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });












	

client.login(process.env.BOT_TOKEN);
