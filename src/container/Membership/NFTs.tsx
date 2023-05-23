import { Box, Stack, makeStyles, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";

interface NFT {
  name: string;
  url: string;
  borderImage: string;
}

const NFTArray: NFT[] = [
  {
    name: "nft1",
    url: "/NFTS/Nft_0.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599c) 1",
  },
  {
    name: "nft2",
    url: "/NFTS/Nft_2.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599C,  #FBC13a) 1",
  },
  {
    name: "nft3",
    url: "/NFTS/Nft_3.png",
    borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
  },
];

const NFTs: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      spacing={10}
      alignItems="center"
      justifyContent="center"
      sx={{
        [theme.breakpoints.up("md")]: {
          height: "100vh",
        },
      }}
    >
      <div>
        <h2 id="Artwork">1000 UNIQUE MEMBERSHIP CARD UTILITY</h2>
      </div>
      <Stack direction="row" spacing={4}>
        {NFTArray.map((object) => {
          return (
            <div
              key={object.name}
              style={{
                width: "21rem",
                height: "25rem",
                padding: "1.3em",
                border: "3px solid #e277ae",
                borderImage: `${object.borderImage}`,
                boxShadow:
                  "inset -1px -1px 20px rgba(255,74,169,.3), 2px 2px 20px rgba(255,74,169,.32), inset 3px 3px 20px -2px rgba(0,78,149,.48), -8px 1px 18px rgba(0,78,149,.42)",
                borderRadius: "10px",
                background: "transparent",
                position: "relative",
                animationDuration: "0.3s",
              }}
            >
              <Image
                src={object.url}
                alt={`image of ${object.name}`}
                width={300}
                height={360}
                style={{
                  height: "90%",
                  width: "90%",
                  border: " 1px solid #c35c91",
                  borderRadius: "10px",
                  zIndex: "1",
                }}
              ></Image>
            </div>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default NFTs;
