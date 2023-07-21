import React from "react";
import TeamData from "@/public/Data/TeamData";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function TeamSlider() {
  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="slide-container"
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
