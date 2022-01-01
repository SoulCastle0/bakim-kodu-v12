const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (message.author.id !== 'sahip id')
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('#d52525')
        .setFooter(`Sorgulayan: ${message.author.tag}`,`${message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
        .setDescription(`\`${message.author.tag}\`, **Çalıştırdığınız Komut __Geliştirici Ekip__ İzinlidir!**`)
    );
  if (args[0] === "aç") {
    if (!args[1]) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTimestamp()
          .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
          .setColor('GREEN')
          .setDescription(`\`${message.author.tag}\`, **Bakım Modunun Çalıştırılması İçin __Sebep__ Giriniz!**`));
    }
    db.set("bakım", args.slice(1).join(" "));
    db.set(`bot_bakım_${client.user.id}`, Date.now());
    if (args.slice(1).join(" ")) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTimestamp()
          .setColor("GREEN")
          .setFooter(`Açan: ${message.author.tag}`,`${message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
          .setDescription(`\`${message.author.tag}\`, **Başarıyla Bakım __Açtınız__**`)
      );
    }
  } else if (args[0] === "kapat") {
    message.channel.send(
      new Discord.MessageEmbed()
       .setTimestamp()
       .setColor("GREEN")
       .setFooter(`Sonlandıran: ${message.author.tag}`,`${message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
       .setDescription(`\`${message.author.tag}\`, **Başarıyla Bakım __Kapatıldı__**`)
    );
    db.delete("bakım");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bakım"],
  permLevel: 0
};
exports.help = {
  name: "bakım",
  description: "Bakım.",
  usage: "Bakım"
};
