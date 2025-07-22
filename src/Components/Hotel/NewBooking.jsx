import { useState } from "react";
import SearchedRooms from "./SearchedRooms";
import HotelNavigation from "./HotelNavigation";

const NewBooking = () => {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth()+1).padStart(2,0)
  const dd = String(today.getDate()).padStart(2,0)
  const minDate = `${yyyy}-${mm}-${dd}`

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
    <>
      <HotelNavigation />
      <div className="my-10 mx-3">
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
                id="date"
                name="date"
                min={minDate}
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
                id="date"
                name="date"
                min={minDate}
                placeholder="pick a date"
                value={checkOutDate}
                onChange={(e) => setcheckOutDate(e.target.value)}
              />
            </div>

            <div className="w-full mx-5 my-1 ">
              <label htmlFor="guests">Guests</label>
              <select
                name=""
                id=""
                value={guests}
                onChange={(e) => setguests(e.target.value)}
                className="p-1 md:p-2 w-full flex justify-between border border-gray-300 rounded outline-0 hover:shadow-lg "
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              {/* <select type="text" list="guests" placeholder="Select Member" /> */}
            </div>

            <div className="w-full mx-5 my-1 ">
              <label htmlFor="rooms">Rooms</label>
              {/* <input type="text" list="rooms" placeholder="Select Rooms" /> */}
              <select
                name=""
                id=""
                value={rooms}
                onChange={(e) => setrooms(e.target.value)}
                className="p-1 md:p-2 w-full flex justify-between border border-gray-300 rounded outline-0 hover:shadow-lg "
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {/* <datalist name="" id="rooms" className="">
              </datalist> */}
            </div>
          </div>

          <button
            className="w-full bg-gray-900 py-3 my-5 rounded text-center text-[14px] text-white font-medium"
            onClick={() =>
              searchRooms(checkInDate, checkOutDate, rooms, guests)
            }
          >
            Search Available Rooms
          </button>
        </div>
        {search ? <SearchedRooms formData={formData} /> : null}
      </div>
    </>
  );
};

export default NewBooking;
