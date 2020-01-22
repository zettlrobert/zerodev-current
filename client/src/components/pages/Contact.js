import React, { Fragment } from 'react'

import '../../scss/contact.scss'

const Contact = () => {
  return (
    <Fragment>
      <div className="contact-container">
        <a href="mailto:zrdev.info@gmail.com"><i className="material-icons">mail</i><div>Send Mail</div></a>
      </div>
    </Fragment>
  )
}

export default Contact
