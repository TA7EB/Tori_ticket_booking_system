import { useEffect, useState } from "react";

const PaymentSuccess = () => {
  let [rideInfo, setRideInfo] = useState("");
  let [boatInfo, setBoatInfo] = useState("");
  let [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const storedRideData = localStorage.getItem("rideInfo");
    const storedBoatData = localStorage.getItem("boatInfo");
    const storedUserData = localStorage.getItem("userInfo");

    const parsedRideData = storedRideData ? JSON.parse(storedRideData) : null;
    setRideInfo(parsedRideData);

    const parsedBoatData = storedBoatData ? JSON.parse(storedBoatData) : null;
    setBoatInfo(parsedBoatData);

    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    setUserInfo(parsedUserData);
  }, []);

 

  return (
    <div>
      <div className="w-[60%] mx-auto my-20 border-2 border-teal-200 rounded-lg pb-10">
        <h1 className="text-center bg-green-400 py-3 text-xl font-bold">
          Your ticket has been confirmed ✅
        </h1>

        <div className="grid grid-cols-2 justify-items-center gap-5 text-lg my-5">
          <div>
            <h1>Date of Journey: {rideInfo?.startDate}</h1>
            <h1>Date of Return: {rideInfo?.endDate}</h1>
            <h1>From: {rideInfo?.fromLocation}</h1>
            <h1>To: {rideInfo?.toLocation}</h1>
          </div>

          <div>
            <h1>Boat: {boatInfo?.name}</h1>
            <h1>Departure Time: {boatInfo?.departureTime}</h1>
            <h1>Arrival Time: {boatInfo?.arrivalTime}</h1>
            <h1>Booked Seats: {userInfo?.seats}</h1>
            <h1>Fare: {boatInfo?.fare * parseInt(userInfo?.seats)}</h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-lg justify-center items-center">
          <h1 className="text-center py-3 text-xl font-bold">
            Personal Information
          </h1>

          <h1>Passenger Name: {userInfo?.name}</h1>
          <h1>Passenger Address: {userInfo?.address}</h1>
          <h1>Email: {userInfo?.email}</h1>
          <h1>
            Payment:{" "}
            {userInfo?.paymentMethod === "offline"
              ? "Will pay to the cash counter"
              : "Paid Online"}
          </h1>
        </div>
        <h1 className="text-center font-bold mt-8">
          Please check your email inbox and print out the ticket.
        </h1>
      </div>
    </div>
  );
};

export default PaymentSuccess;
