import React from 'react'
import "./UserLoanHistory.css"
const UserLoanHistory = () => {
    const data = [
        {
          name: "John Doe",
          dob: "1990-01-01",
          gender: "Male",
          mob: "1234567890",
          email: "john@example.com",
          city: "New York",
          state: "NY",
          Loancategory:"NA",
          LoanDisbursementAmount: "NA",
          CibilScore: "100.00",
          ShopPhotos:"NA",
          BankStatement: "03.00",
          ApproveStatus:"Approved",
          GuarantorName:"NA",
          Relationship:"NA",
          GuarantorMob:"NA",
          Creditamount:"NA",
          Insurance:"NA",
          TenureType:"NA",
          Interest:"NA",
          transactionId: "TX123456",
          dateTime: "2024-07-13 12:00",
          uniqueId: "UID123",
          paymentType: "PhonePe",
          userType: "Employee",
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
          <th>Loan category</th>
          <th>Loan Disbursement Amount</th>
          <th>Cibil Score</th>
          <th>Shop Photos</th>
          <th>Bank Statement</th>
          <th>Approve Status</th>
          <th>Guarantor Name</th>
          <th>Relationship</th>
          <th>Guarantor Mob</th>
          <th>Credit amount</th>
          <th>Insurance</th>
          <th>Tenure type</th>
          <th>Interest</th>
          <th>Transaction ID</th>
          <th>Date & Time</th>
          <th>Unique ID</th>
          <th>Payment Type</th>
          <th>User Type</th>
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
            <td>{item.Loancategory}</td>
            <td>{item.LoanDisbursementAmount}</td>
            <td>{item.CibilScore}</td>
            <td>{item.ShopPhotos}</td>
            <td>{item.BankStatement}</td>
            <td>{item.ApproveStatus}</td>
            <td>{item.GuarantorName}</td>
            <td>{item.Relationship}</td>
            <td>{item.GuarantorMob}</td>
            <td>{item.Creditamount}</td>
            <td>{item.Insurance}</td>
            <td>{item.TenureType}</td>
            <td>{item.Interest}</td>
            <td>{item.transactionId}</td>
            <td>{item.dateTime}</td>
            <td>{item.uniqueId}</td>
            <td>{item.paymentType}</td>
            <td>{item.userType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default UserLoanHistory
