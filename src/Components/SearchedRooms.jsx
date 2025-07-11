import React, { useState } from "react";
import { LuBed } from "react-icons/lu";
import { FiTv } from "react-icons/fi";
import { IoWifi } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { searchedRoomData } from "../assets/Data";
import { WiFire } from "react-icons/wi";
import RmBookingForm from "./RmBookingForm";

const SearchedRooms = (props) => {
  const [selectedRoom, setselectedRoom] = useState(null);

  return (
    <div className="flex flex-wrap items-center justify-around place-items-center my-10">
      {searchedRoomData.map((item, id) => {
        return (
          <div key={id} className="bg-white rounded p-3 w- md:w-94 mb-5">
            <div className="h-40 md:h-50 w-70 md:w-88 flex justify-center items-center bg-gray-300 rounded">
              <LuBed className="text-3xl text-gray-400" />
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="font-semibold">{item.type} </p>
              <p className="flex justify-center gap-1 items-center">
                {" "}
                <FaStar className="text-yellow-400" /> {item.rating}{" "}
              </p>
            </div>
            <div className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div
              className="flex items-center justify-start gap-2 my-3 text-gray-600
            "
            >
              <GoPeople className="font-bold text-lg" />
              Up to {item.maxMember} guests
            </div>
            <div className="flex items-center justify-start gap-5 text-[14px]">
              <p className="flex items-center gap-1 bg-blue-100 p-[1px_8px] rounded-lg">
                <span>
                  {" "}
                  <IoWifi className="text-[16px]" />{" "}
                </span>
                <span>Wifi</span>
              </p>
              <p className="flex items-center gap-1 bg-blue-100 p-[1px_8px] rounded-lg">
                <span>
                  {" "}
                  <FiTv className="text-[16px]" />{" "}
                </span>
                <span>TV</span>
              </p>
              <p className="flex items-center gap-1 bg-blue-100 p-[1px_8px] rounded-lg">
                <span>
                  {" "}
                  <TbAirConditioning className="text-[16px]" />{" "}
                </span>
                <span>AC</span>
              </p>
              <p className="text-[12px] md:text-[14px] flex items-center gap-1 border border-gray-400 px-[2px] rounded-lg">
                {" "}
                +1 more
              </p>
            </div>
            <hr className="my-5 w-[95%] m-auto border-gray-400" />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <div className="text-xl font-bold text-green-600  ">
                  ${item.price}
                </div>
                <sub>/night</sub>
              </div>
              <button
                onClick={() => {
                  setselectedRoom(item);
                }}
                className="bg-gray-800 text-white py-1 px-2 rounded font-medium"
              >
                Select Room
              </button>
            </div>
          </div>
        );
      })}
      {selectedRoom && (
        <RmBookingForm
          room={selectedRoom}
          formData={props.formData}
          closeDetail={() => setselectedRoom(null)}
        />
      )}
    </div>
  );
};

export default SearchedRooms;
