import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import MeetingRooms from "../pages/meetingRooms/MeetingRooms";

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
        path:"/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default router;
