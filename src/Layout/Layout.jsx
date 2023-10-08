import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useContext } from "react";
import { ContextProvider } from "../Context/Context";

const Layout = () => {
    const {loading} = useContext(ContextProvider)
    return (
        <div className= {loading? 'animate-pulse font-popins' : 'font-popins'}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;