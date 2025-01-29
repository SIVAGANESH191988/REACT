// src/components/FlightCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <h3>{flight.airline}</h3>
      <p>{flight.departureCity} to {flight.arrivalCity}</p>
      <p>Departure: {flight.departureTime}</p>
      <p>Arrival: {flight.arrivalTime}</p>
      <p>Duration: {flight.duration}</p>
      <p>Price: {flight.price}</p>
      <Link to={`/flight-details/${flight.id}`}>View Details</Link>
    </div>
  );
};

export default FlightCard;
