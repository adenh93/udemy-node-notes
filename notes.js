const fs = require("fs");
const chalk = require("chalk");

const fileName = "notes.json";

exports.listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.white.bgBlue("Your notes"));
  notes.forEach(note => console.log(note.title));
};

exports.readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (!note) {
    console.log(chalk.white.bgRed(`Note with title '${title}' not found!`));
    return;
  }

  console.log(chalk.inverse.bold(note.title));
  console.log(note.body);
};

exports.removeNote = title => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.title !== title);

  if (notes.length === newNotes.length) {
    console.log(chalk.white.bgRed(`Note with title '${title}' not found!`));
    return;
  }

  saveNotes(newNotes);
  console.log(chalk.black.bgGreen(`Deleted note with title '${title}'!`));
};

exports.addNote = (title, body) => {
  const notes = loadNotes();
  const noteExists = notes.find(note => note.title === title);

  if (noteExists) {
    console.log(
      chalk.white.bgRed(`Note with title '${title}' already exists!`)
    );
    return;
  }

  notes.push({ title, body });
  saveNotes(notes);
  console.log(chalk.black.bgGreen("Added new note!"));
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(fileName, dataJSON);
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync(fileName);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};
