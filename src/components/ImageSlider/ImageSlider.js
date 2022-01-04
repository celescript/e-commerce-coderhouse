import React from 'react'
import img3 from '../../assets/itemhero.png'
import img2 from '../../assets/shippinghero.png'
import img1 from '../../assets/leatherbiker.png'
import './ImageSlider.css'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


function ImageSlider() {
  
	


    return (
      <Carousel className='main-slide'>
        <div className='slide'>
          <img className='slide-image' src={img1} alt='#'></img>
        </div>
        <div className='slide'>
          <img  className='slide-image' src={img2} alt='#'></img>
        </div>
        <div  className='slide'>
          <img  className='slide-image'  src={img3} alt='#'></img>
        </div>
      </Carousel>

    
    )
        }

export default ImageSlider
