import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import {variableH} from '../components/Item/Item';
import nuevo from "../utils/nuevoMock";

const Detalle = () => {
    const filtro1 = nuevo.filter( (produc1) => {
      return produc1.category === "automatizacion"
    })
    const filtro2 = nuevo.filter( (produc2) => {
      return produc2.category === "medidores"
    })

    const imprimirDetalle = () => {
        if(variableH === "Automatizacion Industrial"){
          return(filtro1)             
        }
        if(variableH === "Medidores Trifasicos"){
          return(filtro2)             
        }
    }   

    return(
        <ItemDetailContainer title={variableH} arrayX={imprimirDetalle()}/>
    )
}

export default Detalle