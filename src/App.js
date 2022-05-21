import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Container} from '@mui/material';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemList from './components/ItemList/ItemList';


function App() {
  return (
    //JSX
    
      <div>
        <NavBar>
          <CartWidget/>
        </NavBar>
        <Container>
          <ItemListContainer title={"Automatizacion Industrial"}>
            <ItemList/>
          </ItemListContainer>    
          <ItemListContainer title={"Electronica de potencia"}>
             
          </ItemListContainer> 
        </Container>  
      </div>
     
    


  );
}

export default App;
