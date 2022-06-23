import { Grid } from '@mui/material';
import './styles/contacts.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';

const Contacto = () => {
    const iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13147.523808575534!2d-58.51419299999999!3d-34.53124400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15e0d94908f499e!2sELECTRO%20SELEC!5e0!3m2!1ses!2sar!4v1655990588601!5m2!1ses!2sar" width="480" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    
      
    return (
        <>
            <Container>
                <Grid container spacing={0} sx={{my: 2}}>
                    <Grid item md={6}>
                        <div dangerouslySetInnerHTML={{__html: iframeSource}} className="div__mapa"></div>
                    </Grid>
                    <Grid item md={5}>
                        <div>
                            <ul>
                                <li>Estados Unidos 1200, Munro, Buenos Aires, Argentina</li>
                                <li>(+54 11)8888-7474</li>
                                <li>contacto@engenium.com.ar</li>
                                <li>Horario de atencion:Lunes a Viernes de 8:00 a 17:00 hs</li>
                            </ul>    
                        </div>                            
                    </Grid>
                </Grid>  
                <Box
                    sx={{
                        width: 'auto',
                        bgcolor: '#d2e7f7',
                        borderRadius: 5,
                        mb: 2
                    }}
                >
                    <form>
                        <fieldset>
                            <legend>Cómo podemos ayudarte?</legend>
                            <Grid container spacing={0}>
                                <Grid item md={6}>
                                    <div>
                                        <label className="contact__label">Nombre y Apellido(*)</label>
                                        <input className="contact__input" type="text" id="nompre_apellidoInput1"/>    
                                    </div>
                                    <div>
                                        <label className="contact__label">Mail(*)</label>
                                        <input className="contact__input" type="email" id="mailInput1"/>    
                                    </div>
                                </Grid>
                                <Grid item md={5}>
                                    <div>
                                        <label className="contact__label">Mensaje:</label>
                                        <textarea id="mensajeTextarea1" placeholder="Escriba aqui su consulta"></textarea>
                                        <input type="submit" value="ENVIAR"/>
                                    </div>
                                </Grid>
                            </Grid>   
                        </fieldset>
                        <p>(*)Son campos OBLIGATORIOS para realizar la consulta.</p>
                    </form>                    
                </Box>
            </Container>
                    

        </>
    )
}

export default Contacto