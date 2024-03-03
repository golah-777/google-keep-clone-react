
import Note from './Note'

export default function Notes({ notes, deleteNote }){

  return(
    <div className="notes">
      {notes.length === 0 && <p>Add a note</p>}
      { notes.length !== 0 && notes.map((note)=>
        <Note key={note.id} id={note.id} title={note.title} text={note.text} deleteNote = {deleteNote}></Note>
       )
      }
         
   </div>
  )
}