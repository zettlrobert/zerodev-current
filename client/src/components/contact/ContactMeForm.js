import React, { Fragment, useState } from 'react'

import Modal from '../../utils/Modal'
import '../../scss/contactMeForm.scss'

const ContactMeForm = props => {


  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [honeypotState, setHoneypotState] = useState({
    catch: false
  })

  const [modalState, setModalState] = useState({
    modalOpen: false
  })

  const [errorState, setErrorState] = useState({
    error: 'null'
  })


  const onChange = e => setContactForm({ ...contactForm, [e.target.name]: e.target.value });


  const onSubmit = async e => {
    e.preventDefault();

    // Check Honeypot to prevent Spam
    if (!(honeypotState.catch === false)) {
      // console.log("bot catched")
      console.log('PLEASE NO EMPTY FIELDS')
      setHoneypotState({ catch: true })
      return

    }

    if (contactForm.name === '') {
      console.log("Pleae enter a name");
      setErrorState({ error: "Please enter a Name" });
      setModalState({ modalOpen: true })
      return
    }

    if (contactForm.email === '') {
      console.log("Please enter a email")
      setErrorState({ error: "Please enter a valid Email" });
      setModalState({ modalOpen: true })
      return
    }

    if (contactForm.subject === '') {
      console.log("Please enter subject")
      setErrorState({ error: "Please enter mail subject" });
      setModalState({ modalOpen: true })
      return
    }

    if (contactForm.message === '') {
      console.log("Please enter message")
      setErrorState({ error: "Please enter a message" });
      setModalState({ modalOpen: true })
      return
    }


    try {
      // console.log(contactForm)
      const res = await fetch('/api/submitcontactform', {
        method: 'POST',
        body: JSON.stringify(contactForm),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      const result = JSON.stringify(data);
      console.log(`My Data: ${result}`);

    } catch (error) {

      console.log(error);
    }
  }


  const modalClickHandler = () => {
    setModalState({ modalOpen: false })
    setErrorState({ error: null })
  }


  let modal
  if (modalState.modalOpen) {
    modal = <Modal
      modalHandler={modalClickHandler}
      error={errorState.error} />
  }



  return (
    <Fragment>

      {modal}

      <div className="form-wrapper">

        <form className="contactMe-form" onSubmit={onSubmit}>
          <input
            className="contactMe-form__input"
            type="text"
            placeholder="Name"
            name="name"
            onChange={onChange}

          />

          <input
            className="contactMe-form__input"
            type="email"
            placeholder="Email"
            name="email"
            onChange={onChange}

          />

          <input
            className="contactMe-form__input"
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={onChange}

          />

          <input
            className="contactMe-form__input"
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={onChange}
          />

          <textarea
            autoComplete="off"
            className="input-message"
            placeholder="Your Message"
            name="message"
            onChange={onChange}
          />

          <input
            type="checkbox"
            tabIndex="-1"
            autoComplete="false"
            className="bot-catch"
            placeholder="are you a bot?"
            name="catch"
            onChange={onChange}
          />

          <div>
            <input
              className="contactMe-form__submit"
              type="submit"
              value="Submit Form"
            />
          </div>
        </form>
      </div>
    </Fragment >
  )
}

export default ContactMeForm
