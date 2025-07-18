import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuCalendar } from "react-icons/lu";


const cards = [
    {
      id: 1,
      title: "Today's Revenue",
      number: "$12,450",
      icon: <FaArrowTrendUp />,
      percentage: "+15.2%",
    },
    {
      id: 2,
      title: "Room Occupancy",
      number: "87%",
      icon: <LuCalendar  />,
      percentage: "+5.2%",
    },
    {
      id: 3,
      title: "Active Orders",
      number: 23,
      icon:<FaArrowTrendUp />,
      percentage: "-2.1%",
    },
    {
      id: 4,
      title: "Total Guests",
      number: 156,
      icon: <MdOutlinePeopleAlt />,
      percentage: "+8.7%",
    },
  ]

  //  third row ke firstpart
   const firstcard = [
    {
      
      discription:'New Booking confirmed for Room 205',
      time:'2 mins ago',
      status:'high',
    },
    {
      
      discription:'Order #ORD-1234 ready for service',
      time:'5 mins ago',
      status:'medium',
    },
    {
      
      discription:'Guest John Smith chekced out',
      time:'10 mins ago',
      status:'low',
    },
    {
      
      discription:'Rooms 105 maintenance completed',
      time:'15 mins ago',
      status:'medium',
    },
   ]

  // third row ka second part

  const secondcard = [
    {
      title:'Check-ins',
      number:12,
    },
    {
      title:'Check-outs',
      number:8,
    },
    {
      title:'Food Orders',
      number:45,
    },
    {
      title:'Revenue',
      number:'$12,450',
    },

  ]








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








<div className="bg-white shadow    p-5">
       {/* first row */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-3 gap-2 ">
          {
            cards.map((card, index) => {
              return (
                <div key={index}
                  className="border border-gray-300  shadow-md p-2 flex justify-between items-center rounded-md">
                  <div className="flex flex-col" >
                    <p className="text-gray-500">{card.title}</p>
                    <p className="font-bold">{card.number}</p>
                    <p
                      className={`text-sm ${card.percentage.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}
                    >
                      {card.percentage}
                    </p>
                  </div>
                  <div className={`text-lg p-2 rounded-full ${index === 0 ? 'text-green-600  bg-green-100' : ''} ${index === 1 ? 'text-blue-600  bg-blue-100' : ''} ${index === 2 ? 'text-purple-600  bg-purple-100' : ''} ${index === 3 ? 'text-yellow-600  bg-yellow-100' : ''}`}>
                    {card.icon}
                  </div>
                </div>
              )
            }
            )
          }
        </div>
        
        {/* second row */}
        <div className="flex flex-col justify-start m-3 rounded-md shadow-md p-3 gap-3">
           <h1 className="font-bold text-lg col-span-1">Qucik Actions</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                 <div className="rounded flex flex-col justify-center border border-gray-300 items-center transition-all duration-400 hover:text-white hover:bg-black p-3 ">
                    <LuCalendar  />
                    <p className="font-semibold">New Booking</p>
                 </div>
                 <div className="rounded flex flex-col justify-center items-center border border-gray-300 transition-all duration-400 hover:text-white hover:bg-black p-3">
                    <GiHamburgerMenu />
                    <p className="font-semibold">Add Order</p>
                 </div>
                 <div className="rounded flex flex-col justify-center items-center border border-gray-300 transition-all duration-400 hover:text-white hover:bg-black p-3">
                   <MdOutlinePeopleAlt />
                    <p className="font-semibold">Check in</p>
                 </div>
                 <div className="rounded flex flex-col justify-center items-center border border-gray-300 transition-all duration-400 hover:text-white hover:bg-black p-3">
                    <MdOutlinePeopleAlt />
                    <p className="font-semibold">Reports</p>
                 </div>
                 
           </div>
        </div>

        {/* third row */}
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 m-5 gap-4">
              {/* first card */}
               <div className="p-3 roudned shadow-md flex flex-col justify-start gap-2">
                  <h1 className="font-bold text-lg">Recent Activites</h1>
                   {
                    firstcard.map((first,index)=>{
                      return (
                        <div key={index} className="bg-gray-50 rounded p-3 flex justify-between items-center">
                              <div>
                                <p className="font-semibold">{first.discription}</p>
                                <span>{first.time}</span>
                              </div>
                              <div className={` py-1 px-3 font-semibold rounded-full ${first.status === 'high' ? 'bg-red-100 text-red-900 ' : '' } ${first.status === 'medium' ? 'bg-yellow-100 text-yellow-900 ' : '' } ${first.status === 'low' ? 'bg-green-100 text-green-900 ' : '' } ${first.status === 'high' ? 'bg-red-100 text-red-900 ' : '' }
                              `}>
                                {first.status}
                              </div>
                        </div>
                      )
                    })
                   }
               </div>

               {/* second card */}

               <div className="p-3 roudned shadow-md flex flex-col justify-start gap-2">
                  <h1 className="font-bold text-lg">Today's Summary</h1>
                   {
                    secondcard.map((second,index)=>{
                      return (
                        <div key={index} className={` rounded p-3 flex justify-between items-center ${index === 0  ? 'bg-blue-50' : ''} ${index === 1  ? 'bg-green-50' : ''} ${index === 2  ? 'bg-purple-50' : ''} ${index === 3  ? 'bg-orange-50' : ''}
                        `}>
                              <div>
                                <p className="font-semibold">{second.title}</p>
                                
                              </div>
                              <div className={` py-1 px-3 font-semibold rounded-full ${second.number === 12 ? ' text-blue-700 ' : '' } ${second.number === 8 ? ' text-green-700 ' : '' } ${second.number === 45 ? ' text-purple-700 ' : '' } ${second.number === '$12,450' ? ' text-orange-700 ' : '' }
                              `}>
                                {second.number}
                              </div>
                        </div>
                      )
                    })
                   }
               </div>
        </div>



      </div>


















    </>
  );
};

export default Header;
