/*import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import automatizacion from "../utils/productosMock";
import medidores from "../utils/medidoresMock";*/
import nuevo from "../utils/nuevoMock";
import { variableT } from "../components/NavBar/NavBar";

const Categoria = () => {
    const filtro1 = nuevo.filter( (produc1) => {
        return produc1.category === "automatizacion"
    })
    const filtro2 = nuevo.filter( (produc2) => {
        return produc2.category === "medidor"
    })
    
    return(
        <>
            <h1>PENDIENTE DE CONSTRUCCION</h1>
        </>        
    )
}

export default Categoria