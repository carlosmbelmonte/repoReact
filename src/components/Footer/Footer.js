//UpperCamelCase
import './Footer.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



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
                            <Grid item md={8}>
                                   
                            </Grid>
                            <Grid item md={2} >
                            <h3 className="footer_h3">Redes Sociales</h3>
                                <ul className="footer__list footer_flex">
                                    <li className="footer-item">
                                        <FacebookIcon/> 
                                    </li>
                                    <li className="footer-item">
                                        <InstagramIcon/>
                                    </li>
                                    <li className="footer-item">
                                        <LinkedInIcon/>
                                    </li>
                                    <li className="footer-item">
                                        <WhatsAppIcon/>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item md={2}>                                  
                                <h3 className="footer_h3">Contacto</h3>
                                <ul className="footer__list">
                                    <li>Estados Unidos 1200, Munro, Buenos Aires, Argentina</li>
                                    <li>(+54 11)8888-7474</li>
                                    <li>contacto@engenium.com.ar</li>
                                </ul>                           
                            </Grid>
                        </Grid>                        
                    </Toolbar>
                </AppBar>
            </ThemeProvider>          
        </>
        
    ) 
}

export default Footer
