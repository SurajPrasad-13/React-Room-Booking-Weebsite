import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import HotelNavigation from "./HotelNavigation";

const NewBooking = () => {
  const navigate = useNavigate(); // ✅ hook to navigate

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  const [checkInDate, setcheckInDate] = useState("");
  const [checkOutDate, setcheckOutDate] = useState("");
  const [rooms, setrooms] = useState();
  const [guests, setguests] = useState();

  function searchRooms(inDate, outDate, rooms, guests) {
    if (!inDate || !outDate) {
      alert("Please select both Check-In & Check-Out Dates");
    } else if (!rooms || !guests) {
      alert("Please select both Rooms & Number of Guests");
    } else {
      const formData = {
        checkInDate: inDate,
        checkOutDate: outDate,
        rooms,
        guests,
      };

      // ✅ navigate to SearchedRooms with formData in state
      navigate("/searched-rooms", { state: formData });
    }
  }

  return (
    <>
      <HotelNavigation />
      <div className="my-10 mx-3">
        <div className="bg-white p-2 rounded-xl mx-auto">
          <h1 className="text-lg md:text-2xl font-medium">
            Search Available Rooms
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-around">
            {/* Check-in */}
            <div className="w-full mx-5 my-1">
              <label>Check-in Date</label>
              <input
                type="date"
                min={minDate}
                className="w-full p-2 border rounded"
                value={checkInDate}
                onChange={(e) => setcheckInDate(e.target.value)}
              />
            </div>

            {/* Check-out */}
            <div className="w-full mx-5 my-1">
              <label>Check-out Date</label>
              <input
                type="date"
                min={minDate}
                className="w-full p-2 border rounded"
                value={checkOutDate}
                onChange={(e) => setcheckOutDate(e.target.value)}
              />
            </div>

            {/* Guests */}
            <div className="w-full mx-5 my-1">
              <label>Guests</label>
              <select
                value={guests}
                onChange={(e) => setguests(e.target.value)}
                className="w-full p-2 border rounded"
              >
                 <option value="">Select</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
              </select>
            </div>

            {/* Rooms */}
            <div className="w-full mx-5 my-1">
              <label>Rooms</label>
              <select
                value={rooms}
                onChange={(e) => setrooms(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select</option>
                <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
              </select>
            </div>
          </div>

          <button
            className="w-full bg-gray-900 py-3 my-5 text-white rounded"
            onClick={() =>
              searchRooms(checkInDate, checkOutDate, rooms, guests)
            }
          >
            Search Available Rooms
          </button>
        </div>
      </div>
    </>
  );
};

export default NewBooking;
