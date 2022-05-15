import {Grid} from '@mui/material';
import CardProducto from '../Card/Card';

const ItemListContainer = () => {
    const productos = [
        {
            nombre: "Balizas",
            precio : 1000,
            imagen : "01_balizas.png"
        },
        {
            nombre : "Bornes",
            precio : 2000,
            imagen : "02_bornes.png"
        },
        {
            nombre : "PLC",
            precio : 3000,
            imagen : "03_plc.png"
        },
        {
            nombre : "Fuente",
            precio : 4000,
            imagen : "04_fuentes.png"
        }
    ];
    return (
        <Grid container>
            <Grid item md={3}>
                <CardProducto nombreProducto={productos[0].nombre} precioProducto={productos[0].precio} imagenProducto={productos[0].imagen}/>
            </Grid>
            <Grid item md={3}>
                <CardProducto nombreProducto={productos[1].nombre} precioProducto={productos[1].precio} imagenProducto={productos[1].imagen}/>
            </Grid>
            <Grid item md={3}>
                <CardProducto nombreProducto={productos[2].nombre} precioProducto={productos[2].precio} imagenProducto={productos[2].imagen}/>
            </Grid>
            <Grid item md={3}>
                <CardProducto nombreProducto={productos[3].nombre} precioProducto={productos[3].precio} imagenProducto={productos[3].imagen}/>
            </Grid>
        </Grid>    
    )    
}

export default ItemListContainer