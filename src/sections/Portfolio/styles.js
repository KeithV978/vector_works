import { styled } from "@mui/material";
import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const NumbersWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1rem 0",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    // minHeight: "40vh",
  },
}));
export const NumberCase = styled(Box)(({ theme }) => ({
  minWidth: "fit-content",
  textAlign: "center",
  borderLeft: "1px solid #fff",
  paddingLeft: ".5rem",
}));
export const Number = styled(Typography)(({ theme }) => ({
  color: `${[theme.palette.primary.main]}`,
  fontWeight: 700,
  textAlign: "center",
}));

export const PortWrapper = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "space-between",
    alignItems: "space-around",
    flexDirection: "row",
  },
}));
export const GradNumber = styled("div")(({ theme }) => ({
  background: `linear-gradient(50deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.secondary.main,
  ]}) 10%`,
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontFamily: "Righteous-Regular",
}));

export const CardWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "100%",
  // height: "20vh",
  backgroundColor: "#1c1c1c",
  padding: "1rem",
  transition: "ease all .3s",
  position: "relative",
  // margin: "1rem auto",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "15px",
    // border: "1px solid grey",
    maxWidth: "360px",
  },
  boxShadow: "4px 6px 10px #101010",
}));
export const CardImage = styled("div")(({ theme }) => ({
  width: "90%",
  boxShadow: "4px 4px 10px #101010",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  padding: "1rem",
  margin: "-2rem auto 0",
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  zIndex: 10,
  backgroundColor: "#1c1c1c",
  transition: "ease all .3s",
}));

export const CardText = styled("div")(({ theme }) => ({
  transition: "ease all .3s",
  // display: "none",
  // opacity: 0,
}));
