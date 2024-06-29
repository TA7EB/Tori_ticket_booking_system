import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    passanger_id: "",
    passanger_name: "",
    passanger_contact: "",
    passanger_email: "",
    passanger_pass: "",
    passanger_type: "local",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/add_passanger", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      toast.success("Form submitted successfully");
      console.log(response.data);
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center text-center p-6">
      <form
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="self-start text-xs font-semibold">
          Name
        </label>
        <input
          id="passanger_name"
          type="text"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none"
          onChange={handleChange}
        />
        <label htmlFor="email" className="self-start text-xs font-semibold">
          Email
        </label>
        <input
          id="passanger_email"
          type="email"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none"
          onChange={handleChange}
        />
        <label
          htmlFor="phone_number"
          className="self-start text-xs font-semibold"
        >
          Phone Number
        </label>
        <input
          id="passanger_contact"
          type="tel"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none"
          onChange={handleChange}
        />
        <label
          htmlFor="password"
          className="self-start mt-3 text-xs font-semibold"
        >
          Password
        </label>
        <input
          id="passanger_pass"
          type="password"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none"
          onChange={handleChange}
        />
        <label htmlFor="con_pass" className="self-start text-xs font-semibold">
          Confirm Password
        </label>
        <input
          type="password"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-green-600 hover:bg-green-700 text-white"
        >
          SignUp
        </button>
        <div className="flex justify-center mt-6 space-x-2 text-xs">
          <Link rel="noopener noreferrer" to="/" className="">
            Forgot Password?
          </Link>
          <span className="">/</span>
          <Link rel="noopener noreferrer" to="/Login" className="">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
