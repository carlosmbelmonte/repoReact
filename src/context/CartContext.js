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

    const removeItem = (nombre) => {       
        let index = cart.findIndex( el => el.nombre === nombre);
        cart.splice(index, 1);
        console.log("El nuevo array de producto es", cart);
    }

    const clear = () => {
        cart.length = 0;
    };

    const data={
        cart,
        addItem,
        clear,
        removeItem
    };

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}