import React from 'react'
import "./ForeclosurePayment.css"
const ForeclosurePaymentUser = () => {
  const data = [
    {
      name: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      mob: "1234567890",
      city: "New York",
      state: "NY",
      LoanId:"15236",
      LoanType: "Product 1",
      TotalEmiamount: "03.00",
      TotalForeclosureAmount: "8585856",
      TotalAmount: "1485820.525",
      Status:"checked",
    },
    // Add more entries as needed
  ];
  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>``
          <th>DOB</th>
          <th>Gender</th>
          <th>Mob</th>
          <th>State</th>
          <th>Loan Id</th>
          <th>Loan Type</th>
          <th>Total Emi Amount</th>
          <th>Total Foreclosure Amount</th>
          <th>Total Amount</th>
          <th>Status</th>
        
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.dob}</td>
            <td>{item.gender}</td>
            <td>{item.mob}</td>
            <td>{item.state}</td>
            <td>{item.LoanId}</td>
            <td>{item.LoanType}</td>
            <td>{item.TotalEmiamount}</td>
            <td>{item.TotalForeclosureAmount}</td>
            <td>{item.TotalAmount}</td>
            <td>{item.Status}</td>
          
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ForeclosurePaymentUser
