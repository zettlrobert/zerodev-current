import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import CarouselContext from './carouselContext';
import carouselReducer from './carouselReducer';
import {
  GET_CAROUSELITEMS,
  RENDER_CAROUSELITEMS
} from '../types';

const CarouselState = props => {
  const initalState = {

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

  };

  const [state, dispatch] = useReducer(carouselReducer, initalState);

  //Actions
  const changeRender = () => {

    state.carouselItems.forEach((item, index) => {
      setTimeout(() => {
        console.log(`Hello from State: ${item}`);



      }, index * 1000)
    })

    dispatch({
      type: RENDER_CAROUSELITEMS,
      payload: state.carouselItems.render
    })

  }


  return (
    <CarouselContext.Provider
      value={{
        carouselItems: state.carouselItems,
        changeRender
      }}>
      {props.children}
    </CarouselContext.Provider>
  )

}


export default CarouselState;