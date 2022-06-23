import { Button } from "@mui/material";
import './styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <div className="menuindex">
                <h2>Somos lideres en instalaciones y equipamiento industrial</h2>
                <div className="home_container">
                    <Button variant="contained" className="home__btn"><Link to ="/aboutus" className="link-end">Conocé más</Link></Button>                              
                </div>
            </div> 
            
        </>
        
    )
}

export default Home