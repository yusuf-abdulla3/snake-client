//establishes a connection with the game server
const net = require("net");
const connect = () => {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: "50542",
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (data) => {
    console.log("Successfully connected to game server")
    conn.write('Name: YA3');
  })
  conn.on("data", (data) => {
    console.log(data)
  })
  return conn;
};

module.exports = connect;