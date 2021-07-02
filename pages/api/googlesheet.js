const fs = require("fs");
// const path = require("path");

export default function handler(req, res) {
  fs.writeFile("xxx.txt", "Hello content!", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  res.status(200).json({ name: "John Doe" });
}
