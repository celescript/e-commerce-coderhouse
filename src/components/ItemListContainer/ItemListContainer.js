import './ItemListContainer.css'
import { useState , useEffect} from 'react'

import ItemList from '../ItemList/ItemList'

import { Button } from '@mui/material'
import {Link, useParams} from 'react-router-dom'

import { collection, getDocs } from 'firebase/firestore' //collection permitira acceder a la coleccion y get docs a obtener los documentos
import db from '../../firebase/firebaseconfig'


const ItemListContainer = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState('all')
    const categories = ['perfume', 'creams', "serums", "face masks"]
    
    
    useEffect(() => {
        setLoading(true)
        const getData = async() => {
            const dataFS = await getDocs(collection( db, 'products'))
            const productsFS = dataFS.docs.map(doc => {
                let product = doc.data()
                product.id = doc.id
                return product})
            setData(productsFS.filter((item) => (params.id === 'all' || activeCategory === 'all') ? 
                    productsFS : 
                    item.category === activeCategory))
            setLoading(false)
            
        }
        getData()
        
        
    }, [params.id, activeCategory, data.id])

    return (
        <>   
                
        <div className='category-container'>

            <Link onClick={()=>{setActiveCategory('all')}} className='link' to={`/category/all`}>

                <Button color={(params.id === 'all') && 'secondary'} variant='outlined' >all</Button>

            </Link>

            {
                categories.map((category) => {
                    return(
                        <Link 
                        onClick={()=>{setActiveCategory(category)}} 
                        className='link' 
                        to={`/category/${category}`}
                        key={category}>

                            <Button 
                            color={(activeCategory === category && params.id !== "all") && 'secondary'} 
                            variant='outlined' >{category}</Button>

                        </Link>
                    )
        
                })
            }
                
                
                </div>

                <ItemList data={data} loader={loading} />
            
        </>
    )   
}

export default ItemListContainer