import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
const RmBookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { room, formData } = location.state || {};

  if (!room || !formData) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600 font-semibold">
          Invalid access! No booking data found.
        </p>
        <button
          className="mt-4 py-2 px-4 bg-gray-800 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    try{
      toast("Booking confirmed! Confirmation details will be sent to your email");
      // console.log(data);
      let response = await fetch(
        "http://localhost:4001/api/v1/userdetails/upload",{
          method:'post',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
        }
      );
      response = await response.json();
      console.log(response)
      setTimeout(() => {
        navigate("/bookingConfirmed");
      }, 3000);

    }
    catch(err){
     console.error("Error during booking submission:", err);
    toast.error("Booking failed. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-3 gap-5 w-auto">
      {/* Left Side: Form */}
      <div className="border border-gray-300 rounded-lg bg-white p-4 mx-5">
        <div className="text-xl md:text-2xl font-semibold">
          Guest Information
        </div>

        <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
          {/* Name section */}
          <div className="flex text-sm md:text-[16px]  items-center gap-2 my-3 justify-center">
            <div className="w-full">
              <label>First Name</label>
              <input
                {...register("firstName", {
                  minLength: {
                    value: 2,
                    message: "First Name must Contain more than 2 Characters",
                  },
                  maxLength: {
                    value: 10,
                    message:
                      "First Name can not Contain more than 10 Characters",
                  },
                  required: { value: true, message: "this field is required" },
                })}
                className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                type="text"
                placeholder="Enter first name"
              />
              {errors.firstName && (
                <p className="text-sm text-red-700">
                  {errors.firstName.message}{" "}
                </p>
              )}
            </div>
            <div className="w-full">
              <label>Last Name </label>
              {errors.lastName && (
                <span className="text-sm text-red-700">
                  {errors.lastName.message}{" "}
                </span>
              )}
              <input
                {...register("lastName", {
                  minLength: {
                    value: 2,
                    message: "Last Name must Contain more than 2 Characters",
                  },
                  maxLength: {
                    value: 10,
                    message:
                      "Last Name can not Contain more than 10 Characters",
                  },
                  required: { value: true, message: "this field is required" },
                })}
                className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                type="text"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* Email section */}
          <div className="my-3 text-sm md:text-[16px]">
            <label>Email</label>
            <input
              {...register("Email", {
                required: { value: true, message: "Email is Required" },
              })}
              className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
              type="email"
              placeholder="Enter email address"
            />
            {errors.Email && (
              <p className="text-sm text-red-700">{errors.Email.message} </p>
            )}
          </div>

          {/* Phone Section */}
          <div className="my-3 text-sm md:text-[16px]">
            <label>Phone</label>
            <input
              {...register("PhoneNumber", {
                minLength: {
                  value: 10,
                  message: "Phone Number must Contain at least 10 Characters",
                },
                maxLength: {
                  value: 11,
                  message:
                    "Phone Number can not Contain more than 11 Characters",
                },
                required: { value: true, message: "this field is required" },
              })}
              className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
              type="number"
              placeholder="Enter phone number"
            />
            {errors.PhoneNumber && (
              <p className="text-sm text-red-700">
                {errors.PhoneNumber.message}{" "}
              </p>
            )}
          </div>

          {/* hidden Data */}
          <div className="bg-red-50 hidden">
            <div className="flex text-sm md:text-[16px] items-center gap-2 my-3 justify-center">
              <div>
                <label>Check-in Date:</label>
                <input
                  {...register("checkIn")}
                  className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                  type="date"
                  value={formData.checkInDate}
                  readOnly
                />
              </div>
              <div>
                <label>Check-out Date:</label>
                <input
                  {...register("checkOut")}
                  className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                  type="date"
                  value={formData.checkOutDate}
                  readOnly
                />
              </div>
            </div>

            <div className="flex text-sm md:text-[16px] items-center gap-2 my-3 justify-center">
              <div>
                <label>Rooms:</label>
                <input
                  {...register("rooms")}
                  className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                  type="number"
                  value={formData.rooms}
                  readOnly
                />
              </div>
              <div>
                <label>Guests:</label>
                <input
                  {...register("guestCount")}
                  className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                  type="number"
                  value={formData.guests}
                  readOnly
                />
              </div>
              <div>
                <label>Roomrates:</label>
                <input
                  {...register("Roomrates")}
                  className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                  type="number"
                  value={room.price}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="my-3 flex flex-col text-sm md:text-[16px]">
            <label>Address</label>
            <textarea
              {...register("Address")}
              className="border p-2 border-gray-300 rounded h-20"
              placeholder="Enter address"
            />
          </div>

          {/* Id Section */}
          <div className="flex items-center gap-2 my-3 justify-center text-sm md:text-[16px]">
            <div className="w-70 flex flex-col justify-start ">
              <label>ID Type</label>
              <select
                {...register("idType", {
                  required: { value: true, message: "this field is required" },
                })}
                className="border border-gray-200 py-1 px-2 rounded outline-0"
              >
                <option>Select ID type</option>
                <option>Passport</option>
                <option>Driver's License</option>
                <option>National Id</option>
              </select>
            </div>
            <div>
              <label>ID Number</label>
              <input
                {...register("idNumber", {
                  required: { value: true, message: "this field is required" },
                })}
                className="border border-gray-200 py-1 px-2 w-full rounded outline-0"
                type="text"
                placeholder="Enter ID number"
              />
            </div>
          </div>
          {errors.idNumber && (
            <p className="text-sm flex justify-end text-red-700">
              {errors.idNumber.message}{" "}
            </p>
          )}

          <div className="my-3 flex flex-col text-sm md:text-[16px]">
            <label>Special Requests</label>
            <textarea
              {...register("SpecialRequest")}
              className="border p-2 border-gray-300 rounded h-20"
              placeholder="Any special requests or preferences"
            />
          </div>

          {/* Button Section */}
          <div className="flex items-center my-5 font-semibold justify-center gap-2 text-sm md:text-[16px]">
            <button
              className="py-1 px-2 md:px-5 w-full border border-gray-400 rounded hover:bg-blue-100 hover:shadow-lg"
              onClick={() => navigate("/searched-rooms")}
            >
              Back
            </button>
            <button
              type="submit"
              className="py-1 px-2 md:px-5 w-full border border-gray-400 rounded bg-black text-white hover:shadow-lg"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Booking Summary */}
      <div className="border border-gray-300 rounded-lg bg-white p-4 mx-5">
        <div className="text-xl md:text-2xl font-semibold">Booking Summary</div>
        <div className="font-semibold">{room.type}</div>
        <div className="text-gray-500">
          Comfortable standard room with city view
        </div>

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
          <p>
            {getDateDifference(formData.checkInDate, formData.checkOutDate)}
          </p>
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
          <p className="text-green-600 font-medium text-lg md:text-xl">
            ${totalBill}
          </p>
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
    </div>
  );
};

export default RmBookingForm;
