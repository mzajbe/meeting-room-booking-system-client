import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import MeetingRooms from "../pages/meetingRooms/MeetingRooms";
import ContactUs from "../pages/contactUs/ContactUs";
import Login from "../pages/authentication/Login";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import Register from "../pages/authentication/Register";
import BookingsPage from "../pages/bookings/BookingsPage";
import ProtectedRoute from "../components/Layouts/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path:"/rooms",
        element: <MeetingRooms></MeetingRooms>,
      },
      {
        path: "/rooms/:id",
        element:(
          <ProtectedRoute>
            <RoomDetails></RoomDetails>
          </ProtectedRoute>
        ),
      },
      {
        path:"/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path:"/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element: <Register></Register>,
      },
      {
        path:"/bookings",
        element: <BookingsPage></BookingsPage>,
      },
    ],
  },
]);

export default router;
