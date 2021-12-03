import { useState, useEffect } from "react"
import { CircularProgress} from "@mui/material"
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    const productInfo = [
        {
            id: 1,
            title: 'PRODUCT 1',
            description: 'random description',
            price: 500,
            stock: 50, 
            img: '1.jpg',
        },
        {
            id: 2,
            title: 'PRODUCT 2',
            description: 'random description',
            price: 750,
            stock: 20, 
            img: '2.jpg'
        },
       {
            id: 3,
            title: 'PRODUCT 3',
            description: 'random description',
            price: 570,
            stock: 5, 
            img: '3.jpg'
        },
        {
            id: 4,
            title: 'PRODUCT 4',
            description: 'random description',
            price: 660,
            stock: 15, 
            img: '4.jpg'
        },
        {
            id: 5,
            title: 'PRODUCT 5',
            description: 'random description',
            price: 800,
            stock: 33, 
            img: '5.jpg'
        },
        {
            id: 6,
            title: 'PRODUCT 6',
            description: 'random description',
            price: 800,
            stock: 5, 
            img: '6.jpg'
        }
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(productInfo)
        },3000)
        
    })

    useEffect(() => {
        
        getProducts
            .then((data) => {
                setProducts(data)
                setLoader(false)
            })
    }, [])



    


    return(
        <>
        { loader ? <div className='loader'><CircularProgress /></div> : 
        <div className='item'>
            {products.map( product => {
                return (
                    
                        <Item key={product.id} data={product} />
                    
                    
                )
            }


            )}
        </div>
        

        }
        
        </>
    )
} 


export default ItemList