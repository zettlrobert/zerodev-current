import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import logo from '../../../assets/logo.svg'
import '../../../scss/navbar.scss'

const Navbar = (props) => {
  const location = useLocation();

  useEffect(() => {
   // console.log(location.pathname);

  })



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
      <div className="Navbar-wrapper">
        <div className="navigation-wrapper">
          <div className='logo-wrapper'>
            <Link className="link-item" to='/'>
              <img src={logo} alt="zerodev" />
            </Link>
          </div>
          <ul className="desktop-nav-ul">
            <Link to='' onClick={drawerClickHandler} className="menu-button" data-target=".mobile-nav">
              <i className="material-icons">menu</i>
            </Link>
            <div className="desktop-nav">
              {links}
            </div>
          </ul>
        </div>

        <div className="gradient-line"></div>
      </div>
    </Fragment>
  )
}

export default Navbar
