import { Box, Stack, makeStyles } from "@mui/material";
import React from "react";
import Image from "next/image";

interface NFT {
  name: string;
  url: string;
  //   styles: string[];
}

const NFTArray: NFT[] = [
  { name: "nft1", url: "/NFTS/Nft_0.png" },
  { name: "nft2", url: "/NFTS/Nft_2.png" },
  { name: "nft3", url: "/NFTS/Nft_3.png" },
];

const NFTs: React.FC = () => {
  const classes = useStyles();
  return (
    <Stack
      direction="column"
      spacing={10}
      alignItems="center"
      justifyContent="center"
    >
      <div>
        <h2 id="Artwork">1000 UNIQUE MEMBERSHIP CARD UTILITY</h2>
      </div>
      <Stack direction="row" spacing={4}>
        {NFTArray.map((object) => {
          return (
            <Box
              key={object.name}
              sx={{
                width: "21rem",
                height: "25rem",
                padding: "1.3em",
                border: "3px solid #e277ae",
                borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
                borderRadius: "10px",
                background: "linear-gradient(-45deg, #1a1a1c, #2c0f32)",
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
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default NFTs;
