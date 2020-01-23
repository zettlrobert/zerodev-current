import React from 'react'

import '../../scss/modal.scss'

const Modal = () => {
  return (
    <div className="modal">
      <div className="close-modal">
        <button href="">X</button>
      </div>
      <div className="modal-content">
        <span className="modal-message">
          <h3>Error</h3>
          <p>
            This is a Hardcoded Error Message.
          </p>
        </span>
      </div>
    </div>
  )
}

export default Modal
