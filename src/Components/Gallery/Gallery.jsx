
const Gallery = () => {
    return (
        <div className="w-[80%] mx-auto my-10">
            <p className="text-3xl font-bold  text-center mb-10">Our Recent Activetes</p>
            <div className="lg:columns-4 columns-1 md:columns-2 gap-3 space-y-3 pb-20 ">
               <div className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md">
                <img src="../../../public/img/img-1.jpg" alt="" className="rounded-md" />
               </div>
               <div className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md">
                <img src="../../../public/img/img-2.jpg" alt="" className="rounded-md" />
               </div>
               <div className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md">
                <img src="../../../public/img/img-3.jpg" alt="" className="rounded-md" />
               </div>
               <div className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md">
                <img src="../../../public/img/img-4.jpg" alt="" className="rounded-md" />
               </div>
               <div className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md">
                <img src="../../../public/img/img-6.jpg" alt="" className="rounded-md" />
               </div>
               <div className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md">
                <img src="../../../public/img/img-5.jpg" alt="" className="rounded-md" />
               </div>
               <div className="break-inside-avoid hover:transform hover:scale-105 transition-transform duration-300 rounded-md">
                <img src="../../../public/img/img-25.jpg" alt="" className="rounded-md" />
               </div>
            </div>
        </div>
    );
};

export default Gallery;