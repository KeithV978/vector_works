import { styled } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

export const Wrapper = styled("section")(({ theme }) => ({
  position: "relative",
  height: "80vh",
  [theme.breakpoints.up("sm")]: {
    margin: "3rem auto",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "60%",
      width: "40%",
      background: `linear-gradient(248deg, #25322F, #25322F)`,
      zIndex: -1,
      filter: "blur(55px)",
      // border: "5px solid #fff",
      // backgroundColor: `${[theme.palette.secondary.main]}`,
    },
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "45px",
  margin: ".5rem 1rem",
}));
