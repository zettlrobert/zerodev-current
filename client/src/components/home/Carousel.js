import React, { useState, useEffect, Fragment } from 'react'

import '../../scss/carousel.scss';

const Carousel = ({ animationTimer = 4000 }) => {
  const [render, setRender] = useState(0);

  const items = [
    {
      id: '1',
      title: "I am Robert",
      icon: "account_circle",
    }
    , {
      id: '2',
      title: "Fullstack Developer",
      icon: "code",
    }, {
      id: '3',
      title: "UI and UX Designer",
      icon: "swatchbook",
    }, {
      id: '4',
      title: "Open Source Lover",
      icon: "thumb_up",
    }, {
      id: '5',
      title: "A personal Solution for you",
      icon: "devices_other",
    }
  ]



  useEffect(() => {
    const intervall = setInterval(() => {
      // console.log("carousel running");

      setRender(state => (state + 1) % items.length);



    }, animationTimer)

    return () => clearInterval(intervall)

  })

  return (
    <Fragment>
      <div className="Gallery">
        {items.map((item, index) =>
          <div
            key={item.id}
            className={"Gallery-item" +
              (render === index ? "Gallery-item--selected" : "")}
          >

            <i className="material-icons gradient">{item.icon}</i>
            <h2 className="slogan">{item.title}</h2>

          </div>)}

      </div>
    </Fragment >
  )
}

export default Carousel
