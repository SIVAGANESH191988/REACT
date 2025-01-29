// src/pages/PaymentPage.js
import React, { useState } from 'react';

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: ''
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit payment data
    console.log('Payment Data:', paymentData);
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} required />
        </label>
        <label>
          Expiry Date:
          <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} required />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" value={paymentData.cvv} onChange={handleChange} required />
        </label>
        <label>
          Card Holder Name:
          <input type="text" name="cardHolderName" value={paymentData.cardHolderName} onChange={handleChange} required />
        </label>
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
