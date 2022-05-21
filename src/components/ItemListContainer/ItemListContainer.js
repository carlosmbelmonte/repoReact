import './ItemListContainer.css';

const ItemListContainer = ({title, children}) => {
    return (
        <>
            <h2 className="titulo-h2">{title}</h2>
            {children} 
        </>  
    ) 
}

export default ItemListContainer