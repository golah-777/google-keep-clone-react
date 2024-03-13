import Sidebar from "./components/Sidebar/Sidebar";
import Nevbar from "./components/Nevbar/Nevbar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modals/Modal";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setselectedNote] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const addNotes = (title, text) => {
    const newNotes = [...notes, { id: uuidv4(), title: title, text: text }];
    setNotes(() => newNotes);
  };

  const deleteNote = (id) => {
    setModalOpen(() => false);
    setNotes(notes.filter((note) => id != note.id));
  };

  const noteInfo = (id) => {
    {
      notes.map((note) => {
        if (id === note.id) {
          setselectedNote(() => note);
        }
      });
    }
  };

  const editNote = (editedNote) => {
    setNotes((prevNote) => {
      const newNotesUpdated = prevNote.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newNotesUpdated;
    });
  };

  const noteTitle = selectedNote.title;
  const noteText = selectedNote.text;

  const openModal = () => {
    setModalOpen(() => true);
  };
  const modalClose = () => {
    setModalOpen(() => false);
  };

  return (
    <div className="App">
      <Nevbar></Nevbar>
      <Sidebar></Sidebar>
      <Form
        addNotes={addNotes}
        selectedNote={selectedNote}
        modalClose={modalClose}
        editNote={editNote}
      ></Form>
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        openModal={openModal}
        noteInfo={noteInfo}
        modalClose={modalClose}
      ></Notes>
      <Modal
        isModalOpen={isModalOpen}
        modalClose={modalClose}
        selectedNote={selectedNote}
        noteTitle={noteTitle}
        noteText={noteText}
        editNote={editNote}
      ></Modal>
    </div>
  );
}

export default App;
