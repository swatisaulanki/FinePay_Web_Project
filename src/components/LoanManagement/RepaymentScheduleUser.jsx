import React from 'react'
import "./RepaymentScheduleUser.css"
const RepaymentScheduleUser = () => {
  const data = [
    {
      name: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      mob: "1234567890",
      email: "john@example.com",
      city: "New York",
      state: "NY",
      LoanId:"15236",
      LoanType: "Product 1",
      EmiDate: "2024-08-31",
      Emiamount: "03.00",
      transactionId: "TX123456",
      dateTime: "2024-07-13 12:00",
      uniqueId: "UID123",
      paymentType: "PhonePe",
      userType: "Employee",
      subscriptionType:"NA",
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
          <th>Emi Date</th>
          <th>Emi amount</th>
          <th>Transaction ID</th>
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
            <td>{item.LoanId}</td>
            <td>{item.LoanType}</td>
            <td>{item.EmiDate}</td>
            <td>{item.Emiamount}</td>
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

export default RepaymentScheduleUser
