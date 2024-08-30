import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "40vh",
  position: "relative",
  background: "inherit",
  //   backdropFilter: "blur(10px)",
  "&::before": {
    // content: '""',
    position: "absolute",
    // top: "50%",
    right: "0",
    bottom: 0,
    // transform: "translate(-50%, -50%)",
    height: "20%",
    width: "15%",
    // backgroundColor: `${[theme.palette.secondary.main]}`,
    zIndex: -1,
    // filter: "blur(55px)",
    // rotate: "315deg",
    // border: "5px solid #fff",
    background: `linear-gradient(248deg, ${[
      theme.palette.primary.main,
    ]}, #1D0835, ${[theme.palette.secondary.main]})`,
  },
  "&::after": {
    // content: '""',
    position: "absolute",
    // top: "50%",
    left: "0",
    bottom: 0,
    // transform: "translate(-50%, -50%)",
    height: "10%",
    width: "15%",
    // filter: "blur(75px)",
    zIndex: -1,
    // rotate: "45deg",
    // border: "5px solid #fff",
    // backgroundColor: `${[theme.palette.secondary.main]}`,
    background: `linear-gradient(248deg, ${[
      theme.palette.tertiary.main,
    ]}, #1D0835, ${[theme.palette.primary.light]})`,
  },
}));
