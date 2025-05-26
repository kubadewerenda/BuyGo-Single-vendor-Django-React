import OrderItem from './OrderItem';
import styles from "./OrderSummary.module.css";

const OrderSummary = ({cartItems, cartTotal, tax}) => {
    const total = (cartTotal + tax).toFixed(2);

    return (
        <div className="col-md-8">
            <div className={`card mb-4 ${styles.card}`}>
            <div className="card-header" style={{ backgroundColor: '#6050DC', color:"white"}}>
                <h5>Cart Summary</h5>
            </div>
            <div className="card-body">

                <div className='px-3' style={{height:"500px", overflow:"auto"}}>
                    {cartItems.map(cartItem => <OrderItem key={cartItem.id} cartItem={cartItem}/>)}
                </div>

            
                <hr />
                <div className="d-flex justify-content-between">
                <h6>Total</h6>
                <h6>{`${total}$`}</h6>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OrderSummary