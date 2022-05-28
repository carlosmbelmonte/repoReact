//UpperCamelCase
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const NavBar = ({children}) => {
    return (
        <AppBar position="static">
            <Toolbar>
            <Grid container spacing={0}>
                <Grid item md={3}>
                    <div className="container-logo">
                        <Link to ="/products" className="link-color">
                            <Avatar
                                className='nav-logo-img'
                                alt="Logo ENGENIUM"
                                src="../logo.png"
                                sx={{ width: 60, height: 60 }}
                            />
                           <h1>ENGENIUM<span>|</span></h1>      
                        </Link>                               
                    </div>    
                </Grid>
                <Grid item md={7} >
                    <div className="container-list"> 
                        <ul>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/home" className="link-color">Inicio</Link></Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/aboutus" className="link-color">Quienes somos</Link></Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/projects" className="link-color">Proyectos</Link></Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/products" className="link-color">Productos</Link></Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/services" className="link-color">Servicios</Link></Button>
                            </li>
                            <li>
                                <Button color="inherit" className="navbar__btn"><Link to ="/contacts" className="link-color">Contacto</Link></Button>
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
                    {children}                       
                </Grid>
            </Grid>                        
            </Toolbar>
        </AppBar>
    ) 
}

export default NavBar