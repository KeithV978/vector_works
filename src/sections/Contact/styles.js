import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Wrapper = styled("section")(({ theme }) => ({
  // minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  justifyContent: "center",
  // backgroundColor: `${[theme.palette.secondary.main]}`,
  // border: "5px solid #fff",
  // transform: "translate(-50%, -50%)",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "end",

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
  minWidth: "320px",
  borderRadius: "20px",
  float: "right",
  padding: "1rem",
  backgroundImage: `linear-gradient(272deg, #AD1457, #8E24AA)`,
  [theme.breakpoints.up("sm")]: {
    width: "380px",
    backgroundImage: "none",
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
