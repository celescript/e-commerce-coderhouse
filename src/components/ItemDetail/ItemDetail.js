
import React from 'react'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../contexts/CartContext/CartContext'


import './ItemDetail.css'


const ItemDetail = ({datos}) => {
    const {addProduct} = useContext(CartContext)

    const {title, description, price, image} = datos

    const [cartData, setCartData] = useState({
        title: title,
        image: image,
        price: price,
        quantity: 0    
    })
    
    const onAdd = (item) => {
        
        setCartData(cartData.quantity = item)
        setCartData(cartData)
        addProduct(cartData)
    }
    

    
    


    

    return (
        <div className='itemdetail-container'>
            <div className='img-container'>
                <img className='itemdetail-img' alt={description} src={image} />
            </div>

            <div className='text-container'>
                <h1 className='h1-detail'>{title}</h1>
                <p className='p-detail'>{description}</p>

                <h2 className='h2-detail'>${price}</h2>
                
                <ItemCount stock={price} onAdd={onAdd} />                
            </div>
        </div>
    )
}

export default ItemDetail

