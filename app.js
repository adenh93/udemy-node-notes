const chalk = require("chalk");
const notes = require("./notes");

console.log(notes.getNotes());
console.log(chalk.green.inverse.bold("Success!"));
