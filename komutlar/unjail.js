const Discord = require("discord.js");

exports.run = async(client, message, args, ayar, emoji) => {
 if (!message.member.roles.cache.has("Yetkili Rol ID") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).addField(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`)).then(m => m.delete({timeout: 7000}));
  
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!uye) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${message.author}, Bir kullanıcı etiketlemelisin.`)).then(x => x.delete({timeout: 5000}));
  uye.roles.remove("Cezalı Rol ID").catch();
  uye.roles.add("Kayıtsız Rol ID").catch();
  if(uye.voice.channel) uye.voice.kick().catch();
  message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} kullanıcısının cezası ${message.author} tarafından bitirildi.`)).catch();
  client.channels.cache.get("Jail Log ID").send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`**Cezası Bitirildi !**\n• Kaldıran Yetkili: ${message.author} (\`${message.author.id}\`)\n• Cezası Kaldırılan Üye: <@!${uye.id}> (\`${uye.id}\`)`)).catch();
  message.react('Mesaj Tepki ID')
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ["unjail"]
    }
    
    exports.help = {
  name: "unjail"
    } 