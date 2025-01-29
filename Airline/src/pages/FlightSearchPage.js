// src/pages/FlightSearchPage.js
import React, { useState } from 'react';
import FlightCard from '../components/FlightCard';

const FlightSearchPage = () => {
  const [searchData, setSearchData] = useState({
    departureCity: '',
    arrivalCity: '',
    travelDates: '',
    preferredAirline: ''
  });

  const [flights, setFlights] = useState([]);

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock flight data
    const mockFlights = [
      {
        id: 1,
        airline: 'Airline A',
        departureCity: searchData.departureCity,
        arrivalCity: searchData.arrivalCity,
        departureTime: '10:00 AM',
        arrivalTime: '1:00 PM',
        duration: '3h',
        price: '$200'
      },
      {
        id: 2,
        airline: 'Airline B',
        departureCity: searchData.departureCity,
        arrivalCity: searchData.arrivalCity,
        departureTime: '2:00 PM',
        arrivalTime: '5:00 PM',
        duration: '3h',
        price: '$250'
      }
    ];
    setFlights(mockFlights);
  };

  return (
    <div className="flight-search-page">
      <h2>Search Flights</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Departure City:
          <input type="text" name="departureCity" value={searchData.departureCity} onChange={handleChange} required />
        </label>
        <label>
          Arrival City:
          <input type="text" name="arrivalCity" value={searchData.arrivalCity} onChange={handleChange} required />
        </label>
        <label>
          Travel Dates:
          <input type="text" name="travelDates" value={searchData.travelDates} onChange={handleChange} required />
        </label>
        <label>
          Preferred Airline:
          <input type="text" name="preferredAirline" value={searchData.preferredAirline} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="flight-results">
        {flights.map(flight => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default FlightSearchPage;
