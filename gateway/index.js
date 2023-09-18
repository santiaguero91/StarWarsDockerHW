const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:3004",
    changeOrigin: true,
  })
);
app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:3003",
    changeOrigin: true,
  })
);
app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:3002",
    changeOrigin: true,
  })
);
app.listen(3001, () => {
  console.log("Gateway on port 3001");
});
