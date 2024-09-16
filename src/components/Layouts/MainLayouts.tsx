import { Outlet } from "react-router-dom";
import Navbar from "../homeComponents/navbar/Navbar";
import Footer from "../shared/footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;