import React from 'react'
import "./GoldProWithHistory.css"
const GoldProWithHistory = () => {
    const data = [
        {
          name: "John Doe",
          dob: "1990-01-01",
          gender: "Male",
          mob: "1234567890",
          email: "john@example.com",
          city: "New York",
          state: "NY",
          productName: "Product 1",
          amount: "100.00",
          transactionId: "TX123456",
          dateTime: "2024-07-13 12:00",
          uniqueId: "UID123",
          paymentType: "PhonePe",
       
        },
        // Add more entries as needed
      ];
  return (
    <div className="table-container">
    <h1> Gold Pro</h1>
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
      <th>Digital Gold</th>
      <th>Amount</th>
      <th>Transaction ID</th>
      <th>Date & Time</th>
      <th>Unique ID</th>
      <th>Payment Status</th>
     
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
        <td>{item.productName}</td>
        <td>{item.amount}</td>
        <td>{item.transactionId}</td>
        <td>{item.dateTime}</td>
        <td>{item.uniqueId}</td>
        <td>{item.paymentType}</td>
       
      </tr>
    ))}
  </tbody>
</table>
</div>
  )
}

export default GoldProWithHistory
