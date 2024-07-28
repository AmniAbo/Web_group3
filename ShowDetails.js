import React, { useEffect, useState } from 'react';
import { auth, database } from './Firebase'; // Adjust the import if necessary
import { ref, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ShowDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate('/login'); // Redirect if no user is authenticated
        return;
      }
      try {
        const userRef = ref(database, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUserDetails(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [navigate]);

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
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">User Details</h2>
          {userDetails ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={auth.currentUser.email}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
                <input
                  type="text"
                  id="age"
                  value={userDetails.age}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="height">Height (cm)</label>
                <input
                  type="text"
                  id="height"
                  value={userDetails.height}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="weight">Weight (kg)</label>
                <input
                  type="text"
                  id="weight"
                  value={userDetails.weight}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>
                <input
                  type="text"
                  id="gender"
                  value={userDetails.gender}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  readOnly
                />
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading...</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Be Healthy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShowDetails;
