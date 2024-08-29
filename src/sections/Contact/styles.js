import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  //   display: "flex",
  //   //   flexDirection: "column",
  //   justifyContent: "end",
}));
export const Form = styled(Box)(({ theme }) => ({
  width: "380px",
  borderRadius: "20px",
  float: "right",
  //   border: "1px solid grey",
  //   backgroundColor: "#fcfcfc",
}));
export const InputWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 3,
  alignItems: "center",

  margin: "1rem auto",
}));

export const Input = styled("input")(({ theme }) => ({
  border: "2px solid grey",
  borderRadius: "20px",
  outline: "none",
  backgroundColor: "transparent",
  padding: ".5rem 1rem",
  textAlign: "center",
  color: "#fff",
  width: "100%",
}));
export const Textarea = styled("textarea")(({ theme }) => ({
  border: "2px solid grey",
  borderRadius: "20px",
  outline: "none",
  backgroundColor: "transparent",
  padding: ".5rem 1rem",
  textAlign: "center",
  color: "#fff",
  width: "100%",
}));
