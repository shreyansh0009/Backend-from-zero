import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function EditUser() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate(); // To redirect after update/delete
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/edit/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsername(data.username);
        setFullName(data.fullName);
      } catch (err) {
        console.error('Failed to fetch user:', err);
        setError('Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, API_URL]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!username || !fullName) {
      setError('Username and Full Name cannot be empty.');
      return;
    }

    try {
      const updatedUserData = { username, fullName };
      const response = await fetch(`${API_URL}/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      navigate('/'); // Navigate back to home on successful update
    } catch (err) {
      console.error('Failed to update user:', err);
      setError('Failed to update user. Please try again.');
    }
  };

  const handleDelete = async () => {
    // Optional: Add a confirmation dialog
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      navigate('/'); // Navigate back to home on successful delete
    } catch (err) {
      console.error('Failed to delete user:', err);
      setError('Failed to delete user. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Edit User</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-amber-500 hover:bg-amber-700 cursor-pointer focus:outline-none"
            >
              Update User
            </button>
          </div>
        </form>
        <div className="mt-6 flex justify-between items-center">
            <button
                onClick={handleDelete}
                className="text-sm text-red-500 hover:text-red-700 cursor-pointer"
            >
                Delete User
            </button>
            <Link to="/" className="text-sm text-blue-500 hover:text-blue-700">
                Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
