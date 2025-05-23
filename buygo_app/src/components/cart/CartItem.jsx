import { BASE_URL } from "../../api"

const CartItem = ({item}) => {
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
                value="1"
                style={{ width: '70px' }}
                />
                <button className="btn btn-sm mx-2" 
                style={{backgroundColor: "#4b3bcb", color:"white"}}>
                Update
                </button>
                <button className="btn btn-danger btn-sm" >Remove</button>
            </div>
            </div>

            {/* Add more cart items here */}
        </div>
    )
}

export default CartItem