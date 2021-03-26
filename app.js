const app = require('express')();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: '*:*'
  }
});
app.get(
  '/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


io.on("connection", (socket) => {
  socket.on("echo", (message) => {
    io.emit("echo", message);
  });
});


httpServer.listen(3000, () => {
  console.log('listening on 3000')
});
