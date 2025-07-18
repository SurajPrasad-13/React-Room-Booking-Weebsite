import RestaurantHeader from "./RestaurantHeader";

function Orders() {
  return (
    <>
    <RestaurantHeader/>
      <section className="bg-white m-2 rounded-lg shadow-lg block">
        <div className="flex justify-between items-center p-4">
          <p className="text-2xl">Active Orders</p>
          <p className="rounded-2xl border border-gray-300 px-2 text-sm">
            4 orders
          </p>
        </div>

        {/* Order Card - Repeatable Component */}
        <div className="space-y-4 p-4">
          {/* Order 1 */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              {/* Left Info */}
              <div className="flex  sm:flex-row sm:items-center gap-4 w-full">
                <div className="min-w-[100px]">
                  <p className="font-semibold">ORD001</p>
                  <p className="text-sm text-gray-600">T01.12:30 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Items: Pasta Carbonara, Caesar Salad, Wine
                  </p>
                  <p className="text-lg font-semibold text-green-700">$45.50</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-3 gap-2 w-full lg:w-280  sm:w-auto items-center">
                <p className="rounded-2xl px-3 lg:mx-25 h-5 my-5 text-orange-700 bg-orange-300 text-sm text-center lg:w-20 ">
                  Preparing
                </p>
                <button className="rounded font-semibold border border-gray-300 px-4 py-2 text-sm w-auto lg:w-50">
                  Update Status
                </button>
                <button className="rounded font-semibold text-white bg-black px-4 py-2 text-sm w-auto lg:w-50">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Order 2 */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                <div className="min-w-[100px]">
                  <p className="font-semibold">ORD002</p>
                  <p className="text-sm text-gray-600">T01.12:45 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Items: Grilled Salmon, Soup
                  </p>
                  <p className="text-lg font-semibold text-green-700">$38.75</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full lg:w-280  sm:w-auto items-center">
                <p className="rounded-2xl px-3 lg:mx-25 h-5 my-5 text-blue-700 bg-blue-300 text-sm text-center lg:w-20 ">
                  Served
                </p>
                <button className="rounded font-semibold border border-gray-300 px-4 py-2 text-sm w-auto lg:w-50">
                  Update Status
                </button>
                <button className="rounded font-semibold text-white bg-black px-4 py-2 text-sm w-auto lg:w-50">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Order 3 */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                <div className="min-w-[100px]">
                  <p className="font-semibold">ORD003</p>
                  <p className="text-sm text-gray-600">Room Service.1:00 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Items: Club Sandwich, Coffee, Dessert
                  </p>
                  <p className="text-lg font-semibold text-green-700">$32.25</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full lg:w-280  sm:w-auto items-center">
                <p className="rounded-2xl px-3 lg:mx-25 h-5 my-5 text-green-700 bg-green-300 text-sm text-center lg:w-20 ">
                  Delivered
                </p>
                <button className="rounded font-semibold border border-gray-300 px-4 py-2 text-sm w-auto lg:w-50">
                  Update Status
                </button>
                <button className="rounded font-semibold text-white bg-black px-4 py-2 text-sm w-auto lg:w-50">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Order 4 */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                <div className="min-w-[100px]">
                  <p className="font-semibold">ORD004</p>
                  <p className="text-sm text-gray-600">T03.12:30 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Items: Steak Dinner</p>
                  <p className="text-lg font-semibold text-green-700">$55.00</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full lg:w-280  sm:w-auto items-center">
                <p className="rounded-2xl px-3 lg:mx-25 h-5 my-5 text-purple-700 bg-purple-300 text-sm text-center lg:w-20 ">
                  Ordered
                </p>
                <button className="rounded font-semibold border border-gray-300 px-4 py-2 text-sm w-auto lg:w-50">
                  Update Status
                </button>
                <button className="rounded font-semibold text-white bg-black px-4 py-2 text-sm w-auto lg:w-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Orders;
