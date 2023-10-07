import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Swipers = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true, }}
      spaceBetween={50}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div className="bg-slate-100 p-5 flex flex-col space-y-3">
            <div className="flex items-center flex-grow">
              <div>
                <img
                  src={review.author_image}
                  alt=""
                  className="rounded-full w-16"
                />
              </div>
              <div className="ms-3">
                <p>{review.author_name}</p>
                <p>{review.author_address}</p>
              </div>
            </div>
            <div>
              <p>{review.review.length > 200 && review.review.slice(0, 200)}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipers;
