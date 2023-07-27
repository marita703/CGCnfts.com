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
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
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
                      width={290}
                      height={290}
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
