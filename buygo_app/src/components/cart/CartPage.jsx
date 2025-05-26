import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import api from '../../api';

const CartPage = ({setNumCartItems}) => {    
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0.00);
    const [loading, setLoading] = useState(false);
    const tax = 4.00

    const cart_code = localStorage.getItem("cart_code");

    useEffect(() => {
        setLoading(true);
        if(cart_code){
            api.get(`get_cart?cart_code=${cart_code}`)
            .then(res => {
                console.log(res.data);
                setCartItems(res.data.items);
                setCartTotal(res.data.sum_total);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err.message);
            })
        }
    }, []);

    if(cartItems.length < 1 && !loading){
        return (
            <div className="alert alert-primary my-5" role="alert">
                You haven't added any item to your cart.
            </div>
        )
    }

    return (
        <div
        className="container my-3 py-3"
        style={{ height: "80vh", overflow: "scroll" }}>
            <h5 className="mb-4">Shopping Cart</h5>
            <div className="row">
                <div className="col-md-8">
                    {cartItems.map(item => <CartItem key={item.id}  item={item} 
                        setCartTotal={setCartTotal} 
                        cartItems={cartItems} 
                        setNumCartItems={setNumCartItems} 
                    />)}
                </div>

                <CartSummary cartTotal={cartTotal} tax={tax} />
            </div>
        </div>
    )
}

export default CartPage