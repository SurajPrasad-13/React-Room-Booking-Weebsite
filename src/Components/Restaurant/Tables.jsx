import React, { useState } from 'react';
import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
import RestaurantHeader from './RestaurantHeader';

function Tables() {
  const [searchStatus, setSearchStatus] = useState("");

  const tables = [
    {
      id: 'T01',
      Capacity: '2 guests',
      status: 'Available'
    },
    {
      id: 'T02',
      Capacity: '4 guests',
      Reserved: 'Smith Party',
      status: 'Occupied'
    },
    {
      id: 'T03',
      Capacity: '6 guests',
      Reserved: 'Johnson Dinner',
      status: 'Reserved'
    },
    {
      id: 'T04',
      Capacity: '6 guests',
      status: 'Available'
    },
    {
      id: 'T05',
      Capacity: '8 guests',
      Reserved: 'Wilson Group',
      status: 'Occupied'
    },
    {
      id: 'T06',
      Capacity: '4 guests',
      status: 'Cleaning'
    },
  ];

  // Filter logic based on status
  const filteredTables = tables.filter(table =>
    table.status.toLowerCase().includes(searchStatus.toLowerCase())
  );

  return (
    <>
    <RestaurantHeader/>
      <section className="bg-white my-4 mx-2 rounded-lg">
        {/* logo and searchbar */}
        <div className="flex justify-between items-center p-5 mx-5 md:flex-row flex-col">
          <div className="font-bold text-2xl">Restaurant Floor Plan</div>
          <div className="flex flex-wrap items-center justify-between m-3 gap-4">
            <div className="flex items-center border px-3 py-2 gap-2 hover:bg-gray-200 rounded-lg">
              <CiSliderHorizontal />
              <span>Edit Layout</span>
            </div>
            <div className="border flex items-center hover:bg-gray-100 p-2 rounded-lg">
              <CiSearch />
              <input
                type="text"
                placeholder="Search by Status..."
                className="bg-transparent outline-none px-2 w-full sm:w-auto"
                value={searchStatus}
                onChange={(e) => setSearchStatus(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Table Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-2">
          {filteredTables.length > 0 ? (
            filteredTables.map((table) => (
              <div key={table.id} className="bg-white rounded-lg hover:shadow-lg border border-gray-200 p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">{table.id}</p>
                    <p>Capacity: {table.Capacity}</p>
                    {table.Reserved && <p>Reserved for: {table.Reserved}</p>}
                  </div>
                  <p className={`
                    rounded-lg text-sm px-3 h-5 
                    ${table.status === 'Available' ? 'bg-green-300 text-green-900' : ''}
                    ${table.status === 'Occupied' ? 'bg-blue-300 text-blue-900' : ''}
                    ${table.status === 'Reserved' ? 'bg-yellow-300 text-yellow-900' : ''}
                    ${table.status === 'Cleaning' ? 'bg-gray-300 text-gray-900' : ''}
                  `}>
                    {table.status}
                  </p>
                </div>
                <hr className="my-4 border-gray-300" />
                {table.status === 'Available' ? (
                  <div className="flex justify-between">
                    <button className="w-1/2 font-bold bg-white border rounded-lg p-1 hover:bg-gray-100 mx-1">Reserve</button>
                    <button className="w-1/2 font-bold bg-black text-white border rounded-lg p-1 mx-1">Take Order</button>
                  </div>
                ) : (
                  <button className="w-full font-bold bg-white border rounded-lg p-1 hover:bg-gray-100">Details</button>
                )}
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-red-500 font-semibold">No Tables Found</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Tables;
