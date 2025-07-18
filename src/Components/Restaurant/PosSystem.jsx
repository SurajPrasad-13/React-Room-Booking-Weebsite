import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import RestaurantHeader from "./RestaurantHeader";

function PosSystem() {
  const cart = [
    { id: 'Grilled Salmon', Discription: 'Fresh Atlantic salmon with herbs', rupee: '$28.00', title: 'Main Course' },
    { id: 'Pasta Carbonara', Discription: 'Classic Italian pasta with cream sauce', rupee: '$22.00', title: null },
    { id: 'Caesar Salad', Discription: 'Crispy romaine with parmesan', rupee: '$12.00', title: 'Appetizer' },
    { id: 'Chocolate Cake', Discription: 'Rich chocolate layer cake', rupee: '$8.00', title: 'Dessert' },
    { id: 'House Wine', Discription: 'Red or white wine selection', rupee: '$15.00', title: 'Beverage' },
    { id: 'Club Sandwich', Discription: 'Triple-layer sandwich with fries', rupee: '$16.00', title: 'Light Meals' },
  ];

  const [currentOrder, setCurrentOrder] = useState([]);
  const [message, setMessage] = useState("");

  const addToOrder = (item) => {
    const index = currentOrder.findIndex((order) => order.id === item.id);
    const newOrder = [...currentOrder];
    if (index !== -1) {
      newOrder[index].quantity += 1;
    } else {
      newOrder.push({ ...item, quantity: 1 });
    }
    setCurrentOrder(newOrder);
  };

  const increment = (id) => {
    const updated = currentOrder.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCurrentOrder(updated);
  };

  const decrement = (id) => {
    const updated = currentOrder
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0);
    setCurrentOrder(updated);
  };

  const getTotal = () => {
    return currentOrder.reduce((total, item) => {
      const price = parseFloat(item.rupee.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleSubmit = () => {
    const total = getTotal();
    setMessage(`Order submitted for T01! Total: $${total}`);
    setCurrentOrder([]);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>

    <RestaurantHeader/>
      {/*  Popup Message */}
      {message && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded shadow-lg z-50">
          {message}
        </div>
      )}

      {/*  Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 rounded-2xl shadow border border-gray-300">
        
        {/*  Menu Items */}
        <div className="bg-white lg:col-span-8 col-span-12 p-4 rounded-lg shadow-md">
          <p className="text-2xl font-semibold my-2">Menu Items</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <button className="rounded-md bg-black text-white p-2 hover:bg-white hover:text-black">Dine In</button>
            <button className="rounded-md border border-gray-300 p-2 hover:bg-black hover:text-white">Takeaway</button>
            <button className="rounded-md border border-gray-300 p-2 hover:bg-black hover:text-white">Room Service</button>
          </div>

          {cart.map((item, index) => (
            <div key={index}>
              {item.title && <p className="text-lg font-semibold mt-6">{item.title}</p>}
              <div className="bg-white rounded-lg hover:shadow-lg border border-gray-200 flex justify-between p-3 my-5">
                <div>
                  <p className="font-bold">{item.id}</p>
                  <p className="text-gray-500">{item.Discription}</p>
                  <p className="text-green-600 font-bold text-lg">{item.rupee}</p>
                </div>
                <div className="size-10 text-center bg-black text-white p-3 rounded cursor-pointer" onClick={() => addToOrder(item)}>
                  <FaPlus />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  Current Order Section */}
        <div className="lg:col-span-4 col-span-12">
          <div className="p-4 rounded-lg bg-white h-auto w-full shadow-md overflow-x-hidden">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Current Order</p>
              <p className="border border-gray-400 rounded-lg px-2 text-[12px]">T01</p>
            </div>

            {currentOrder.length === 0 ? (
              <p className="text-gray-500 mt-4 text-center">No Current Order</p>
            ) : (
              <>
                {currentOrder.map((item, idx) => {
                  const unitPrice = parseFloat(item.rupee.replace('$', ''));
                  const total = (unitPrice * item.quantity).toFixed(2);
                  return (
                    <div key={idx} className="border-b py-3 flex justify-between items-center">
                      <div className="flex justify-center items-center">
                        <p className="font-semibold">{item.id}</p>
                        <p className="text-gray-600 ">
                          {item.rupee} x {item.quantity} = <strong>${total}</strong>
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => decrement(item.id)} className="bg-gray-200 p-1 rounded"><FaMinus /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increment(item.id)} className="bg-gray-200 p-1 rounded"><FaPlus /></button>
                      </div>
                    </div>
                  );
                })}

                {/*  Grand Total */}
                <div className="text-right mt-4 font-bold text-xl">
                  Grand Total: ${getTotal()}
                </div>

                {/*  Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-black hover:bg-black text-white py-2 px-4 rounded w-full"
                >
                  Submit Order
                </button>
              </>
            )}
          </div>

          {/* Kitchen Queue */}
          <div className="p-4 rounded-lg bg-white h-auto w-full shadow-md my-5">
            <p className="font-semibold flex items-center gap-2 text-lg my-3">
              <MdOutlineWatchLater className="text-2xl" />Kitchen Queue
            </p>
            <div>
              <p className='bg-amber-100 p-1 my-2 rounded border border-gray-400'>
                <strong>ORD-001 - T05</strong> - Preparing (5 min)
              </p>
              <p className='bg-red-100 p-1 my-2 rounded border border-gray-400'>
                <strong>ORD-001 - T05</strong> - Preparing (5 min)
              </p>
              <p className='bg-green-100 p-1 my-2 rounded border border-gray-400'>
                <strong>ORD-001 - T05</strong> - Preparing (5 min)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PosSystem;
