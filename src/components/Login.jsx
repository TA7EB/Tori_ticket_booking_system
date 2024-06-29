import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(email, password);
    if (response) {
      navigate("/profile");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center text-center p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg"
      >
        <label htmlFor="username" className="self-start text-xs font-semibold">
          Username or Email
        </label>
        <input
          // type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none "
        />
        <label
          htmlFor="password"
          className="self-start mt-3 text-xs font-semibold"
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none "
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-green-600 hover:bg-green-700 text-white "
        >
          Login
        </button>
        <div className="flex justify-center mt-6 space-x-2 text-xs">
          <Link rel="noopener noreferrer" to="/" className="">
            Forgot Password?
          </Link>
          <span className="">/</span>
          <Link rel="noopener noreferrer" to="/SignUp" className="">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
