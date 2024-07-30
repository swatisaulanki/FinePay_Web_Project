import React from 'react'
import "./LoanAproved.css"
const LoanAproved = () => {
  const data = [
    {
      name: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      mob: "1234567890",
      state: "NY",
      LoanType: "Product 1",
      Loanamount: "100.00",
      LoanId: "TX123456",
      dateTime: "2024-07-13 12:00",
      Cibilscore: "40%",
      tenure: "NA",
      InterestRate: "8",
      Processingfee:"NA",
      Status:"checked",
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
          <th>Loan Type</th>
          <th>Loan Amount</th>
          <th>Loan Id</th>
          <th>Create Date & Time</th>
          <th>Cibil score</th>
          <th>tenure</th>
          <th>Interest Rate</th>
          <th>Processing fee</th>
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
            <td>{item.LoanType}</td>
            <td>{item.Loanamount}</td>
            <td>{item.LoanId}</td>
            <td>{item.dateTime}</td>
            <td>{item.Cibilscore}</td>
            <td>{item.tenure}</td>
            <td>{item.InterestRate}</td>
            <td>{item.Processingfee}</td>
            <td>{item.Status}</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default LoanAproved
