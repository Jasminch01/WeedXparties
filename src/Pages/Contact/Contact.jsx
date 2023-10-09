import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, 
    
        });
      }, []);
  return (
    <div className="w-[80%] mx-auto my-24">
      <div className="grid md:grid-cols-2">
        <div data-aos='fade-left' className="p-5">
            <img src="../../../public/undraw_Contact_us_re_4qqt.png" alt="" className="w-full" />
        </div>
        <div data-aos = 'fade-right' className="space-y-5 ">
            <div>
                <p className="font-bold text-4xl ">{'Let"s '} Get in touch <br /> with us</p>
            </div>
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-base-200 w-full "
          />
          <br />
          <input
            type="text"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-base-200 w-full "
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="p-4 rounded-xl bg-base-200 w-full "
          />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="rounded-xl bg-base-200  w-full"
          ></textarea>
          <button className="btn rounded-full md:w-[300px] bg-rose-500 text-white ">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
