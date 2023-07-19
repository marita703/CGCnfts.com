import React from "react";
import TeamData from "@/public/Data/TeamData";
import Image from "next/image";
import Link from "next/link";

function TeamSlider() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="card-wrapper">
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <Image
                  className="card-img"
                  width={150}
                  height={150}
                  alt="Team card"
                  src="/"
                ></Image>
              </div>
              <div className="card-content">
                <h2>Name</h2>
                <h3>Rol</h3>
                <Link href="/" className="LinkedIn">
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSlider;
