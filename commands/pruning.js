const fs = require("fs");
const config = require("../config.json");

module.exports = {
  name: "pruning",
  description: "Bot mesajlarının budamasını değiştir",
  execute(message) {
    config.PRUNING = !config.PRUNING;

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("Dosyaya yazılırken bir hata oluştu.").catch(console.error);
      }

      return message.channel
        .send(`Message pruning is ${config.PRUNING ? "**etkinleştirildi**" : "**engelli**"}`)
        .catch(console.error);
    });
  }
};
