
import { CircularProgress, Zoom} from "@mui/material"
import Item from '../Item/Item'
import './ItemList.css'

import {Link} from 'react-router-dom'


const ItemList = ({datos, loader}) => {

    return(
        <>
        { loader ? <div className='loading'><CircularProgress /></div> : 
        <div className='item'>
            {datos.map( product => {
                return (
                       <Zoom in={!loader} key={product.id}><Link className='link' to={`/product/${product.id}`} > 
                        <Item key={product.id} data={product} />
                        </Link>
                        </Zoom>
                    
                )
            }


            )}
        </div>
        

        }
        
        </>
    )
} 


export default ItemList