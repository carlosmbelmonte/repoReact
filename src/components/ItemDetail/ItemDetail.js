import {Grid} from '@mui/material';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({data}) => {
    const[showState, setShowState]= useState(false);
    const{ addItem } = useContext(CartContext);


    const agregarCantidadAlCarrito = (cantidad) => {
        data = {
            ...data,
            quantity:cantidad
        }
        addItem(data); 
        //setNewData(data);       
    }

    return (
        <>
            <Grid className="border-grid" container spacing={0}>
                <Grid className="border-gridSpacing" item md={4}>
                    <img className="img-Detail" alt="FOTO PRODUCTO" src={`../${data.imagen}`} />
                </Grid>

                <Grid className="border-gridSpacing" item md={6}>
                    <h2 className="h2-Detail">{data.nombre}</h2>
                    <div className="div-Detail">
                        <p>{data.descripcion}</p>
                        <p>Id: {data.id}</p>     
                    </div>
                    <Grid container spacing={0}>
                        <Grid  item md={6}>
                            <div className="grid-interno">
                                {showState===false ?
                                    <ItemCount stock={data.stock} initial={1} onAdd={agregarCantidadAlCarrito} setShowState={setShowState} itemProducto={data}/> 
                                    :
                                    <div className="container-btn"><Button variant="contained" className="btn__end"><Link to ="/cart" className="link-end">Ver Carrito</Link></Button></div> 
                                }     
                            </div>      
                        </Grid>  
                        <Grid item md={6}></Grid>   
                    </Grid>                                   
                </Grid>

                <Grid item md={2}>
                    <h2 className="h2-Detail">Precio</h2>
                    <div className="div-Detail">
                        <p>u$s {data.precio}</p>    
                    </div>                    
                </Grid>
            </Grid>
             
        </>  
    ) 
}

export default ItemDetail