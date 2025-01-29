// src/pages/UserProfilePage.js
import React, { useState } from 'react';

const UserProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    bookingHistory: [
      { id: 1, flight: 'Flight XYZ123', date: '2024-06-20' },
      { id: 2, flight: 'Flight ABC456', date: '2024-07-15' }
    ]
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit updated profile data
    console.log('Profile Data:', profileData);
  };

  return (
    <div className="user-profile-page">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={profileData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={profileData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={profileData.phone} onChange={handleChange} required />
        </label>
        <button type="submit">Update Profile</button>
      </form>
      <h3>Booking History</h3>
      <ul>
        {profileData.bookingHistory.map(booking => (
          <li key={booking.id}>{booking.flight} on {booking.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfilePage;
