import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoneyBillAlt, FaCreditCard, FaWallet, FaRegCreditCard, FaMoneyCheckAlt, FaRegClock, FaUniversity } from "react-icons/fa";
import staricon from '../components/img-visa/star.svg'
import upiicon from '../components/img-visa/upi.svg'
import visa from '../components/img-visa/visa.webp'
import mastercard from '../components/img-visa/mastercard.webp'
import paypal from '../components/img-visa/paypal.png'
import rupay from '../components/img-visa/rupay.png'

import RecommendedPage from "./PaymentMethods/RecommendedPage"
import CODPage from "./PaymentMethods/CODPage";
import GPayBHIMUPI from "./PaymentMethods/GPayBHIMUPI"; 
import CreditDebitCard from "./PaymentMethods/CreditDebitCard";
import WalletPage from "./PaymentMethods/WalletPage";
import Footer from "./Footer"
function PaymentPage() {

 
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedPaymentPage, setSelectedPaymentPage] = useState(null);

  const handlePaymentMethodClick = (id) => {
    setSelectedPaymentMethod(id);
    
    switch (id) {
      case 'recommended':
        setSelectedPaymentPage(<RecommendedPage/>);
        break;
      case 'cash':
        setSelectedPaymentPage(<CODPage/>);
        break;
      case 'upi':
        setSelectedPaymentPage(<GPayBHIMUPI/>);
        break;
      case 'creditcard':
        setSelectedPaymentPage(<CreditDebitCard/>);
        break;
      case 'wallet':
        setSelectedPaymentPage(<WalletPage/>);
        break;
      default:
        setSelectedPaymentPage(null); 
        break;
    }
  };

  
  useEffect(() => {
    setSelectedPaymentMethod('recommended');
    setSelectedPaymentPage(<RecommendedPage/>);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<div className="breadcrumb-option bg-green">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb__links">
          <Link to="/">
            <i className="fa fa-home"></i> Home
          </Link>
          <span className="arrow">›</span>
          
          <span>Payment</span>
        </div>
      </div>
    </div>
  </div>
</div>

      <section className="checkout spad">
        <div className="container">
          <div className="head">
            <h5 className="payment-heading">Choose Payment Mode</h5>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="payment-container rec">
                <div className={`payment-item ${selectedPaymentMethod === 'recommended' ? 'selected' : ''}`} onClick={() => handlePaymentMethodClick('recommended')}>
                  <img src={staricon} alt="" className="payment-icon" />
                  <span className="recommended">Recommended</span>
                </div>
                <div className={`payment-item ${selectedPaymentMethod === 'cash' ? 'selected' : ''}`} onClick={() => handlePaymentMethodClick('cash')}>
                  <FaMoneyBillAlt className="payment-icon" />
                  <span>Cash on Delivery (Cash/UPI)</span>
                </div>
                <div className={`payment-item ${selectedPaymentMethod === 'upi' ? 'selected' : ''}`} onClick={() => handlePaymentMethodClick('upi')}>
                  <img src={upiicon} alt="" className="payment-icon " />
                  <span>GooglePay/PhonePe/BHIM UPI</span>
                </div>
                <div className={`payment-item ${selectedPaymentMethod === 'creditcard' ? 'selected' : ''}`} onClick={() => handlePaymentMethodClick('creditcard')}>
                  <FaCreditCard className="payment-icon" />
                  <span>Credit/Debit Card</span>
                </div>
                <div className={`payment-item ${selectedPaymentMethod === 'wallet' ? 'selected' : ''}`} onClick={() => handlePaymentMethodClick('wallet')}>
                  <FaWallet className="payment-icon" />
                  <span>Wallet</span>
                </div>
                
              </div>
            </div>
            
            <div className="col-lg-5">
              <div className="payment-container1">
                {selectedPaymentPage}
              </div>
            </div>
            <div className="col-lg-4">
              {/* Order details */}
            
            </div>
          </div>
        </div>
       <Footer />
      </section>
      
    </>
  );
}

export default PaymentPage;