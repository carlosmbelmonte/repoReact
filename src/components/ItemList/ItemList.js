import './ItemList.css';
import {Grid} from '@mui/material';
import Item from '../Item/Item';

const ItemList = ({array}) => {  
    return (
        <>                     
            <Grid container>
                {
                    array.map( ({nombre,precio,imagen,stock,id}) => {
                        return(
                            <Grid item md={3} key={id}>
                                <Item nombreProducto={nombre} precioProducto={precio} imagenProducto={imagen} stockProducto={stock} idProducto={id}/>
                            </Grid>
                        )
                    })
                }
            </Grid>  
        </>  
    )    
}

export default ItemList