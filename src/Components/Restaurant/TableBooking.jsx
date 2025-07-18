import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantHeader from './RestaurantHeader';

const TableBooking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = { date, time, people };
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    const updatedBookings = [...existingBookings, newBooking];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    navigate('/CheckAvailabilityConfirm');
  };

  return (
    <>
    <RestaurantHeader/>
    <div className="w-full mt-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 space-y-6"
      >
        <h2 className="text-2xl font-semibold">Reserve a Table</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-semibold block mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            >
              <option value="">Select Time</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="8:30 PM">8:30 PM</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-1">Party Size</label>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            >
              <option value="">Select Size</option>
              <option value="2 People">2 People</option>
              <option value="3 People">3 People</option>
              <option value="4 People">4 People</option>
              <option value="5 People">5 People</option>
              <option value="6 People">6 People</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0d1321] text-white py-3 rounded hover:bg-gray-800"
        >
          Check Availability
        </button>
      </form>
    </div>
    </>
  );
};

export default TableBooking;









