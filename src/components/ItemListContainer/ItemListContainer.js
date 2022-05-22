import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';

const ItemListContainer = ({title, arrayP}) => {
    const [prodX, setProd] = useState([]);
   
    const getProductos = () =>{
        return new Promise ( (resolve,reject)=>{
            setTimeout(() => {
                resolve(arrayP)        
            },2000);
        });
    };

    useEffect( () => {
        getProductos()
            .then((res) => {
                setProd(res);
            })    
    },[]);
    return (
        <>
            <h2 className="titulo-h2">{title}</h2>
            <ItemList array={prodX}/> 
        </>  
    ) 
}

export default ItemListContainer