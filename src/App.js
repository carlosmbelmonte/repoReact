import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Container} from '@mui/material';
import ItemListContainer from './components/ItemList/ItemList';


function App() {
  return (
    //JSX
    <div>
      <div>
        <NavBar/>
        <Container>
          <ItemListContainer title={"Automatizacion Industrial"}/>
          <ItemListContainer title={"Electronica de potencia"}/>
        </Container>  
      </div>
      <div>
          
      </div>
    </div>


  );
}

export default App;
