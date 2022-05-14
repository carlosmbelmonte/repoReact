//UpperCamelCase
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
            <Grid container spacing={0}>
                <Grid item md={3}>
                    <div className="container-logo">
                        <Avatar
                            className='nav-logo-img'
                            alt="Logo ENGENIUM"
                            src="./logo.png"
                            sx={{ width: 60, height: 60 }}
                        />
                        <h1>ENGENIUM<span>|</span></h1>                      
                    </div>    
                </Grid>
                <Grid item md={7} >
                    <div className="container-list"> 
                        <ul>
                            <li>
                                <Button color="inherit" className="navbar__btn">Inicio</Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn">Quienes somos</Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn">Proyectos</Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn">Productos</Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn">Servicios</Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn">Contacto</Button>
                            </li>
                        </ul>                
                    </div>
                </Grid>
                <Grid 
                    item md={2}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <div className="container-cart">
                        <Button color="inherit" className='carrito__btn'>
                            <ShoppingCartTwoToneIcon /> 
                        </Button>  
                    </div>               
                                            
                </Grid>
            </Grid>
                
                                 
            </Toolbar>
        </AppBar>
    ) 
}

export default NavBar