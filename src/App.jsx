
import Sidebar from './components/Sidebar/Sidebar'
import Nevbar from './components/Nevbar/Nevbar'
import Form from './components/Form/Form'
import Notes from './components/Notes/Notes'
import Modal from './components/Modals/Modal'
import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import './index.css'

function App() {
  const [notes, setNotes] = useState([]);
  const addNotes = (title, text)=>{ 
    const newNotes = [...notes,{id:uuidv4() , title: title , text: text }]
    setNotes(()=> newNotes);
  }

  console.log(notes)

  const deleteNote = (id)=>{
    setNotes(notes.filter(note=> id != note.id ))
  }

  return (
    <div className="App">
      <Nevbar></Nevbar>
      <Sidebar></Sidebar>
      <Form addNotes={addNotes}></Form> 
      <Notes notes = {notes}  deleteNote={deleteNote}></Notes>
      <Modal></Modal>
    </div>
  )
}

export default App
