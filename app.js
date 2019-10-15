const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => console.log("Adding a new note")
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => console.log("Removing the note")
});

//Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => console.log("Listing all notes")
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => console.log("Reading the note")
});

console.log(yargs.argv);
