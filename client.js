const net = require("net");



const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // change to IP address of computer, more on that below
    port: 50541,

  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected successfully");
    // conn.write("Hello from client!");
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;

};

module.exports = {
  connect
}