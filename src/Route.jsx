// import { Children } from "react";
// import App from "./App";
// import Home from "./Components/Home";
// import Bookings from "./Components/Bookings";
// import NewBooking from "./Components/NewBooking";
// import { createBrowserRouter } from "react-router-dom";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "bookings", element: <Bookings /> },
//       { path: "newbooking", element: <NewBooking /> },
//     ],
//   },
// ]);

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import Bookings from "./Components/Bookings";
import NewBooking from "./Components/NewBooking";
import BookingConfirmed from "./Components/BookingConfirmed";
import RmBookingForm from "./Components/RmBookingForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "bookings", element: <Bookings /> },
      { path: "newbooking", element: <NewBooking /> },
      { path: "bookingConfirmed", element: <BookingConfirmed /> },
      { path: "rmBookingform", element: <RmBookingForm /> },
    ],
  },
]);

