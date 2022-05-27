import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import productos from "../utils/productosMock";

const Products = () => {
    return(
        <ItemListContainer title={"Automatizacion Industrial"} arrayP={productos}/>
    )
}

export default Products