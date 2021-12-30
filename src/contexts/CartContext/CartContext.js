import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        console.log(product)

        const exists = products.find(item => item.title === product.title)
        
        exists ? 
        setProducts(products.map(
            x => x.title === product.title ? 
            {...exists, quantity: exists.quantity + product.quantity } 
            : x)) :
        setProducts(products => [...products, product])

    }
    
    const onRemove = (item) => {
        setProducts(products.filter(x => x.title !== item.title)
            )
    }

    const clear = () => {
        setProducts([])
    }

    // const totalArray = (products) => {
    //     products.map(product => 
    //         setTotalProducts(totalProducts => [...totalProducts, product.quantity * product.price]) )

    //     return (totalProducts.reduce(function(acc, curr){ acc + curr}))
    // }

    const total = products.reduce(function (acc, curr) {
        return acc + curr.quantity * curr.price;
    },0);

   


    const data ={ 
        products,
        addProduct,
        onRemove,
        clear,
        total
    }

   

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider}
export default CartContext
