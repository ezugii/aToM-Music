const MainClient = require("./bott");
const client = new MainClient();
    client.on('ready', () => {
     client.user.setActivity(`-oynat -yardım`)
    });
client.connect()

module.exports = client; 
