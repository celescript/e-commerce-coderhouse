
import { useState, useContext } from 'react';
import { Cart3 } from 'react-bootstrap-icons';
import './CartWidget.css'
import CartContext from '../../contexts/CartContext/CartContext';

const CartWidget = () => {

    const [isActive, setIsActive] = useState(false)
    const {products} = useContext(CartContext)
    console.log(products)

    return (

        <div className='cart-container'>

            <Cart3 className='cart-icon'  size={15} onClick={()=> setIsActive(!isActive)}  />

            {isActive && 
            <div className='widget-container'>
                {
                products.map( product =>{
                    return (
            
                    <div className='widget-item'>
                        <span className='widget-span'>{product.quantity}</span>        

                        <img src={product.image} alt={product.description}></img>
                        
                        <div className='item-text-container'>
                        <h1 className='cart-text'> {product.title} </h1> 
                        <h2 className='cart-text'>${product.price}</h2>
                        </div>
                    </div>)
                 } )  

                }
            </div>} 

        </div>
    )
}

export default CartWidget