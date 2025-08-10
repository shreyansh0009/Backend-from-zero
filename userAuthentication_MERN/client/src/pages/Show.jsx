import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Show() {
  const [users, setUsers] = useState([]);

  // Placeholder for data fetching
  useEffect(() => {
    // Add your fetch logic here
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      // Add your delete logic here
    }
  };

  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <div className="w-full min-h-screen flex flex-col items-center space-y-6 py-10">
        <h1 className="text-5xl font-bold mb-4">All Users</h1>

        <div className="flex flex-wrap justify-center gap-6">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className="bg-zinc-700 rounded-xl p-6 w-72 shadow-lg">
                <h2 className="text-xl font-semibold text-blue-300">{user.fullName}</h2>
                <p className="text-md text-gray-300 mt-2">
                  <strong>Username:</strong> {user.userName}
                </p>
                <p className="text-md text-gray-300">
                  <strong>Email:</strong> {user.email}
                </p>

                <div className="flex justify-between mt-4">
                  <Link to={`/edit/${user._id}`} className="text-yellow-400 hover:underline">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-gray-400 text-xl">No users found.</h2>
          )}
        </div>

        <Link to="/" className="text-blue-400 hover:underline font-semibold mt-6">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default Show;
