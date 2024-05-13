import React from 'react';

function PricingCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Pro</h2>
        <p className="text-gray-600">Unlock premium features</p>
      </div>
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="text-3xl font-bold text-gray-800 mb-2">
          <span className="text-green-500" data-qa="p-small_features_table__new_price--standard">₹245.25</span>&nbsp;
          <span className="text-gray-500 line-through">₹545</span>
          <span className="text-sm text-gray-500"> (55% off)</span>
        </div>
        <div className="text-sm text-gray-600">
          <div className="mb-1">per person/month, billed yearly</div>
          <div>
            <span className="font-bold" data-qa="p-small_features_table__new_price--standard">₹294.75</span>&nbsp;
            <span className="text-gray-500">₹655</span>&nbsp;
            per person/month when billed monthly
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Choose Plan
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
