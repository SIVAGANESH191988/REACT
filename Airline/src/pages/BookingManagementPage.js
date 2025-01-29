// src/pages/BookingManagementPage.js
import React, { useState } from 'react';

const BookingManagementPage = () => {
  const [bookings, setBookings] = useState([
    { id: 1, flight: 'Flight XYZ123', date: '2024-06-20' },
    { id: 2, flight: 'Flight ABC456', date: '2024-07-15' }
  ]);

  const handleCancel = (id) => {
    // Cancel booking logic
    console.log('Cancel booking with ID:', id);
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const handleModify = (id) => {
    // Modify booking logic
    console.log('Modify booking with ID:', id);
  };

  return (
    <div className="booking-management-page">
      <h2>Manage Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.flight} on {booking.date}
            <button onClick={() => handleModify(booking.id)}>Modify</button>
            <button onClick={() => handleCancel(booking.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingManagementPage;
