import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import automatizacion from "../utils/productosMock";
import medidores from "../utils/medidoresMock";
import nuevo from "../utils/nuevoMock";


const Products = () => {
    const filtro1 = nuevo.filter( (produc1) => {
        return produc1.category === "automatizacion"
    })
    const filtro2 = nuevo.filter( (produc2) => {
        return produc2.category === "medidor"
    })
    
    return(
        <>
            <ItemListContainer title={"Automatizacion Industrial"} arrayP={filtro1}/>
            <ItemListContainer title={"Medidores Trifasicos"} arrayP={filtro2}/>
        </>        
    )
}

export default Products