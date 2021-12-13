
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({datos}) => {

    const {title, description, price, image} = datos

    console.log(datos)
    
    return (
        <div className='itemdetail-container'>
            <div className='img-container'>
                <img alt={description} src={image} />
            </div>

            <div className='text-container'>
                <h1 className='h1-detail'>{title}</h1>
                <p className='p-detail'>{description}</p>

                <h2 className='h2-detail'>${price}</h2>
                
                <ItemCount stock={price} />                
            </div>
        </div>
    )
}

export default ItemDetail

