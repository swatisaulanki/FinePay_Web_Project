import React from 'react'
import "./OverdueFineUser.css"
const OverdueFineUser = () => {
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
      EmiDate: "2024-08-31",
      Emiamount: "03.00",
      EmiBounce: "UID123",
      OverdueFine: "8989",
      TotalAmount: "859624756",
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
          <th>Emi Date</th>
          <th>Emi amount</th>
          <th>Emi Bounce</th>
          <th>Overdue fine</th>
          <th>Total amount</th>
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
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.LoanId}</td>
            <td>{item.LoanType}</td>
            <td>{item.EmiDate}</td>
            <td>{item.Emiamount}</td>
            <td>{item.EmiBounce}</td>
            <td>{item.OverdueFine}</td>
            <td>{item.TotalAmount}</td>
            <td>{item.Status}</td>
          
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default OverdueFineUser
