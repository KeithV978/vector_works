import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import backgroundCover from "../../assets/images/contact/backgroundCover.jpg";
// import img from "../../assets/images/services/e.png";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "600px",
  width: "100%",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: ".5rem",
  [theme.breakpoints.up("sm")]: {
    marginTop: "100px",
    backgroundImage: `url('${backgroundCover}')`,
    backgroundSize: "100%",
    // backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    flexDirection: "row",
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.65)",
  },
}));
// #ad1457

export const Form = styled(Box)(({ theme }) => ({
  // border: "1px solid red",
  width: "100%",
  borderRadius: "20px",
  float: "right",
  padding: "1rem",
  [theme.breakpoints.up("sm")]: {
    width: "400px",
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
  // marginRight: "2rem",
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
  // marginRight: "2rem",
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
  width: "100%",
  padding: "1rem",
}));
export const Image = styled("img")(({ theme }) => ({
  width: "80%",
  rotate: "45deg",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
    width: "280px",
    // height: "400px",
  },
}));
