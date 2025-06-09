// CallbackForm.jsx

import '../stylying/form.css';
import React, { useState } from 'react';

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    className: '',
    goals: '',
    courses: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Implement submission logic here
  };

  return (
    <div className="callback-form">
      <div className="form-image">
        <img
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_auto,q_auto/v1730878962/oqfy1klihlgn0vmpy77w.webp?_upload_ref=ic_img_tool"
          alt="Form Illustration"
        />
      </div>

      <div className="form-container">
        <h2>Request a callback</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="input-group">
            <label>Student's full name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ex: Rohit Singh"
              required
            />
          </div>

          <div className="input-group">
            <label>Mobile Number*</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Ex: +91 9876543210"
              required
            />
          </div>

          <div className="input-group">
            <label>Class*</label>
            <select name="className" value={formData.className} onChange={handleChange} required>
              <option value="">Select Class</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
            </select>
          </div>

          <div className="input-group">
            <label>Goals*</label>
            <select name="goals" value={formData.goals} onChange={handleChange} required>
              <option value="">Select Goal</option>
              <option value="NEET">NEET</option>
              <option value="JEE">JEE</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>Preferred Courses*</label>
            <select name="courses" value={formData.courses} onChange={handleChange} required>
              <option value="">Select Course</option>
              <option value="Online Courses">Online Courses</option>
              <option value="Classroom Courses">Classroom Courses</option>
            </select>
          </div>

          <div className="input-group">
            <label>State*</label>
            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select State</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>

          <div className="terms">
            <label>
              By continuing, you agree to our <a href="/terms">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;
