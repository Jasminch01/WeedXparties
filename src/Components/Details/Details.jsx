import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams();
    const intId = parseInt(id)

    const services = useLoaderData();
    const serviceDetails = services.services.find(service => service.id === intId);

    const {description , image, name} = serviceDetails;

    return (
        <div className="w-[80%] mx-auto">
            <div className="py-20">
                <div>
                    <img src= {image} alt="" className="w-full rounded-lg" />
                </div>
                <div className="space-y-4 mt-4">
                    <p className="text-2xl font-bold">{name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;