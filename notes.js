const fs = require("fs");

const fileName = "notes.json";

exports.getNotes = () => "Your notes...";

exports.addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(x => x.title === title);

  if (duplicateNotes.length > 0) {
    console.log(`Note with title '${title}' already exists!`);
    return;
  }

  notes.push({ title, body });
  saveNotes(notes);
  console.log("Added new note!");
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
