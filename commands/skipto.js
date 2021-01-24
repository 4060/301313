const { canModifyQueue } = require("../util/Mossobot");

module.exports = {
  name: "skipto",
  aliases: ["st"],
  description: "Seçili sıra numarasına atla",
  execute(message, args) {
    if (!args.length) return message.reply(`Usage: ${message.client.prefix}${module.exports.name} <Queue Number>`);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Sıra yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.songs = queue.songs.slice(args[0] - 2);
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ atlandı ${args[0] - 1} songs`).catch(console.error);
  }
};
