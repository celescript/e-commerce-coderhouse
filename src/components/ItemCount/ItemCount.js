import { Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import './ItemCount.css'

export default function ItemCount({stock}) {
    
    const [item, setItemCount] = useState(0)
    const [stockNow, updateStock] = useState(stock)

    const sumaItem = () => {
        item <= stock && setItemCount(item + 1) 
    }

    const restaItem = () => {
        item > 0 && setItemCount(item - 1) 
    } 

    const handleClick = () => {
        updateStock(stock = stockNow - item)
    }
   

    

    return(
         <>   
            <div className='all-buttons'>
                <div className='button-container'>
                    <Button disabled={item <= 0} onClick={restaItem} ><RemoveIcon /></Button>       <span style={{padding: '0.4em 3em', background: 'white'}}> {item} </span><Button disabled={item >= stockNow}  onClick={sumaItem}><AddIcon /></Button>
                            
        
                </div>
                <Button className='cart-button' onClick={handleClick} disabled={item === 0 || stockNow <= 0} variant="outlined" style={{margin: '0 auto', background: 'white'}}> ADD TO CART </Button>
                
            </div>


            <span className='stock-products'>
                { 
                (stockNow <= 0) ? <p> OUT OF STOCK</p> : <p>Available stock: {stockNow}</p>
                }
            </span>
    
        </>     
    )

}

