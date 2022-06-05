import {Grid} from '@mui/material';
import nuevo from '../utils/nuevoMock'
import '../pages/styles/carrito.css'
import Button from '@mui/material/Button';

const Carrito = () => {
    return(
        <div className='cart-container'>
            <Grid className="grid-container" container spacing={0}>
                <Grid item md={3}>
                    <div className="div-img-item">
                        <img className='img-item' alt="Imagen Item" src={`../${nuevo[4].imagen}`} />    
                    </div>    
                </Grid>
                <Grid item md={6}>
                    <h2 className="h2-item">{nuevo[4].nombre}</h2>
                    <div className="p-group">
                        <div className="p-item">Precio (Unidad): <p className="p-variable">u$s {`${nuevo[4].precio}`}</p></div>
                        <div className="p-item">Cantidad seleccionada: <p className="p-variable">xxxx</p></div> 
                        <div className="p-item">Stock disponible: <p className="p-variable">{`${nuevo[4].stock}`}</p></div>   
                    </div>                        
                </Grid>
                <Grid item md={3}>
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item">Sub Total: u$s</li>
                            <li className="list-group-item">IVA: u$s</li>
                            <li className="list-group-item">TOTAL: u$s</li>
                            <li className="list-group-item"><div className="div-btn-ItemDelete"><Button variant="contained" className="cart__btnItem">Eliminar Producto</Button></div></li>
                        </ul>     
                    </div>
                       
                </Grid>
            </Grid>
            <Grid className="grid-container" container spacing={0}>
                <Grid item md={3}>
                    <div className="div-img-item">
                        <img className='img-item' alt="Imagen Item" src={`../${nuevo[4].imagen}`} />    
                    </div>    
                </Grid>
                <Grid item md={6}>
                    <h2 className="h2-item">{nuevo[4].nombre}</h2>
                    <div className="p-group">
                        <div className="p-item">Precio (Unidad): <p className="p-variable">u$s {`${nuevo[4].precio}`}</p></div>
                        <div className="p-item">Cantidad seleccionada: <p className="p-variable">xxxx</p></div> 
                        <div className="p-item">Stock disponible: <p className="p-variable">{`${nuevo[4].stock}`}</p></div>   
                    </div>                        
                </Grid>
                <Grid item md={3}>
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item">Sub Total: u$s</li>
                            <li className="list-group-item">IVA: u$s</li>
                            <li className="list-group-item">TOTAL: u$s</li>
                            <li className="list-group-item"><div className="div-btn-ItemDelete"><Button variant="contained" className="cart__btnItem">Eliminar Producto</Button></div></li>
                        </ul>     
                    </div>
                       
                </Grid>
            </Grid>
            <div className="cart-delete-btn">
                <Button variant="contained" className='cart__btn'>Vaciar carrito</Button>    
            </div>
            
        </div>
        
    )
}

export default Carrito