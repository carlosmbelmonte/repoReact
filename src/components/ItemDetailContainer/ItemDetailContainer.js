import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({title, arrayX}) => {
    const [detail , setDetail] = useState({})
    const { id }= useParams();

    const prodFilter = arrayX.find( (detail) => {
        return detail.id === parseInt(id)
    })

    useEffect(() => {
        setDetail(prodFilter)
    }, [id]); // eslint-disable-line

    return (
        <>
            <h2>{title}</h2>
            <ItemDetail data={detail}/>
        </>  
    ) 
}

export default ItemDetailContainer