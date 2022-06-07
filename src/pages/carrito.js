import {Grid} from '@mui/material';
import '../pages/styles/carrito.css'
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';

const Carrito = () => {
    const{ cart, clearAll, eliminarItem } = useContext(CartContext);
    const[deleteAll, setDeleteAll]= useState(true);
    const[delItem, setDelItem]= useState(false);

    const deleteTodo = () => {
        setDeleteAll(false);
        clearAll();
    }

    const deleteItem = (name) => {
        eliminarItem(name);
        //console.log(name)
        setDelItem(true);
    }

    const otrogridMap = () => {
        return(
            cart.map( (elemento) => {
                return(
                    <>
                        <Grid key={elemento.id} className="grid-container" container spacing={0}>
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
                            <Grid item md={3} >
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
        if(deleteAll === true && cart.length !== 0){
            if(delItem===false){
                return(
                    otrogridMap()
                )    
            }else{
                setDelItem(false) 
                return(
                    otrogridMap()    
                )      
            }                
        }else{
            return(
                <h2>El carrito esta vacio!!!</h2>   
            )
        }
        


    }

    return(
        <div className='cart-container'>
            {console.log("Productos existentes en PAGINA CARRITO", cart)}
            {imprimir()} 
            <div className="cart-delete-btn">
                <Button variant="contained" className='cart__btn' onClick={deleteTodo}>Vaciar carrito</Button>    
            </div>            
        </div>
        
    )
}

export default Carrito