import PropTypes from "prop-types";
import { useContext } from "react";
import { ContextProvider } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";
// import { DotSpinner } from "@uiball/loaders";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(ContextProvider);
  const location = useLocation();
  if (loading) {
     return <div className="h-screen text-center flex justify-center items-center">

     <DotSpinner 
      size={40}
      speed={0.9} 
      color="black" 
     />
     </div>
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoute;
