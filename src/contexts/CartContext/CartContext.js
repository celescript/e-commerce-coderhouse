import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        console.log(product)
        setProducts(products => [...products, product])
    }

    const data ={ 
        products,
        addProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider}
export default CartContext
