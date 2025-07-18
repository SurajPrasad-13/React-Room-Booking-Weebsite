import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

function ConfirmForm() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("selectedBooking");
    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(" Reservation Confirmed!");
    navigate("/reservedConfirmed");
  };

  const backpage = () => {
    navigate("/CheckAvailabilityConfirm");
  };

  if (!booking) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 m-2">
      {/* Left: Form */}
      <div className="bg-white rounded p-5 md:col-span-6 col-span-full">
        <p className="text-2xl font-bold">Reservation Details</p>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="font-semibold mt-4">Full Name</label>
          <input type="text" required placeholder="Enter your full name" className="border border-gray-300 p-2 rounded" />

          <label className="font-semibold mt-4">Email</label>
          <input type="email" required placeholder="Enter your email" className="border border-gray-300 p-2 rounded" />

          <label className="font-semibold mt-4">Phone Number</label>
          <input type="tel" required placeholder="Enter phone number" className="border border-gray-300 p-2 rounded" />

          <label className="font-semibold mt-4">Special Occasion (Optional)</label>
          <select className="border border-gray-300 p-2 rounded">
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Business Meeting</option>
            <option>Date Night</option>
            <option>Celebration</option>
            <option>Other</option>
          </select>

          <label className="font-semibold mt-4">Special Request</label>
          <textarea className="border border-gray-300 p-2 rounded"></textarea>

          <div className="flex justify-between gap-4 mt-5">
            <button type="button" onClick={backpage} className="w-full border border-gray-400 p-2 rounded font-semibold">
              Back
            </button>
            <button type="submit" className="w-full bg-black text-white p-2 rounded font-semibold">
              Confirm Reservation
            </button>
          </div>
        </form>
      </div>

      {/* Right: Reservation Summary */}
      <div className="bg-white rounded p-5 md:col-span-6 col-span-full">
        <div className="font-bold text-lg mb-4">Reservation Summary</div>

        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-2">
            <SlCalender /> <span>{booking.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineWatchLater /> <span>{booking.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoPeople /> <span>{booking.people}</span>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn /> <span>Table {booking.table.id}</span>
          </div>
        </div>

        <div className="bg-[#f9f9f9] border mt-6 rounded p-4 text-sm">
          <p><strong>Type:</strong> {booking.table.type}</p>
          <p><strong>Capacity:</strong> {booking.table.seats} people</p>
          <p><strong>Location:</strong> {booking.table.location}</p>
        </div>

        <div className="bg-green-100 mt-6 p-4 rounded text-sm">
          <p className="font-semibold">Confirmation</p>
          <p>Your table will be held for 15 minutes past your reservation time.</p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmForm;
