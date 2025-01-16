import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {useNavigate} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import './Hero.css'


 function Hero() {
    const swiperImages = ["images/mirror.jpg",'images/pic1.jpg','images/blackblock.jpg'];
    const projects = ["Apartment Blocks in Nairobi","Ndagani Modern Market","Kathwana ablution block"];
    const navigate=useNavigate()

  return (
    <div className="swiper">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation]}
      >
        {swiperImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <img
                src={image}
                alt={`Hero-${index}`}
                className="swiper-images"
              />
              <div className="swiper-content">
                <div className="swiper-text">
                  <h1>{projects[index]}</h1>
                  <div className="swiper-btn">
                    <button
                      className="hero-btn"
                      onClick={() => navigate("/portfolio")}
                    >
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Hero;
