import './CartWidget.css';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Button from '@mui/material/Button';

const CartWidget = () => {
    return (
        <div className="container-cart">
            <Button color="inherit" className='carrito__btn'>
                <ShoppingCartTwoToneIcon /> 
            </Button>  
        </div>  
    ) 
}

export default CartWidget