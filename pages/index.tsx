import Footer from "@/src/Components/Footer";
import Navbar from "@/src/Components/Navbar";
import Section1 from "@/src/container/Home/Section1";
import Section2 from "@/src/container/Home/Section2";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />

      <Section1 />
      <Section2 />

      <Footer />
    </div>
  );
}

export default Home;
