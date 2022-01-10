
import { useState , useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


import { CircularProgress } from '@mui/material'

import {doc, getDoc} from 'firebase/firestore'
import db from '../../firebase/firebaseconfig'



const ItemDetailContainer = ({params}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

        
    useEffect(() => {
       setLoading(true)
       async function getData(db) {
           const docRef = doc(db, 'products', params.id)
           const docSnap = await getDoc(docRef)
           if( docSnap.exists() ) {
               let product = docSnap.data()
               product.id = docSnap.id
               setData(product)
               setLoading(false)
           } else {
                console.log('error')
           }
       }
       getData(db)
    }, [params.id])
    


    return (
        
        <>
        { loading ? <div className='loading'><CircularProgress /></div> : <ItemDetail data={data}  />}
        </>
                
    )   
   
}

export default ItemDetailContainer
