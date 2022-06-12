//import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";   
import db from "../../utils/firebaseConfig";
import { useEffect, useState } from "react";

const GetProducts = () =>{
    const [val, setVal] = useState([]);    

    const getAnswer = async () =>{
        const querySnapshot = await getDocs(collection(db,"productos"));
        const productList = querySnapshot.docs.map((doc)=>{       
            let product = doc.data();
            product.id = parseInt(doc.id);
            return product
        }); 
        setVal(productList);   
    };

    useEffect(() => {
        getAnswer();
    },[]);

    //return console.log("imprimo lista: ",val)
    return val
}

export default GetProducts