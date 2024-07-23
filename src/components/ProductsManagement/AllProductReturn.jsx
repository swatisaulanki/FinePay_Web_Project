import React, { useState } from 'react'
import "./AllProductReturn.css"
const AllProductReturn = () => {
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



        {selectedProductType === "Gold SIP" && (
          <div className="form-group">
            <label htmlFor="GoldSIPOptions" className="label"> Gold SIP Options:</label>
            <select
              id="GoldSIPOptions"
              name="f_GoldSIPOptions"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Option 1">Daily</option>
              <option value="Option 1">Weekly</option>
              <option value="Option 1">Monthly</option>

            </select>
          </div>
        )}


        {selectedProductType === "FineX" && (
          <div className="form-group">
            <label htmlFor="FineX" className="label"> FineX Options:</label>
            <select
              id="FineX"
              name="FineX"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Option 1">1 Month</option>
              <option value="Option 1">3 Month</option>
              <option value="Option 1">6 Month</option>
              <option value="Option 1">12 Month</option>

            </select>
          </div>
        )}



        {selectedProductType === "FinePlus" && (
          <div className="form-group">
            <label htmlFor="FinePlus" className="label"> FinePlus Options:</label>
            <select
              id="FinePlus"
              name="f_FinePlus"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Option 1">1 yr</option>
              <option value="Option 1">2 yr</option>
              <option value="Option 1">3 yr</option>
              <option value="Option 1">4 yr</option>
              <option value="Option 1">5 yr</option>
            </select>
          </div>
        )}



        {selectedProductType === "GoldPro" && (
          <div className="form-group">
            <label htmlFor="GoldProOptions" className="label"> Gold Pro Options:</label>
            <select
              id="GoldProOptions"
              name="f_GoldProOptions"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Option 1">1 Month</option>
              <option value="Option 1">3 Month</option>
              <option value="Option 1">6 Month</option>
              <option value="Option 1">12 Month</option>

            </select>
          </div>
        )}

        {selectedProductType === "GoldPlus" && (
          <div className="form-group">
            <label htmlFor="GoldPlusOptions" className="label"> Gold Plus Options:</label>
            <select
              id="GoldPlusOptions"
              name="f_GoldPlusOptions"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Option 1">1 yr</option>
              <option value="Option 1">2 yr</option>
              <option value="Option 1">3 yr</option>
              <option value="Option 1">4 yr</option>
              <option value="Option 1">5 yr</option>

            </select>
          </div>
        )}
        {selectedProductType === "Merchant" && (
          <div className="form-group">
            <label htmlFor="MerchantOptions" className="label"> Merchant Options:</label>
            <select
              id="MerchantOptions"
              name="f_MerchantOptions"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>

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
  )
}

export default AllProductReturn
