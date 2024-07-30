import React from 'react'
import "./MisOverdueLoanDisburs.css"
const MisOverdueLoanDisbursement = () => {
  const data = [
    {
      name: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      mob: "1234567890",
      email: "john@example.com",
      state: "NY",
      LoanID:"12354",
      LoanType: "Product 1",
      TotalEmiAmount: "100.00",
      TotalForeclosure: "03.00",
      TotalAmount: "TX123456",
      Status:"NA",
    },
    // Add more entries as needed
  ];
return (
<div className="table-container">
<table>
  <thead>
    <tr>
      <th>Name</th>
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
        <td>{item.email}</td>
        <td>{item.state}</td>
        <td>{item.LoanID}</td>
        <td>{item.LoanType}</td>
        <td>{item.TotalEmiAmount}</td>
        <td>{item.TotalForeclosure}</td>
        <td>{item.TotalAmount}</td>
        <td>{item.Status}</td>
      
      </tr>
    ))}
      </tbody>
    </table>
  </div>
  )
}

export default MisOverdueLoanDisbursement
