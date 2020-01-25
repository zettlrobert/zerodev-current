import React, { Fragment, useState, } from 'react'

import '../scss/modal.scss'

const Modal = props => {

  let error = props.error;

  const [modal, updateModalState] = useState(
    {
      closeIcon: "material-icons",
      modalShown: true,
      error: props.error
    }
  )


  const resetModal = e => {
    console.log("modal close clicked")

    updateModalState({ closeIcon: "material-icons close-modal__animation", modalSown: true })

    setTimeout(() => {
      updateModalState({ closeIcon: "material-icons", modalSown: false })

      props.modalHandler()
    }, 1000)

  }


  return (
    <Fragment>
      {modal.error !== null ? (
        <div className={modal.modalShown === true ? 'modal' : 'modal-fadeout'}>
          <div className="close-modal">
            <button
              onClick={resetModal}
              className="close-modal__button"
            ><i
              className={modal.closeIcon}>
                close
          </i>
            </button>
          </div>
          <div className="modal-content">
            <span className="modal-message">

              <h3 className="modal-headline">{error === '' ? (<span className="span-color">{props.sent}</span>) : (<span className="span-color">Error</span>)}</h3>
              <p className="error-message">
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
