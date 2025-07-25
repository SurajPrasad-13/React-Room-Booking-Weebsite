import { useNavigate, useLocation } from "react-router-dom";

const RmBookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { room, formData } = location.state || {};

  if (!room || !formData) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600 font-semibold">Invalid access! No booking data found.</p>
        <button
          className="mt-4 py-2 px-4 bg-gray-800 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleClick = () => {
    alert("Booking confirmed! Confirmation details will be sent to your email");
    navigate("/bookingConfirmed");
  };

  const getDateDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? 1 : diffDays;
  };

  let tax = 14.4;
  let billAmount =
    getDateDifference(formData.checkInDate, formData.checkOutDate) *
    parseInt(room.price) *
    parseInt(formData.rooms);
  let totalBill = billAmount + tax;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-3 gap-5 w-full">
      {/* Left Side: Form */}
      <div className="border border-gray-300 rounded-lg bg-white p-4">
        <div className="text-xl md:text-2xl font-semibold">Guest Information</div>

        <div className="flex text-sm md:text-[16px] items-center gap-2 my-3 justify-center">
          <div>
            <label>First Name</label>
            <input className="border border-gray-200 py-1 px-2 w-full rounded outline-0" type="text" placeholder="Enter first name" />
          </div>
          <div>
            <label>Last Name</label>
            <input className="border border-gray-200 py-1 px-2 w-full rounded outline-0" type="text" placeholder="Enter last name" />
          </div>
        </div>

        <div className="my-3 text-sm md:text-[16px]">
          <label>Email</label>
          <input className="border border-gray-200 py-1 px-2 w-full rounded outline-0" type="email" placeholder="Enter email address" />
        </div>

        <div className="my-3 text-sm md:text-[16px]">
          <label>Phone</label>
          <input className="border border-gray-200 py-1 px-2 w-full rounded outline-0" type="text" placeholder="Enter phone number" />
        </div>

        <div>
          <div className="flex text-sm md:text-[16px] items-center gap-2 my-3 justify-center">
            <div>
              <label>Check-in Date:</label>
              <input className="border border-gray-200 py-1 px-2 w-full rounded outline-0" type="date" value={formData.checkInDate} readOnly />
            </div>
            <div>
              <label>Check-out Date:</label>
              <input className="border border-gray-200 py-1 px-2 w-full rounded outline-0" type="date" value={formData.checkOutDate} readOnly />
            </div>
          </div>

          <div className="flex text-sm md:text-[16px] items-center gap-2 my-3 justify-center">
            <div>
              <label>Nights:</label>
              <input
                className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                type="number"
                value={getDateDifference(formData.checkInDate, formData.checkOutDate)}
                readOnly
              />
            </div>
            <div>
              <label>Guests:</label>
              <input className="border border-gray-200 py-1 px-2 w-full rounded outline-0" type="number" value={formData.guests} readOnly />
            </div>
          </div>
        </div>

        <div className="my-3 flex flex-col text-sm md:text-[16px]">
          <label>Address</label>
          <textarea className="border p-2 border-gray-300 rounded h-20" placeholder="Enter address" />
        </div>

        <div className="flex items-center gap-2 my-3 justify-center text-sm md:text-[16px]">
          <div className="w-70 flex flex-col justify-start ">
            <label>ID Type</label>
            <select className="border border-gray-200 py-1 px-2 rounded outline-0">
              <option>Select ID type</option>
              <option>Passport</option>
              <option>Driver's License</option>
              <option>National Id</option>
            </select>
          </div>
          <div>
            <label>ID Number</label>
            <input className="border border-gray-200 py-1 px-2 w-full rounded outline-0" type="text" placeholder="Enter ID number" />
          </div>
        </div>

        <div className="my-3 flex flex-col text-sm md:text-[16px]">
          <label>Special Requests</label>
          <textarea className="border p-2 border-gray-300 rounded h-20" placeholder="Any special requests or preferences" />
        </div>

        <div className="flex items-center my-5 font-semibold justify-center gap-2 text-sm md:text-[16px]">
          <button
            className="py-1 px-2 md:px-5 w-full border border-gray-400 rounded hover:bg-blue-100 hover:shadow-lg"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="py-1 px-2 md:px-5 w-full border border-gray-400 rounded bg-black text-white hover:shadow-lg"
            onClick={handleClick}
          >
            Confirm Booking
          </button>
        </div>
      </div>

      {/* Right Side: Booking Summary */}
      <div className="border border-gray-300 rounded-lg bg-white p-4">
        <div className="text-xl md:text-2xl font-semibold">Booking Summary</div>
        <div className="font-semibold">{room.type}</div>
        <div className="text-gray-500">Comfortable standard room with city view</div>

        <div className="flex items-center justify-between my-2 text-sm">
          <p>Check-in:</p>
          <p>{formData.checkInDate}</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm">
          <p>Check-out:</p>
          <p>{formData.checkOutDate}</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm">
          <p>Nights:</p>
          <p>{getDateDifference(formData.checkInDate, formData.checkOutDate)}</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm">
          <p>Guests:</p>
          <p>{formData.guests}</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm">
          <p>Rooms:</p>
          <p>{formData.rooms}</p>
        </div>

        <hr className="border border-gray-200 my-3 w-full" />
        <div className="flex items-center justify-between my-2 text-sm">
          <p>Room Rate:</p>
          <p>${room.price}/night</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm">
          <p>Taxes & Fees:</p>
          <p>$14.40</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm">
          <p>Subtotal:</p>
          <p>${billAmount}.00</p>
        </div>

        <hr className="border border-gray-200 my-1 w-full" />
        <div className="flex items-center justify-between my-2 text-sm">
          <p className="text-lg md:text-xl font-medium">Total:</p>
          <p className="text-green-600 font-medium text-lg md:text-xl">${totalBill}</p>
        </div>

        <div>
          <button
            className="py-1 px-2 md:px-5 w-full border border-gray-400 rounded bg-black text-white hover:shadow-lg"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RmBookingForm;
