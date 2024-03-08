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
    setModalOpen(()=>false); 
    setNotes(notes.filter((note) => id != note.id));
  };

  const noteInfo = (id)=>{
    {notes.map(note=> {
      if(id === note.id){
        setselectedNote(()=> note);
      }
    })}
  }

  const openModal = () => {
    setModalOpen(()=>true);
  };
  const modalClose=()=> {
    setModalOpen(()=>false);
  };

  return (
    <div className="App">
      <Nevbar></Nevbar>
      <Sidebar></Sidebar>
      <Form 
       addNotes={addNotes}
       selectedNote = {selectedNote}
      ></Form>
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        openModal={openModal}
        noteInfo = {noteInfo}
      ></Notes>
      <Modal 
       isModalOpen={isModalOpen}
       modalClose = { modalClose }
       openModal={openModal}
       selectedNote = {selectedNote}
      ></Modal>
    </div>
  );
}

export default App;
