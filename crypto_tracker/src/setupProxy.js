/* eslint-disable no-undef */
const proxy = require("http-proxy-middleware");

module.export = function(app) {
  app.use(
    proxy("/api/v3/global", {
      target: "https://api.coingecko.com/",
      changeOrigin: true
    })
  )

  app.use(
    proxy("/api/v3/search/trending",{
      target: "https://api.coingecko.com",
      changeOrigin: true
    })
  )
}