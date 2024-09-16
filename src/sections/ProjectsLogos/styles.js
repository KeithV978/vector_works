import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  //   minHeight: "200px",
  width: "80%",
  margin: "2rem auto",
}));
export const Slider = styled("div")(({ theme }) => ({
  height: "150px",
  margin: "auto",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  display: "flex",

  "&:before": {
    content: "''",
    height: "100px",
    position: "absolute",
    width: "200px",
    zIndex: 2,
    left: 0,
    top: 0,
    background: "linear-gradient(to right, #1c1c1c, #ffffff00)",
  },

  "&:after": {
    content: "''",
    height: "100px",
    position: "absolute",
    width: "200px",
    zIndex: 2,
    right: 0,
    top: 0,
    transform: "rotateZ(180deg)",
    background: "linear-gradient(to right, #1c1c1c, #ffffff00)",
  },

  "&:hover .slide": {
    // animationPlayState: "paused",
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
}));
