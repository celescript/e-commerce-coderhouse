import ItemList from '../ItemList/ItemList'
import {urlAPI} from '../../config'
import { useState , useEffect} from 'react'
import { Button } from '@mui/material'
import {Link, useParams} from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState('all')
    const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"]
    
    
    
    useEffect(() => {
        setLoading(true)
        fetch(urlAPI)
            .then((response) => response.json())
            .then((res) => setData(res.filter((item) => (params.id === 'all' || activeCategory === 'all') ? res : item.category === activeCategory)))
            .finally(() => {
                setLoading(false)
            })
    }, [params])


   
 
    return (
        <>   
                
            

        <div className='category-container'>

            <Link onClick={()=>{setActiveCategory('all')}} className='link' to={`/category/all`}>

                <Button color={params.id === 'all' && 'secondary' } variant='outlined' >all</Button>

            </Link>

            {
                categories.map((category) => {
                    return(
                        <Link 
                        onClick={()=>{setActiveCategory(category)}} 
                        className='link' 
                        to={`/category/${category}`}>

                            <Button 
                            color={(activeCategory === category && params.id !== "all") && 'secondary'} 
                            variant='outlined' >{category}</Button>

                        </Link>
                    )
        
                })
            }
                
                
                </div>

                <ItemList datos={data} loader={loading} />
            
        </>
    )   
}

export default ItemListContainer