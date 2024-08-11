var API_ENDPOINT = "https://api.bloxflip.com/user/agechecker";

(function (w, d) {
  var config = {
    key: "ONuekP8TvLccREHSDXnywj1HALxQp3Nj",
    mode: "manual",
    show_close: true,
    onstatuschanged: function (verification) {
      if (verification.status == "accepted") {
        const headers = new Headers({
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN"),
        });

        const data = {
          verificationId: verification.uuid,
        };

        fetch(API_ENDPOINT, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            if (data.success) window.location.href = "/rewards";
          })
          .catch((error) => {
            console.log(
              "There was a problem with the fetch operation:",
              error.message
            );
          });
      }
      console.log("api status info", verification);
    },
  };

  w.AgeCheckerConfig = config;
  if (
    config.path &&
    (w.location.pathname + w.location.search).indexOf(config.path)
  )
    return;
  var h = d.getElementsByTagName("head")[0];
  var a = d.createElement("script");
  a.src = "https://cdn.agechecker.net/static/popup/v1/popup.js";
  a.crossOrigin = "anonymous";
  //a.onerror=function(a){w.location.href="https://agechecker.net/loaderror";};
  h.insertBefore(a, h.firstChild);
})(window, document);
