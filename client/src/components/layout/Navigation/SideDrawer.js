import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';

import '../../../scss/sideDrawer.scss';

const SideDrawer = props => {

  useEffect(() => {
    console.log("drawer mounted")
  })


  let drawerClasses = ['side-drawer']
  if (props.show) {
    drawerClasses = ['side-drawer open']
  }

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
    <div className={drawerClasses}>
      <ul className="mobile-nav-ul">
        {links}
      </ul>
    </div>
  )
}

export default SideDrawer
