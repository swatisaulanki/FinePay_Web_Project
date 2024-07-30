import React from 'react'
import "./MisRepaymentLoanDisb.css"
const MisRepaymentLoanDisb = () => {
    const data = [
        {
          name: "John Doe",
          dob: "1990-01-01",
          gender: "Male",
          mob: "1234567890",
          email: "john@example.com",
          city: "New York",
          state: "NY",
          LoanID:"12354",
          LoanType: "Product 1",
          EmiDate: "100.00",
          EmiAmount: "03.00",
          transactionId: "TX123456",
          TransactionId: "110141",
          DateTime:"2024-02-8 10.00",
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
          <th>City</th>
          <th>State</th>
          <th>Loan Id</th>
          <th>Loan Type</th>
          <th>Emi Date</th>
          <th>Emi Amount</th>
          <th>Transaction Id</th>
          <th>Date & Time</th>
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
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.LoanID}</td>
            <td>{item.LoanType}</td>
            <td>{item.EmiDate}</td>
            <td>{item.EmiAmount}</td>
            <td>{item.TransactionId}</td>
            <td>{item.DateTime}</td>
            <td>{item.Status}</td>
          
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default MisRepaymentLoanDisb
