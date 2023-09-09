import Section1 from "@/src/container/Home/Section1";
import Section2 from "@/src/container/Home/Section2";
import Section3 from "@/src/container/Home/Section3";
import Layout from "@/src/Components/Layout/Layout";
import React from "react";
import NewsLetterBox from "@/src/Components/NewsLetterBox/NewsLetterBox";
import Script from "next/script";

function Home() {
  return (
    <>
      <Layout>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BLGEL8RXRV"
        />
        <Script id="google tag">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BLGEL8RXRV');`}
        </Script>
        <Section1 />
        <Section2 />
        <Section3 />
        <NewsLetterBox />
      </Layout>
    </>
  );
}

export default Home;
