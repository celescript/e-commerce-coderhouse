
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const CartWidget = () => {
    return (
        <div className='cart-container'>
            <IconButton aria-label="add to shopping cart"> 
                <ShoppingCartIcon />
            </IconButton>
        </div>
    )
}

export default CartWidget