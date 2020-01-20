import {
  GET_CAROUSELITEMS, RENDER_CAROUSELITEMS
} from '../types';


export default (state, action) => {
  switch (action.type) {
    case GET_CAROUSELITEMS:
      return {
        ...state,
        carouselItems: action.payload
      }

    case RENDER_CAROUSELITEMS:
      return {
        ...state,
        render: state.carouselItems.map(item => {
          item.render = true
        })

      }

    default:
      return state;
  }
}