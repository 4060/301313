const { canModifyQueue } = require("../util/Mossobot");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Şu anda çalan müziği devam ettir",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Oynayan hiçbir şey yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ müziği devam ettirdi!`).catch(console.error);
    }

    return message.reply("Sıra duraklatılmaz.").catch(console.error);
  }
};
