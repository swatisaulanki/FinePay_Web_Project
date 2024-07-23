import React from 'react'
import "./UserWallet.css"
const UserWallet = () => {
  const data = [
    {
      name: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      mob: "1234567890",
      email: "john@example.com",
      city: "New York",
      state: "NY",
      kycStatus: "NA",
      Bankdetails: "NA",
      photos: "NA",
      ProductType: "NA",
      amount: "100.00",
      WalletbalanceType:"NA",
      gst: "03.00",
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

          <th>Product Type</th>
          <th>Amount</th>
          <th>Wallet balance Type</th>
          <th>GST</th>
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
            <td>{item.kycStatus}</td>
            <td>{item.Bankdetails}</td>
            <td>{item.photos}</td>
            <td>{item.ProductType}</td>
            <td>{item.amount}</td>
            <td>{item.WalletbalanceType}</td>
            <td>{item.gst}</td>
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

export default UserWallet
