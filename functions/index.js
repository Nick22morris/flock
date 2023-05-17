const functions = require("firebase-functions");
const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, "..", "src")));

// Serve the index.html file for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "src", "index.html"));
});

// Export the Express app as a Firebase Cloud Function
exports.app = functions.https.onRequest(app);
