import React, { Fragment, useEffect } from 'react'

import Navbar from '../layout/Navbar';


const Home = () => {

  const sliderData = [
    {
      title: 'Fullstack Developer',
      desc: 'Mern Stack Devleoper',
      icon: '<i className="material-icons">code</i>'
    },
    {
      title: 'Open Source Lover',
      desc: 'I support and love Open Source Projects',
      icon: '<i className="material-icons">osi</i>'
    },

  ]



  return (
    <Fragment>
      <Navbar />
      <h1>HOME</h1>
      {sliderData.map(element => {
        console.log(element.title)

      })}
    </Fragment>
  )
}

export default Home
