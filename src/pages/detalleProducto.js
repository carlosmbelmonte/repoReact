import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
/*import automatizacion from "../utils/productosMock";*/
import automatizacion from "../utils/productosMock";
import medidores from '../utils/medidoresMock';
import {variableH} from '../components/Item/Item';

const Detalle = () => {
    const imprimirDetalle = () => {
        if(variableH === "Automatizacion Industrial"){
          return(automatizacion)             
        }
        if(variableH === "Medidores Trifasicos"){
          return(medidores)             
        }
    }   

    return(
        <ItemDetailContainer title={variableH} arrayX={imprimirDetalle()}/>
    )
}

export default Detalle