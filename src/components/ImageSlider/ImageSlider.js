import React from 'react'

import './ImageSlider.css'

import img3 from '../../assets/itemhero.png'
import img2 from '../../assets/shippinghero.png'
import img1 from '../../assets/leatherbiker.png'

import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { Link } from 'react-router-dom'



function ImageSlider() {
    return (
      
      <Carousel className='main-slide' showThumbs={false}>
        <Link to='/product/16'>
          <div className='slide'>
            <img className='slide-image' src={img1} alt='#'></img>
          </div>
          </Link>
        <Link to='/category/all'>
          <div className='slide'>
            <img  className='slide-image' src={img2} alt='#'></img>
          </div>
          </Link>
        <Link to='/product/14'>
          <div  className='slide'>
            <img  className='slide-image'  src={img3} alt='#'></img>
          </div>
          </Link>
      </Carousel>

    
    )
        }

export default ImageSlider
