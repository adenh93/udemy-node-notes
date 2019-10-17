const yargs = require("yargs");
const notes = require("./notes");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Title of the note",
      required: true,
      type: "string"
    },
    body: {
      describe: "Body of the note",
      required: true,
      type: "string"
    }
  },
  handler: ({ title, body }) => notes.addNote(title, body)
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title of the note to be removed",
      required: true,
      type: "string"
    }
  },
  handler: ({ title }) => notes.removeNote(title)
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

yargs.parse();
