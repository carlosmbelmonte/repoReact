import './CartWidget.css';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import CartContext from '../../context/CartContext';

 
const CartWidget = () => { 
    const{ Total } = useContext(CartContext);
    //let condition = Total("cantidades");
    let condition =10;

    function DisplayCartWidget(){
        if(condition>0){
            return(
                <>
                    <div className="container-cart">
                        <Button color="inherit" className='carrito__btn'>
                            <Link to ="/cart" className="link-end">
                                <ShoppingCartTwoToneIcon />                  
                                {/*<h2 className='count-items'>{condition}</h2>*/}     
                            </Link>                                  
                        </Button>
                    </div>    
                </>
            )            
        }
    }
    
    return (
        <>
            <DisplayCartWidget/> 
        </>
    ) 
}

export default CartWidget