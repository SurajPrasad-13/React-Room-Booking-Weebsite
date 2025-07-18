import { TbXboxX } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";

const RoomDetail = ({ id, type, floor, price, status, guest, closeDetail }) => {
  return (
    <div className="relative p-5 border  rounded-xl shadow-md bg-white text-gray-800 my-5">
      <div className=" absolute top-1 right-1 pb-15 flex items-center justify-end">
        <TbXboxX className="text-2xl font-bold" onClick={closeDetail} />
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 text-sm md:text-[16px]">
        <div className="text-[12px] md:text-[16px] md:w-85  ">
          <h2 className="text-2xl font-bold mb-4">Room Details</h2>
          <p>
            <strong>Room Number:</strong> {id}
          </p>
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Floor:</strong> {floor}
          </p>
          <p>
            <strong>Price:</strong> {price}/night
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>Guest:</strong> {guest}
          </p>
        </div>
        <div className="text-[10px] sm:text-[13px] md:text-[16px] md:px-25 ">
          <div className="flex items-center justify-center">
            <Ri24HoursLine className="font-bolder text-3xl md:text-4xl mb-5 sm:mb-4 mx-3" />{" "}
            <p>
              {" "}
              <strong> Includes</strong> : Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Eius animi ratione ipsam, provident
              labore, libero sequi culpa eum asperiores totam expedita rem. A!{" "}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <IoIosMail className="font-bolder text-3xl md:text-4xl mb-5 sm:mb-4 mx-3" />{" "}
            <p>
              {" "}
              <strong> Special Conditions</strong> : Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Eius animi ratione ipsam, provident
              labore, libero sequi culpa eum asperiores totam expedita rem. A!{" "}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <TbListDetails className="font-bolder text-3xl md:text-4xl mb-5 sm:mb-4 mx-3" />{" "}
            <p>
              <strong> Contact Details</strong> : Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Eius animi ratione ipsam, provident
              labore, libero sequi culpa eum asperiores totam expedita rem. A!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
