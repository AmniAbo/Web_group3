import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
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
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="container" className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold">Features</h2>
          <p className="text-lg mt-4">This page will list the features of the Health Data Visualizer.</p>
        </div>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Be Healthy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Features;
