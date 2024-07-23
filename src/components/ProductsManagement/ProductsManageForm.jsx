import React from 'react'
import "./ProductsManagForm.css"
const ProductsManageForm = () => {
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
        >
          <option value="">Select</option>
          <option value="Super Admin">Digital Gold</option>
          <option value="Sub Admin">Gold SIP</option>
          <option value="Sub Admin">FineX</option>
          <option value="Sub Admin">FinePlus</option>
          <option value="Sub Admin">GoldPro</option>
          <option value="Sub Admin">GoldPlus</option>
          <option value="Sub Admin">Merchant</option>


        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ammount" className="label">Ammount:</label>
        <input
          type="Number"
          id="Ammonut"
          name="f_Ammount"
          required
          className="input"
        />
      </div> 
      <div className="form-group">
        <label htmlFor="transaction" className="label">Transaction:</label>
        <input
          type="Number"
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

export default ProductsManageForm
