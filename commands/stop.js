const { canModifyQueue } = require("../util/Mossobot");


module.exports = {
  name: "stop",
  description: "Müziği durdurur",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("Oynayan hiçbir şey yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ müziği durdurdu!`).catch(console.error);
  }
};
