import {Grid} from '@mui/material';
import './Cart.css';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const{ cart, clear, removeItem, sumatoria } = useContext(CartContext);
    const[deleteAll, setDeleteAll]= useState(false);
    const[delItem, setDelItem]= useState(false);

    const deleteTodo = () => {
        setDeleteAll(true);
        clear();
    }

    const deleteItem = (name) => {
        removeItem(name);
        //console.log(name)
        setDelItem(true);
    }

    const gridMap = () => {
        return(
            cart.map( (elemento,i) => {
                return(
                    <>
                        <Grid className="grid-container" container spacing={0}>
                            <Grid item md={3} >
                                <div className="div-img-item">
                                    <img className='img-item' alt="Imagen Item" src={`../${elemento.imagen}`} />    
                                </div>    
                            </Grid>
                            <Grid item md={6} >
                                <h2 className="h2-item">{elemento.nombre}</h2>
                                <div className="p-group">
                                    <div className="p-item">Precio (Unidad): <p className="p-variable">u$s {elemento.precio}</p></div>
                                    <div className="p-item">Cantidad seleccionada: <p className="p-variable">{elemento.quantity}</p></div> 
                                    <div className="p-item">Stock disponible: <p className="p-variable">{elemento.stock}</p></div>   
                                </div>                        
                            </Grid>
                            <Grid item md={3} key={i}>
                                <div>
                                    <ul className="list-group">
                                        <li className="list-group-item">Sub Total: u$s {(elemento.precio)*(elemento.quantity)}</li>
                                        <li className="list-group-item">IVA: u$s {(elemento.precio)*(elemento.quantity)*(0.21)}</li>
                                        <li className="list-group-item">TOTAL: u$s {(elemento.precio)*(elemento.quantity)*(1.21)}</li>
                                        <li className="list-group-item">
                                            <div className="div-btn-ItemDelete">
                                                <Button variant="contained" className="cart__btnItem" onClick={() => deleteItem(elemento.nombre)}>Eliminar Producto</Button>
                                            </div>
                                        </li>
                                    </ul>     
                                </div>                               
                            </Grid>
                        </Grid>
                    </>
                ) 
            })                                               
        )   
    }

    const imprimir = () => {
        if(deleteAll === false && cart.length !== 0){
            if(delItem===false){
                return(
                    gridMap()                 
                )    
            }else{
                setDelItem(false) 
                return(
                    gridMap()                        
                )      
            }                            
        }
    }

    function DisplayElements({condition}){
        if(condition>0){
            return(
                <>
                    <h3 className="h2-item">El precio Total de su compra es: u$s {sumatoria("precios")}</h3>
                    <div className="cart-delete-btn">
                        <Button variant="contained" className='cart__btn' onClick={deleteTodo}>Vaciar carrito</Button>    
                    </div>
                    {console.log("items actuales en page cart: ",sumatoria("cantidades"))}
                </>
            )
        }else{
            return(
                <>
                    <h2>No hay productos en el carrito!!!</h2> 
                    <div className="cart-delete-btn">
                        <Button variant="contained" className='cart__btn'><Link to ="/products" className="link-end">VER PRODUCTOS</Link></Button>    
                    </div>
                    {console.log("items actuales en page cart: ",sumatoria("cantidades"))}
                </>
            )
        }
    }

    return(
        <div className='cart-container'>
            {console.log("Productos existentes en PAGINA CARRITO", cart)}
            {imprimir()} 
            <DisplayElements condition={sumatoria("cantidades")}/>                      
        </div>
        
    )
}

export default Cart