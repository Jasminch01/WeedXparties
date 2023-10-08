import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const {id, name, image, price, description} = service;
  return (
    <div>
      <div className="flex flex-col border shadow-sm p-5 rounded hover:transform hover:scale-105 hover:bg-slate-100 transition-transform duration-300">
        <div className="p-5">
          <img
            src= {image}
            alt="Shoes"
            className="rounded h-64 w-full"
          />
        </div>
        <div className="text-center flex-grow">
          <h2 className="text-2xl font-medium">{name}</h2>
          <p>{description.length > 20 && description.slice(0,100)}</p>
          <p className="text-xl my-3"><span className="font-semibold">Price :</span> {price}</p>
          <div className=" text-center my-5">
            <button className="p-3 border text-rose-500 border-rose-500 hover:bg-rose-500 hover:text-white rounded-full"> <Link to = {`/details/${id}`}>learn more</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Service;
