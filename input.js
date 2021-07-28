let connection;
const net = require('net');

const handleUserInput = (key) => {
  if (key === '\u0003') process.exit();
};

const wasd = (key) => {
  if (key === "w") connection.write("Move: up")
  else if (key === "a") connection.write("Move: left")
  else if (key === "s") connection.write("Move: down")
  else if (key === "d") connection.write("Move: right")
};


const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
 
  stdin.on("data", handleUserInput); 
  stdin.on("data", wasd); 
    
}


  module.exports = setupInput;