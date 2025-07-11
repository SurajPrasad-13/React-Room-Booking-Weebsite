import React, { useState } from "react";
import SearchedRooms from "./SearchedRooms";
// import NewRoomBooking from "./RmBookingForm";
// import BookingConfirmed from "./BookingConfirmed";
import RmBookingForm from "./RmBookingForm";

const NewBooking = () => {
  const [checkInDate, setcheckInDate] = useState("");
  const [checkOutDate, setcheckOutDate] = useState("");

  const [rooms, setrooms] = useState();
  const [guests, setguests] = useState();

  const [search, setSearch] = useState(false);
  const [formData, setformData] = useState();
  function searchRooms(inDate, outDate, rooms, guests) {
    if (!inDate || !outDate) {
      alert("Please select both Check-In & Check-Out Dates");
    } else if (!rooms || !guests) {
      alert("Please select both Rooms & Number of Guests");
    } else {
      setSearch(true);
      setformData({
        checkInDate: inDate,
        checkOutDate: outDate,
        rooms,
        guests,
      });
    }
  }
  return (
    <div className="my-10">
      <div className="bg-white  p-2 rounded-xl mx-auto">
        <h1 className="text-lg md:text-2xl font-medium">
          Search Available Rooms
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full mx-5 my-1  ">
            <label htmlFor="checkIn">Check-in Date</label>
            <input
              className="w-full p-1 md:p-2  border  col-span-8 border-gray-300 rounded outline-0 hover:shadow-lg"
              type="date"
              placeholder="pick a date "
              value={checkInDate}
              onChange={(e) => setcheckInDate(e.target.value)}
            />
          </div>

          <div className="w-full mx-5 my-1 ">
            <label htmlFor="checkout">Check-out Date</label>
            <input
              className="w-full p-1 md:p-2  border  col-span-8 border-gray-300 rounded outline-0 hover:shadow-lg"
              type="date"
              placeholder="pick a date"
              value={checkOutDate}
              onChange={(e) => setcheckOutDate(e.target.value)}
            />
          </div>

          <div className="w-full mx-5 my-1 ">
            <label htmlFor="guests">Guests</label>
            <input
              type="text"
              list="guests"
              placeholder="Select Member"
              value={guests}
              onChange={(e) => setguests(e.target.value)}
              className="p-1 md:p-2 w-full flex justify-between border border-gray-300 rounded outline-0 hover:shadow-lg "
            />
            <datalist name="" id="guests">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
              <option value="6" />
            </datalist>
          </div>

          <div className="w-full mx-5 my-1 ">
            <label htmlFor="rooms">Rooms</label>
            <input
              type="text"
              list="rooms"
              placeholder="Select Rooms"
              value={rooms}
              onChange={(e) => setrooms(e.target.value)}
              className="p-1 md:p-2 w-full flex justify-between border border-gray-300 rounded outline-0 hover:shadow-lg "
            />
            <datalist name="" id="rooms" className="">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
            </datalist>
          </div>
        </div>

        <button
          className="w-full bg-gray-900 py-3 my-5 rounded text-center text-[14px] text-white font-medium"
          onClick={() => searchRooms(checkInDate, checkOutDate, rooms, guests)}
        >
          Search Available Rooms
        </button>
      </div>
      {search ? <SearchedRooms formData={formData} /> : null}
    </div>
  );
};

export default NewBooking;
