const Banner = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div data-aos= 'fade-up'
        className="hero md:h-[50vh]  rounded"
        style={{
          backgroundImage: "url(https://i.ibb.co/kMKjRJT/wedding-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded"></div>
        <div className="text-center" data-aos = 'zoom-in'>
          <h1 className="mb-5 text-white md:text-5xl text-2xl font-bold">
            Your Love Story <br />{" "}
            <span className="text-rose-500">Begins Here</span>{" "}
          </h1>
          <p className="mb-5 text-white">
            Join us in crafting a wedding day that reflects your unique love <br />
            story. Discover tips, trends, and a community of fellow brides and <br />
            grooms to make your wedding truly unforgettable. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
