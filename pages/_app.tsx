import * as React from "react";
import Head from "next/head";
import Script from "next/script";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/src/config/theme";
import createEmotionCache from "@/src/config/theme/createEmotionCache";
import "@/pages/css/globals.css";
import "@/pages/css/embla.css";
import "@/pages/css/hoveredButton.css";
import "@/pages/css/teamSlider.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Cryptogirlsclub</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.cryptogirlsclub.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Welcome to crypto girls club!" />
        <meta
          property="og:description"
          content="The OG women in web3 community in Europe."
        />
        <meta
          property="og:image"
          content="https://www.cryptogirlsclub.org/Images/OGImage/ogimage.jpeg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cgcnfts.com" />
        <meta
          property="twitter:url"
          content="https://www.cryptogirlsclub.org"
        />
        <meta name="twitter:title" content="Welcome to crypto girls club!" />
        <meta
          name="twitter:description"
          content="The OG women in web3 community in Europe."
        />
        <meta
          name="twitter:image"
          content="https://www.cryptogirlsclub.org/Images/OGImage/ogimage.jpeg"
        />

        <meta
          name="description"
          content="The OG women in web3 community in Europe."
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
