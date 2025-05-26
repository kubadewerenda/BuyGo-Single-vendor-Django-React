import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./components/home/HomePage";
import NotFoundPage from "./components/ui/NotFoundPage";
import ProductPage from "./components/product/ProductPage";
import { useEffect, useState } from "react";
import api from "./api";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import LoginPage from "./components/user/LoginPage";
import ProtectedRoute from "./components/ui/ProtectedRoute";


const App = () => {
    const [numCartItems, setNumCartItems] = useState(0);
    const cart_code = localStorage.getItem("cart_code");

    useEffect(() => {
        if(cart_code){
            api.get(`get_cart_stat?cart_code=${cart_code}`)//Bo w views oczekujemy query_params cart_code wiec musimy tu przekazac
            .then(res => {
                console.log(res.data);
                setNumCartItems(res.data.num_of_items);
            })
            
            .catch(err => {
                console.log(err.message);
            })
        }
    },[])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout numCartItems={numCartItems} />}>
                    <Route index element={<HomePage />}/>
                    <Route path="products/:slug" element={<ProductPage setNumCartItems={setNumCartItems} />}/>
                    <Route path="cart" element={<CartPage setNumCartItems={setNumCartItems} />} />
                    <Route path="checkout" element={
                        <ProtectedRoute>
                            <CheckoutPage />
                        </ProtectedRoute>} 
                    />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>                
        </BrowserRouter>
    )
}

export default App