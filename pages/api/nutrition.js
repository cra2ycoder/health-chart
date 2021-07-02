const fs = require("fs");
const path = require("path");

export default function handler(req, res) {

  
  fs.writeFile(path.resolve("./data/xxx.json"), "Hello content!", function (err) {
    if (err) throw err;
  });

  res.status(200).json({ name: "John Doe" });
}
