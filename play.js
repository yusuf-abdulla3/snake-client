const connect = require('./client')
console.log("Connecting ...");

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
 
  const handleUserInput = (key) => {
    if (key === '\u0003') process.exit();
  };
  stdin.on("data", handleUserInput); 
  }
  

setupInput(connect());

