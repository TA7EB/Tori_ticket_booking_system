import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Payment = () => {
  let navigate = useNavigate();




  let [rideInfo, setRideInfo] = useState("");
  let [boatInfo, setBoatInfo] = useState("");
  let [totalFare, setTotalFare] = useState(0);
  const [availableSeats, setAvailableSeats] = useState([]);

  useEffect(() => {
    const storedRideData = localStorage.getItem("rideInfo");
    const storedBoatData = localStorage.getItem("boatInfo");

    const parsedRideData = storedRideData ? JSON.parse(storedRideData) : null;
    setRideInfo(parsedRideData);

    const parsedBoatData = storedBoatData ? JSON.parse(storedBoatData) : null;
    setBoatInfo(parsedBoatData);
  }, []);

  // console.log(boatInfo.available_seat)

  // let seats = boatInfo?.available_seat;
  
  // const availableSeats = Array.from(Array(seats).keys()).map((x) => x + 1);

  useEffect(() => {
    if (boatInfo?.available_seat !== undefined) {
      const seats = boatInfo.available_seat;
      const availableSeatsArray = Array.from({ length: seats }, (_, i) => i + 1);
      setAvailableSeats(availableSeatsArray);
    }
  }, [boatInfo]);

  console.log(availableSeats);



  

  // Handle for input
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    seats: "",
    paymentMethod: "",
  });

  const handleSubmitInfo = (e) => {
    e.preventDefault();

    if (e.target.seats.value === "How many seats do you need?") {
      return Swal.fire({
        title: "Oops!!",
        text: "Selecting seats is required",
        icon: "warning",
      });
    }

    if (!formData.paymentMethod) {
      return Swal.fire({
        title: "Oops!!",
        text: "Selecting payment method is required",
        icon: "warning",
      });
    }

    if (formData.paymentMethod === "online") {
      fetch("https://tori-sslcommerz.vercel.app/payment/tori/sslcommerz", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...formData, totalFare }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result.url);
          localStorage.setItem("userInfo", JSON.stringify(formData));
          window.location.replace(result.url);
        });
    }

    if (formData.paymentMethod === "offline") {
      localStorage.setItem("userInfo", JSON.stringify(formData));
      navigate("/Payment-Success");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "seats") {
      let totalSeats = value;

      setTotalFare(totalSeats * boatInfo?.fare);
    }

    if (type === "radio" && checked) {
      setFormData({
        ...formData,
        paymentMethod: value === "offline" ? "offline" : "online",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };




 

  return (
    <div>
      <div className="w-[60%] mx-auto my-20 border-2 border-green-400 rounded-lg">
        <h1 className="text-center bg-green-500 py-3 text-xl font-bold">
          Please fill up the form and confirm your journey
        </h1>

        <div className="grid grid-cols-2 justify-items-center gap-5 text-lg my-5">
          <div>
            <h1>Date of Journey: {rideInfo?.startDate}</h1>
            <h1>Date of Return: {rideInfo?.endDate}</h1>
            <h1>From: {rideInfo?.fromLocation}</h1>
            <h1>To: {rideInfo?.toLocation}</h1>
          </div>

          <div>
            <h1>Boat: {boatInfo?.boat}</h1>
            <h1>Departure Time: {boatInfo?.dep_time}</h1>
            <h1>Arrival Time: {boatInfo?.arr_time}</h1>
            <h1>Available Seats: {boatInfo?.available_seat}</h1>
            <h1>Fare: {boatInfo?.fare}</h1>
          </div>
        </div>

        <div>
          <h1 className="text-center py-3 text-xl font-bold">
            Personal Information
          </h1>

          <form
            onSubmit={handleSubmitInfo}
            className="my-5 flex flex-col justify-center items-center gap-4"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input
              type="text"
              required
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input
              type="email"
              required
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs"
            />
<select
        className="select select-bordered w-full max-w-xs"
        name="seats"
        onChange={handleChange}
      >
        <option disabled selected>
          How many seats do you need?
        </option>
        {availableSeats.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

            <div className="flex flex-col justify-center items-center gap-3 mt-4">
              <h1 className="text-lg font-bold">Payment Method</h1>
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2 text-lg">
                      Pay {totalFare} taka offline
                    </span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="offline"
                      className="radio checked:bg-green-500"
                      checked={formData.paymentMethod === "offline"}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2 text-lg">
                      {/* Pay {boatInfo.fare} taka via SSLCOMMERZ */}
                      Pay {totalFare} taka via SSLCOMMERZ
                    </span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      className="radio checked:bg-green-500"
                      checked={formData.paymentMethod === "online"}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600"
            >
              Confirm Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Payment;
