import './ItemCount.css'
import Button from '@mui/material/Button';
import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';

const ItemCount = ({stock, initial, onAdd,setShowState,itemProducto}) => {
    const [count, setCount] = useState(initial);
    const{ addProduct } = useContext(CartContext);

    const handleClick = () => {
        /*console.log(`Productos: ${onAdd}, Cantidades: ${count}`);*/
        setShowState(true);
        itemProducto = {
            ...itemProducto,
            cantidadComprada:count
        }
        addProduct(itemProducto);
    }
    
    return (
        <div className="container__gral">
            <div className="itemcount">
                <Button variant="outlined" onClick={() => setCount(count - 1)} disabled={count<1}>-</Button>
                <p>{count}</p>
                <Button variant="outlined" onClick={() => setCount(count + 1)} disabled={count>=stock}>+</Button>          
            </div>
            <div className="container-btn">
                <Button variant="contained" onClick={handleClick} disabled={stock===0 || count===0} className="btn-carrito">AGREGAR AL CARRITO</Button>
            </div>
        </div>      
    )    
}

export default ItemCount

