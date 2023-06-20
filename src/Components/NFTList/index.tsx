import {
  Box,
  Grid,
  Stack,
  StackProps,
  makeStyles,
  useTheme,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import NFTArray from "@/public/Data/NFTData";
import { Height } from "@mui/icons-material";

const NFTList: React.FC<StackProps> = ({ direction = {} }) => {
  const theme = useTheme();
  return (
    <Stack direction={direction} spacing={4}>
      {NFTArray.map((object) => {
        return (
          <Box
            key={object.name}
            sx={{
              width: "18rem",
              height: "21rem",
              [theme.breakpoints.up("md")]: {
                width: "21rem",
                height: "25rem",
              },
              padding: "1.3em",
              border: "3px solid #e277ae",
              borderImage: `${object.borderImage}`,
              boxShadow:
                "inset -1px -1px 20px rgba(255,74,169,.3), 2px 2px 20px rgba(255,74,169,.32), inset 3px 3px 20px -2px rgba(0,78,149,.48), -8px 1px 18px rgba(0,78,149,.42)",
              borderRadius: "10px",
              background: "transparent",
              position: "relative",
              animationDuration: "0.3s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { transform: "scale(1.1)" },
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
  );
};

export default NFTList;
