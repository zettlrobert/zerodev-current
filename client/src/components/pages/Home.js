import React from 'react'

import Carousel from '../home/Carousel'
import SocialMedia from '../home/SocialMedia'
import Footer from '../layout/Footer/Footer';

import '../../scss/home.scss'

const Home = () => {
  return (
    <div>
      <Carousel />
      <SocialMedia />
      <div className="footer-warpper">
        <Footer />
      </div>
    </div>
  )
}

export default Home
