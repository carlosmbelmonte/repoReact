import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import nuevo from "../utils/nuevoMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Categoria = () => { 
    const [categ, setCateg] = useState([]);
    const [title, setTitle] = useState("");   
    const { category }=useParams();
   
    const getProductos = () =>{
        return new Promise ( (resolve,reject)=>{          
            resolve(nuevo)                    
        });
    };

    useEffect( () => {
        setCateg([]);
        console.log("category: ", category);
        if(category==="automatizacion"){
            setTitle("Automatizacion Industrial");
        }
        if(category==="medidores"){
            setTitle("Medidores Trifasicos");
        }

        getProductos()
            .then((res) => {
                filterByCategory(res)
            })    
    },[category]);// eslint-disable-line

    const filterByCategory = (array) => {    
        setCateg(array.filter((rec) => rec.category === category))          
    }
    
    return(
        <>
            <ItemListContainer title={title} arrayP={categ}/>
        </>        
    )
}

export default Categoria