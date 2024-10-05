import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); 
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white rounded-lg shadow-lg flex max-w-4xl">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Sign in</h2>
          
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
              SIGN IN
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 rounded-lg bg-red-500 text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold">Hello again!</h2>
          <p className="mb-4">
            Enter your credentials and start your account with us
          </p>
          <button
            onClick={() => navigate("/register")} 
            className="border border-white py-2 px-4 rounded-md hover:bg-white hover:text-red-500 transition"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
