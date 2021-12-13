
import './Item..css'


const Item = ({data}) => {
    const { title, description, price, image} = data

    return(
    <div className= 'item-container'>
            <div className='item-img'>
                <img width='249px' alt={description} src={image} />
            </div>

            
            <div className='item-name'>
                    <h1> {title}</h1>

                    <h2>${price}</h2>
            </div>

    </div>)
}



export default Item