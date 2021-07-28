let connection;
const net = require('net');
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY} = require("./constants");

const handleUserInput = (key) => {
  if (key === '\u0003') process.exit();
};

const wasd = (key) => {
  if (key === "w") connection.write(MOVE_UP_KEY)
  else if (key === "a") connection.write(MOVE_LEFT_KEY)
  else if (key === "s") connection.write(MOVE_DOWN_KEY)
  else if (key === "d") connection.write(MOVE_RIGHT_KEY)
};

const specialMessage = (key) => {
  if (key === "p") connection.write ("Say: yooooooo")
}


const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
 
  stdin.on("data", handleUserInput); 
  stdin.on("data", wasd); 
  stdin.on("data", specialMessage); 
    
}


  module.exports = setupInput;