import GetProducts from "../components/ItemCollection/ItemCollection";
import './styles/home.css';


const printFondo = () => {
    return(
        <>
            <div>
                <img alt="FOTO FONDO" className="img__home" src="fondo.jpg"/>    
            </div>
            
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