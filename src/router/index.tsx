import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import MeetingRooms from "../pages/meetingRooms/MeetingRooms";
import ContactUs from "../pages/contactUs/ContactUs";
import Login from "../pages/authentication/Login";
import RoomDetails from "../pages/roomDetails/RoomDetails";

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
        element:<RoomDetails></RoomDetails> ,
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
    ],
  },
]);

export default router;
