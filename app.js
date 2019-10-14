const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was written to by Node.js\n");
fs.appendFileSync("notes.txt", "This file was appended to by Node.js\n");
