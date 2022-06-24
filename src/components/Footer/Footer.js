//UpperCamelCase
import './Footer.css';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';


const Footer = ({propiedad}) => {
    return (
        <>
            <Box sx={{ bgcolor: 'text.primary' }} className={propiedad}>                  
                <Grid container spacing={0}>
                    <Grid item md={6}>
                        
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
                    <Grid item md={4}>                                  
                        <h3 className="footer_h3">Contacto</h3>
                        <ul className="footer__list">
                            <li>Estados Unidos 1200, Munro, Buenos Aires, Argentina</li>
                            <li>(+54 11)8888-7474</li>
                            <li>contacto@engenium.com.ar</li>
                        </ul>                           
                    </Grid>
                </Grid>                                           
            </Box>        
        </>        
    ) 
}

export default Footer
