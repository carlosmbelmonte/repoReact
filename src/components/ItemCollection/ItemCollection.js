import { collection, getDocs } from "firebase/firestore";   
import db from "../../utils/firebaseConfig";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const GetProducts = () =>{
    const [vals, setVals] = useState([]);    

    const getAnswers = async () =>{
        const querySnapshot = await getDocs(collection(db,"productos"));
        const productList = querySnapshot.docs.map((doc)=>{       
            let products = doc.data();
            products.id = parseInt(doc.id);
            return products
        }); 
        setVals(productList);   
    };

    useEffect(() => {
        getAnswers();
    },[]);

    //return console.log("imprimo lista: ",val)
    return vals
}

const GetProduct = async(id) =>{
    const docRef = doc(db,"productos",id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    //console.log(product)
    return product
}

export default GetProducts
export {GetProduct}