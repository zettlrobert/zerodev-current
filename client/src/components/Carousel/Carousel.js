import React, { Fragment, useEffect } from 'react'

import '../../scss/main.scss';
import CarouselItem from './CarouselItem';

const Carousel = () => {
  useEffect(() => {

    for (let i = 0; i <= data.length; i++) {

      console.log(data[i])

    }

  })


  const data = [
    {
      title: 'I am Robert',
      icon: 'account_circle'
    },
    {
      title: 'Fullstack Developer',
      icon: 'code'
    },
    {
      title: 'UI and UX Designer',
      icon: 'swatchbook'
    }
  ]


  return (
    <Fragment>
      <div className="carousel-container">
        <CarouselItem />

      </div>

    </Fragment>
  )
}

export default Carousel
