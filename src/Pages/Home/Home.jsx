import { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";
import Review from "../../Components/Review/Review";
import Services from "../../Components/Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 

    });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Services></Services>
      <Review></Review>
    </div>
  );
};

export default Home;
