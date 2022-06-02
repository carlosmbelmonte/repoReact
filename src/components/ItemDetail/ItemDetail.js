import {Grid} from '@mui/material';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
    const[showState, setShowState]= useState(false);

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
                    <Grid className="grid-interno" container spacing={0}>
                        <Grid item md={6}>
                            
                            {showState===false ?
                                <ItemCount stock={data.stock} initial={1} onAdd={data.nombre} setShowState={setShowState}/> 
                                : 
                                <Button variant="contained" className="endCompra"><Link to ="/cart">Finalizar Compra</Link></Button>  
                            } 
                              
                        </Grid>     
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