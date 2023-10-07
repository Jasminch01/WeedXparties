import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="font-popins">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;