const ayarlar = require("../ayarlar.json");


const Discord = require("discord.js");
const db = require("quick.db")

exports.run = function(client, message, args) {

if(!["Yetkili ID"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
  let toplam = message.guild.memberCount;
  let online = message.guild.members.cache.filter( only => only.presence.status != "offline").size;
   const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
      
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;    let boost = message.guild.premiumSubscriptionCount
   let tag = message.guild.members.cache.filter(m => m.user.username.includes("Voé")).size;
  
  const acebots = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription(`
\`❯\` Sunucumuzda toplam **${toplam}** kullanıcı bulunmaktadır.
\`❯\` Sunucumuzda toplam **${online}** çevrimiçi üye var.
\`❯\` Ses kanallarında **${count}** kişi bulunmaktadır.
\`❯\` Sunucumuza toplam **${boost}** takviye yapılmış.`);
  message.channel.send(acebots);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};

exports.help = {
  name: "say"
}; 