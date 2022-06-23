//UpperCamelCase
import './Footer.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const Footer = () => {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
    });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Grid container spacing={0}>
                            <Grid item md={3}>
                                sadasd    
                            </Grid>
                            <Grid item md={7} >
                                dqwewq
                            </Grid>
                            <Grid item md={2}>                                  
                                dqwefa                            
                            </Grid>
                        </Grid>                        
                    </Toolbar>
                </AppBar>
            </ThemeProvider>          
        </>
        
    ) 
}

export default Footer
