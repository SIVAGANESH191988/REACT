// src/pages/BookingConfirmationPage.js
import React from 'react';

const BookingConfirmationPage = () => {
  const bookingDetails = {
    flightItinerary: 'Flight XYZ123',
    passengerInfo: 'John Doe',
    seatSelection: '12A',
    totalFare: '$200'
  };

  return (
    <div className="booking-confirmation-page">
      <h2>Booking Confirmation</h2>
      <p>Flight Itinerary: {bookingDetails.flightItinerary}</p>
      <p>Passenger Information: {bookingDetails.passengerInfo}</p>
      <p>Seat Selection: {bookingDetails.seatSelection}</p>
      <p>Total Fare: {bookingDetails.totalFare}</p>
      <button>Confirm Booking</button>
    </div>
  );
};

export default BookingConfirmationPage;
