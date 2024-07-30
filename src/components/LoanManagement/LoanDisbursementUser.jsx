import React from 'react'
import "./LoanDisbursementUser.css"
const LoanDisbursementUser = () => {
  const data = [
    {
      name: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      mob: "1234567890",
      email: "john@example.com",
      city: "New York",
      state: "NY",
      tenure:"22",
      InterestRate: "9",
      ProcessingFee: "100.00",
      Disbursementamount: "03.00",
      transactionId: "TX123456",
      dateTime: "2024-07-13 12:00",
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
          <th>Loan Amount</th>
          <th>tenure</th>
          <th>Interest Rate</th>
          <th>Processing Fee</th>
          <th>Disbursement amount</th>
          <th>TransactionID</th>

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
            <td>{item.tenure}</td>
            <td>{item.InterestRate}</td>
            <td>{item.ProcessingFee}</td>
            <td>{item.Disbursementamount}</td>
            <td>{item.transactionId}</td>
            <td>{item.dateTime}</td>
            <td>{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default LoanDisbursementUser
