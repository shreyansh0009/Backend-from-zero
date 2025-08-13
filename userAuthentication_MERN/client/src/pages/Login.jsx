import React, { useState } from "react";
import axios from "axios";
import Profile from "./Profile";

function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  function handleSubmit() {
    const Token = JSON.parse(localStorage.getItem("Atoken"));

    if (Token) {
      window.alert("User already logged in!");
    } else {
      const user = {
        email: email,
        password: password,
      };

      try {
        axios
          .post("https://api.escuelajs.co/api/v1/auth/login", user)
          .then((res) => {
            window.alert("Login Successfull!");
            localStorage.setItem(
              "Atoken",
              JSON.stringify(res.data.access_token)
            );
            // const refresh_token = res.data.refresh_token;
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
    // setemail("");
    // setpassword("");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-900">
      <div className="flex flex-col space-y-3 w-80 p-5 bg-gray-500 border-2 rounded-lg">
        <div className="space-y-3 flex flex-col justify-center items-center">
          <label htmlFor="email" className="font-semibold text-lg">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="border-2 rounded-md p-1 w-[97%]"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <label htmlFor="password" className="font-semibold text-lg">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="border-2 rounded-md p-1 w-[97%]"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>

        <button
          className="mt-3 text-lg bg-emerald-400 rounded-lg p-2 font-semibold cursor-pointer"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
      <div className="mt-10 ">
        <Profile />
      </div>
    </div>
  );
}

export default Login;
