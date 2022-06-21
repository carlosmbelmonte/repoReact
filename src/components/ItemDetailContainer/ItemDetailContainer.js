import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetProduct } from "../ItemCollection/ItemCollection";
import {Container} from '@mui/material';

const ItemDetailContainer = ({title}) => {
    const [detail , setDetail] = useState({})
    const { id }= useParams();   

    useEffect(() => {
        GetProduct(id)
                   .then((prod)=>{
                        setDetail(prod)
                   })  
    }, [id]); // eslint-disable-line

    if (!detail.id) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <Container>
                <h2>{title}</h2>
                <ItemDetail data={detail}/>
                {console.log(detail)}     
            </Container>
            
        </>  
    ) 
}

export default ItemDetailContainer