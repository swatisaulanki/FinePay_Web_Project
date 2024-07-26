import React from "react";
import "./ReffaralWithDrawalSetup.css";
const ReffaralWithDrawalSetup = () => {
  const data = [
    {
      name: "John Doe",

      mob: "1234567890",

      state: "NY",
      productype: "Product 1",
      amount: "100.00",

      dateTime: "2024-07-13 12:00",

      Status: "Checked",
    },
    // Add more entries as needed
  ];
  return (
    <div className="table-container">
      <h1>Referral Withdrawal</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mob</th>
            <th>State</th>

            <th>Referral ID</th>
            <th>Minimum Amount Buy</th>
            <th>Product Type</th>
            <th>Amount</th>
            <th>Date & Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.mob}</td>
              <td>{item.state}</td>
              <td>{item.productype}</td>
              <td>{item.amount}</td>
              <td>{item.dateTime}</td>
              <td>{item.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReffaralWithDrawalSetup;
