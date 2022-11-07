const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: "https://rescue-chow.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
