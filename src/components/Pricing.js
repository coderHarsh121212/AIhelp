// src/components/PaymentGateway.js
import React, { useState } from 'react';
import { FaCreditCard, FaWallet, FaMobileAlt } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import 'tailwindcss/tailwind.css';

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'card':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input type="text" name="card-number" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="1234 5678 9123 4567" />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input type="text" name="expiry-date" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="MM/YY" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input type="text" name="cvv" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="123" />
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Pay Now</button>
          </div>
        );
      case 'paytm':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Paytm Mobile Number</label>
              <input type="text" name="paytm-number" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your Paytm number" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Pay with Paytm</button>
          </div>
        );
      case 'phonepe':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">PhonePe Mobile Number</label>
              <input type="text" name="phonepe-number" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your PhonePe number" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Pay with PhonePe</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-5 text-center">Payment Gateway</h2>
        <div className="flex justify-around mb-8">
          <Tooltip title="Credit/Debit Card" placement="top">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-3 rounded-full ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <FaCreditCard size={24} />
            </button>
          </Tooltip>
          <Tooltip title="Paytm" placement="top">
            <button
              onClick={() => setPaymentMethod('paytm')}
              className={`p-3 rounded-full ${paymentMethod === 'paytm' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <FaMobileAlt size={24} />
            </button>
          </Tooltip>
          <Tooltip title="PhonePe" placement="top">
            <button
              onClick={() => setPaymentMethod('phonepe')}
              className={`p-3 rounded-full ${paymentMethod === 'phonepe' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <FaWallet size={24} />
            </button>
          </Tooltip>
        </div>
        {renderPaymentForm()}
      </div>
    </div>
  );
};

export default PaymentGateway;
