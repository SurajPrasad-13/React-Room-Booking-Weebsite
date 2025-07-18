import React, { useState } from "react";
import { bookingData } from "../../assets/Data";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import HotelNavigation from "./HotelNavigation";
const Bookings = () => {
  const [checkedOutBookings, setCheckedOutBookings] = useState([]);

  const handleToggleCheck = (bookingId) => {
    setCheckedOutBookings((prev) =>
      prev.includes(bookingId)
        ? prev.filter((id) => id !== bookingId)
        : [...prev, bookingId]
    );
  };

  return (
    <>

    <HotelNavigation/>
    <div className="bg-white m-4 p-3 rounded-xl">
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <h1 className="md:text-2xl font-medium">Recent Bookings</h1>
        <input
          className="border border-gray-200 py-1 px-2 md:px-4 rounded"
          type="text"
          placeholder="Search bookings..."
        />
      </div>

      {bookingData.map((item) => {
        const isCheckedOut = checkedOutBookings.includes(item.bookingId);

        return (
          <div
            key={item.bookingId}
            className="rounded-lg text-[12px] md:text-[16px] border border-gray-200 flex p-3 items-center justify-between flex-wrap hover:shadow-lg text-gray-600 my-5"
          >
            <div className="flex items-center justify-around gap-5 ">
              <div>
                <p className="font-semibold text-black ">{item.guestName}</p>
                <p>Booking ID: {item.bookingId}</p>
              </div>
              <div>
                <p>
                  Room:
                  <span className="text-gray-700 font-medium">
                    {" "}
                    {item.room}
                  </span>
                </p>
                <p>
                  {item.checkIn} to {item.checkOut}
                </p>
              </div>
              <div>
                <p>Guests: {item.guestCount}</p>
                <p className="text-green-600 font-medium">{item.bill}</p>
              </div>
            </div>

            <div className="flex text-[13px] md:text-[16px] items-center flex-wrap justify-start gap-3 p-3">
              {isCheckedOut ? (
                <div className="font-semibold text-green-600">Completed</div>
              ) : (
                <div>
                  <button className="text-green-800 rounded-lg p-1 md:px-3 bg-green-200 m-2">
                    {item.booking}
                  </button>
                  <button
                    onClick={() => handleToggleCheck(item.bookingId)}
                    className="border rounded-lg p-1 md:px-3 border-gray-400 text-black hover:bg-blue-100"
                  >
                    {item.booking === "active" ? "Check Out" : "Check In"}
                  </button>
                </div>
              )}
              <button className="border text-black rounded-lg p-1 md:px-3 border-gray-400 hover:bg-blue-100 flex justify-center items-center gap-2">
                <MdOutlineRemoveRedEye /> Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Bookings;
