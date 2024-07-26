import React from "react";
import "./ReffaralMisReports.css";
const ReffaralMisReports = () => {
  const data = [
    {
      name: "John Doe",
      mob: "1234567890",
      state: "NY",
      ReferralID: "023584",
      dateTime: "2024-07-13 12:00",
      ReferralUserId: "UID123",
      MinimumAmount: "80k",
      ExpireDate:"2026-09-26",
      ReferralBalance:"500000",
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

            <th>Referral ID</th>
            <th>Date & Time</th>
            <th>Referral User ID</th>
            <th>Minimum Amount</th>
            <th>Expire Date</th>

            <th>Referral Balance</th>
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
              <td>{item.ReferralUserId}</td>
              <td>{item.MinimumAmount}</td>
              <td>{item.ExpireDate}</td>
              <td>{item.ReferralBalance}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReffaralMisReports;
