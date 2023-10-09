import { useContext, useEffect } from "react";
import { ContextProvider } from "../../Context/Context";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const {images} = useContext(ContextProvider);
  useEffect(() => {
    AOS.init({
      duration: 1000, 

    });
  }, []);
  return (
    <div>
      <div className="w-[80%] mx-auto my-10">
        <p className="text-3xl font-bold  text-center mb-10">
          Gallery
        </p>
        <div className="lg:columns-4 columns-1 md:columns-2 gap-3 space-y-3 pb-20 ">
        {images.map((image) => (
          <div key={image.id}>
            <div
              data-aos = "zoom-in-up"
              className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md"
            >
              <img src={image.img_url} alt="" className="rounded-md" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Gallery;
