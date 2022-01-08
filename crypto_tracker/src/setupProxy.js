/* eslint-disable no-undef */
const proxy = require("http-proxy-middleware");

module.export = function(app) {
  app.use(
    proxy("/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=74b733ae-955d-4d33-86da-863819ac408d", {
      target: "https://pro-api.coinmarketcap.com",
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