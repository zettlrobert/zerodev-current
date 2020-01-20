import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png'
import '../../scss/navbar.scss';


const Navigation = () => {

  useEffect(() => {

  })

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
      <nav className="navStyle">
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo left" ><img className="logoStyle" src={Logo} alt="" /></Link>

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


export default Navigation