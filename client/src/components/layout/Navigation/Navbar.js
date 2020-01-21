import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


import logo from '../../../assets/logo.svg'
import '../../../scss/navbar.scss'

const Navbar = (props) => {
  const { drawerClickHandler } = props;

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
    <Fragment>
      <Fragment>
        <div className="navigation-wrapper">
          <div className='logo-wrapper'>
            <img src={logo} alt="zerodev" />
          </div>
          <ul className="desktop-nav-ul">
            <Link to='/' onClick={drawerClickHandler} className="menu-button" data-target=".mobile-nav">
              <i className="material-icons">menu</i>
            </Link>
            <div className="desktop-nav">
              {links}
            </div>
          </ul>
        </div>
      </Fragment>
      <Fragment>
        <div className="gradient-line"></div>
      </Fragment>
    </Fragment>
  )
}

export default Navbar
