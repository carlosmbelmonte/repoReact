import { GetOrder } from "../components/ItemCollection/ItemCollection";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles/compraRealizada.css'

const CompradoPage = () => {
    const [orden , setOrden] = useState({})
    const { orderId }= useParams();  
    useEffect(() => {
        GetOrder(orderId)
                   .then((ord)=>{
                        setOrden({...ord, id: orderId})
                   })  
    }, [orderId]); // eslint-disable-line

    if (!orden.id) {
        return <p>Cargando...</p>;
    }

    return(
        <>
            <h1>Gracias por su compra</h1>
            {console.log(orden)}
            <p>{orden.buyer.name}, gracias por su compra. El ID de su compra es el siguiente: {orden.id}</p>
            
                <table className="tabla__contenido">
                    <tbody>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Total</th>
                    </tr>
                    {orden.items.map((product) => {
                        return (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>u$s {product.price}</td>
                            <td>u$s {(product.price)*(product.quantity)*(1.21)}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                    
                </table>
                <p>El precio total FINAL es: u$s {orden.total}</p>                
                <p>(***Nota: El precio total de los productos incluye IVA)</p> 

        </>
        
    )
}

export default CompradoPage