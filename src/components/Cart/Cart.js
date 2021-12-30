import React from 'react'
import CartContext from '../../contexts/CartContext/CartContext'
import { useContext } from 'react'
import { Trash } from 'react-bootstrap-icons'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CartImage from '../../assets/shopping.png'

import './Cart.css'

const Cart = () => {
    const {products, onRemove, total} = useContext(CartContext)


    return (
        <div className='maincart-container'>
            <h1> Your Shopping Cart </h1>
            <hr></hr>
        { products.length > 0 ? 
        <div className='big-container'>
            <div className='maincart-products'>
            
            {products.map(product => {
                return(
                <div id={product.id} className='maincart-product'> 
                    <img src={product.image} alt={product.title}></img>
                    <div className='mainproduct-text'>
                        <h2 className='cartproduct-title'>{product.title}</h2>
                        <h3>${Math.round(product.price)} </h3>
                    </div>
                    <h3 className='total-product'>x{product.quantity}</h3>
                    <h3 className='total-product'>${Math.round(product.price * product.quantity)}</h3>
                    <span className='remove-product'><Trash size={15} onClick={() => onRemove(product)} /></span>
        
                </div> 
            )
            })}
            
            </div> 

        <div className='recipt-container'>
            {
                products.map( product => {
                    return(
                    <div id={product.id} className='recipt-text'> 
                        <p>x{product.quantity} {product.title}</p> 
                        <h3>${product.price * product.quantity}</h3>  
                    </div>)
                }

                )
            }
            <hr></hr>
            <div className='total-container'>
                <h2 className='total-text'>Total: </h2>
                <h2 className='total-price'> ${total} </h2>
            </div>
            <Button color='secondary' variant='outlined'>Pay</Button>

        </div>
        </div>
        
        :
        <div className='empty-cart'>
            <img src={CartImage} alt='cart empty'></img>
            <div className='emptycart-text'>
                <h1> Oh no! Your cart is empty</h1>
                <Link className='link' to='/category/all'>
                    <Button color='secondary' variant='contained'>GO SHOPPING</Button>
                </Link>
            </div>
        </div>

        }

        
        </div>
    )
}

export default Cart
