import { styled } from "@mui/material";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export const Wrapper = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    // top: "50%",
    right: "59%",
    // transform: "translate(-50%, -50%)",
    height: "80%",
    width: "15%",
    // backgroundColor: `${[theme.palette.secondary.main]}`,
    zIndex: -1,
    filter: "blur(55px)",
    rotate: "315deg",
    border: "5px solid #fff",
    background: `linear-gradient(248deg, ${[
      theme.palette.secondary.main,
    ]}, #1D0835, #1D0835)`,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    // top: "50%",
    left: "59%",
    // transform: "translate(-50%, -50%)",
    height: "80%",
    width: "15%",
    filter: "blur(55px)",
    zIndex: -1,
    rotate: "45deg",
    border: "5px solid #fff",
    // backgroundColor: `${[theme.palette.secondary.main]}`,
    background: `linear-gradient(248deg, ${[
      theme.palette.secondary.main,
    ]}, #1D0835, #1D0835)`,
  },
}));
export const HeroContents = styled("div")(({ theme }) => ({
  width: "80%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    width: "90%",
  },
}));
export const HeroImage = styled("div")(({ theme }) => ({
  width: "230px",
  display: "flex",
  justifyContent: "right",
}));
export const Image = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
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
  background: `linear-gradient(250deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.tertiary.main,
  ]} , ${[theme.palette.secondary.main]}) 10%`,
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontFamily: "Righteous-Regular",
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  width: "180px",
  //   padding: "auto 3rem",
  //   display: "flex",
  // background: `linear-gradient(240deg, ${[
  //   theme.palette.primary.main,
  // ]} 0.001%, ${[theme.palette.secondary.main]})`,
  background: "#fff",
  color: "#1c1c1c",
  borderRadius: "20px",
  boxShadow: "8px 7px 17px 0px #1e1e1e69",
  transition: "all ease .3s",
  border: "1px solid #fff",
  fontWeight: 600,
  "&:hover": {
    boxShadow: "none",
    color: "#fff",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "1rem",
    width: "200px",
  },
}));

export const BottomArrow = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  bottom: "50px",
}));
