const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`.help | .invite`,"http://twitch.tv/xmas")
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
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' الاوامر الاداريه',` .help-admins `)
.addField(' الاوامر العامه ',` .help-public `)
.addField('اوامر الالوان',`قريبا`) 
.addField(' اوامر الاغاني',`قريبا`) 
.addField('مصمم وصاحب البوت ',`XMAS`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});





         client.on('message' , message => {
var prefix = "." // هذا البرفكس تقدر تغييره

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("283580465862934539","472052366548533249").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("XMAS")
                                                

message.channel.send(embed);


}

});


  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('463504631566303233');
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '459429459787776020') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('Helper');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
});
  

  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('463504631566303233');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '459429459787776020') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
  











client.on('message', message => {
            if (message.content.startsWith(prefix + "xmas")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' اسمي',` . عبدالله `)
.addField(' العمر ',` .15 `)
.addField('المهنة',`يوتيوبر`) 
.addField(' تعريف عن ',`XMAS`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});





client.on('message', message => {
    
   if(message.member.hasPermission('MANAGE_ROLES')) 
    if (message.content === ".createserver") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "Owner ",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "Co_Owner",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Leader",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Co_Leader",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Admin",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Member",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Youtuber",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "Bot",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Helper",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Gaming",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "vip",
       permissions :   [1],
       color : " #000000"
   }) 
})
}
 
});
client.on('message', message => {
    if (message.content === ".createserver") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

		
     message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Music', 'voice')
	 message.guild.createChannel('Music', 'voice')
	 message.guild.createChannel('Events', 'voice')
	 message.guild.createChannel('Gaming', 'voice')
	 message.guild.createChannel('welcome', 'text')
	 message.guild.createChannel('info', 'text')
	 message.guild.createChannel('bot', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('Youtube', 'text')
	 message.guild.createChannel('Chat', 'text')
	 message.guild.createChannel('Event', 'text')
	 message.guild.createChannel('Gaming', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر  | نحن غير مسؤولون عن اي عطل يحدث بل سيرفر بسبب تكرار الامر و شكراً**')
}
});




client.on('message', msg => {
  if (msg.content === '.createserver') {
    msg.reply('الرجاء التأكد من اعطاء البوت خاصية الـ(MANAGE_CHANNELS و MANAGE_ROLES) ');
  }
});







client.on('message', message => {
    if (message.content === '.roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('الرتب:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

 client.on('guildCreate', guild => {
  client.channels.get("470503427043098625").send(`**تم اضافة البوت في سيرفر جديد مبروكك
اسم السيرفر: __${guild.name}__
اونر السيرفر: __${guild.owner}__**`)
}); 


             client.on('message', message => {
                if(message.content === prefix + "invite") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Invite Bot!**")
                    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=470380238476542001&permissions=2146958583&scope=bot");
                   message.channel.sendEmbed(embed);
                  }
});


             client.on('message', message => {
                if(message.content === prefix + "support") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Support Server Bot!**")
                    .setURL("https://discord.gg/WBug9eX");
                   message.channel.sendEmbed(embed);
                  }
});


             client.on('message', message => {
                if(message.content === prefix + "donate") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: اضغط هنا عشان تتبرع لي**")
                    .setURL("https://paypal.me/XMas038");
                   message.channel.sendEmbed(embed);
                  }
});

             client.on('message', message => {
                if(message.content === prefix + "pay") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: اضغط هنا عشان تتبرع لي**")
                    .setURL("https://paypal.me/XMas038");
                   message.channel.sendEmbed(embed);
                  }
});


             client.on('message', message => {
                if(message.content === prefix + "donate") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: اضغط هنا عشان تتبرع لي**")
                    .setURL("https://paypal.me/XMas038");
                   message.channel.sendEmbed(embed);
                  }
});






client.on('message', message => {
     if (message.author.bot) return;
       if (message.content ===  ".help-public") {
 message.channel.send('**تم ارسال الاومر في الخاص|| Done Enter Command In Box :D**')
message.author.sendMessage(`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:earth_africa: الاوامــر الــعـــامـــة:earth_africa: 
1༺༻  .id  | لعرض معلومات الشخص༺༻
2༺༻  .info | لعرض معلومات عن البوت༺༻
3༺༻  .server | لعرض معلومات السيرفر༺༻
4༺༻  .ping | لعرض بنق البوت༺༻
5༺༻  .date | لعرض التاريخ༺༻
6༺༻ .invite | لدعوة البوت الى سيرفرك༺༻
7༺༻  .invites | لعرض عدد الانفايت التي تمتلكه༺༻
8༺༻  .avatar | لعرض صورة الشخص༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `);
       }
});



client.on('message', message => {
     if (message.author.bot) return;
       if (message.content ===  ".help-admins") {
 message.channel.send('**تم ارسال الاومر في الخاص|| Done Enter Command In Box :D**')
message.author.sendMessage(`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:closed_lock_with_key: اوامـــر الادمـــنـــيــــة:closed_lock_with_key: 
1༺༻  .clear | لمسح الشات༺༻
2༺༻  .bc | لارسال رسالة لجميع الاعضاء༺༻
3༺༻  .kick | لطرد العضو من السيرفر༺༻
4༺༻  .ban | لاعطاء باند لشخص༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `);
       }
});




client.on('message', function(msg) {
    const prefix = '.'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


  
  
  client.on('message', message => {
    const prefix = '.'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': 🛡 | ايديك', "**"+ `${z.id}` +"**",true)
.addField(': ♨ | Playing','**'+y+'**' , true)
.addField(': 📛 | تاق حق حسابك',"**#" +  `${z.discriminator}**`,true)
.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});







    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====ولكم منور السيرفر اتمنا لك الاستمتاع====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '☞★٭『الترحيب』٭★☜')
    if (!channel) return;
    channel.send({embed : embed});
    })
	
	
	
	
	    client.on('message', msg => { 
      if (msg.content.startsWith(`.sug`)) {
         let args = msg.content.split(" ").slice(1);
        if (!args[1]) return msg.reply(`يجب كتابه الاقتراح`)
        if (msg.guild.channels.find('name', 'suggest')) {
          msg.guild.channels.find('name', '☞★٭『اقتراحات』٭★☜').send(`
        الاقتراح من : ${msg.member}
        الاقتراح : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
        `)
        }
      }
      })
	
	
  
client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'pos')) {
    // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }
});
  
  
  
  
  client.on("message", message => {
  var prefix = ".";

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تــم",
      color: 0x06DF00,
      description: "تم مسح الرسائل بنجاح",
      footer: {
        text: "Void Bot !"
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
});




client.on('message', msg => {
  //Code By : ‡ ♪ ℬℐℓѦℓ✋ ‡#2026
  if(msg.content.startsWith('.sug')) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', '☞★٭『اقتراحات』٭★☜')) return msg.reply('**الرجاء إضافة روم بإسم (☞★٭『اقتراحات』٭★☜)**');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('الرجاء كتابة الاقتراح')
    //غيره على حسب اسم روم الاقتراحات او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', '☞★٭『اقتراحات』٭★☜')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', '☞★٭『اقتراحات』٭★☜').send(`
      تم الاقتراح من قبل : ${msg.member}

      الاقتراح : 
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }

});



  client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('.mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايبي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 اسم السيرفر",`${args}`,true)
        .addField("🌐 بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`Void Bot !`)
                .setTimestamp()
    message.channel.send(embed)      
}})

 
  client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(1000000)
        })
    }
})


  client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  


 client.on('message', message => {
    if (message.content === ".serooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
 message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
          message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')
}
});



client.on('message', message => { 
    if (message.content === ".seroles") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "♛",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "「 O W N E R 」",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「ADMINSTRATOR」",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「 C O - L E A D E R 」",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "♛ L E A D E R࿐",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "𖣘 C O-L E A D E R ༒",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "༺ A D M I N ༻",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "「Lieutenant」",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「Favourites」",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "⇝B O T⇜",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "⇝M U S I C⇜",
       permissions :   [1],
       color : " #000000"
    }) 
      message.guild.createRole({
       name : "⇝MEMBERS⇜",
       permissions :   [1],
       color : " #000000"
   }) 
})
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




client.on('message' , message => {
    var prefix = ".";
    if(message.content.startsWith(prefix + 'ticket')) {
        message.channel.send('`The Ticket has been create`');
        client.users.get('283580465862934539').send({embed: new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> has Create a Ticket call him**`)
        });
    }
});    






client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith("<@470380238476542001>")) {
        ebnklb.channel.send('Hey Im **Void Bot !**  A Nice Bot Developed By:`XMAS`')
        ebnklb.channel.send('My Prefix `.`')

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



client.on('message', message => {
    var prefix = "."
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});


client.on("message",function(message) {
    if(message.content.startsWith(prefix + 'uptime')) {
        let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
    
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | Void Bot !  |") 
let norelden = new Discord.RichEmbed()
.setColor('#9b59b6')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter(" Void Bot ! |");
  message.channel.send({embed:v1}).then(m => m.edit({embed:norelden}),5000);
}
});



const fs = require('fs');
	const moment = require('moment');
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`**${message.author.username} you collect your \`310\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}	
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})






client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = ".";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }




	client.on('message', message => {
var prefix = ".";
       if(message.content === prefix + "mutech") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutech") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});


	
	
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='.count')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });	
	

	
	
client.on('message', message => {
    var prefix = "."
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالية**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});	
	
	
	
	
	
	
client.on('message', message => {
    var prefix = "."
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});	
	
	
	
client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '.xsr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })	
	


client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});	
	
	
	
	
client.on('message', message => {
var prefix = ".";
      if(message.content === prefix + "hidech") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! ✅  ')
 }
});	
	
	
	
client.on('message', message => {
var prefix = ".";
      if(message.content === prefix + "uch") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
	
});	
	
	
	

	
	
	
	
	
	
	
	
	

client.login(process.env.BOT_TOKEN);
