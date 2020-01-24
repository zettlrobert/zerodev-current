import React, { Fragment, useState, useEffect } from 'react'

import Modal from '../../utils/Modal'
import '../../scss/contactMeForm.scss'
import { set } from 'mongoose';

const ContactMeForm = props => {


  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    catch: false,
    error: null,
    test: ''
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

    if (contactForm.name === null) {
      console.log("Pleae enter a name");
      setContactForm({ ...contactForm, error: "Please enter a Name" });
      return
    }

    if (contactForm.email === '') {
      console.log("Please enter a email")
      setContactForm({ error: "Please enter email" });
      return
    }

    if (contactForm.subject === '') {
      console.log("Please enter subject")
      setContactForm({ error: "Please enter subject" });
      return
    }

    if (contactForm.message === '') {
      console.log("Please enter message")
      setContactForm({ error: "Please enter a message" });
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

  const resetError = (error) => {
    console.log(`resetError from contactMeForm: ${error}`)

    error = null;

    console.log(`Error now: ${error}`)

  }


  useEffect(() => {


    return () => {
      setContactForm({ error: null })
      console.log("cleaned")
    }


  }, [])

  return (
    <Fragment>
      {contactForm.error !== null ? (
        <Modal
          error={contactForm.error}
          callbackToParent={resetError}
        />
      ) : null}
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
