import { createContext } from "react";  

const CartContext = createContext();

const CartProvider = ({children}) =>{
    //const [cart, setCart] = useState([]);
    const cart = [];
    let preciosItem = []; 
    let precioTotal = 0;

    const addItem = (product) =>{
        let isInCart = cart.findIndex( cartItem => cartItem.nombre === product.nombre );

        if (isInCart === -1){
            cart.push(product);
            console.log("Se agrego el producto al carrito: ",cart);
            preciosItem.push( (product.precio)*(product.quantity)*(1.21) )  
            console.log("el precio del producto es: ",preciosItem);
            pTotal();
            console.log("El total del carrito es: ", precioTotal);
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
        
        preciosItem.length = 0;
        precioTotal=0;
        for(let i=0;i<cart.length;i++){
            preciosItem.push( (cart[i].precio)*(cart[i].quantity)*(1.21) )
        }
        precioTotal = preciosItem.reduce((a, b) => a + b, 0);
        console.log("El nuevo precioTotal es", precioTotal);
    }

    const clear = () => {
        cart.length = 0;
        preciosItem.length = 0;
        console.log("el precio del producto es: ",preciosItem);
        precioTotal=0;
        console.log("El total del carrito es: ", precioTotal);
    };

    const pTotal=()=>{
        precioTotal = preciosItem.reduce((a, b) => a + b, 0);
        //return precioTotal;
    }

    const data={
        cart,
        addItem,
        clear,
        removeItem,        
    };

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext
export {CartProvider}