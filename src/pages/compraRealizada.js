import { GetOrder } from "../components/ItemCollection/ItemCollection";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CompradoPage = () => {
    const [orden , setOrden] = useState({})
    const { orderId }= useParams();  
    useEffect(() => {
        GetOrder(orderId)
                   .then((ord)=>{
                        setOrden(ord)
                   })  
    }, [orderId]); // eslint-disable-line

    return(
        <>
            <h1>Gracias por su compra</h1>
            {console.log(orden)}
        </>
        
    )
}

export default CompradoPage