import { styled } from "@mui/material";
import { motion } from "framer-motion";
// import heroImage from "../../assets/images/hero/hand1.png";
import hbg from "../../assets/images/projects/b.jpg";

export const Wrapper = styled("section")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  position: "relative",
  minHeight: "450px",
  backgroundImage: `url('${hbg}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
  paddingBottom: "2rem",
  [theme.breakpoints.up("sm")]: {
    minHeight: "550px",
    alignItems: "center",
  },
}));
export const HeroContents = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
export const HeroImage = styled("div")(({ theme }) => ({
  // backgroundImage: `url('${heroImage}')`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    height: "400px",
  },
}));

export const HeroText = styled("div")(({ theme }) => ({
  width: "100%",
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    padding: "1rem",
    margin: "0 auto",
    width: "60%",
    // paddingLeft: "20rem",
  },
}));
// export const TextGradient = styled("div")(({ theme }) => ({
//   width: "min-content",
//   background: `linear-gradient(45deg, ${[theme.palette.secondary.main]} 10%, ${[
//     theme.palette.primary.main,
//   ]})`,
//   webkitBackgroundClip: "text",
//   webkitTextFillColor: "transparent",
//   backgroundClip: "text",
//   textFillColor: "transparent",
//   fontFamily: "Righteous-Regular",
// }));

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
    animation: "animate 35s linear infinite",
  },

  "& li:nth-child(1)": {
    left: "25%",
    width: "50px",
    height: "50px",
    animationDelay: "0s",
    // backgroundColor: `${[theme.palette.tertiary.main]}`,
  },
  "& li:nth-child(2)": {
    left: "10%",
    width: "20px",
    height: "20px",
    animationDelay: "0s",
    animationDuration: "12s",
    backgroundColor: `#46d6ec`,
  },
  "& li:nth-child(3)": {
    left: "70%",
    width: "20px",
    height: "20px",
    animationDelay: "4s",
  },
  "& li:nth-child(4)": {
    left: "40%",
    // backgroundColor: `#46d6ec`,
    width: "40px",
    height: "40px",
    backgroundColor: `${[theme.palette.secondary.main]}`,
    animationDelay: "0s",
    animationDuration: "18s",
  },
  "& li:nth-child(5)": {
    left: "65%",
    width: "20px",
    height: "20px",
    animationDelay: "0s",
    backgroundColor: `#46d6ec`,
  },
  "& li:nth-child(6)": {
    left: "75%",
    width: "10px",
    height: "10px",
    backgroundColor: `#46d6ec`,
    animationDelay: "3s",
  },
  "& li:nth-child(7)": {
    left: "35%",
    width: "23px",
    height: "23px",
    animationDelay: "7s",
    backgroundColor: `#46d6ec`,
  },
  "& li:nth-child(8)": {
    left: "50%",
    width: "25px",
    backgroundColor: `${[theme.palette.secondary.main]}`,
    height: "25px",
    animationDelay: "15s",
    // backgroundColor: `#46d6ec`,
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
    width: "10px",
    height: "10px",
    // backgroundColor: `#46d6ec`,
    animationDelay: "0s",
    backgroundColor: `${[theme.palette.primary.main]}`,
    animationDuration: "11s",
  },
}));
