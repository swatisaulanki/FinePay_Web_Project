import React, { useState } from 'react'
import "./AllProductLoan.css"
const AllProductLoan = () => {
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
          <label htmlFor="designation" className="label">Loan Type:</label>
          <select
            id="designation"
            name="f_Designation"
            required
            className="select"
            value={selectedProductType}
            onChange={handleProductTypeChange}
          >
            <option value="">Select</option>
            <option value="PersonalLoan">Personal Loan</option>
            <option value="BusinessLoan">Business Loan</option>
         
          </select>
        </div>

        {selectedProductType === "PersonalLoan" && (
          <div className="form-group">
            <label htmlFor="PersonalLoanOptions" className="label">Personal Loan Options:</label>
            <select
              id="PersonalLoanOptions"
              name="f_PersonalLoanOptions"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Option 1">Weekly EMI</option>
              <option value="Option 2">Monthly EMI</option>

            </select>
          </div>
        )}



        {selectedProductType === "BusinessLoan" && (
          <div className="form-group">
            <label htmlFor="BusinessLoanOptions" className="label">Business Loan Options:</label>
            <select
              id="BusinessLoanOptions"
              name="f_BusinessLoanOptions"
              required
              className="select"
            >
              <option value="">Select</option>
              <option value="Option 1">Weekly EMI</option>
              <option value="Option 2">Monthly EMI</option>

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

export default AllProductLoan
