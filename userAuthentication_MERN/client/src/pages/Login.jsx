import React from "react";

function Login() {
  return (
    <div className="flex flex-col space-y-3 m-5 h-72 w-80 p-5 bg-sky-500 border-2 rounded-lg">
      <div className="space-y-3 flex flex-col justify-center items-center">
        <label htmlFor="email" className="font-semibold text-lg">Email</label>
        <input type="email" placeholder="Enter email" className="border-2 rounded-md p-1 w-[97%]"/>
        <label htmlFor="email" className="font-semibold text-lg">Password</label>
        <input type="password" placeholder="Enter password" className="border-2 rounded-md p-1 w-[97%]"/>
      </div>

      <button className="mt-3 text-lg bg-emerald-400 rounded-lg p-2 font-semibold cursor-pointer">Login</button>
    </div>
  );
}

export default Login;
