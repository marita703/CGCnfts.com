import Section1 from "@/src/container/Home/Section1";
import Section2 from "@/src/container/Home/Section2";
import Section3 from "@/src/container/Home/Section3";
import Layout from "@/src/Components/Layout/Layout";
import React from "react";
import NewsLetterBox from "@/src/Components/NewsLetterBox/NewsLetterBox";

function Home() {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
        <Section3 />
        <NewsLetterBox />
      </Layout>
    </>
  );
}

export default Home;
