import { styled } from "@mui/material";
import image from "../../assets/images/admin/undraw_dashboard.svg";

export const Wrapper = styled("section")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  paddingTop: "4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url('${image}')`,
    backgroundPosition: "left",
  },
}));

export const FormWrapper = styled("div")(({ theme }) => ({
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 7,
  //   [theme.breakpoints.up("sm")]: {
  //     padding: "2rem",
  //   },
}));
export const ErrorMessage = styled("p")(({ theme }) => ({
  color: "red",
  fontSize: ".9rem",
}));
