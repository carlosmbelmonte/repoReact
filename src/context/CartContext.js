import { createContext } from "react";
import { useState } from 'react';  

const CartContext = createContext();

const CartContextProvider = ({children}) =>{       
    const [cart, setCart] = useState([]);
    const [preciosItem, setPreciosItem] = useState([]);
    const [quantityItem, setQuantityItem] = useState([]);

    const [prodsInCart, setProdsInCart] = useState(0);
    const [prodsPrice, setProdsPrice] = useState(0);

    const [boton,setBoton]=useState(false);//-------->Sirve para setear los botones del carrito en disabled o enabled
    
    const addItem = (product) =>{
        let isInCart = cart.findIndex( cartItem => cartItem.nombre === product.nombre );
        if (isInCart === -1){
            cart.push(product);           
            preciosItem.push( (product.precio)*(product.quantity)*(1.21) )  
            quantityItem.push(product.quantity);
            setProdsPrice(preciosItem.reduce((a, b) => a + b, 0));
            setProdsInCart(quantityItem.reduce((a, b) => a + b, 0));  
        }else{
            console.log("El producto ya se encontraba en el carrito"); 
        }       
    }

    const removeItem = (nombre) => {         
        let index = cart.findIndex( el => el.nombre === nombre);
        cart.splice(index, 1);
        setCart([...cart]);        

        preciosItem.length = 0;
        quantityItem.length = 0;
        setProdsPrice(0);
        setProdsInCart(0);

        for(let i=0;i<cart.length;i++){
            preciosItem.push( (cart[i].precio)*(cart[i].quantity)*(1.21) );
            quantityItem.push(cart[i].quantity);
        }
        setProdsPrice(preciosItem.reduce((a, b) => a + b, 0));
        setProdsInCart(quantityItem.reduce((a, b) => a + b, 0));         
    }

    const clear = () => {
        setCart([]);
        setPreciosItem([]);
        setQuantityItem([]);
        setProdsInCart(0);
        setProdsPrice(0)
    }
  
    const sumatoria=(variable)=>{       
        if(variable==="precios"){
            return prodsPrice;
        }
        if(variable==="cantidades"){
            return prodsInCart;
        }
    }

      
    const data={
        cart,
        addItem,
        clear,
        removeItem,  
        sumatoria, 
        prodsInCart,
        prodsPrice,
        setBoton,
        boton   
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export { CartContextProvider, CartContext };