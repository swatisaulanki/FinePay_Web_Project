import React from 'react';
import './SuperAdminTable.css';

const SuperAdminTable = ({ superAdminSubmissions = [] }) => {
  console.log('Super Admin Submissions:', superAdminSubmissions); // Debug log

  return (
    <div className="submissions-table">
      <h2>Super Admin Submissions</h2>
      {superAdminSubmissions.length > 0 ? (
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
            {superAdminSubmissions.map((submission, index) => (
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
        <p>No Super Admin data submitted yet.</p>
      )}
    </div>
  );
};

export default SuperAdminTable;
