import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

type CustomBoxProps = {
  data: {
    title: string;
    content: string;
  };
  sx?: BoxProps["sx"];
};

const ContentBoxAbout: React.FC<CustomBoxProps> = ({ data, sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </Box>
  );
};

export default ContentBoxAbout;
