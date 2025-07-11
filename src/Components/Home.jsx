import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RoomStatus as initialRooms } from "../assets/Data";
import RoomDetail from "./RoomDetail";

const Home = () => {
  const [rooms, setRooms] = useState(initialRooms); // Local state copy
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleStatusChange = (roomId, newStatus) => {
    const updatedRooms = rooms.map((room) =>
      room.id === roomId ? { ...room, status: newStatus } : room
    );
    setRooms(updatedRooms);

    // If the selected room is also being changed, update it too
    if (selectedRoom?.id === roomId) {
      setSelectedRoom({ ...selectedRoom, status: newStatus });
    }
  };

  const [statusFilter, setStatusFilter] = useState("All Rooms");

  return (
    <div className="bg-white m-5 p-3 rounded-xl">
      <div className="flex items-center gap-3 justify-between my-5">
        <h1 className="md:text-2xl font-semibold">Room Status Overview</h1>
        <div className="flex items-center flex-wrap gap-3">
          <select
            onChange={(e) => setStatusFilter(e.target.value)}
            className="hover:shadow-lg w-full md:w-auto border border-gray-400 p-1 md:p-2 rounded"
            required
          >
            <option value="All Rooms">All Rooms</option>
            <option value="Occupied">Occupied</option>
            <option value="Available">Available</option>
            <option value="Reserved">Reserved</option>
            <option value="Maintenance">Maintenance</option>
          </select>

          <input
            type="text"
            placeholder="Search rooms..."
            className="hover:shadow-lg w-35 md:w-auto border border-gray-400 p-1 md:p-2 rounded"
          />
        </div>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rooms.map((item) => (
            <div
              key={item.id}
              className={`border border-gray-200 rounded-xl hover:shadow-lg p-3 text-gray-500
               ${selectedRoom && selectedRoom.id !== item.id && "hidden"}
            `}
            >
              <div className="flex text-black justify-between items-center">
                <h3 className="font-semibold text-lg">{item.id}</h3>
                <p
                  className={`font-medium rounded px-1 text-[12px] ${
                    item.status == "Occupied" && "bg-blue-200 text-blue-800"
                  } ${
                    item.status == "Maintenance" && "bg-red-200 text-red-800"
                  } ${
                    item.status == "Reserved" && "bg-yellow-100 text-yellow-800"
                  } ${
                    item.status == "Available" && "bg-green-200 text-green-800"
                  }  `}
                >
                  {item.status}
                </p>
              </div>
              <p>
                Type:
                <span className="text-gray-600 font-medium">{item.type}</span>
              </p>
              <p>
                Floor:
                <span className="text-gray-600 font-medium">{item.floor}</span>
              </p>
              <p>
                Price:
                <span className="text-green-600 font-medium">
                  {item.price}/night
                </span>
              </p>
              <p>Guest: {item.guest}</p>
              <hr className="border-b border-gray-200 my-5" />
              <div className="flex items-center justify-between text-gray-800">
                <button
                  onClick={() => setSelectedRoom(item)}
                  className="border border-gray-300 text-black w-22 text-sm md:w-31 lg:w-35 py-2 px-5 gap-2 rounded flex justify-center items-center"
                >
                  <MdOutlineRemoveRedEye /> View
                </button>
                <select
                  onChange={(e) =>
                    handleStatusChange(item.id, e.target.value.trim())
                  }
                  id="status"
                  className="p-2 gap-2 text-sm border border-gray-200 w-34 md:w-30 lg:px-2 rounded outline-0"
                >
                  <option value="Change Status">Change Status</option>/
                  <option value="Occupied">Occupied</option>/
                  <option value="Available">Available</option>/
                  <option value="Reserved">Reserved</option>/
                  <option value="Maintenance">Maintenance</option>/
                </select>
              </div>
            </div>
          ))}
      </div>

      {/* Room Detail */}
      {selectedRoom && (
        <RoomDetail
          {...selectedRoom}
          closeDetail={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
};
export default Home;
