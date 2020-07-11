import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../../../scss/footer.scss'

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-wrapper">
          <Link className="footer-link" to="legaldetails">Legal Details</Link>
          <p>
            Copyright 2020 zerodev
          </p>
      </div>
    </Fragment>
  )
}

export default Footer;