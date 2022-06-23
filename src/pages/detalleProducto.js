import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import {variableH} from '../components/Item/Item';
import {Container} from '@mui/material';
import './styles/view.css';

const Detalle = () => {
    return(
        <>
            <Container className="generalView">
                <ItemDetailContainer title={variableH}/>    
            </Container>
        </>
        
    )
}

export default Detalle