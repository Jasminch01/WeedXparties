import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
    const {id} = useParams();
    const intId = parseInt(id)

    const services = useLoaderData();
    const serviceDetails = services.services.find(service => service.id === intId);

    const {description , image, name} = serviceDetails;

    useEffect(() => {
        AOS.init({
          duration: 1000, 
    
        });
      }, []);

    return (
        <div className="w-[80%] mx-auto">
            <div className="py-20">
                <div data-aos = 'zoom-in'>
                    <img src= {image} alt="" className="w-full rounded-lg" />
                </div>
                <div data-aos='fade-up' className="space-y-4 mt-4">
                    <p className="text-2xl font-bold">{name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;