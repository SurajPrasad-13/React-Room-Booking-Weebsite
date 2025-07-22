import { IoMdPeople } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function RestaurantHeader() {
  return (
    <div>
      <div className="flex justify-between items-center md:flex-row flex-col px-5 w-full  text-center ">
        <div>
          <p className="text-3xl font-semibold mx-5">Restaurant Management</p>
          <p className="font-boldt text-gray-500 mx-5 ">
            Manage tables, orders, and menu items
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#9433e8] to-[#e62cb1] hover:from-[#7b16d4] hover:to-[#9e1477] text-white font-medium rounded-lg flex gap-4 p-3 m-5">
          <p>+</p>
          <button> New Reservation</button>
        </div>
      </div>

      {/* availabel boxes */}

      <div className="grid grid-cols-1 md:grid-cols-4 m-2  gap-2 ">
        <div className="bg-white w-full h- text-center rounded-lg hover:shadow-lg ">
          <div className="  flex justify-start items-center p-2 m-2 gap-2">
            <div className="bg-green-200 text-green-400 w-8 h-8 rounded-lg flex justify-center items-center">
              <IoMdPeople />
            </div>
            <div className="flex justify-start items-start flex-col">
              <p> Available Tables</p>
              <p>2</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h- text-center rounded-lg hover:shadow-lg ">
          <div className="  flex justify-start items-center p-2 m-2 gap-2">
            <div className="bg-blue-200 text-blue-900 w-8 h-8 rounded-lg flex justify-center items-center">
              <RxHamburgerMenu />
            </div>
            <div className="flex justify-start items-start flex-col">
              <p> Active Orders</p>
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h- text-center rounded-lg hover:shadow-lg ">
          <div className="  flex justify-start items-center p-2 m-2 gap-2">
            <div className="bg-purple-200 text-purple-900 w-8 h-8 rounded-lg flex justify-center items-center">
              <IoMdPeople />
            </div>
            <div className="flex justify-start items-start flex-col">
              <p>Today's Revenue</p>
              <p>$1,245</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h- text-center rounded-lg hover:shadow-lg ">
          <div className="  flex justify-start items-center p-2 m-2 gap-2">
            <div className="bg-green-200 w-8 h-8 rounded-lg flex justify-center items-center">
              <MdOutlineWatchLater />
            </div>
            <div className="flex justify-start items-start flex-col">
              <p>Avg Wait Time</p>
              <p>12</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f4f6] w-full rounded-lg my-5 px-2 py-2 flex items-center justify-between gap-1">
        <NavLink
          to="/tables"
          className={({ isActive }) =>
            isActive
              ? "bg-black text-white rounded px-2 py-1 text-xs font-medium text-center flex-1"
              : "hover:text-white hover:bg-black rounded px-2 py-1 text-xs font-medium text-center flex-1"
          }
        >
          Tables
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-black text-white rounded px-2 py-1 text-xs font-medium text-center flex-1"
              : "hover:text-white hover:bg-black rounded px-2 py-1 text-xs font-medium text-center flex-1"
          }
        >
          Orders
        </NavLink>
        <NavLink
          to="/posSystem"
          className={({ isActive }) =>
            isActive
              ? "bg-black text-white rounded px-2 py-1 text-xs font-medium text-center flex-1"
              : "hover:text-white hover:bg-black rounded px-2 py-1 text-xs font-medium text-center flex-1"
          }
        >
          POS System
        </NavLink>
        <NavLink
          to="/tableBooking"
          className={({ isActive }) =>
            isActive
              ? "bg-black text-white rounded px-2 py-1 text-xs font-medium text-center flex-1"
              : "hover:text-white hover:bg-black rounded px-2 py-1 text-xs font-medium text-center flex-1"
          }
        >
          Table Booking
        </NavLink>
      </div>
    </div>
  );
}

export default RestaurantHeader;
