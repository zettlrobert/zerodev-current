import React, { useReducer } from 'react';

import CarouselContext from './carouselContext';
import carouselReducer from './carouselReducer';


import {
  GET_CAROUSELITEM
} from '../types';


const CarouselState = props => {
  const initalState = {
    carouselItems: null,
    current: null,
    error: null,
  }

  const [state, dispatch] = useReducer(carouselReducer, initalState);

  carouselItems: [
    {
      title: "I am Robert",
      icon: "account_circle",
      render: false
    }
    , {
      title: "Fullstack Developer",
      icon: "code",
      render: false
    }, {
      title: "UI and UX Designer",
      icon: "swatchbook",
      render: false
    }, {
      title: "Open Source Lover",
      icon: "thumb_up",
      render: false
    }, {
      title: "A personal Solution for you",
      icon: "devices_other",
      render: false
    }
  ]

  render(
    <div>Carousel</div>
  )

};



export default CarouselState;