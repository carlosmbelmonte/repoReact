import './CartWidget.css';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className="container-cart">
            <Button color="inherit" className='carrito__btn'>
                <Link to ="/cart" className="link-end">
                    <ShoppingCartTwoToneIcon />    
                </Link>                    
            </Button>  
        </div>  
    ) 
}

export default CartWidget