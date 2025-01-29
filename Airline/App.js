// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import FlightSearchPage from './pages/FlightSearchPage';
import FlightDetailsPage from './pages/FlightDetailsPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import UserProfilePage from './pages/UserProfilePage';
import PaymentPage from './pages/PaymentPage';
import BookingManagementPage from './pages/BookingManagementPage';
import FlightStatusPage from './pages/FlightStatusPage';
import AdminDashboard from './pages/AdminDashboard';
import LocalisationSettingsPage from './pages/LocalisationSettingsPage';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/App.css';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/search-flights" component={FlightSearchPage} />
        <Route path="/flight-details/:id" component={FlightDetailsPage} />
        <Route path="/booking-confirmation" component={BookingConfirmationPage} />
        <Route path="/profile" component={UserProfilePage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/booking-management" component={BookingManagementPage} />
        <Route path="/flight-status" component={FlightStatusPage} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/settings" component={LocalisationSettingsPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
