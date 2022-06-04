import { createContext, useState } from "react";  

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);

    const addItem = (product) =>{
        console.log("aaaaaaaa: ",product)
        setCartItems((cartItems) => [...cartItems, product]); //agrego el producto al carrito
        console.log("zzzzzzzz: ",cartItems)
    }

    const data={
        cartItems,
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