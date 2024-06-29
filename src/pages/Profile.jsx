import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setProfileData(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  return (
    <div className="w-[80%] mx-auto mt-14 pb-9">
      <h1 className="text-2xl font-bold">
        Welcome to your profile {profileData?.passanger_name}
      </h1>

      {profileData && (
        <div className="mt-5">
          <p>
            <strong>Name:</strong> {profileData?.passanger_name}
          </p>
          <p>
            <strong>Email:</strong> {profileData?.passanger_email}
          </p>
          <p>
            <strong>Passenger Type:</strong> {profileData?.passanger_type}
          </p>
          <p>
            <strong>Passenger Contact:</strong> {profileData?.passanger_contact}
          </p>
        </div>
      )}

      <button
        onClick={handleLogout}
        className="bg-gray-500 text-white mt-20 ml-14 p-2 rounded-xl font-bold"
      >
        Logout
      </button>

      {/* Dashboard */}
      <div className="mt-[150px]">
        <Dashboard />
      </div>
    </div>
  );
};

export default Profile;
