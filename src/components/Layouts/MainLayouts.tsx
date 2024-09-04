import Home from "../../pages/home/Home";
import Navbar from "../homeComponents/navbar/Navbar";


const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Hero></Hero> */}
            <Home></Home>
        </div>
    );
};

export default MainLayouts;