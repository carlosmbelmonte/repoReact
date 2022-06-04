import { createContext, useState } from "react";  

const CartContext = createContext();

const CartProvider = ({children}) =>{
    //const [cart, setCart] = useState([]);
    const cart = [];
    const addItem = (product) =>{
        cart.push(product);
        //setCart((cart) => [...cart, "HOLAAA"]); //agrego el producto al carrito
        console.log("zzzzzzzz: ",cart)
    }

    const data={
        cart,
        addItem
    };

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}