import { LuBed } from "react-icons/lu";
import { FiTv } from "react-icons/fi";
import { IoWifi } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { searchedRoomData } from "../../assets/Data";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";

// 🧠 Important CSS for slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SearchedRooms = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkInDate, checkOutDate, rooms, guests } = location.state || {};

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleSelectRoom = (room) => {
    navigate("/rmBookingform", {
      state: {
        room,
        formData: { checkInDate, checkOutDate, rooms, guests },
      },
    });
  };

  return (
    <div className="my-10 p-4 w-[calc(100%-10px)]  ">
      <Slider {...settings}>
        
        {searchedRoomData.map((item, id) => (
          <div className="flex items-center justify-center"> 

          <div key={id} className=" bg-white rounded p-3 w-100 sm:w-80 md:w-96 mb-5 mx-3">
            <div className="h-40 md:h-50 w-full flex justify-center items-center bg-gray-300 rounded">
              <LuBed className="text-3xl text-gray-400" />
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="font-semibold">{item.type}</p>
              <p className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> {item.rating}
              </p>
            </div>
            <div className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className="flex items-center justify-start gap-2 my-3 text-gray-600">
              <GoPeople className="font-bold text-lg" />
              Up to {item.maxMember} guests
            </div>
            <div className="flex items-center justify-start gap-3 text-[14px] flex-wrap">
              <p className="flex items-center gap-1 bg-blue-100 p-[1px_8px] rounded-lg">
                <IoWifi className="text-[16px]" />
                <span>Wifi</span>
              </p>
              <p className="flex items-center gap-1 bg-blue-100 p-[1px_8px] rounded-lg">
                <FiTv className="text-[16px]" />
                <span>TV</span>
              </p>
              <p className="flex items-center gap-1 bg-blue-100 p-[1px_8px] rounded-lg">
                <TbAirConditioning className="text-[16px]" />
                <span>AC</span>
              </p>
              <p className="text-[12px] md:text-[14px] flex items-center gap-1 border border-gray-400 px-[6px] py-[2px] rounded-lg">
                +1 more
              </p>
            </div>
            <hr className="my-5 border-gray-400" />
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-green-600">
                ${item.price}
                <sub className="text-sm text-black font-normal">/night</sub>
              </div>
              <button
                onClick={() => handleSelectRoom(item)}
                className="bg-gray-800 text-white py-1 px-3 rounded font-medium hover:bg-gray-700"
              >
                Select Room
              </button>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SearchedRooms;
