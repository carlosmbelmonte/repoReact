import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";


const ItemDetailContainer = ({title, arrayX}) => {
    const [detail , setDetail] = useState({})
    
    const getDetail = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(arrayX)
            }, 2000)
        })
    }

    useEffect(() => {
        getDetail()
        .then( (res) => {
            setDetail(res)
        })
    }, []); // eslint-disable-line

    return (
        <>
            <h2>{title}</h2>
            <ItemDetail data={detail}/>
        </>  
    ) 
}

export default ItemDetailContainer