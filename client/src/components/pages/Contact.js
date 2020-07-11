import React, { Fragment } from 'react'

import ContactMeForm from '../contact/ContactMeForm.js'
import Footer from '../layout/Footer/Footer';
import '../../scss/contact.scss'

const Contact = () => {
  return (
    <Fragment>
      <ContactMeForm />
      <Footer />
    </Fragment>

  )
}

export default Contact
