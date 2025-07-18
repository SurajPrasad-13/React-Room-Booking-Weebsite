import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const BookingConfirmed = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/newbooking");
  };

  return (
    <div className="text-center h-auto bg-white m-5 rounded-lg">
      {/* <IoMdCheckmarkCircleOutline  /> */}
      <div className="flex justify-center py-5">
        <FaCheck className="size-16 text-green-500 text-5xl bg-green-100 rounded-full  p-4" />
      </div>

      <div className="text-xl md:text-2xl font-semibold">
        Booking Confirmed!....
      </div>
      <div className="text-gray-500">
        Your reservation has been successfully created.
      </div>
      <button
        onClick={handleClick}
        className="bg-black text-white p-[10px_15px] rounded-lg my-4 font-medium text-sm"
      >
        Make Another Booking
      </button>
    </div>
  );
};

export default BookingConfirmed;
