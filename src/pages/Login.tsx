import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TEST_CREDENTIALS = { username: "admin", password: "password" };

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      username === TEST_CREDENTIALS.username &&
      password === TEST_CREDENTIALS.password
    ) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  const autofillTestCreds = () => {
    setUsername(TEST_CREDENTIALS.username);
    setPassword(TEST_CREDENTIALS.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e8eaf6] to-[#f9f7f3] p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-6 text-center">
          Sign in to HyperDexa
        </h2>
        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-2 border border-[#e8eaf6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] text-sm sm:text-base"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 sm:px-4 py-2 border border-[#e8eaf6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <Button
            type="submit"
            className="w-full bg-[#1e3a8a] text-white rounded-lg py-2 font-semibold text-sm sm:text-base shadow-md hover:bg-[#1e3d8f]"
          >
            Login
          </Button>
        </form>
        <button
          onClick={autofillTestCreds}
          className="mt-4 w-full text-xs text-[#1e3a8a] underline hover:text-[#1e3d8f]"
          type="button"
        >
          Autofill test credentials
        </button>
      </div>
    </div>
  );
};

export default Login;
