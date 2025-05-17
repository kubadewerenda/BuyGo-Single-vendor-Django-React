import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";
import { useEffect, useState } from "react";
import PlaceHolderContainer from "../ui/PlaceHolderContainer";
import Error from "../ui/Error";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        api.get("products")
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
            setLoading(false);
            setError("");
        })
        .catch(err => {
            console.log(err.message);
            setLoading(false);
            setError(err.message);
        })
    },[]);

    return (
        <>
            <Header />
            {error && <Error error={error} />}
            {loading && <PlaceHolderContainer />}
            {loading || error != "" || <CardContainer products={products} />}
        </>
    )
}

export default HomePage