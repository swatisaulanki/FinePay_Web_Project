import React, { useState } from 'react';
import './RolesForm.css';

const RolesForm = ({ onAddSubmission }) => {
  const [formData, setFormData] = useState({
    f_Name: '',
    f_Email: '',
    f_password: '',
    f_Mobile: '',
    f_Designation: '',
    f_Gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData); // Debug log
    onAddSubmission(formData);
    setFormData({
      f_Name: '',
      f_Email: '',
      f_password: '',
      f_Mobile: '',
      f_Designation: '',
      f_Gender: '',
    });
  };

  return (
    <div className="containers">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input
            type="text"
            id="name"
            name="f_Name"
            value={formData.f_Name}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            name="f_Email"
            value={formData.f_Email}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            name="f_password"
            value={formData.f_password}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile" className="label">Mobile No:</label>
          <input
            type="tel"
            id="mobile"
            name="f_Mobile"
            value={formData.f_Mobile}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation" className="label">Roles:</label>
          <select
            id="designation"
            name="f_Designation"
            value={formData.f_Designation}
            onChange={handleChange}
            required
            className="select"
          >
            <option value="">Select</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Sub Admin">Sub Admin</option>
          </select>
        </div>

        <div className="form-group">
          <span className="label">Gender:</span>
          <div className="flex-items-center">
            <input
              type="radio"
              id="male"
              name="f_Gender"
              value="Male"
              checked={formData.f_Gender === 'Male'}
              onChange={handleChange}
              required
              className="radio-input mr-2"
            />
            <label htmlFor="male" className="mr-4">Male</label>
            <input
              type="radio"
              id="female"
              name="f_Gender"
              value="Female"
              checked={formData.f_Gender === 'Female'}
              onChange={handleChange}
              required
              className="radio-input mr-2"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div className="submit-button-containers">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RolesForm;
