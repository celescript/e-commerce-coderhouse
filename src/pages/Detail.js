import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom'

const Detail = () => {
    const params = useParams()

    return (
        <div>
            <ItemDetailContainer params={params}/>
        </div>
    )
}

export default Detail
