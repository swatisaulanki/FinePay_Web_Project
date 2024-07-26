import React from 'react'
import "./ReffaralUserBalance.css"
const ReffaralUserBalance = () => {
  const data = [
    {
      name: "John Doe",
      mob: "1234567890",
     
      state: "NY",
      ReferralID:"15023",
      dateTime: "2024-07-13 12:00",
      ReferralUserID:"02586",
      ReferralBalance: "30k",
      Status: "cheked",
   
    },
    // Add more entries as needed
  ];
  return (
    <div className="table-container">
    <h1>Referral Balance</h1>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Mob</th>
      <th>State</th>
      <th>Referral ID</th>
      <th>Date & Time</th>
      <th> Referral User ID</th>
      <th>Referral Balance</th>
      <th>Status</th>

    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.mob}</td>
        <td>{item.state}</td>
        <td>{item.ReferralID}</td>
     
        <td>{item.dateTime}</td>
        <td>{item.ReferralUserID}</td>
        <td>{item.ReferralBalance}</td>

        <td>{item.Status}</td>
       
      </tr>
    ))}
  </tbody>
</table>
</div>
  )
}

export default ReffaralUserBalance
