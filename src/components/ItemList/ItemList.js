import './ItemList.css';
import {Grid} from '@mui/material';
import Item from '../Item/Item';
import { useState, useEffect } from 'react';

const ItemList = () => {
    const [prodX, setProd] = useState([]);
    const productos = [
        {
            id: "00",
            nombre: "Balizas",
            precio : 1000,
            imagen : "01_balizas.png",
            stock: 10
        },
        {
            id: "01",
            nombre : "Bornes",
            precio : 2000,
            imagen : "02_bornes.png",
            stock: 20
        },
        {
            id: "02",
            nombre : "PLC",
            precio : 3000,
            imagen : "03_plc.png",
            stock: 30
        },
        {
            id: "03",
            nombre : "Fuente",
            precio : 4000,
            imagen : "04_fuentes.png",
            stock: 40
        }
    ];
    const getProductos = () =>{
        return new Promise ( (resolve,reject)=>{
            setTimeout(() => {
                resolve(productos)        
            },2000);
        });
    };

    useEffect( () => {
        getProductos()
            .then((res) => {
                setProd(res);
            })    
    },[]);
    
    return (
        <>                     
            <Grid container>
                {
                    prodX.map( ({nombre,precio,imagen,stock,id}) => {
                        return(
                            <Grid item md={3} key={id}>
                                <Item nombreProducto={nombre} precioProducto={precio} imagenProducto={imagen} stockProducto={stock}/>
                            </Grid>
                        )
                    })
                }
            </Grid>  
        </>  
    )    
}

export default ItemList