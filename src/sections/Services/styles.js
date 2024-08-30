import { styled } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

export const Wrapper = styled("section")(({ theme }) => ({
  position: "relative",
  // minHeight: "100vh",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    margin: "3rem auto",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "40%",
      width: "30%",
      background: `linear-gradient(248deg, #46d6ec, #25322F)`,
      zIndex: -1,
      filter: "blur(55px)",
      border: "5px solid #fff",
      // backgroundColor: `${[theme.palette.secondary.main]}`,
    },
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "55px",
  margin: ".5rem 0",
}));
