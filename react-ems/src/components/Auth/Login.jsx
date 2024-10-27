import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 px-36">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-emerald-600 outline-none bg-transparent rounded-full text-xl py-3 px-5 placeholder:text-gray-400"
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-emerald-600 outline-none bg-transparent rounded-full text-xl py-3 px-5 mt-2 placeholder:text-gray-400"
            placeholder="Enter Your Password"
          />
          <button className="border-none text-white border-emerald-600 outline-none bg-emerald-600 rounded-full text-xl py-3 px-16 mt-5 placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
