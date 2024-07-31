import React from 'react'
import "./MisReportsLoan.css"
const MISReportsLoan = () => {
  const data = [
    {
      name: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      mob: "1234567890",
      email: "john@example.com",
      city: "New York",
      state: "NY",
      AccountNumber: "Product 1",
      IFSCCode: "100.00",
      Photos: "03.00",
      BankStatement: "TX123456",
      FatherName: "2024-07-13 12:00",
      MotherName: "UID123",
      ReferanceMoNoOne: "PhonePe",
      ReferanceMoNoTwo: "Employee",
      LoanType:"NA",
      LoanAmount:"NA",
      LoanId:"12547",
      CreateDateTime:"1900-09-6",
      Cibilscore:"2501",
      Tenure:"NA",
      IntrestRate:"5%",
      ProcessingFee:"NA",
      DisbursementAmount:"NA",
      TransactionId:"NA",
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
          <th>Email</th>
          <th>City</th>
          <th>State</th>
          <th>AccountNumber</th>
          <th>IFSCCode</th>
          <th>Photos</th>
          <th>Bank Statement</th>
          <th>Father Name</th>
          <th>Mother Name</th>
          <th>Referance Mo No-1</th>
          <th>Referance Mo No-2</th>
          <th>Loan Type</th>
          <th>Loan Amount</th>
          <th>Loan Id</th>
          <th>Create Date & Time</th>
          <th>Cibil score</th>
          <th>Tenure</th>
          <th>Intrest Rate</th>
          <th>Processing Fee</th>
          <th>Disbursement Amount</th>
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
            <td>{item.AccountNumber}</td>
            <td>{item.IFSCCode}</td>
            <td>{item.Photos}</td>
            <td>{item.BankStatement}</td>
            <td>{item.FatherName}</td>
            <td>{item.MotherName}</td>
            <td>{item.ReferanceMoNoOne}</td>
            <td>{item.ReferanceMoNoTwo}</td>
            <td>{item.LoanType}</td>
            <td>{item.LoanAmount}</td>
            <td>{item.LoanId}</td>
            <td>{item.CreateDateTime}</td>
            <td>{item.Cibilscore}</td>
            <td>{item.Tenure}</td>
            <td>{item.IntrestRate}</td>
            <td>{item.ProcessingFee}</td>
            <td>{item.DisbursementAmount}</td>
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

export default MISReportsLoan
