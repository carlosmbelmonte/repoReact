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
                            <Button variant="contained"><Link to ="/products">Conocé más</Link></Button>       
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