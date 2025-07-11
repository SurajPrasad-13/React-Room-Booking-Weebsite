import { CiCalendar } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center flex-wrap justify-start gap-5 sm:justify-between mx-5 md:mx-10">
        <div>
          <p className="text-xl md:text-3xl font-bold">Hotel Management</p>
          <p className="text-gray-600">Manage rooms, bookings, and occupancy</p>
        </div>
        <NavLink to='/newbooking' className="rounded-lg bg-gradient-to-r from-[#2d60eb] to-[#9134ea] text-white font-medium p-2 md:px-4">
          +  New Booking
        </NavLink>
      </div>
      <div
        className="flex flex-col md:flex-row justify-around gap-4 items-center mx-5
      "
      >
        <div className="h-18 w-full rounded-lg hover:shadow-lg transition duration-300 flex justify-start px-4 items-center gap-2 bg-white ">
          <div className="bg-[rgb(0,255,0,0.2)] inline-block p-2 rounded-xl">
            <CiCalendar className="text-green-700 font-bolder text-xl" />
          </div>
          <div>
            <p>Available</p>
            <h1 className="text-green-600 text-xl font-bold">2</h1>
          </div>
        </div>
        <div className="h-18 w-full rounded-lg  hover:shadow-lg transition duration-300 flex justify-start px-4 items-center gap-2 bg-white ">
          <div className="bg-[rgb(0,0,255,0.2)] inline-block p-2 rounded-xl">
            <IoPeopleOutline className="text-blue-700 font-bolder text-xl" />
          </div>
          <div>
            <p>Occupied</p>
            <h1 className="text-blue-700 text-xl font-bold">2</h1>
          </div>
        </div>
        <div className="h-18 w-full hover:shadow-lg transition duration-300 rounded-lg flex justify-start px-4 items-center gap-2 bg-white">
          <div className="bg-[#fefbd8] inline-block p-2 rounded-xl">
            <CiCalendar className="text-[#fbe602] font-bolder text-2xl" />
          </div>
          <div>
            <p>Reserved</p>
            <h1 className="text-[#fbe602] text-xl font-bold">1</h1>
          </div>
        </div>
        <div className="h-18 w-full rounded-lg hover:shadow-lg transition duration-300 flex justify-start px-4 items-center gap-2 bg-white ">
          <div className="bg-[#fbdede] inline-block p-2 rounded-xl">
            <CiCalendar className="text-[#ae0000] font-bolder text-2xl" />
          </div>
          <div>
            <p>Maintenance</p>
            <h1 className="text-[#ae0000] text-xl font-bold ">1</h1>
          </div>
        </div>
      </div>

      {/* Link Buttons */}
      <div className="bg-[#f3f4f6]   md:w-90 rounded-lg my-10 flex items-center justify-start gap-x-1 mx-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-800 text-white rounded text-[14px] md:text-[16px] p-[5px_10px] md:p-[8px_15px] font-semibold"
              : "hover:text-white hover:bg-gray-800 rounded text-[14px] md:text-[16px] p-[5px_10px] md:p-[8px_15px] font-semibold"
          }
        >
          Room Status
        </NavLink>
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-800 text-white rounded text-[14px] md:text-[16px] p-[5px_10px] md:p-[8px_15px] font-semibold"
              : "hover:text-white hover:bg-gray-800 rounded text-[14px] md:text-[16px] p-[5px_10px] md:p-[8px_15px] font-semibold"
          }
        >
          Bookings
        </NavLink>
        <NavLink
          to="/newbooking"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-800 text-white rounded text-[14px] md:text-[16px] p-[5px_10px] md:p-[8px_15px] font-semibold"
              : "hover:text-white hover:bg-gray-800 rounded text-[14px] md:text-[16px] p-[5px_10px] md:p-[8px_15px] font-semibold"
          }
        >
          New Booking
        </NavLink>
      </div>
    </>
  );
};

export default Header;
