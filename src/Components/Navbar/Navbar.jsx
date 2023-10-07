import { NavLink } from "react-router-dom";
import defaultProfile from "../../assets/user.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-rose-500 text-white" : ""
          }
        >
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/gallary"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-rose-500 text-white" : ""
          }
        >
          Gallary
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-rose-500 text-white" : ""
          }
        >
          Services
        </NavLink>{" "}
      </li>
    </>
  );
  return (
    <div className="w-[80%] mx-auto">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
            <a className=" normal-case text-2xl text-rose-500 font-bold">WedXpertes</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <img src={defaultProfile} alt="" className="w-12" />
          <a className="p-2 bg-rose-500 text-white ms-3">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
