import { createContext } from "react";  

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const cart = [];
    let preciosItem = []; 
    let precioTotal = 0;

    let quantityItem = [];
    let quantityTotal = 0;                                                                                                                                                                                                            

    const addItem = (product) =>{
        let isInCart = cart.findIndex( cartItem => cartItem.nombre === product.nombre );

        if (isInCart === -1){
            cart.push(product);           
            preciosItem.push( (product.precio)*(product.quantity)*(1.21) )  
            quantityItem.push(product.quantity);

            Total("precios");
            Total("cantidades");
            return cart  
        }else{
            console.log("El producto ya se encontraba en el carrito"); 
        }       
    }

    const removeItem = (nombre) => {       
        let index = cart.findIndex( el => el.nombre === nombre);
        cart.splice(index, 1);
        
        preciosItem.length = 0;
        precioTotal=0;
        quantityItem.length = 0;
        quantityTotal = 0

        for(let i=0;i<cart.length;i++){
            preciosItem.push( (cart[i].precio)*(cart[i].quantity)*(1.21) );
            quantityItem.push(cart[i].quantity);
        }
        precioTotal = preciosItem.reduce((a, b) => a + b, 0);
        quantityTotal = quantityItem.reduce((a, b) => a + b, 0); 
    }

    const clear = () => {
        cart.length = 0;
        preciosItem.length = 0;
        quantityItem.length = 0;
        precioTotal=0;
        quantityTotal = 0
    }

    const Total=(variable)=>{
        if(variable==="precios"){
            precioTotal = preciosItem.reduce((a, b) => a + b, 0);    
        }
        if(variable==="cantidades"){
            quantityTotal = quantityItem.reduce((a, b) => a + b, 0);    
        }
    }
  
    const sumatoria=(variable)=>{       
        if(variable==="precios"){
            return precioTotal;
        }
        if(variable==="cantidades"){
            return quantityTotal;
        }
    }
  
    const data={
        cart,
        addItem,
        clear,
        removeItem,  
        sumatoria,      
    };

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}