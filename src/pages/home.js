import { Button } from "@mui/material";
import GetProducts from "../components/ItemCollection/ItemCollection";
import './styles/home.css';
import { Link } from 'react-router-dom';


const printFondo = () => {
    return(
        <>
            <main>
                <section>
                    <article>
                        <h2>Somos lideres en instalaciones y equipamiento industrial</h2>
                        <div className="home_container">
                            <Button variant="contained" className="home__btn"><Link to ="/products" className="link-end">Conocé más</Link></Button>                              
                        </div>
                            </article>   
                </section>
            </main>           
        </>
    )    
}

const Home = () => {
    return(
        <>
            {printFondo()}
            {console.log("Productos en Firebase: ",GetProducts())}
        </>
        
    )
}

export default Home