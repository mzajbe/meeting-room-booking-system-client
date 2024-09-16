import { Outlet } from "react-router-dom";
import Navbar from "../homeComponents/navbar/Navbar";
import Footer from "../shared/footer/Footer";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const MainLayouts = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;