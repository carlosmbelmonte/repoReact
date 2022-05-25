import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Container} from '@mui/material';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import productos from './utils/productosMock';

function App() {
  return (
    //JSX
    
      <div>
        <NavBar>
          <CartWidget/>
        </NavBar>
        <Container>
          <ItemListContainer title={"Automatizacion Industrial"} arrayP={productos}/> 
          {/*<ItemListContainer title={"Electronica de potencia"} arrayP={[]}/>*/}
          <ItemDetailContainer/>           
        </Container>  
      </div>
     
    


  );
}

export default App;
