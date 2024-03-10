import './Modal.css'
import Form from '../Form/Form';
import React, { useState } from 'react'
export default function Modal({isModalOpen,  modalClose, noteText, noteTitle }){
  const [cursorOnModal, setCursorOnModal] = useState(false);
  
  const handleMouseOver = ()=> setCursorOnModal(()=> true )
  const handleMouseOut = ()=> setCursorOnModal(()=> false )

  const handleFormClicked = ()=> {
   if(!cursorOnModal){
    modalClose()
   }
  }

  return(
    <>
   {isModalOpen === true && <div className="modal" onClick={ handleFormClicked }>
    <div className="modal-content" onMouseOver={handleMouseOver} onMouseOut={ handleMouseOut }>
      <Form edit modalClose = { modalClose } noteTitle = {noteTitle} noteText = {noteText}></Form>
    </div>
   </div>}
   </>
  )

}