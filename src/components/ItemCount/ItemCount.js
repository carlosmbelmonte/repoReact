import './ItemCount.css'
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd,setShowState}) => {
    const [count, setCount] = useState(initial);

    const handleClick = () => {
        console.log(`Productos: ${onAdd}, Cantidades: ${count}`);
        setShowState(true);
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

