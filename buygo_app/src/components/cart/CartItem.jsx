import { useEffect, useRef, useState } from "react"
import { BASE_URL } from "../../api"
import api from "../../api";
import { toast } from "react-toastify";

const CartItem = ({item, setCartTotal, cartItems, setCartItems, setNumCartItems}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [loading, setLoading] = useState(false);

    const firstRender = useRef(true);
    const prevQuantity = useRef(quantity);

    const itemData = {quantity:quantity, item_id:item.id};
    const itemID = {item_id: item.id}

    function deleteCartItem(){
        const confirmDelete = window.confirm("Do you want to delete this product?")
        if(confirmDelete){
            api.post("delete_cartitem/", itemID)
            .then(res => {
                console.log(res.data);
                toast.success("Product removed successfully!");
                //przechodzi i zostawia tylko itemy ktory maja rozny id od tego co usowamy
                setCartItems(cartItems.filter(cartItem => cartItem.id != item.id));

                //do updatowania map do usowania filter
                setCartTotal(cartItems.filter((cartItem) => cartItem.id != item.id)
                .reduce((acc, curr) => acc + curr.total, 0))

                setNumCartItems(cartItems.filter((cartItem) => cartItem.id != item.id)
                .reduce((acc, curr) => acc + curr.quantity, 0))
            })
            .catch(err => {
                console.log(err.message);
            })
        }
    };


    useEffect(() => {
        if(firstRender.current){
            firstRender.current = false;
            prevQuantity.current = quantity;
            return;
        }

        if (prevQuantity.current === quantity) return;
        prevQuantity.current = quantity;

        setLoading(true);
        api.patch("update_quantity/", itemData)//po sleszu dodaje nam dane ktore potrzebuje backend czyli quantity oraz item_id
        .then(res => {
            console.log(res.data);
            toast.success("Cart Item updated successfully!");
            setCartTotal(cartItems.map((cartItem) => cartItem.id === item.id ? res.data.data : cartItem)
            .reduce((acc, curr) => acc + curr.total, 0))
            // map przechodzimy po kazdym elemencie koszyka, jezeli znajduje sie w nim nasz 
            // dokladny item.id === cartItem.id to wtedy podmieniamy ten cartItem naszymnowym zaktualizowanym czyli po dodaniu albo odjeciu ilosci
            // i otrzymaniu odp od backendu czyli res.data.data - tam jest nasz nowy item
            // jezeli jest inny od item.id to zostawia ten sam i idzie dalej
            // reduce sumyje nam wszytskie itemy poprzez serializaota w ktorym jest total oraz model i sumuje wszystkie wyniki total z itemow
            setNumCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? res.data.data : cartItem)//podmianka na nowy item
            .reduce((acc, curr) => acc + curr.quantity, 0))//sumujemy quantity wszytskich itemow w koszyku
            setLoading(false);
        })
        .catch(err => {
            console.log(err.message);
            setLoading(false);
        })
    }, [quantity]);

    return (
        <div className="col-md-12">
            <div
            className="cart-item d-flex align-items-center mb-3 p-3"
            style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}
            >
            <img
                src={`${BASE_URL}${item.product.image}`}
                alt="Product Image"
                className="img-fluid"
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <div className="ms-3 flex-grow-1">
                <h5 className="mb-1">{item.product.name}</h5>
                <p className="mb-0 text-muted">{`${item.product.price}$`}</p>
            </div>
            <div className="d-flex align-items-center">
                <input
                type="number"
                min="1"
                className="form-control me-3"
                value={quantity}
                // zmiana wartosci quantity
                onChange={(e) => setQuantity(e.target.value)}
                disabled={loading}
                style={{ width: '70px' }}
                />
                <button className="btn btn-danger btn-sm" onClick={deleteCartItem}>Remove</button>
            </div>
            </div>

            {/* Add more cart items here */}
        </div>
    )
}

export default CartItem