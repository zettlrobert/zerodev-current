import React, { Fragment, useState, useEffect } from 'react'

import '../scss/modal.scss'
import { callbackPromise } from 'nodemailer/lib/shared';

const Modal = props => {

  let error = props.error;

  const [modal, updateModalState] = useState(
    {
      closeIcon: "material-icons",
      modalShown: true,
      error: error
    }
  )

  const onClose = (event) => {
    closeModal();
    resetError();
  }

  const closeModal = e => {
    console.log("modal close clicked")

    updateModalState({ closeIcon: "material-icons close-modal__animation", modalSown: true })

    setTimeout(() => {
      updateModalState({ closeIcon: "material-icons", modalSown: false })
    }, 1000)



  }


  const resetError = () => {
    console.log("function reset Error")
    props.callbackToParent(props.error);
  }


  return (
    <Fragment>
      {modal.error !== null ? (
        <div className={modal.modalShown === true ? 'modal' : 'modal-fadeout'}>
          <div className="close-modal">
            <button
              onClick={onClose}
              className="close-modal__button"
            ><i
              className={modal.closeIcon}>
                close
          </i>
            </button>
          </div>
          <div className="modal-content">
            <span className="modal-message">
              <h3>Error</h3>
              <p>
                {error}
              </p>
            </span>
          </div>
        </div>


      ) : (null)}

    </Fragment>
  )
}

export default Modal
