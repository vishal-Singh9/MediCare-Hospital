import React, { useState } from 'react';

function Appointment({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Trigger the onSubmit callback passed from the parent component
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Appointment Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Appointment;
