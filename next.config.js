const withTM = require("next-transpile-modules")([
  "@babylonjs/core",
  "@babylonjs/gui",
  "@babylonjs/loaders",
  "react-babylonjs",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
}

module.exports = withTM(nextConfig);