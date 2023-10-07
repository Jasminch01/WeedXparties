import { useState } from "react";

const Gallery = () => {
  const [images, setimages] = useState([]);

  useState(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setimages(data));
  }, []);
  console.log(images);
  return (
    <div className="w-[80%] mx-auto my-10">
      <p className="text-3xl font-bold  text-center mb-10">
        Our Recent Activetes
      </p>
      <div  className="lg:columns-4 columns-1 md:columns-2 gap-3 space-y-3 pb-20 ">
        {images.slice(0,6).map((image) => (
          <div
            key={image.id}
          >
            <div className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md">
              <img src={image.img_url} alt="" className="rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
