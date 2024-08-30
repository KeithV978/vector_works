import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  width: "100%",
  // minHeight: "80vh",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
export const ImageWrapper = styled("div")(({ theme }) => ({
  minWidth: "100%",
  position: "relative",

  [theme.breakpoints.up("sm")]: {
    minWidth: "480px",
    // marginLeft: "2rem",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "30%",
    width: "65%",
    filter: "blur(55px)",
    zIndex: -1,
    // rotate: "45deg",
    border: "5px solid #fff",
    // backgroundColor: `${[theme.palette.secondary.main]}`,
    background: `linear-gradient(48deg, ${[theme.palette.secondary.main]}, ${[
      theme.palette.tertiary.main,
    ]}, #1D0835)`,
  },
}));

export const Colorbar = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: "250px",
  height: "15px",
  // background: `linear-gradient(348deg, ${[theme.palette.secondary.main]}, ${[
  //   theme.palette.tertiary.main,
  // ]}, ${[theme.palette.primary.main]})`,
  margin: "auto .5rem",
  borderRadius: "20px",
  // backgroundColor: `${[theme.palette.secondary.light]}`,
  background: `linear-gradient(50deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.secondary.main,
  ]}) 10%`,
}));

export const TitleText = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "max-content",
  background: `linear-gradient(50deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.secondary.main,
  ]}) 10%`,
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
}));
