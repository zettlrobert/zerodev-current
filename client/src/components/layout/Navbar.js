import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png'

const Navbar = () => {

  // useEffect(() => {

  // })

  const guestLinks = (
    <Fragment>
    </Fragment>
  )

  const links = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </Fragment>
  )

  return (
    <Fragment>



      <nav style={navStyle}>
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo left" ><img style={logoStyle} src={Logo} alt="" /></Link>

          <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>

          <ul className="right hide-on-med-and-down">
            {links}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {links}
      </ul>



    </Fragment>

  )
}

const navStyle = {
  backgroundColor: 'teal',
  padding: '0em 1em',
}

const logoStyle = {
  maxHeight: '55px',
  padding: '.1rem 0rem'

}

export default Navbar
