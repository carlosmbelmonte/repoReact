import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import automatizacion from "../utils/productosMock";
import medidores from "../utils/medidoresMock";

const Products = () => {
    return(
        <>
            <ItemListContainer title={"Automatizacion Industrial"} arrayP={automatizacion}/>
            <ItemListContainer title={"Medidores Trifasicos"} arrayP={medidores}/>
        </>        
    )
}

export default Products