import './ItemList.css';
import {Grid} from '@mui/material';
import CardProducto from '../Card/Card';

const ItemListContainer = ({title}) => {
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

    const box = [];
    for (let i=0; i<4; i++){
        box.push(
            <Grid item md={3}>
                <CardProducto nombreProducto={productos[i].nombre} precioProducto={productos[i].precio} imagenProducto={productos[i].imagen}/>
            </Grid>
        );
    }
    return (
        <>
            <h2 className="titulo-h2">{title}</h2>
            <Grid container>
                {box}
            </Grid>  
        </>  
    )    
}

export default ItemListContainer