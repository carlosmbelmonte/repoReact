import { createContext, useState } from "react";  

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);
    const addProduct = (item) =>{
        setCartItems([item]);
    }
    const data={
        cartItems,
        addProduct
    };

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}