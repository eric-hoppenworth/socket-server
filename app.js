const app = require('express')();
const port = process.env.PORT || 3000
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


httpServer.listen(port, () => {
  console.log(`listening on ${port}`)
});
