import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Container} from '@mui/material';
import ItemListContainer from './components/ItemList/ItemList';

function App() {
  return (
    //JSX
    <div>
      <NavBar/>
      <Container>
        <ItemListContainer/>
      </Container>
      
    </div>
  );
}

export default App;
