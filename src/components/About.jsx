import React from 'react';

const About = () => {
  return (
    <div className="bg- py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">About Our Boat Ticket Booking System</h1>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 items-center">
          <div className="md:w-1/2">
            <img src="https://i.ibb.co/4pM8jR4/boat-marina-yachts-luxury-marina.jpg" alt="Boat" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <p className="text-l">
              Welcome to our Boat Ticket Booking System""Tori", your one-stop destination for booking boat tickets and exploring exciting water adventures. We are passionate about making your maritime journeys as smooth and enjoyable as possible.
            </p>
            <p className="text-l mt-4">
              Our system offers a user-friendly interface, secure payment options, and a wide selection of boat routes to choose from. Whether you're planning a leisurely cruise, a coastal adventure, or a tropical getaway, we have you covered.
            </p>
            <p className="text-l mt-4">
              At Boat Ticket Booking System, we are dedicated to providing outstanding customer service and ensuring your safety on every voyage. Our team is committed to helping you create unforgettable memories on the water.
            </p>
            <p className="text-l mt-4">
              Thank you for choosing us as your preferred platform for booking boat tickets. We look forward to serving you and being a part of your nautical experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
