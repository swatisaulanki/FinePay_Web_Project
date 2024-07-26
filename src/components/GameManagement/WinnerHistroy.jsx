import React from 'react'

const WinnerHistroy = () => {
    
 const data = [
    {
      name: "John Doe",

      mob: "1234567890",

      state: "NY",
      Spin:"NA",
      dateTime: "2024-07-13 12:00",
      winBalance:"NA",
      TotalWinerBanlace:"NA",
   
    },
    // Add more entries as needed
  ];
  return (
    <div className="table-container">
    <h1>Winner History</h1>
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
          <th>Spin</th>
          <th>Spin expiry</th>
          <th>Total Winer Banlace</th>
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
            <td>{item.Spin}</td>
            <td>{item.Spinexpiry}</td>
            <td>{item.TotalWinerBanlace}</td>
             <td>{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default WinnerHistroy
