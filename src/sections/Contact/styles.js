import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import backgroundCover from "../../assets/images/contact/backgroundCover.jpg";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "600px",
  width: "100%",
  marginTop: "100px",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",

  // borderTop: "2px solid #fff",
  // backgroundColor: `${[theme.palette.secondary.main]}`,
  // transform: "translate(-50%, -50%)",

  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url('${backgroundCover}')`,
    backgroundSize: "100%",
    // backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    flexDirection: "row",
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.65)",

    "&::before": {
      // content: '""',
      position: "absolute",
      zIndex: -1,
      rotate: "115deg",
      borderRadius: "70px",
      boxShadow: "2px 4px 12px #000",
      top: "-10%",
      right: "-12%",
      height: "85%",
      width: "55%",
      // backgroundImage:
      // border: "2px solid #8E24AA",
      // borderImage: `linear-gradient(272deg, #AD1457, #8E24AA)`,
      // borderWidth: "5px",
      // borderStyle: "solid",
    },
  },
}));
// #ad1457

export const Form = styled(Box)(({ theme }) => ({
  // border: "1px solid red",
  width: "100%",
  borderRadius: "20px",
  float: "right",
  padding: "1rem",
  // backgroundImage: `linear-gradient(272deg, #AD1457, #8E24AA)`,
  // backgroundColor: "#2b2b2b",
  [theme.breakpoints.up("sm")]: {
    width: "380px",
    backgroundColor: "none",
    padding: "1rem",
  },
}));
export const InputWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 3,
  alignItems: "center",

  margin: "1.5rem auto",
}));

export const Input = styled("input")(({ theme }) => ({
  border: "3px solid #fff",
  borderRadius: "20px",
  outline: "none",
  backgroundColor: "#fff",
  padding: ".5rem 1rem",
  // textAlign: "center",
  marginRight: "2rem",
  color: "#1c1c1c",
  width: "100%",
  fontSize: "1.1rem",
  transition: "ease all .3s",
  "&::placeholder": {
    color: "#1c1c1c",
  },
  "&:focus": {
    backgroundColor: "transparent",
    color: "#fff",
  },
}));
export const Textarea = styled("textarea")(({ theme }) => ({
  border: "3px solid #fff",
  borderRadius: "20px",
  outline: "none",
  backgroundColor: "#fff",
  padding: ".5rem 1rem",
  marginRight: "2rem",
  // textAlign: "center",
  color: "#1c1c1c",
  width: "100%",
  fontSize: "1.1rem",
  transition: "ease all .3s",
  "&::placeholder": {
    color: "#1c1c1c",
  },
  "&:focus": {
    backgroundColor: "transparent",
    color: "#fff",
  },
}));
export const PlanSectionWrapper = styled("div")(({ theme }) => ({
  width: "40%",
}));
export const Image = styled("img")(({ theme }) => ({
  width: "80%",
  rotate: "45deg",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
    width: "60%",
    // height: "400px",
  },
}));
