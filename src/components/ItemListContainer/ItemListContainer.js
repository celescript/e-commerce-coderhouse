import ItemList from '../ItemList/ItemList'
import {urlAPI} from '../../config'
import { useState , useEffect} from 'react'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch(urlAPI)
        .then((response) => response.json())
        .then((res) => setData(res))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    

    return (
            <>   
            
               <div className='category-container'>
                    <Button variant='outlined'>Electronics</Button>
                    <Button variant='outlined'>Jewelery</Button>
                    <Button variant='outlined'>Men's clothing</Button>
                    <Button variant='outlined'>Women's clothing</Button>
                </div>

                <ItemList datos={data} loader={loading} />
            
            </>
    )   
}

export default ItemListContainer