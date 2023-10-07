import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";
import Navbar from "../../Components/Navbar/Navbar";
import Review from "../../Components/Review/Review";
import Services from "../../Components/Services/Services";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Gallery></Gallery>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;