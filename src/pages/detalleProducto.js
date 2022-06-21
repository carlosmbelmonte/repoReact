import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import {variableH} from '../components/Item/Item';
import {Container} from '@mui/material';

const Detalle = () => {
    return(
        <>
            <Container>
                <ItemDetailContainer title={variableH}/>    
            </Container>
        </>
        
    )
}

export default Detalle