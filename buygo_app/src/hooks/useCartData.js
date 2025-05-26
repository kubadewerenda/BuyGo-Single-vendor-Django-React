import { useState, useEffect } from "react";
import api from "../api";

//customowy hook aby nie powtazac kodu a go wykorzystac

function useCartData(){
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
    }, [cart_code]);

    return {cartItems, setCartItems, cartTotal, setCartTotal, loading, tax}
}

export default useCartData