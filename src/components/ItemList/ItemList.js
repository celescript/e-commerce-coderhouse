
import { CircularProgress} from "@mui/material"
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({datos, loader}) => {

    return(
        <>
        { loader ? <div className='loading'><CircularProgress /></div> : 
        <div className='item'>
            {datos.map( product => {
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