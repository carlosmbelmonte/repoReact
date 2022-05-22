import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Container} from '@mui/material';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const productos = [
    {
        id: "00",
        nombre: "Balizas",
        precio : 1000,
        imagen : "01_balizas.png",
        stock: 10
    },
    {
        id: "01",
        nombre : "Bornes",
        precio : 2000,
        imagen : "02_bornes.png",
        stock: 20
    },
    {
        id: "02",
        nombre : "PLC",
        precio : 3000,
        imagen : "03_plc.png",
        stock: 30
    },
    {
        id: "03",
        nombre : "Fuente",
        precio : 4000,
        imagen : "04_fuentes.png",
        stock: 40
    }
];
  return (
    //JSX
    
      <div>
        <NavBar>
          <CartWidget/>
        </NavBar>
        <Container>
          <ItemListContainer title={"Automatizacion Industrial"} arrayP={productos}/> 
          <ItemListContainer title={"Electronica de potencia"} arrayP={[]}/>           
        </Container>  
      </div>
     
    


  );
}

export default App;
