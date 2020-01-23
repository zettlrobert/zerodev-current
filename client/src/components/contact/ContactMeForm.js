import React, { Fragment, useState } from 'react'

import Modal from '../utils/Modal'
import '../../scss/contactMeForm.scss'

const ContactMeForm = () => {

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    catch: false,
    modal: false,
    error: ''
  });


  const onChange = e => setContactForm({ ...contactForm, [e.target.name]: e.target.value });


  const onSubmit = async e => {
    e.preventDefault();

    // Check Honeypot to prevent Spam
    if (!(contactForm.catch === false)) {
      // console.log("bot catched")
      console.log('PLEASE NO EMPTY FIELDS')
      return

    }

    if (contactForm.name === '') {
      console.log("Pleae enter a name");
      return
    }

    if (contactForm.email === '') {
      console.log("Please enter a email")
      return
    }

    if (contactForm.subject === '') {
      console.log("Please enter subject")
      return
    }

    if (contactForm.message === '') {
      console.log("Please enter message")
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




  return (
    <Fragment>
      <Modal
        error={contactForm.error}
      />
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
