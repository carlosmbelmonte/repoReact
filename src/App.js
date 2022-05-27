import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Container} from '@mui/material';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import productos, {productoBaliza} from './utils/productosMock';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products';

function App() {
  return (
    //JSX
    
      <div>
        <BrowserRouter>
          <NavBar>
            <CartWidget/>
          </NavBar>

          <Container>
            <Routes>
                <Route exact path='/home' element={<h1>INICIO</h1>}/>
                <Route exact path='/aboutus' element={<h1>QUIENES SOMOS</h1>}/>
                <Route exact path='/projects' element={<h1>PROYECTOS</h1>}/>
                <Route exact path='/products' element={<Products/>}/>  
                <Route exact path='/services' element={<h1>SERVICIOS</h1>}/>  
                <Route exact path='/contacts' element={<h1>CONTACTO</h1>}/>              
            </Routes>
          </Container>
        </BrowserRouter>
        {/*
        <NavBar>
          <CartWidget/>
        </NavBar>
        <Container>
          <ItemListContainer title={"Automatizacion Industrial"} arrayP={productos}/> 
          {/*<ItemListContainer title={"Electronica de potencia"} arrayP={[]}/>*}
          {<ItemDetailContainer title={"Detail Container"} arrayX={productoBaliza}/>}           
        </Container>
        */}  
      </div>
     
    


  );
}

export default App;
