const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "src", "app.js");
const destPath = path.join(__dirname, "build", "static", "js", "app.js");

fs.copyFileSync(srcPath, destPath);

console.log("app.js file moved successfully!");
