import React from 'react';
import './SubAdminTable.css';

const SubAdminTable = ({ subAdminSubmissions = [] }) => {
  console.log('Sub Admin Submissions:', subAdminSubmissions); // Debug log

  return (
    <div className="submissions-table">
      <h2>Sub Admin Submissions</h2>
      {subAdminSubmissions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {subAdminSubmissions.map((submission, index) => (
              <tr key={index}>
                <td>{submission.f_Name}</td>
                <td>{submission.f_Email}</td>
                <td>{submission.f_Mobile}</td>
                <td>{submission.f_Designation}</td>
                <td>{submission.f_Gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Sub Admin data submitted yet.</p>
      )}
    </div>
  );
};

export default SubAdminTable;
