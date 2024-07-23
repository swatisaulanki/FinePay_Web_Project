import React, { useState } from 'react';
import "./ProductsManagForm.css";

const ProductsManageForm = () => {
  const [selectedProductType, setSelectedProductType] = useState("");

  const handleProductTypeChange = (event) => {
    setSelectedProductType(event.target.value);
  };

  return (
    <div className="containers">
      <form>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input
            type="text"
            id="name"
            name="f_Name"
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile" className="label">Mobile No:</label>
          <input
            type="tel"
            id="mobile"
            name="f_Mobile"
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation" className="label">Product Type:</label>
          <select
            id="designation"
            name="f_Designation"
            required
            className="select"
            value={selectedProductType}
            onChange={handleProductTypeChange}
          >
            <option value="">Select</option>
            <option value="Digital Gold">Digital Gold</option>
            <option value="Gold SIP">Gold SIP</option>
            <option value="FineX">FineX</option>
            <option value="FinePlus">FinePlus</option>
            <option value="GoldPro">GoldPro</option>
            <option value="GoldPlus">GoldPlus</option>
            <option value="Merchant">Merchant</option>
          </select>
        </div>

        {selectedProductType === "Digital Gold" && (
          <div className="form-group">
            <label htmlFor="digitalGoldOptions" className="label">Digital Gold Options:</label>
            <select
              id="digitalGoldOptions"
              name="f_DigitalGoldOptions"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Option 1">Running Mode</option>
              
            </select>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="ammount" className="label">Amount:</label>
          <input
            type="number"
            id="ammount"
            name="f_Ammount"
            required
            className="input"
          />
        </div> 
        <div className="form-group">
          <label htmlFor="transaction" className="label">Transaction:</label>
          <input
            type="number"
            id="transaction"
            name="f_transaction"
            required
            className="input"
          />
        </div>

        <div className="submit-button-containers">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductsManageForm;
