const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require('../config.json')

module.exports = {
  name: "prefix",
  cooldown: 3,
  description: "kendi prefix inizi belirleyin",
  async execute(message, args) {


  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix 

  
  var seçenek = args[0]
  
  //if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "Yönetici" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Prefix başarıyla sıfırlandı. Prefix artık **${ayarlar.prefix}**`)
    return
  }
  
  if (!args[0])
    return message.channel.send(`Bu sunucudaki prefixim: **${preffix ? preffix : ayarlar.prefix}**`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`Prefix başarıyla **${args[0]}** olarak ayarlandı.\n${args[0]}prefix sıfırla yazarak prefixi sıfırlayabilirsiniz.`)

  }

}                 

