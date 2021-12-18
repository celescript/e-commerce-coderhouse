
import { useState , useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


import { CircularProgress } from '@mui/material'




const ItemDetailContainer = ({params}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)



    
    
    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then((response) => response.json())
        .then((res) => setData(res))
        .finally(() => {
            setLoading(false)
        })
    }, [params.id])
    


    return (
        
        <>
        { loading ? <div className='loading'><CircularProgress /></div> : <ItemDetail datos={data}  />}
        </>
                
    )   
   
}

export default ItemDetailContainer
