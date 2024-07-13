import React from 'react';

const ReportSummary = () => {
  const totalInvestment = 50000;
  const totalSell = 70000;
  const totalGST = 10000;
  const totalAdminCommission = 5000;

  const monthlyInvestment = [10000, 15000, 12000, 13000]; // Example data
  const monthlySell = [17000, 18000, 16000, 19000]; // Example data
  const monthlyGST = [2000, 2500, 2200, 2300]; // Example data
  const monthlyAdminCommission = [1200, 1300, 1100, 1400]; // Example data

  const todayInvestment = 3000;
  const todaySell = 5000;
  const todayGST = 700;
  const todayAdminCommission = 300;

  const misReportsBuy = [
    {
      name: 'John Doe',
      dob: '1990-01-01',
      gender: 'Male',
      mob: '1234567890',
      email: 'john@example.com',
      city: 'New York',
      state: 'NY',
      productName: 'Product A',
      amount: 500,
      gst: 50,
      transactionId: 'TX12345',
      dateTime: '2024-07-11 10:00 AM',
      uniqueId: 'UID123',
      paymentType: 'Credit Card',
      rm: 'Branch A',
      agency: 'Agency A',
      userType: 'Employee',
    },
    // Add more report data as needed
  ];

  return (
    <div>
      <h2>Report Summary</h2>
      <p><strong>A. Total Investment:</strong> ${totalInvestment}</p>
      <p><strong>Total Sell:</strong> ${totalSell}</p>
      <p><strong>Total GST:</strong> ${totalGST}</p>
      <p><strong>Total Admin Commission:</strong> ${totalAdminCommission}</p>

      <h2>Monthly Graphs</h2>
      <p><strong>B. Monthly Investment:</strong> {monthlyInvestment.join(', ')}</p>
      <p><strong>Monthly Sell:</strong> {monthlySell.join(', ')}</p>
      <p><strong>Monthly GST:</strong> {monthlyGST.join(', ')}</p>
      <p><strong>Monthly Admin Commission:</strong> {monthlyAdminCommission.join(', ')}</p>

      <h2>Today's Summary</h2>
      <p><strong>C. Today Investment:</strong> ${todayInvestment}</p>
      <p><strong>Today Sell:</strong> ${todaySell}</p>
      <p><strong>Today GST:</strong> ${todayGST}</p>
      <p><strong>Today Admin Commission:</strong> ${todayAdminCommission}</p>

      <h2>MIS Reports Buy</h2>
      {misReportsBuy.map((report, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {report.name}</p>
          <p><strong>DOB:</strong> {report.dob}</p>
          <p><strong>Gender:</strong> {report.gender}</p>
          <p><strong>Mobile:</strong> {report.mob}</p>
          <p><strong>Email:</strong> {report.email}</p>
          <p><strong>City:</strong> {report.city}</p>
          <p><strong>State:</strong> {report.state}</p>
          <p><strong>Product Name:</strong> {report.productName}</p>
          <p><strong>Amount:</strong> ${report.amount}</p>
          <p><strong>GST:</strong> ${report.gst}</p>
          <p><strong>Transaction ID:</strong> {report.transactionId}</p>
          <p><strong>Date & Time:</strong> {report.dateTime}</p>
          <p><strong>Unique ID:</strong> {report.uniqueId}</p>
          <p><strong>Payment Type:</strong> {report.paymentType}</p>
          <p><strong>RM (Branch Type):</strong> {report.rm}</p>
          <p><strong>Agency:</strong> {report.agency}</p>
          <p><strong>User Type:</strong> {report.userType}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportSummary;
