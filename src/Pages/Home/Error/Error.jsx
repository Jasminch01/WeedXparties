import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center h-screen">
            <p className="text-2xl">Page Not Found</p>
            <button className="btn bg-green-300"> <Link to='/'>Go Home</Link> </button>
        </div>
    );
};

export default Error;