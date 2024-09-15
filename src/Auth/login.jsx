import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import GoogleLogo from "../assets/google.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      setError("Login gagal. Periksa kembali username dan password Anda.");

      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Selamat Datang
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Silahkan Sign In untuk melanjutkan
        </p>

        <div className="border border-white border-solid p-4 mt-4 rounded-lg">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {/* Tambahkan onSubmit pada form */}
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan username"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-bluecustom text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center text-gray-600">or</div>
          <button className="w-full bg-white text-black font-bold py-2 px-4 rounded mt-2 flex items-center justify-center border hover:bg-gray-200">
            <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5 mr-2" />
            Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
