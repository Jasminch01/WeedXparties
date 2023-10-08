import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <div className="w-[80%] mx-auto mb-10">
      <p data-aos = "fade-left" className="text-3xl font-bold text-center  mb-2">Our Services</p>
      <div className=" flex items-center justify-center mb-10">
        <hr data-aos = 'fade-right' className="border-2 w-44 border-rose-500 " />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
