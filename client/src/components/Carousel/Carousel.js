import React, { useContext, Fragment, useEffect } from 'react'
import CarouselContext from '../../context/carousel/carouselContext';
import CarouselItem from './CarouselItem';
import carouselReducer from '../../context/carousel/carouselReducer';

const Carousel = () => {
  const carouselContext = useContext(CarouselContext);

  const { carouselItems, changeRender } = carouselContext;

  useEffect(() => {
    changeRender();
    // carouselAnimaiton(carouselItems);

  }, [])


  const carouselAnimaiton = carouselItems => {
    console.log(`carouselItems Length:${carouselItems.length}`)

    carouselItems.map((item, index) => {
      console.log(`${index}`);
      console.log(item)
      console.log(item.position);
    })
    // setInterval(() => {
    //   console.log(counter);
    //   counter++
    // }, 1000)

    // if (counter <= carouselItems.length) {
    //   carouselItems.forEach((item, index) => {
    //     setTimeout(() => {
    //       console.log(counter)
    //       item.position = true
    //       counter++
    //       console.log(item.title)
    //     }, index * 1000);
    //   })
    // }

  }



  return (
    <Fragment>
      {
        carouselItems.map(carouselItem => (
          carouselItem.render ? (

            < CarouselItem
              key={carouselItem.title}
              carouselItem={carouselItem}
            />

          ) : (
              null
            )


        ))


      }
    </Fragment>
  )
}

export default Carousel
