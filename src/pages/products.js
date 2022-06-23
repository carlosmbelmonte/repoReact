import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useState, useEffect } from 'react';
import GetProducts from "../components/ItemCollection/ItemCollection";
import {Container} from '@mui/material';
import './styles/view.css';

const Products = () => {
    const [prodX, setProd] = useState([]);
    const res = GetProducts();

    useEffect( () => {
        setProd(res);   
    },[res]);// eslint-disable-line

    const filtro1 = prodX.filter( (produc1) => {
        return produc1.category === "automatizacion"
    })
    const filtro2 = prodX.filter( (produc2) => {
        return produc2.category === "medidores"
    })
    
    return(
        <>  
            <Container className="generalView">
                <ItemListContainer title={"Automatizacion Industrial"} arrayP={filtro1}/>
                <ItemListContainer title={"Medidores Trifasicos"} arrayP={filtro2}/>    
            </Container>
            
        </>        
    )
}

export default Products