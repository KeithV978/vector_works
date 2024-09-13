import { styled } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero/hero hand.png";

export const Wrapper = styled("section")(({ theme }) => ({
  width: "100%",
  // minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    // width: "90%",
    minHeight: "700px",
    // borderRight: "2px solid #ccc",
  },
  // background: `linear-gradient(180deg, transparent 50%, #1c1c1c)`,
  // "&::before": {
  //   // content: '""',
  //   position: "absolute",
  //   // top: "50%",
  //   right: "59%",
  //   // transform: "translate(-50%, -50%)",
  //   height: "80%",
  //   width: "15%",
  //   // backgroundColor: `${[theme.palette.secondary.main]}`,
  //   zIndex: -1,
  //   filter: "blur(55px)",
  //   rotate: "315deg",
  //   border: "5px solid #fff",
  //   background: `linear-gradient(248deg, ${[
  //     theme.palette.secondary.main,
  //   ]}, #1D0835, #1D0835)`,
  // },
  // "&::after": {
  //   // content: '""',
  //   position: "absolute",
  //   // top: "50%",
  //   left: "59%",
  //   // transform: "translate(-50%, -50%)",
  //   height: "80%",
  //   width: "15%",
  //   filter: "blur(55px)",
  //   zIndex: -1,
  //   rotate: "45deg",
  //   border: "5px solid #fff",
  //   // backgroundColor: `${[theme.palette.secondary.main]}`,
  //   background: `linear-gradient(248deg, ${[
  //     theme.palette.secondary.main,
  //   ]}, #1D0835, #1D0835)`,
  // },
}));
export const HeroContents = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    // width: "90%",
  },
}));
export const HeroImage = styled("div")(({ theme }) => ({
  // display: "flex",
  // justifyContent: "right",
  backgroundImage: `url('${heroImage}')`,
  backgroundPosition: "right",
  backgroundSize: "contain",
  width: "100%",
  height: "70vh",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
}));
export const Image = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  [theme.breakpoints.up("sm")]: {
    // width: "100%",
  },
}));

export const HeroText = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    width: "48%",
  },
}));
export const TextGradient = styled("div")(({ theme }) => ({
  width: "min-content",
  background: `linear-gradient(250deg, ${[theme.palette.primary.main]} 1%, ${[
    theme.palette.tertiary.main,
  ]} , ${[theme.palette.secondary.main]}) 10%`,
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontFamily: "Righteous-Regular",
}));

export const BottomArrow = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  bottom: "50px",
}));
export const Circles = styled("ul")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: -1,

  "& li": {
    position: "absolute",
    display: "block",
    listStyle: "none",
    width: "20px",
    height: "20px",
    background: "rgba(255, 255, 255, 0.2)",
    bottom: "-150px",
    animation: "animate 25s linear infinite",
  },

  "& li:nth-child(1)": {
    left: "25%",
    width: "80px",
    backgroundColor: `${[theme.palette.tertiary.main]}`,

    height: "80px",
    animationDelay: "0s",
  },
  "& li:nth-child(2)": {
    left: "10%",
    width: "20px",
    height: "20px",
    animationDelay: "0s",
    animationDuration: "12s",
    backgroundColor: `${[theme.palette.primary.main]}`,
  },
  "& li:nth-child(3)": {
    left: "70%",
    width: "20px",
    height: "20px",
    animationDelay: "4s",
  },
  "& li:nth-child(4)": {
    left: "40%",
    width: "60px",
    backgroundColor: `${[theme.palette.secondary.main]}`,
    height: "60px",
    animationDelay: "0s",
    animationDuration: "18s",
  },
  "& li:nth-child(5)": {
    left: "65%",
    width: "20px",
    height: "20px",
    animationDelay: "0s",
  },
  "& li:nth-child(6)": {
    left: "75%",
    width: "110px",
    height: "110px",
    backgroundColor: `${[theme.palette.tertiary.main]}`,
    animationDelay: "3s",
  },
  "& li:nth-child(7)": {
    left: "35%",
    width: "150px",
    height: "150px",
    animationDelay: "7s",
  },
  "& li:nth-child(8)": {
    left: "50%",
    width: "25px",
    backgroundColor: `${[theme.palette.secondary.main]}`,
    height: "25px",
    animationDelay: "15s",
    animationDuration: "45s",
  },
  "& li:nth-child(9)": {
    left: "20%",
    width: "15px",
    height: "15px",
    animationDelay: "2s",
    animationDuration: "35s",
  },
  "& li:nth-child(10)": {
    left: "85%",
    width: "150px",
    height: "150px",
    animationDelay: "0s",
    backgroundColor: `${[theme.palette.primary.main]}`,

    animationDuration: "11s",
  },
}));
