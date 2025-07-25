import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Bookings from "./Components/Hotel/Bookings";
import NewBooking from "./Components/Hotel/NewBooking";
import BookingConfirmed from "./Components/Hotel/BookingConfirmed";
import RmBookingForm from "./Components/Hotel/RmBookingForm";
import Hotel from "./Components/Hotel/Hotel";
import Dashboard from "./Components/Dashboard/Dashboard";
import CheckAvailabilityConfirm from "./Components/Restaurant/CheckAvailabilityConfirm";
import ConfirmForm from "./Components/Restaurant/ConfirmForm";
import Orders from "./Components/Restaurant/Orders";
import PosSystem from "./Components/Restaurant/PosSystem";
import ReservedConfirmed from "./Components/Restaurant/ReservedConfirmed";
import Restaurant from "./Components/Restaurant/Restaurant";
import RestaurantHeader from "./Components/Restaurant/RestaurantHeader";
import RoomService from "./Components/Restaurant/RoomService";
import TableBooking from "./Components/Restaurant/TableBooking";
import Tables from "./Components/Restaurant/Tables";
import Takeaway from "./Components/Restaurant/Takeaway";
import SearchedRooms from "./Components/Hotel/SearchedRooms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Landing Page Route
      { path: "", element: <Dashboard /> },

      // Hotel Routes
      { path: "hotel", element: <Hotel /> },
      { path: "bookings", element: <Bookings /> },
      { path: "newbooking", element: <NewBooking /> },
      { path: "searched-rooms", element: <SearchedRooms /> },
      { path: "rmBookingform", element: <RmBookingForm /> },
      { path: "bookingConfirmed", element: <BookingConfirmed /> },

      // Restaurant Routes
      { path: "/tables", element: <Tables /> },
      {
        path: "/checkAvailabilityConfirm",
        element: <CheckAvailabilityConfirm />,
      },
      { path: "/confirmForm", element: <ConfirmForm /> },
      { path: "/RestaurantHeader", element: <RestaurantHeader /> },
      { path: "/orders", element: <Orders /> },
      { path: "/posSystem", element: <PosSystem /> },
      { path: "/reservedConfirmed", element: <ReservedConfirmed /> },
      { path: "/restaurant", element: <Restaurant /> },
      { path: "/roomService", element: <RoomService /> },
      { path: "/tableBooking", element: <TableBooking /> },
      { path: "/takeaway", element: <Takeaway /> },
    ],
  },
]);
