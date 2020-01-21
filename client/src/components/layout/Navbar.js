import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


import logo from '../../assets/logo.svg'
import '../../scss/navbar.scss'

const Navbar = () => {

  const links = (
    <Fragment>
      <li>
        <Link className="link-item" to='/'>Home</Link>
      </li>
      <li>
        <Link className="link-item" to='/projects'>Projects</Link>
      </li>
      <li>
        <Link className="link-item" to='/about'>About</Link>
      </li>
      <li>
        <Link className="link-item" to='/contact'>Contact</Link>
      </li>
    </Fragment>
  )

  return (
    <div className="navigation-wrapper">
      <div className='logo-wrapper'>
        <img src={logo} alt="zerodev" />
      </div>
      <ul>
        {links}
      </ul>
    </div>
  )
}

export default Navbar
