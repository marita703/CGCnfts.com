import { Box, BoxProps } from "@mui/material";
import React from "react";

const Item: React.FC<BoxProps> = ({ children, sx = {}, ref, onMouseDown }) => {
  return (
    <Box sx={{ ...sx }} position="absolute" ref={ref} onMouseDown={onMouseDown}>
      {children}
    </Box>
  );
};

export default Item;
