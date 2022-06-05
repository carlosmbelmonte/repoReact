import { createContext } from "react";  

const CartContext = createContext();

const CartProvider = ({children}) =>{
    //const [cart, setCart] = useState([]);
    const cart = [];

    const addItem = (product) =>{
        let isInCart = cart.findIndex( cartItem => cartItem.nombre === product.nombre );

        if (isInCart === -1){
            cart.push(product);
            console.log("Se agrego el producto al carrito: ",cart);  
            return cart  
        }else{
            console.log("El producto ya se encontraba en el carrito");  
        }
        
        //setCart((cart) => [...cart, "HOLAAA"]); //agrego el producto al carrito
        
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