import {Grid} from '@mui/material';
import './ItemDetail.css'

const ItemDetail = ({data}) => {
    return (
        <>
            <Grid className="border-grid" container spacing={0}>
                <Grid className="border-gridSpacing" item md={4}>
                    <img className="img-Detail" alt="FOTO PRODUCTO" src={`./${data.imagen}`} />
                </Grid>

                <Grid className="border-gridSpacing" item md={6}>
                    <h2 className="h2-Detail">{data.nombre}</h2>
                    <div className="div-Detail">
                        <p>{data.descripcion}</p>
                        <p>Id: {data.id}</p>     
                    </div>
                                      
                </Grid>

                <Grid item md={2}>
                    <h2 className="h2-Detail">Precio</h2>
                    <div className="div-Detail">
                        <p>u$s {data.precio}</p>    
                    </div>                    
                </Grid>
            </Grid>
             
        </>  
    ) 
}

export default ItemDetail