import React from "react";
import TeamData from "@/public/Data/TeamData";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function TeamSlider() {
  return (
    <Swiper
      breakpoints={{
        350: {
          width: 350,
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
        900: {
          width: 900,
          slidesPerView: 3,
        },
        1200: {
          width: 1200,
          slidesPerView: 3,
        },
      }}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="slide-container mySwiper"
    >
      {TeamData.map((team) => {
        return (
          <SwiperSlide key={team.name} className="slide-content ">
            <div className="card-wrapper">
              <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <Image
                      className="card-img"
                      width={320}
                      height={320}
                      alt="Team card"
                      src={team.url}
                    ></Image>
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">{team.name}</h2>
                  <h3 className="rol">{team.rol}</h3>
                  <Link href="/" className="LinkedIn">
                    Linkedin
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default TeamSlider;
