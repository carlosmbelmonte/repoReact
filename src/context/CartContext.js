import { createContext } from "react";
import { useState } from 'react';  

const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    //const cart = [];
    //let preciosItem = []; 
    //let quantityItem = [];
    
    let precioTotal = 0;
    let quantityTotal = 0;
            
    const [cart, setCart] = useState([]);
    const [newCart, setNewCart] = useState([]);
    
    const [prodsInCart, setProdsInCart] = useState(0);
    const [prodsPrice, setProdsPrice] = useState(0);
    
    const [preciosItem, setPreciosItem] = useState([]);
    const [quantityItem, setQuantityItem] = useState([]);

    const addItem = (product) =>{
        let isInCart = cart.findIndex( cartItem => cartItem.nombre === product.nombre );

        if (isInCart === -1){
            cart.push(product);           
            preciosItem.push( (product.precio)*(product.quantity)*(1.21) )  
            quantityItem.push(product.quantity);

            Total("precios");
            Total("cantidades");  
        }else{
            console.log("El producto ya se encontraba en el carrito"); 
        }       
    }

    const removeItem = (nombre) => { 
        setPreciosItem([]);
        setQuantityItem([]);
        setProdsPrice(0);
        setProdsInCart(0);

        let index = cart.findIndex( el => el.nombre === nombre);
        cart.splice(index, 1);              

        for(let i=0;i<cart.length;i++){
            preciosItem.push( (cart[i].precio)*(cart[i].quantity)*(1.21) );
            quantityItem.push(cart[i].quantity);
        }
        setProdsPrice(preciosItem.reduce((a, b) => a + b, 0));
        precioTotal = prodsPrice;

        //precioTotal = preciosItem.reduce((a, b) => a + b, 0);
        setProdsInCart(quantityItem.reduce((a, b) => a + b, 0));         
        quantityTotal = prodsInCart;
        //quantityTotal = quantityItem.reduce((a, b) => a + b, 0); 
        
    }

    const clear = () => {
        setCart([]);
        setPreciosItem([]);
        setQuantityItem([]);

        precioTotal=0;
        quantityTotal = 0;

        setProdsInCart(quantityTotal);
        setProdsPrice(precioTotal)
    }

    const Total=(variable)=>{
        if(variable==="precios"){
            setProdsPrice(preciosItem.reduce((a, b) => a + b, 0));
            precioTotal = prodsPrice;    
        }
        if(variable==="cantidades"){  
            setProdsInCart(quantityItem.reduce((a, b) => a + b, 0));         
            quantityTotal = prodsInCart;  
        }
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
        prodsInCart   
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export { CartContextProvider, CartContext };