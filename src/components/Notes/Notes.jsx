import Note from "./Note";

export default function Notes({ notes, deleteNote, openModal, noteInfo,  modalClose }) {
  return (
    <div className="notes">
      {notes.length === 0 && <p>Add a note</p>}
      {notes.length !== 0 &&
        notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            deleteNote={deleteNote}
            openModal={openModal}
            noteInfo = {noteInfo}
            modalClose = { modalClose }
          ></Note>
        ))}
    </div>
  );
}