import React, { useEffect, useState } from 'react'

import '../../scss/carouselItem.scss';

const CarouselItem = ({ carouselItem }) => {

  const { changeRender, title, icon, render } = carouselItem

  return (
    <div className="carouselItem-container">
      <div className="carouselItems">
        <i className="material-icons">{icon}</i>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default CarouselItem
