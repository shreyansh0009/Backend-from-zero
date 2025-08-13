import axios from "axios";
import React, { useState } from "react";

function Profile() {
  const [userData, setuserData] = useState(null);

  function getProfile() {
    const Token = JSON.parse(localStorage.getItem("Atoken"));

    if (!Token) {
      window.alert("404, User not logged in!");
    }

    if (userData) {
      window.alert("Profile data already rendered!");
    } else {
      const header = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };

      try {
        axios
          .get("https://api.escuelajs.co/api/v1/auth/profile", header)
          .then((res) => {
            window.alert("Profile fetched successfully!");
            setuserData(res.data);
          });
      } catch (error) {
        throw new error();
      }
    }
  }

  function handleOut() {
    const Token = JSON.parse(localStorage.getItem("Atoken"));

    if (!Token) {
      window.alert("404, User not logged in!");
    } else {
      setuserData(null);
      localStorage.removeItem("Atoken");
      window.alert("Logout successfully!");
    }
  }

  return (
    <div className="text-white space-x-5">
      <button
        onClick={getProfile}
        className="bg-amber-500 p-2 rounded-md cursor-pointer"
      >
        View Profile
      </button>
      <button
        onClick={handleOut}
        className="bg-red-500 p-2 rounded-md cursor-pointer"
      >
        Logout
      </button>

      <div className="flex flex-col justify-center items-center">
        {userData && (
          <div className="space-y-4 mt-10">
            <img
              className="h-28 w-28 rounded-[50%]"
              src={userData.avatar}
              alt="avatar"
            />
            <p>Name: {userData?.name || "N/A"}</p>
            <p>Email: {userData?.email || "N/A"}</p>
            <p>Role: {userData?.role || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
