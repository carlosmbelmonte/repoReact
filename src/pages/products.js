import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import nuevo from "../utils/nuevoMock";
import { useState, useEffect } from 'react';

const Products = () => {
    const [prodX, setProd] = useState([]);
   
    const getProductos = () =>{
        return new Promise ( (resolve,reject)=>{
            setTimeout(() => {
                resolve(nuevo)        
            },500);
        });
    };

    useEffect( () => {
        getProductos()
            .then((res) => {
                setProd(res);
            })    
    },[]);// eslint-disable-line

    const filtro1 = prodX.filter( (produc1) => {
        return produc1.category === "automatizacion"
    })
    const filtro2 = prodX.filter( (produc2) => {
        return produc2.category === "medidores"
    })
    
    return(
        <>
            <ItemListContainer title={"Automatizacion Industrial"} arrayP={filtro1}/>
            <ItemListContainer title={"Medidores Trifasicos"} arrayP={filtro2}/>
        </>        
    )
}

export default Products