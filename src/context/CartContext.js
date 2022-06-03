import { createContext, useState } from "react";  

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);
    
    return(
        <CartContext.Provider>

        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}