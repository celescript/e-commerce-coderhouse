
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
    return (
        <div className='container'>
            <h2>Nuestro Catalogo</h2>

            <ItemCount stock={10}  />
        </div>
    )   
}

export default ItemListContainer