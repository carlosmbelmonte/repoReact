import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import productos from "../utils/productosMock";

const Detalle = () => {
    return(
        <ItemDetailContainer title={"Detail Container"} arrayX={productos}/>
    )
}

export default Detalle