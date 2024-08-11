// initiate
const { Server } = require("socket.io");

const io = new Server(9092, {
  transports: ["websocket"],
  allowEIO3: true,
});

// files
const { purple, green, red, reset } = require("../other/colors.js");

// == chat
const chatNamespace = io.of("/chat");

chatNamespace.on("connection", (socket) => {
  // console.log(green, "[CONNECT]: Chat connected to server.", reset);
  socket.on("send-chat-message", (data) => {
    chatNamespace.emit("new-chat-message", data);
  });
  socket.on("disconnect", () => {
    // console.log(red, "[DISCONNECT]: Chat disconnected to server.", reset);
  });
});

// == wallet
const walletNamespace = io.of("/wallet");

walletNamespace.on("connection", (socket) => {
  // console.log(green, "[CONNECT]: Wallet connected to server.", reset);
  socket.on("disconnect", () => {
    // console.log(red, "[DISCONNECT]: Wallet disconnected to server.", reset);
  });
});

// == feed
const feedNamespace = io.of("/feed");

feedNamespace.on("connection", (socket) => {
  // console.log(green, "[CONNECT]: Feed connected to server.", reset);
  socket.on("disconnect", () => {
    // console.log(red, "[DISCONNECT]: Feed disconnected to server.", reset);
  });
});

// output
console.log(purple, "[INFO]: Websocket started.", reset);


// grabs
module.exports = { chatNamespace, walletNamespace, feedNamespace }