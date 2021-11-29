import { CardContent, CardActions, Button, ButtonGroup, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from "@mui/material/Card";
import { useState } from "react";


export default function ItemCount({stock}) {
    const [item, setItemCount] = useState(0)

    const sumaItem = () => {
        item <= stock && setItemCount(item + 1)
    }

    const restaItem = () => {
        item > 0 && setItemCount(item - 1) 
        } 

    

    return(

        <Card className='card__container' align='center' style={{background: '#eee'}} >
            <CardContent>
                <h2> Remera </h2>
            </CardContent>
            <Divider variant="middle" />
            <ButtonGroup orientation='vertical'>
            <CardActions>
                <ButtonGroup variant="contained">
                    
                    <Button 
                    disabled={item === 0} onClick={restaItem} ><RemoveIcon /></Button>
                    <span style={{padding: '0.4em 3em', background: 'white'}}> {item} </span>
                    <Button disabled={item >= stock}  onClick={sumaItem}><AddIcon /></Button>
                    
                </ButtonGroup>
                
            </CardActions>
            <CardActions ><Button disabled={item === 0} variant="outlined" style={{margin: '0 auto', background: 'white'}}> Agregar al carrito </Button></CardActions>
            </ButtonGroup>
        </Card>
    )

}

