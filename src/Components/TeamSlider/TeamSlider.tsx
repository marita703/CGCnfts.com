import React from "react";
import TeamData from "@/public/Data/TeamData";
import Image from "next/image";
import Link from "next/link";

function TeamSlider() {
  return (
    <div className="slide-container">
      {TeamData.map((team) => {
        return (
          <div key={team.name} className="slide-content">
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
          </div>
        );
      })}
    </div>
  );
}

export default TeamSlider;
