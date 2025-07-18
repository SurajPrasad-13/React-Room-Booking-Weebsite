import { FiHome } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import React, { useState, useEffect } from "react";
const Dashboard = () => {
  // time and Date
  const [time, setTime] = useState(new Date());
  let hours = time.getHours() > 12 && time.getHours() - 12;
  let minutes = time.getMinutes();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // update time every second
    }, 1000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const alertObj = [
    {
      id: 1,
      desc: "Low inventory: Towels (12 remaining)",
    },
    {
      id: 2,
      desc: "Kitchen equipment maintenance due",
    },
    {
      id: 3,
      desc: "Payment gateway offline",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-2 justify-between bg-white h-32 rounded-lg mx-3 mb-2 px-5 border-y border-gray-400 bg-gradient-to-r from-[#2d60eb] to-[#9134ea]">
        <div>
          <p className="text-white text-2xl font-bold">
            {" "}
            Welcome to HotelMaster Pro
          </p>
          <p className="text-gray-300 text-sm md:text-[16px]">
            Your comprehensive hotel and restaurant management solution
          </p>
          <p className="text-gray-300 text-sm md:text-[16px]">
            {time.toLocaleDateString()} - {time.toLocaleTimeString()}
          </p>
        </div>
        <div>
          <p className="text-white text-2xl font-bold">
            {hours}:{minutes}{" "}
          </p>
          <p className="text-gray-300 text-sm md:text-[16px]">Live Dashboard</p>
        </div>
      </div>

      <div className=" rounded bg-white mx-3 border-x-2 border-yellow-500">
        <div className="flex items-center justify-start gap-1 text-yellow-600 text-xl p-4 font-bold ">
          <MdErrorOutline /> <p>System Alerts</p>{" "}
        </div>
        <div className="py-3">
          {alertObj.map((item, i) => {
            return (
              <div
                className={` m-2 py-1 rounded  ${
                  item.id == 1 && "text-yellow-800 bg-yellow-100"
                } ${item.id == 2 && "text-blue-800 bg-blue-100"} ${
                  item.id == 3 && "text-red-800 bg-red-100"
                }`}
              >
                <div className="flex items-center justify-between mx-3">
                  <p className={`p-2 md:p-3 text-sm md:text-[16px] `}>
                    {item.desc}{" "}
                  </p>
                  <button
                    className={`py-1 px-2 bg-white  text-sm md:text-[16px] border border-gray-300 rounded-lg `}
                  >
                    Resolve
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
