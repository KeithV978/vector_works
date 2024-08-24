import React from "react";
// import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Heading = ({
  children,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  borderColor,
  borderImage,
  radius,
  padding,
  margin,
}) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        borderTop: borderTop ? borderTop : "",
        borderBottom: borderBottom ? borderBottom : "",
        borderLeft: borderLeft ? borderLeft : "",
        borderRight: borderRight ? borderRight : "",
        borderImage: borderImage ? borderImage : "auto",
        borderColor: borderColor ? borderColor : "#fff",
        padding: padding ? padding : "1rem",
        borderRadius: radius ? radius : "20px",
        margin: margin ? margin : "1rem initial",
      }}
    >
      <Typography textTransform="uppercase" variant="h5" color="inherit">
        {children}
      </Typography>
    </Box>
  );
};
