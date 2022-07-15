import React from "react"

export default function ConfirmationModal({ deleteHandler, setDeleteHandler }) {
  return (
    <div className='confirmation-modal-wrapper'>
      <div className='confirmation-modal-content'>
        <span>You are going to delete "{deleteHandler.quizName}", are you sure ?</span>
        <button onClick={() => setDeleteHandler({ ...deleteHandler, showModal: false, confirm: true })}>Confirm</button>
        <button onClick={() => setDeleteHandler({ ...deleteHandler, showModal: false })}>Cancel</button>
      </div>
    </div>
  )
}
