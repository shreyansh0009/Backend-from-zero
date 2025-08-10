import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Formm() {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <div className="w-full min-h-screen flex flex-col items-center space-y-5">
        <h1 className="text-5xl mt-8 mb-20 font-semibold">Users App</h1>

        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-xl">Full Name</h2>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              className="p-2 rounded text-white border-2"
              value={formData.fullName}
              onChange={handleChange}
            />
            <h2 className="text-xl">userName</h2>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="User Name"
              className="p-2 rounded text-white border-2"
              value={formData.userName}
              onChange={handleChange}
            />
            <h2 className="text-xl">Email</h2>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="p-2 rounded text-white border-2"
              value={formData.email}
              onChange={handleChange}
            />
            <button 
              type="submit"
              className="bg-blue-600 h-12 rounded-md font-bold text-lg cursor-pointer">
              Create User
            </button>

            <Link to="/show" className="text-md text-blue-400 flex justify-center font-semibold mt-5">Show Users...</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formm