// files
const { purple, green, red, reset } = require("./other/colors.js");
const { port } = require("./config/config.json");

// start websocket
setTimeout(() => {
  require("./runs/websocket.js");
}, 0);


// start api
setTimeout(() => {
  require("./runs/api.js");
}, 500);

// start liveserver
setTimeout(() => {
  require("./runs/liveserver.js");
}, 1000);

// output
setTimeout(() => {
  console.log(
    green,
    `[SUCCESS]: BloxClone has been started on http://127.0.0.1:${port}/`,
    reset
  );
}, 1500);
