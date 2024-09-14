import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    minHeight: "600px",
  },
}));

export const Titletext = styled("div")(({ theme }) => ({
  width: "min-content",
  background: `linear-gradient(50deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.secondary.main,
  ]}) 10%`,
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  marginBottom: "2rem",
}));
