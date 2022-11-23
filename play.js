// const net = require("net");
const {connect} = require('./client');

//establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243", // change to IP address of computer, more on that below
//     port: 50541,

//   });
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     console.log("Connected successfully");
//     // conn.write("Hello from client!");
//   });

//   conn.on('data', (data) => {
//     console.log(data);
//   });

//   return conn;

// };

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
 stdin.on("data", handleUserInput);
 return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
connect();
setupInput();

