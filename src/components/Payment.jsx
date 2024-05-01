import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Payment = () => {
  let navigate = useNavigate();

  let [rideInfo, setRideInfo] = useState("");
  let [boatInfo, setBoatInfo] = useState("");

  useEffect(() => {
    const storedRideData = localStorage.getItem("rideInfo");
    const storedBoatData = localStorage.getItem("boatInfo");

    const parsedRideData = storedRideData ? JSON.parse(storedRideData) : null;
    setRideInfo(parsedRideData);

    const parsedBoatData = storedBoatData ? JSON.parse(storedBoatData) : null;
    setBoatInfo(parsedBoatData);
  }, []);

  let seats = boatInfo.availableSeat;
  const availableSeats = Array.from(Array(seats).keys()).map((x) => x + 1);

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

    localStorage.setItem("userInfo", JSON.stringify(formData));

    navigate("/Payment-Success");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

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
      <div className="w-[60%] mx-auto my-20 border-2 border-teal-400 rounded-lg">
        <h1 className="text-center bg-teal-400 py-3 text-xl font-bold">
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
            <h1>Boat: {boatInfo?.name}</h1>
            <h1>Departure Time: {boatInfo?.departureTime}</h1>
            <h1>Arrival Time: {boatInfo?.arrivalTime}</h1>
            <h1>Available Seats: {boatInfo?.availableSeat}</h1>
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
                      Pay {boatInfo.fare} taka offline
                    </span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="offline"
                      className="radio checked:bg-teal-500"
                      checked={formData.paymentMethod === "offline"}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-2 text-lg">
                      Pay {boatInfo.fare} taka via SSLCOMMERZ
                    </span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      className="radio checked:bg-teal-500"
                      checked={formData.paymentMethod === "online"}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn bg-teal-400 hover:bg-teal-400">
              Confirm Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Payment;
