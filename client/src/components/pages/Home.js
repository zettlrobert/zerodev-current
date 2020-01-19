import React, { Fragment, useEffect } from 'react'

import Navbar from '../layout/Navbar';
import Carousel from '../Carousel/Carousel'

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

      <Carousel />
    </Fragment>
  )
}

export default Home
