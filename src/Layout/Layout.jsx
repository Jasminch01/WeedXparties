import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    return (
        <div className="font-popins">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;