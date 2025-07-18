import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const ReservedConfirmed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9fbff] p-4 text-center">
      <FaCheckCircle className="text-green-500 text-6xl mb-4" />
      <h2 className="text-2xl font-bold mb-2">Table Reserved!</h2>
      <p className="text-gray-600 mb-6">
        Your reservation has been confirmed. We look forward to serving you!
      </p>

      <div className="bg-white rounded shadow p-4 w-full max-w-md mb-6">
        <p className="font-semibold mb-2">Contact Information</p>
        <p> (555) 123-4567</p>
        <p> reservations@restaurant.com</p>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("selectedBooking");
          navigate("/tableBooking");
        }}
        className="bg-[#0d1321] text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Make Another Reservation
      </button>
    </div>
  );
};

export default ReservedConfirmed;
