import {
  GET_CAROUSELITEM
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CAROUSELITEM;
      return {
        ...state
      }
  }
}