// import React from 'react';

// import { useNavigate } from 'react-router-dom';



// const tables = [
//   {
//     id: "T01",
//     seats: 2,
//     location: "Window location",
//     type: "Standard"
//   },
//   {
//     id: "T02",
//     seats: 4,
//     location: "Center location",
//     type: "Standard"
//   },
//   {
//     id: "T04",
//     seats: 2,
//     location: "Patio location",
//     type: "Outdoor"
//   }
// ];

// function CheckAvailabilityConfirm() {
//   const navigate = useNavigate();
//   const back = () => {
//     navigate('/booking')
//   }
//   const confirm = () => {
//     navigate("/confirmform")
//   }
//   return (
//     <>
//       <div className="flex justify-between items-center m-5">
//         <div className="font-semibold">
//           Available Tables
//         </div>
//         <div className="bg-white p-2 font-semibold rounded ">
//           <button onClick={back}>Modify Search</button>
//         </div>
//       </div>

      

//       <div className="rounded block m-5 bg-white p-5">
//         <div className="font-bold">Restaurant Floor Plan</div>
//         <div className="bg-gray-100 p-3">
//           <div className="text-gray-500 text-sm">Click on available tables to select</div>
//           <div className="flex flex-wrap justify-evenly m-5 gap-2">
//             <div className="rounded bg-green-200 text-green-800 hover:bg-green-300 w-15 h-15 flex justify-center items-center flex-col">
//               <p>T01</p>
//               <p>2p</p>
//             </div>
//             <div className="rounded bg-blue-200 text-blue-800 hover:bg-blue-300 w-15 h-15 flex justify-center items-center flex-col">
//               <p>T02</p>
//               <p>4p</p>
//             </div>
//             <div className="rounded bg-red-500 w-15 text-red-800 hover:bg-red-300 h-15 flex justify-center items-center flex-col">
//               <p>T04</p>
//               <p>2p</p>
//             </div>
//           </div>
//         </div>

//       </div>

     
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//         {tables.map((table) => (
//           <div

//             className="border rounded p-4 shadow bg-white">

//             <div key={table.id}>
//               <div className="text-lg font-bold flex justify-between">Table {table.id}
//                 <span className={`text-sm px-2 py-1 rounded ${table.type === "Outdoor" ? "bg-green-100 text-green-800" : "bg-gray-200"
//                   }`}>
//                   {table.type}
//                 </span>
//               </div>
//               <p>Seats {table.seats} people</p>
//               <p> {table.location}</p>

//             </div>
//             <button className="mt-2 w-full bg-[#0d1321] text-white py-2 rounded hover:bg-gray-800" onClick={confirm}>
//               Select Table
//             </button>
//           </div>
//         ))}
//       </div>
//     </>

//   );
// }

// export default CheckAvailabilityConfirm;




import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const tables = [
  {
    id: "T01",
    seats: 2,
    location: "Window location",
    type: "Standard"
  },
  {
    id: "T02",
    seats: 4,
    location: "Center location",
    type: "Standard"
  },
  {
    id: "T04",
    seats: 2,
    location: "Patio location",
    type: "Outdoor"
  }
];

function CheckAvailabilityConfirm() {
  const location = useLocation();
  const navigate = useNavigate();

  const { date, time, people } = location.state || {};

  const back = () => {
    navigate('/booking');
  };

  const confirm = (table) => {
    const bookingData = {
      date,
      time,
      people,
      table
    };

    localStorage.setItem("selectedBooking", JSON.stringify(bookingData));
    navigate("/confirmform");
  };

  return (
    <>
      <div className="flex justify-between items-center m-5">
        <div className="font-semibold text-lg">Available Tables</div>
        <button onClick={back} className="bg-white px-3 py-1 rounded shadow text-sm font-semibold">
          Modify Search
        </button>
      </div>

      {/* Restaurant Floor Plan */}
      <div className="rounded block m-5 bg-white p-5">
        <div className="font-bold">Restaurant Floor Plan</div>
        <div className="bg-gray-100 p-3">
          <div className="text-gray-500 text-sm">Click on available tables to select</div>
          <div className="flex flex-wrap justify-evenly m-5 gap-2">
            {tables.map((table) => (
              <div
                key={table.id}
                className={`rounded w-20 h-20 flex justify-center items-center flex-col cursor-pointer ${
                  table.type === "Outdoor"
                    ? "bg-red-200 text-red-800 hover:bg-red-300"
                    : "bg-green-200 text-green-800 hover:bg-green-300"
                }`}
              >
                <p>{table.id}</p>
                <p>{table.seats}p</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {tables.map((table) => (
          <div key={table.id} className="border rounded p-4 shadow bg-white">
            <div className="text-lg font-bold flex justify-between items-center">
              Table {table.id}
              <span
                className={`text-sm px-2 py-1 rounded ${
                  table.type === "Outdoor" ? "bg-green-100 text-green-800" : "bg-gray-200"
                }`}
              >
                {table.type}
              </span>
            </div>
            <p>Seats {table.seats} people</p>
            <p>{table.location}</p>
            <button
              className="mt-4 w-full bg-[#0d1321] text-white py-2 rounded hover:bg-gray-800"
              onClick={() => confirm(table)}
            >
              Select Table
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CheckAvailabilityConfirm;
