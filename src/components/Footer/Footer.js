//UpperCamelCase
import './Footer.css';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const Footer = ({propiedad}) => {
    return (
        <>
            <Box sx={{ bgcolor: 'text.primary' }} className={propiedad}>                  
                <Grid container spacing={0}>
                    <Grid item md={7}>
                        
                    </Grid>
                    <Grid item md={2} >
                        <div className="footer-div">
                            <h3 className="footer_h3">Redes Sociales</h3>
                            <ul className="footer__list footer_flex">
                                <li className="footer-item">
                                    <FacebookIcon className="footer-icon"/> 
                                </li>
                                <li className="footer-item">
                                    <InstagramIcon className="footer-icon"/>
                                </li>
                                <li className="footer-item">
                                    <LinkedInIcon className="footer-icon"/>
                                </li>
                                <li className="footer-item">
                                    
                                    <WhatsAppIcon className="footer-icon"/>
                                    
                                </li>
                            </ul>    
                        </div>                       
                    </Grid>
                    <Grid item md={3}> 
                        <div className="footer-div">
                            <Link to ="/contacts"><h3 className="footer_h3 footer-icon">Contacto</h3></Link>
                            <ul className="footer__list">
                                <li>Estados Unidos 1200, Munro, Buenos Aires, Argentina</li>
                                <li>(+54 11)8888-7474</li>
                                <li>contacto@engenium.com.ar</li>
                            </ul>                    
                        </div>                                                           
                    </Grid>
                </Grid>                                           
            </Box>        
        </>        
    ) 
}

export default Footer
