import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    // console.log(note);
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(indexToDelete) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        if (index !== indexToDelete) {
          return note;
        } else {
          return null;
        }
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          id={index}
          key={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
