import React from 'react';
import './RolesForm.css';

const RolesForm = () => {
  return (
    <div className="containers">
      <form>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input type="text" id="name" name="f_Name" required className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input type="email" id="email" name="f_Email" required className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password:</label>
          <input type="password" id="password" name="f_password" required className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile" className="label">Mobile No:</label>
          <input type="tel" id="mobile" name="f_Mobile" required className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="designation" className="label">Roles:</label>
          <select id="designation" name="f_Designation" required className="select">
          <option>select</option>
            <option value="Super Admin">Supar Admin</option>
            <option value="Sub Admin">Sub Admin</option>
          </select>
        </div>

        <div className="form-group">
          <span className="label">Gender:</span>
          <div className="flex-items-center">
            <input type="radio" id="male" name="f_Gender" value="Male" required className="radio-input mr-2" />
            <label htmlFor="male" className="mr-4">Male</label>
            <input type="radio" id="female" name="f_Gender" value="Female" required className="radio-input mr-2" />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        

        <div className="submit-button-containers">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RolesForm;
