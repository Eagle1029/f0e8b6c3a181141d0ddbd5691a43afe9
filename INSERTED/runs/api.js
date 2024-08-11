// initiate
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());
app.use(express.json())


// imports
const fs = require("fs");

// files
const { purple, green, red, reset } = require("../other/colors.js");
const { port } = require("../config/config.json");
const {
  chatNamespace,
  walletNamespace,
  feedNamespace,
} = require("./websocket.js");

// functions
function wsUpdateWallet(amt) {
  walletNamespace.emit("update-wallet", amt);
}

// == images
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/_next/image", (req, res) => {
  res.sendFile("crash.8a314e71.png", { root: "./_next/static/media" });
});

// == site
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/site", (req, res) => {
  fs.readFile("./INSERTED/data/site.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData));
  });
});

// == all-bets
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/live-feed/all-bets", (req, res) => {
  fs.readFile("./INSERTED/data/allbets.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData));
  });
});

// == active
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/user/promotion/deposits/active", (req, res) => {
  fs.readFile("./INSERTED/data/active.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData));
  });
});

// == affiliates
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/user/affiliates", (req, res) => {
  fs.readFile("./INSERTED/data/affiliates.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData));
  });
});

// == user
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/user", (req, res) => {
  fs.readFile("./INSERTED/data/user.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData));
  });
});

// == chat
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/chat/history", (req, res) => {
  fs.readFile("./INSERTED/data/history.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData));
  });
});

// == mines
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/games/mines", (req, res) => {
  fs.readFile("./INSERTED/data/games/mines.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData));
  });
});

app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/games/mines/create", (req, res) => {
  let betAmount = req.body.betAmount;
  let mines = req.body.mines;
  fs.readFile("./INSERTED/data/user.json", (err, userJsonData) => {
    let userData = JSON.parse(userJsonData);
    if (userData.user.wallet >= betAmount) {
      if (betAmount >= 5) {
        setTimeout(() => {
          wsUpdateWallet(-Math.abs(betAmount));
          userData.user.wallet -= betAmount;
          fs.writeFileSync(
            "./INSERTED/data/user.json",
            JSON.stringify(userData)
          );

          let minesData = {
            success: true,
            game: {
              uuid: "",
              betAmount: betAmount,
              payout: betAmount * 0.95,
              clientSeed: "",
              nonce: 1,
              minesAmount: Number(mines),
              uncoveredLocations: [],
              badMineUncovered: -1,
              userId: userData.user._id,
              created: Date.now(),
              active: true,
              exploded: false,
              serverHash: "",
            },
            uuid: "",
          };
          res.json(minesData);
          minesData.hasGame = true;
          minesData.multiplier = 1;
          minesData.game._id = {
            $oid: "",
          };
          fs.writeFileSync(
            "./INSERTED/data/games/mines.json",
            JSON.stringify(minesData)
          );
        }, 500);
      } else {
        setTimeout(() => {
          res.status(400).json({
            success: false,
            msg: "The minimum bet amount is 5 R$ !",
            error: "The minimum bet amount is 5 R$ !",
          });
        }, 500);
      }
    } else {
      setTimeout(() => {
        res.status(400).json({
          success: false,
          msg: "You can not afford to start this game!",
          error: "You can not afford to start this game!",
        });
      }, 500);
    }
  });
});

app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/games/mines/action", (req, res) => {
  let cashout = req.body.cashout;
  let mine = req.body.mine;
  fs.readFile("./INSERTED/data/user.json", (err, userJsonData) => {
    let userData = JSON.parse(userJsonData);
    fs.readFile("./INSERTED/data/games/mines.json", (err, minesJsonData) => {
      let minesData = JSON.parse(minesJsonData);
      if (minesData.hasGame) {
        if (cashout) {
          setTimeout(() => {
            let mineLocations = [];
            while (mineLocations.length < minesData.game.minesAmount) {
              let randomLocation = Math.floor(Math.random() * 25) + 1;
              if (
                !mineLocations.includes(randomLocation) &&
                !minesData.game.uncoveredLocations.includes(randomLocation)
              ) {
                mineLocations.push(randomLocation);
              }
            }
            fs.writeFileSync(
              "./INSERTED/data/games/mines.json",
              JSON.stringify({ success: true, hasGame: false })
            );
            res.json({
              success: true,
              multiplier: minesData.multiplier,
              winnings: minesData.game.payout,
              game: {
                uuid: minesData.game.uuid,
                betAmount: minesData.game.betAmount,
                payout: 0.0,
                serverSeed: minesData.game.serverSeed,
                clientSeed: minesData.game.clientSeed,
                nonce: minesData.game.nonce,
                minesAmount: minesData.game.nonce,
                mineLocations: mineLocations,
                uncoveredLocations: minesData.game.uncoveredLocations,
                badMineUncovered: -1,
                userId: minesData.game.userId,
                created: minesData.game.created,
                active: false,
                exploded: false,
              },
            });
            wsUpdateWallet(minesData.game.payout);
            userData.user.wallet += minesData.game.payout;
            fs.writeFileSync(
              "./INSERTED/data/user.json",
              JSON.stringify(userData)
            );
          }, 500);
        } else {
          let chance = Math.random() > minesData.game.minesAmount / 25;
          if (chance) {
            res.json({
              success: true,
              multiplier:
                minesData.multiplier +
                0.04693675889 * minesData.game.minesAmount,
              exploded: false,
            });
            fs.writeFileSync(
              "./INSERTED/data/games/mines.json",
              JSON.stringify({
                success: true,
                hasGame: true,
                multiplier:
                  minesData.multiplier +
                  0.04693675889 * minesData.game.minesAmount,
                game: {
                  _id: {
                    $oid: minesData.game._id.$oid,
                  },
                  uuid: minesData.game.uuid,
                  betAmount: minesData.game.betAmount,
                  payout:
                    minesData.game.payout +
                    0.04693675889 *
                      minesData.game.minesAmount *
                      minesData.game.betAmount,
                  clientSeed: minesData.game.clientSeed,
                  nonce: minesData.game.nonce,
                  minesAmount: minesData.game.minesAmount,
                  uncoveredLocations: [
                    ...minesData.game.uncoveredLocations,
                    mine,
                  ],
                  badMineUncovered: -1,
                  userId: 1,
                  created: minesData.game.created,
                  active: true,
                  exploded: false,
                },
              })
            );
          } else {
            let mineLocations = [mine];
            while (mineLocations.length < minesData.game.minesAmount) {
              let randomLocation = Math.floor(Math.random() * 25) + 1;
              if (
                !mineLocations.includes(randomLocation) &&
                !minesData.game.uncoveredLocations.includes(randomLocation)
              ) {
                mineLocations.push(randomLocation);
              }
            }

            fs.writeFileSync(
              "./INSERTED/data/games/mines.json",
              JSON.stringify({ success: true, hasGame: false })
            );
            setTimeout(() => {
              res.json({
                success: true,
                exploded: true,
                game: {
                  uuid: minesData.game.uuid,
                  betAmount: minesData.game.betAmount,
                  payout: 0.0,
                  serverSeed: minesData.game.serverSeed,
                  clientSeed: minesData.game.clientSeed,
                  nonce: minesData.game.nonce,
                  minesAmount: minesData.game.nonce,
                  mineLocations: mineLocations,
                  uncoveredLocations: minesData.game.uncoveredLocations,
                  badMineUncovered: -1,
                  userId: minesData.game.userId,
                  created: minesData.game.created,
                  active: false,
                  exploded: true,
                },
              });
            }, 250);
          }
        }
      } else {
        setTimeout(() => {
          res.status(400).json({
            success: false,
            msg: "You must start the game first!",
            error: "You must start the game first!",
          });
        }, 500);
      }
    });
  });
});

// == cups
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/games/cups", (req,res) => {
  fs.readFile("./INSERTED/data/games/cups.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData));
  });
})

// == plinko
app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/games/plinko/multipliers", (req,res) => {
  fs.readFile("./INSERTED/data/plinko.json", (err, jsonData) => {
    res.json(JSON.parse(jsonData))
  })
})

app.get("https://f0e8b6c3a181141d0ddbd5691a43afe9.vercel.app/games/plinko/roll", (req,res) => {
  fs.readFile("./INSERTED/data/user.json", (err, userJsonData) => {
    let userData = JSON.parse(userJsonData)
    let amount = req.body.amount
    let risk = req.body.risk
    let rows = req.body.rows
    
  })
})

// listen
app.listen(port, () => {
  console.log(purple, "[INFO]: Routes started.", reset);
});
