import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    margin: "2rem auto",
  },
}));
export const Slider = styled("div")(({ theme }) => ({
  height: "150px",
  margin: "auto",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  "&:before": {
    content: "''",
    height: "200px",
    position: "absolute",
    width: "100px",
    zIndex: 2,
    left: 0,
    top: 0,
    background: "linear-gradient(to right, #0c0211, #ffffff00)",
  },

  "&:after": {
    content: "''",
    height: "100px",
    position: "absolute",
    width: "100px",
    zIndex: 2,
    right: 0,
    top: 0,
    transform: "rotateZ(180deg)",
    background: "linear-gradient(to right, #0c0211, #ffffff00)",
  },

  "&:hover + .slide": {
    animationPlayState: "paused",
  },

  [theme.breakpoints.up("sm")]: {
    "&:before": {
      height: "200px",
    },
    "&:after": {
      height: "200px",
    },
  },
}));

export const SlideTrack = styled("div")(({ theme }) => ({
  animation: "scroll 40s linear infinite",
  display: "flex",
  width: "calc(250px * 14)",
  //   width: "100%",
}));
export const Slide = styled("div")(({ theme }) => ({
  height: "100px",
  //   width: "250px",
  margin: "0 20px",
  display: "flex",
  alignItems: "center",
}));
