window.nitroAds = window.nitroAds || {
  createAd: function () {
    return new Promise((e) => {
      window.nitroAds.queue.push(["createAd", arguments, e]);
    });
  },
  addUserToken: function () {
    window.nitroAds.queue.push(["addUserToken", arguments]);
  },
  queue: [],
};
