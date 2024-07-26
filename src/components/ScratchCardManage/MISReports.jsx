import React from 'react'

const MISReports = () => {
    const data = [
        {
          name: "John Doe",
    
          mob: "1234567890",
    
          state: "NY",
          ProductType: "Product 1",
          Amount: "100.00",
          TransactionID:"02563",
          dateTime: "2024-07-13 12:00",
          PaymentStatus:"PhonePe",
          ScartchCartBalance:"40k",
          TotalScartchCardBalance:"200k",
          Status: "Checked",
        },
        // Add more entries as needed
      ];
  return (
    <div className="table-container">
    <h1>MIS Reports</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mob</th>
          <th>State</th>

          <th>Product Type</th>
          <th>Amount</th>
          <th>TransactionID</th>
          <th>Date & Time</th>
          <th>PaymentStatus</th>
          <th>Scartch Card Balance</th>
          <th>Total Scartch Card Balance</th>

          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.mob}</td>
            <td>{item.state}</td>
            <td>{item.ProductType}</td>
            <td>{item.Amount}</td>
            <td>{item.TransactionID}</td>

            <td>{item.dateTime}</td>
            <td>{item.PaymentStatus}</td>
            <td>{item.ScartchCartBalance}</td>
            <td>{item.TotalScartchCardBalance}</td>
             <td>{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default MISReports
