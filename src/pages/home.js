import GetProducts from "../components/ItemCollection/ItemCollection"


const Home = () => {
    return(
        <>
            <h1>INICIO</h1>
            {console.log("Productos en Firebase: ",GetProducts())}
        </>
        
    )
}

export default Home