import './CartWidget.css';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const CartWidget = ({total}) => {     
    return (
        <div className="container-cart">
            <Button color="inherit" className='carrito__btn'>
                <Link to ="/cart" className="link-end">
                    <ShoppingCartTwoToneIcon />                  
                    <h2 className='count-items'>{total}</h2>        
                </Link> 
                                  
            </Button>   
        </div>  
    ) 
}

export default CartWidget