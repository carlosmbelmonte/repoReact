import './Item.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({nombreProducto, precioProducto, imagenProducto, stockProducto}) =>{
    return(
        <Card sx={{ minWidth: 275 }} className="item-card">
            <CardContent>
                <div className="container-card">
                    <div>
                        <img alt="FOTO PRODUCTO" src={`./${imagenProducto}`} />
                    </div>
                    <p>{nombreProducto}</p>
                    <span>u$s {precioProducto}</span>
                    <Button variant="contained" className="card__btn">Detalle</Button>
                    <ItemCount stock={stockProducto} initial={1} onAdd={nombreProducto}/>
                </div>
            </CardContent>
        </Card>               
    )
}

export default Item