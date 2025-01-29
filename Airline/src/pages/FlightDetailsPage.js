// src/pages/FlightDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const FlightDetailsPage = () => {
  const { id } = useParams();
  
  // Fetch flight details using id
  const flightDetails = {
    id: id,
    departure: '10:00 AM',
    arrival: '1:00 PM',
    duration: '3h',
    cabinClasses: ['Economy', 'Business'],
    availableSeats: 20,
    fareOptions: {
      economy: '$200',
      business: '$500'
    }
  };

  return (
    <div className="flight-details-page">
      <h2>Flight Details</h2>
      <p>Flight ID: {flightDetails.id}</p>
      <p>Departure: {flightDetails.departure}</p>
      <p>Arrival: {flightDetails.arrival}</p>
      <p>Duration: {flightDetails.duration}</p>
      <p>Cabin Classes: {flightDetails.cabinClasses.join(', ')}</p>
      <p>Available Seats: {flightDetails.availableSeats}</p>
      <p>Fare Options: Economy - {flightDetails.fareOptions.economy}, Business - {flightDetails.fareOptions.business}</p>
      <button>Book Now</button>
    </div>
  );
};

export default FlightDetailsPage;
