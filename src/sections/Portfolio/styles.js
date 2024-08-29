import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
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
  paddingLeft: ".5rem",
  [theme.breakpoints.up("sm")]: {
    borderLeft: "1px solid #fff",
  },
}));
export const Number = styled(Typography)(({ theme }) => ({
  color: `${[theme.palette.primary.main]}`,
  fontWeight: 700,
  textAlign: "center",
}));

export const CardContainer = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  flexWrap: "wrap",
  [theme.breakpoints.up("sm")]: {
    // justifyContent: "space-between",
    // alignItems: "space-around",
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
}));

export const CardWrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "100%",
  backgroundColor: "#1c1c1c",
  padding: "2rem 1rem",
  transition: "ease all .3s",
  position: "relative",
  border: "2px solid grey",
  borderRadius: "10px",
  boxShadow: "4px 6px 10px #101010",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "20px",
    maxWidth: "360px",
  },
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
  // height: 0,
  display: "flex",
  flexDirection: "column",
  justifyCcontent: "center",
  alignItems: "center",
  // opacity: 0,
}));
