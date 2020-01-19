import React, { useReducer } from 'react';

import CarouselContext from './carouselContext';
import carouselReducer from './carouselReducer;
'


import {
  GET_CAROUSELITEM
} from '../types';


const CarouselState = props => {
  const initalState = {
    carouselItems: null,
    current: null,
    error: null,
  }


  const [state, dispatch] = useReducer(carouselReducer);


  // Action CRUD


}


export default CarouselState;