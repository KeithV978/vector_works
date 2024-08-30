import React from "react";
// import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

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
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "fit-content",
        borderTop: borderTop ? borderTop : "",
        borderBottom: borderBottom ? borderBottom : "",
        borderLeft: borderLeft ? borderLeft : "",
        borderRight: borderRight ? borderRight : "",
        // borderImage: borderImage
        //   ? borderImage
        //   : `linear-gradient(250deg, ${[theme.palette.primary.main]}, ${[
        //       theme.palette.secondary.main,
        //     ]}) 10%`,
        borderColor: borderColor ? borderColor : "#fff",
        padding: padding ? padding : ".5rem",
        borderRadius: radius ? radius : "20px",
        margin: margin ? margin : "1rem initial",

        background: `linear-gradient(85deg, ${[
          theme.palette.primary.main,
        ]} 10%, ${[theme.palette.secondary.main]})`,
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
      }}
    >
      <Typography
        textTransform="uppercase"
        variant="h4"
        color="inherit"
        fontWeight={800}
        letterSpacing={1}
        fontSize="55px"
      >
        {children}
      </Typography>
    </Box>
  );
};
