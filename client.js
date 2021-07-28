//establishes a connection with the game server
const net = require("net");
const {IP, PORT} = require('./constants');
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (data) => {
    console.log("Successfully connected to game server")
    conn.write('Name: YA3');
  })
  // conn.on("connect", (data) => {
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 50 ) 
  // })

  // conn.on("connect", (data) => {
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 100 ) 
  // })

  // conn.on("connect", (data) => {
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 150 ) 
  // })

  // conn.on("connect", (data) => {
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 200 ) 
  // })

  // conn.on("connect", (data) => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 250 ) 
  // })

  //   conn.on("connect", (data) => {
  //     setTimeout(() => {
  //       conn.write("Move: up");
  //     }, 300 ) 
  //   })

  //   conn.on("connect", (data) => {
  //     setTimeout(() => {
  //       conn.write("Move: left");
  //     }, 350 ) 
  //   })
  //   conn.on("connect", (data) => {
  //     setInterval(() => {
  //       conn.write("Move: down", 50)
  //     })
    // })
    

  conn.on("data", (data) => {
    console.log(data)
  })
  return conn;
};

module.exports = connect;