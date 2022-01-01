//  if (cmd) { arasına yazın
let bakım = await db.fetch("bakım");
if (message.author.id !== 'sahip id') {
if (bakım) {



    return message.channel.send(
      new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTimestamp()
      .setAuthor("Hyper", `${client.user.avatarURL()}`)
      .setThumbnail(message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setDescription(`
> **<:danger:799004396771737610>**|** Sizlere En İyi Hizmeti Verebilmek İçin Bakımdayız.**
> 
> **<:voice:798915965663969301>**|** __Bakım Sebebi__: \`${bakım}\`**
> 
> [Detaylı Bilgi İçin - Destek Sunucumuz](https://discord.gg/2B6th9VMdh)
`));
  }
}   