import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  // State to hold the list of users fetched from the backend.
  const [users, setUsers] = useState([]);

  // State to handle loading and error messages.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  // Function to fetch all users from the backend.
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Failed to load users. Please check your backend server.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect hook to run the fetchUsers function once when the component mounts.
  // The empty dependency array [] ensures this runs only on the initial render.
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload).

    if (!username || !fullName) {
      setError("Both username and full name are required.");
      return;
    }

    try {
      const userData = { username, fullName };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If the creation is successful, clear the form and refetch the users.
      setUsername("");
      setFullName("");
      fetchUsers();
      setError(null);
    } catch (err) {
      console.error("Failed to create user:", err);
      setError("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl w-full flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        {/* User Creation Form */}
        <div className="p-8 lg:p-12 flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Create New User
          </h2>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm"
              role="alert"
            >
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Enter a unique username"
              />
            </div>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Enter the full name"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out cursor-pointer"
              >
                Add User
              </button>
            </div>
          </form>
        </div>

        {/* User List Display */}
        <div className="p-8 lg:p-12 flex-1 bg-gray-50">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            All Users
          </h2>
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <svg
                className="animate-spin h-8 w-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : users.length > 0 ? (
            <ul className="space-y-4">
              {users.map((user) => (
                <li
                  key={user._id}
                  className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center transition duration-150 ease-in-out hover:shadow-lg"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      @{user.username}
                    </p>
                    <p className="text-sm text-gray-500">{user.fullName}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-gray-500">
              <p>No users found. Add a user to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
