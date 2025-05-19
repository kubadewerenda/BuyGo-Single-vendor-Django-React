import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./components/home/HomePage";
import NotFoundPage from "./components/ui/NotFoundPage";
import ProductPage from "./components/product/ProductPage";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />}/>
                  <Route path="products/:slug" element={<ProductPage />}/>
                  <Route path="*" element={<NotFoundPage />}/>
                </Route>
            </Routes>                
        </BrowserRouter>
    )
}

export default App