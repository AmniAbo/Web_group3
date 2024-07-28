import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import Signup from './Signup.js';
import Contact from './Contact.js';
import Features from './Features.js';
import Lobby from './Lobby.js';
import EditDetails from './EditDetails'
import ShowDetails from './ShowDetails'

function App() {
  return (
    <Router>
      <Routes>
        {/* Set the login page as the default route */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/editdetails" element={<EditDetails />} />
        <Route path="/showdetails" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
