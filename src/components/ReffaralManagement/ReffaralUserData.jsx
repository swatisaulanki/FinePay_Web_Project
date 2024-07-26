import React from 'react'

const ReffaralUserData = () => {
  const data = [
    {
      name: "John Doe",
      mob: "1234567890",
      state: "NY",
      ReferralID: "01258",
      amount: "100.00",
      dateTime: "2024-07-13 12:00",
      ReferralUserID: "UID123",
      ProductType: "PhonePe",
      Minimum:"50k",
      AmountBuy:"300000",
      Expiredate:"2024-08-20",
      Status:"checked",
    },
    // Add more entries as needed
  ];
  return (
    <div className="table-container">
    <h1>Referral User</h1>
<table>
  <thead>
    <tr>
      <th>Name</th>
   
      <th>Mob</th>
      <th>State</th>
      <th>Referral ID</th>
      <th>Amount</th>
      <th>Date & Time</th>
      <th> Referral User ID</th>
      <th>Product Type</th>
      <th>Minimum</th>
      <th>Amount Buy</th>
      <th>Expire date</th>
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
        <td>{item.amount}</td>
        <td>{item.dateTime}</td>
        <td>{item.ReferralUserID}</td>
        <td>{item.ProductType}</td>
        <td>{item.Minimum}</td>
        <td>{item.AmountBuy}</td>
        <td>{item.Expiredate}</td>
        <td>{item.Status}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
  )
}

export default ReffaralUserData
