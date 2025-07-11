import { useNavigate } from "react-router-dom";

const RmBookingForm = ({ room, formData, closeDetail }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Booking confirmed! Confirmation details will be sent to your email");
    navigate("/bookingConfirmed");
  };
  const getDateDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };
  let tax = 14.4;
  let billAmount =
    getDateDifference(formData.checkInDate, formData.checkOutDate) *
    parseInt(room.price) *
    parseInt(formData.rooms);
  let totalBill = billAmount + tax;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-5 gap-5 w-full">
      <div className="border border-gray-300 rounded-lg bg-white p-4">
        <div className="text-xl md:text-2xl font-semibold">
          Guest Information
        </div>

        <div className="flex items-center gap-2 my-3 justify-center">
          <div>
            <label htmlFor="First Name">First Name</label>
            <input
              className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
              type="text"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label htmlFor="First Name">Last Name</label>
            <input
              className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
              type="text"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="Email">Email</label>
          <input
            className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
            type="email"
            name=""
            id="Email"
            placeholder="Enter email address"
          />
        </div>
        <div className="my-3">
          <label htmlFor="Phone">Phone</label>
          <input
            className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
            type="text"
            name=""
            id="Phone"
            placeholder="Enter phone number"
          />
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="Address">Address</label>
          <textarea
            className="border border-gray-300 rounded h-20"
            type="text"
            name=""
            id="Address"
            placeholder="Enter  address"
          />
        </div>
        <div className="flex items-center gap-2 my-3 justify-center">
          <div className="w-70 flex flex-col justify-start ">
            <label htmlFor="">ID Type</label>
            <select
              name=""
              id=""
              className="border border-gray-200 py-1 px-2  rounded outline-0"
              type="text"
              placeholder="Enter first name"
            >
              <option value="Select ID type">Select ID type</option>
              <option value="Passport">Passport</option>
              <option value="Driver's License">Driver's License</option>
              <option value="National Id">National Id</option>
            </select>
          </div>
          <div>
            <label htmlFor="First Name">ID Number</label>
            <input
              className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
              type="text"
              placeholder="Enter ID number"
            />
          </div>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="Special Requests">Special Requests</label>
          <textarea
            className="border border-gray-300 rounded h-20"
            type="text"
            name=""
            id="Address"
            placeholder="Any special requests or preferences"
          />
        </div>
        <div className="flex items-center my-5 font-semibold justify-center gap-2">
          <button className="py-1 px-5 w-full border border-gray-400 rounded hover:bg-blue-100 hover:shadow-lg">
            Back
          </button>
          <button
            className="py-1 px-5 w-full border border-gray-400 rounded bg-black text-white hover:shadow-lg"
            onClick={handleClick}
          >
            Confirm Booking
          </button>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg bg-white p-4">
        <div className="text-xl md:text-2xl font-semibold">Booking Summary</div>
        <div className="font-semibold">{room.type} </div>
        <div className="text-gray-500">
          Comfortable standard room with city view
        </div>
        <div className="flex items-center justify-between my-2 text-sm ">
          <p>Check-in:</p>
          <p>{formData.checkInDate}</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm ">
          <p>Check-Out:</p>
          <p>{formData.checkOutDate}</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm ">
          <p>Nights:</p>
          <p>
            {getDateDifference(formData.checkInDate, formData.checkOutDate)}{" "}
          </p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm ">
          <p>Guests:</p>
          <p>{formData.guests}</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm ">
          <p>Rooms:</p>
          <p>{formData.rooms}</p>
        </div>

        <hr className="border border-gray-200 my-3 w-full " />
        <div className="flex items-center justify-between my-2 text-sm ">
          <p>Rooms Rate:</p>
          <p>{room.price} </p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm ">
          <p>Taxes & Fees:</p>
          <p>$14.40</p>
        </div>
        <div className="flex items-center justify-between my-2 text-sm ">
          <p>Subtotal:</p>
          <p>${billAmount}.00 </p>
        </div>
        <hr className="border border-gray-200 my-1 w-full " />
        <div className="flex items-center justify-between my-2 text-sm ">
          <p className="text-lg md:text-xl font-medium">Total:</p>
          <p className="text-green-600 font-medium text-lg md:text-xl">
            ${totalBill}
          </p>
        </div>
        <div>
          <button onClick={closeDetail}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default RmBookingForm;
