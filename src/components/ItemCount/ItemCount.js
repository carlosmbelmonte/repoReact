import './ItemCount.css'
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const funcion = (a) => {
    return(
        <>
        {a && <p>PRUEBA</p>} 
        </>              
    )      
}

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const [varX, setVarX] = useState(false);

    const handleClick = () => {
        setVarX(true);
        console.log(`Producto: ${onAdd}, Cantidad: ${count}`);
    }

    
    
    return (
        <div>
            <div className="itemcount-container">
                <Button variant="outlined" onClick={() => setCount(count - 1)} disabled={count<1}>-</Button>
                <p>{count}</p>
                <Button variant="outlined" onClick={() => setCount(count + 1)} disabled={count>=stock}>+</Button>          
            </div>
            <div className="container-btn">
                <Button variant="contained" onClick={handleClick} disabled={stock===0 || count===0} className="btn-carrito">AGREGAR AL CARRITO</Button>
            </div>
            {funcion(varX)}
        </div>      
    )    
}

export default ItemCount
export {funcion}
