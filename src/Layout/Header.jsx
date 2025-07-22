import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";


const Header = () => {
  const navlinkStyles =
    "flex items-center justify-around gap-2 p-2 font-semibold md:px-3 text-sm hover:shadow-lg h-full cursor-pointer";

  return (
    <>
      {/* profile section */}
      <div className="flex items-center p-5 justify-between bg-white ">
        <div className="flex items-center justify-cetner gap-2">
          <div className="rounded-lg bg-gradient-to-r from-[#2d60eb] to-[#9134ea] text-[10px] md:text-[16px] text-white font-medium p-2 px-3 md:px-4">
            H
          </div>
          <div>
            <h1 className=" texl-lg md:text-2xl font-bold">HotelMaster Pro</h1>
            <p className="text-gray-600 text-[10px]  md:text-sm md:text-[14px]">
              Hotel & Restaurant Management
            </p>
          </div>
        </div>

        <div className="flex items-center justify-cetner gap-2">
          <div>
            <div className="md:text-xl font-bold">Welcome, Admin</div>
            <p className="text-gray-600 text-[10px]  md:text-sm md:text-[14px]">
              Last login: Today, 9:00 AM
            </p>
          </div>
          <div className="rounded-full bg-gradient-to-r to-[#2d60eb] from-[#1df7ae] text-[10px] md:text-[16px] text-white font-medium p-2 px-3 md:px-3.5">
            A
          </div>
        </div>
      </div>
      {/* navbar Section */}
      <div className="flex items-center justify-start bg-white h-32 sm:h-22 md:h-10 mb-2 px-5 border-y border-gray-400">
        <ul className="flex items-center  md:h-10 justify-start  flex-wrap gap-2  ">
          <NavLink
            to="/"
            className={`${navlinkStyles} ${({ isActive }) =>
              isActive ? "text-blue-700 bg-blue-100" : "text-black bg-white"} `}
          >
            <FiHome />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="hotel"
            className={`${navlinkStyles} ${({ isActive }) =>
              isActive ? "text-blue-700 bg-blue-100" : "text-black bg-white"} `}
          >
            <FiCalendar />
            <p>Hotel</p>
          </NavLink>
          <NavLink
            to="/tables"
            className="flex items-center justify-around gap-2 p-2 font-semibold md:px-3 text-sm hover:shadow-lg h-full cursor-pointer "
          >
            <IoMenu />
            <p>Restaurant</p>
          </NavLink>
          <li className="flex items-center justify-around gap-2 p-2 font-semibold md:px-3 text-sm hover:shadow-lg h-full cursor-pointer ">
            <GoPeople />
            <p>Customers</p>
          </li>
          <li className="flex items-center justify-around gap-2 p-2 font-semibold md:px-3 text-sm hover:shadow-lg h-full cursor-pointer ">
            <FiCalendar />
            <p>Analytics</p>
          </li>
          <li className="flex items-center justify-around gap-2 p-2 font-semibold md:px-3 text-sm hover:shadow-lg h-full cursor-pointer ">
            <IoSettingsOutline />
            <p>Settings</p>
          </li>
        </ul>
      </div>



























    </>
  );
};

export default Header;
