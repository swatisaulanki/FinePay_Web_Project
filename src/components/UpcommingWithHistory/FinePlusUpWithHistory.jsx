import React from 'react'
import "./FinePlusWithHistory.css"
const FinePlusUpWithHistory = () => {
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
          maturityDate: "24-07-2024",
          
       
        },
        // Add more entries as needed
      ];
  return (
    <div className="table-container">
    <h1>Fine Plus</h1>
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
      <th>Maturity Date</th>
     
     
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
        <td>{item.maturityDate}</td>
       
       
      </tr>
    ))}
  </tbody>
</table>
</div>
  )
}

export default FinePlusUpWithHistory
