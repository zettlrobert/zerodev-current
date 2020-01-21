import React, { useEffect, Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

import '../../../scss/sideDrawer.scss';

const SideDrawer = props => {

  let drawerClasses = ['side-drawer']
  if (props.show) {
    drawerClasses = ['side-drawer open']
  }

  const { closeDrawer } = props;


  const links = (
    <Fragment>
      <li>
        <Link onClick={closeDrawer} className="link-item" to='/'>Home</Link>
      </li>
      <li>
        <Link onClick={closeDrawer} className="link-item" to='/projects'>Projects</Link>
      </li>
      <li>
        <Link onClick={closeDrawer} className="link-item" to='/about'>About</Link>
      </li>
      <li>
        <Link onClick={closeDrawer} className="link-item" to='/contact'>Contact</Link>
      </li>
    </Fragment>
  )

  return (
    <div className={drawerClasses}>
      <ul className="mobile-nav-ul">
        {links}
      </ul>
    </div>
  )
}

export default SideDrawer
