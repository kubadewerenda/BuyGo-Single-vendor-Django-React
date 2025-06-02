import styles from "./OrderHistoryItem.module.css";

const OrderHistoryItem = () => {
    return (
        <div className="card-body">
            <div className={`order-item mb-3 ${styles.orderItem}`}>
                <div className="row">
                    <div className="col-md-2">
                        <img
                            src=""
                            alt="Order Item"
                            className="img-fluid"
                            style={{ borderRadius: '5px' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h6>A pair of shoe</h6>
                        <p>Order Date: 22nd September 2024</p>
                        <p>Order ID: QZ12DFED</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h6 className="text-muted">Quantity: 2</h6>
                    </div>
                    <div className="col-md-2 text-center">
                        <h6 className="text-muted">$300.00</h6>
                    </div>
                </div>
            </div>
            {/* Repeat for other orders */}
        </div>
    )
}

export default OrderHistoryItem