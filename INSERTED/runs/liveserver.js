// files
const { purple, green, red, reset } = require("../other/colors.js");
const { port } = require("../config/config.json");

// initialize
const liveserver = require("live-server");

liveserver.start({
  port: port,
  ignore: "**/*.json",
  logLevel: 0,
  open: false,
});

// output
console.log(purple, "[INFO]: Live server started.", reset);
