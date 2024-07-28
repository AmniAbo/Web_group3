import React from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Be Healthy</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-white-700 hover:text-teal-500">Home</Link></li>          
              <li><Link to="/features" className="text-white-700 hover:text-teal-500">Features</Link></li>
              <li><Link to="/contact" className="text-white-700 hover:text-teal-500">Contact</Link></li>
              <li><Link to="/login" className="text-white-700 hover:text-teal-500">Login</Link></li>
              <li><Link to="/show-details" className="text-white-700 hover:text-teal-500">Show Details</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="container" className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-teal-500 text-center">Welcome to Be Healthy Lobby</h1>
          <div className="mt-6">
            <Link to="/editdetails">
              <button className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
                Edit Details
              </button>
            </Link>
            <Link to="/showdetails" className="w-full mt-4 block text-center text-teal-500 hover:text-teal-700">
              View Your Details
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Be Healthy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Lobby;
