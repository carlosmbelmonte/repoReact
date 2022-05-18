import './ItemCount.css'
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);
    return (
        <div className="itemcount-container">
            <Button variant="outlined" onClick={() => setCount(count - 1)} disabled={count<1}>-</Button>
            <p>{count}</p>
            <Button variant="outlined" onClick={() => setCount(count + 1)} disabled={count>=stock}>+</Button>      
        </div>      
    )
    
}

export default ItemCount

