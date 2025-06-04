import { FaCcPaypal } from "react-icons/fa6";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import styles from "./PaymentSection.module.css";
import api from "../../api";
import { useState } from "react";

const PaymentSection = () => {
    const cart_code = localStorage.getItem("cart_code")
    const [loading, setLoading] = useState(false)

    function makePayment(){
      setLoading(true);
      api.post("initiate_payment/", {cart_code})
      .then(res => {
        console.log(res.data);
        window.location.href = res.data.data.link
        setLoading(false);
      })
      .catch(err => {
        console.log("Error initiating payment: ", err.message);
        setLoading(false);
      })
    }

    function makePaypalPayment(){
      setLoading(true);
      api.post("initiate_paypal_payment/", {cart_code})
      .then(res => {
        console.log(res.data);
        if(res.data.approval_url){
          window.location.href = res.data.approval_url
        }
        setLoading(false);
      })
      .catch(err => {
        console.log("Error initiating payment: ", err.message);
        setLoading(false);
      })
    }

    return (
        <div className="col-md-4">
        <div className={`card ${styles.card}`}>
          <div className="card-header" style={{ backgroundColor: '#6050DC', color:"white"}}>
            <h5>Payment Options</h5>
          </div>
          <div className="card-body">
            {/* PayPal Button */}
            <button className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} id="paypal-button" onClick={makePaypalPayment}>
            <FaCcPaypal style={{fontSize:"30px"}} /> Pay with PayPal
            </button>

            {/* Flutterwave Button */}
            <button className={`btn btn-warning w-100 ${styles.flutterwaveButton}`} id="flutterwave-button" onClick={makePayment} >
            <BsFillCreditCard2FrontFill  style={{fontSize:"30px"}} /> Pay with Flutterwave
            </button>
          </div>
        </div>
    </div>
  )
}

export default PaymentSection