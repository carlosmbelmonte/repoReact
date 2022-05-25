import ItemDetail from "../ItemDetail/ItemDetail";
import { productoBaliza } from "../../utils/productosMock";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
    const [detail , setDetail] = useState({})
    
    const getDetail = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productoBaliza)
            }, 2000)
        })
    }

    useEffect(() => {
        getDetail()
        .then( (res) => {
            setDetail(res)
        })
    }, [])

    return (
        <>
            <h2>Detail Container</h2>
            <ItemDetail data={detail}/>
            {console.log(detail)}
        </>  
    ) 
}

export default ItemDetailContainer