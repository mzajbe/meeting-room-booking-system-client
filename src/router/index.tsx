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
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardTest from "../pages/dashboard/DashboardTest";
import RoomList from "../components/dashboardCoponents/RoomList";
import CreateSlot from "../pages/slotManagement/CreateSlot";
import BookingsAction from "../pages/bookingManagement/BookingsAction";
import SlotManagement from "../pages/slotManagement/SlotManagement";
import MyBookingsPage from "../pages/myBookings/MyBookingsPage";

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
        path:"/booking/:roomId",
        element: <BookingsPage></BookingsPage>,
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path:"/create-rooms",
        element:<RoomList></RoomList>,
      },
      {
        path:"/create-slots",
        element:<SlotManagement></SlotManagement>
      },
      {
        path:"/booking-action",
        element:<BookingsAction></BookingsAction>
      },
      {
        path:"/my-bookings",
        element:<MyBookingsPage></MyBookingsPage>
      }
    ],
  },
]);

export default router;
