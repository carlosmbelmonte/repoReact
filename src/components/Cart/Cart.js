import {Grid} from '@mui/material';
import './Cart.css';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const{ cart, clear, removeItem, sumatoria,boton, setBoton } = useContext(CartContext);
    const[deleteAll, setDeleteAll]= useState(false);
    const[delItem, setDelItem]= useState(false);

    const[endShop, setEndShop]= useState(boton);

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
                                                {/*<Button variant="contained" className="cart__btnItem" onClick={() => deleteItem(elemento.nombre)} startIcon={<DeleteIcon />}>Eliminar Producto</Button>*/}
                                                <DisplayBtnDelete condition={endShop} posicion={"individual"} nVar={elemento.nombre}/>
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

    const ejecutarCompra = () => {
        //setEndShop(false);
        setBoton(false);
    }

    function DisplayElements({condition}){
        if(condition>0){
            return(
                <>
                    <h3 className="h2-item">El precio Total de su compra es: u$s {sumatoria("precios")}</h3>
                    {/*<div className="cart-delete-btn">
                            
                    </div>*/}
                    {/*console.log("items actuales en page cart: ",sumatoria("cantidades"))*/}

                    <form className="form-container">
                        <h2 className="form__h2">Complete sus datos</h2>
                        <div className="form__div">
                            <label className="form__label">Nombre y Apellido</label>
                            <input className="form__input" type="text" placeholder="Ingrese su Nombre/Apellido"/>
                        </div>
                        <div className="form__div">
                            <label className="form__label">Telefono</label>
                            <input className="form__input" type="number" placeholder="Ingrese su Telefono"/>
                        </div>
                        <div className="form__div">
                            <label className="form__label">Email</label>
                            <input className="form__input" type="email" placeholder="Ingrese su Email"/>
                        </div>
                        <div className="form__btncontainer">
                            {/*<input type="submit" value="Finalizar compra" />*/}
                            <div className="form__divbtn">
                                <Button variant="contained" className='form__btn' onClick={()=>ejecutarCompra()}>Finalizar compra</Button>    
                            </div>
                            <div className="form__divbtn"> 
                                {/*<Button variant="contained" className='form__btn' onClick={deleteTodo} startIcon={<DeleteIcon />}>Vaciar carrito</Button>*/}    
                                <DisplayBtnDelete condition={endShop} posicion={"general"}/>
                            </div>    
                        </div>
                    </form>
                </>
            )
        }else{
            return(
                <>
                    <h2>No hay productos en el carrito!!!</h2> 
                    <div className="cart-delete-btn">
                        <Button variant="contained" className='cart__btn'><Link to ="/products" className="link-end">VER PRODUCTOS</Link></Button>    
                    </div>
                    {/*console.log("items actuales en page cart: ",sumatoria("cantidades"))*/}
                </>
            )
        }
    }

    function DisplayBtnDelete({condition, posicion, nVar}){
        if(condition===true){
            if(posicion === "general"){
                return(
                    <>
                        <Button variant="contained" className='form__btn' onClick={deleteTodo} startIcon={<DeleteIcon />}>Vaciar carrito</Button>
                    </>
                )    
            }
            if(posicion === "individual"){
                return(
                    <>
                        <Button variant="contained" className="cart__btnItem" onClick={() => deleteItem(nVar)} startIcon={<DeleteIcon />}>Eliminar Producto</Button>
                    </>
                )    
            }
            
        }else{
            if(posicion === "general"){
                return(
                    <>
                        <Button variant="contained" className='form__btn' onClick={deleteTodo} startIcon={<DeleteIcon />} disabled>Vaciar carrito</Button>
                    </>
                )    
            }
            if(posicion === "individual"){
                return(
                    <>
                        <Button variant="contained" className="cart__btnItem" onClick={() => deleteItem(nVar)} startIcon={<DeleteIcon />} disabled>Eliminar Producto</Button>
                    </>
                )    
            }
            
        }
    }

    return(
        <div className='cart-container'>
            {/*console.log("Productos existentes en PAGINA CARRITO", cart)*/}
            {imprimir()} 
            <DisplayElements condition={cart.length}/>                      
        </div>
        
    )
}

export default Cart