import ItemList from '../ItemList/ItemList'
import {urlAPI} from '../../config'
import { useState , useEffect} from 'react'

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
        
                <ItemList datos={data} loader={loading} />
                
    )   
}

export default ItemListContainer