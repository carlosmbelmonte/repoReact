import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Container} from '@mui/material';
import CartWidget from './components/CartWidget/CartWidget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products';
import Home from './pages/home';
import Detalle from './pages/detalleProducto';
import Categoria from './pages/categorias';
import {CartProvider} from './context/CartContext';

function App() { 
  return (
    //JSX   
      <div>
        <CartProvider>
          <BrowserRouter>
            <NavBar>
              <CartWidget/>
            </NavBar>

            <Container>
              <Routes>
                  <Route exact path='/' element={<Products/>}/> 
                  <Route exact path='/home' element={<Home/>}/>
                  <Route exact path='/aboutus' element={<h1>QUIENES SOMOS</h1>}/>
                  <Route exact path='/projects' element={<h1>PROYECTOS</h1>}/>
                  <Route exact path='/products' element={<Products/>}/>
                  <Route exact path='products/:category' element={<Categoria/>}/>
                  <Route path='/product/:id' element={<Detalle/>}/>
                  <Route exact path='/services' element={<h1>SERVICIOS</h1>}/>  
                  <Route exact path='/contacts' element={<h1>CONTACTO</h1>}/>     
                  <Route path='*' element={<h1>404 - NO EXISTE LA PAGINA</h1>}/>          
              </Routes>
            </Container>
          </BrowserRouter>  
        </CartProvider>
        
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
