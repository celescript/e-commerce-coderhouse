
import { Divider } from "@mui/material";
import ItemCount from '../ItemCount/ItemCount';
import './Item..css'





const Item = ({data}) => {
    const { title, description, price, stock, img } = data
    
    return(
    <div className= 'item-container'>
            <div className='item-img'>
                <img width='249px' alt={description} src={`../../assets/${img}`} />
            </div>

            <div className='item-text-container'>
                <div className='item-name'>
                    <h1> {title}</h1>
                    <h2>${price}</h2>
                </div>

                <Divider variant="middle" />

                <div className='item-buttons'>
                    {/* ITEM COUNT */}
                    <ItemCount stock={stock} />
                </div>

            </div>
    
    </div>)
}



export default Item