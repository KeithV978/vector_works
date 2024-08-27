import React from "react";
import Btn from "@mui/material/Button";
import { styled } from "@mui/material";

const Wrapper = styled(Btn)(({ theme }) => ({
  minWidth: "150px",
  borderRadius: "20px",
  boxShadow: "8px 7px 17px 0px #1e1e1e69",
  transition: "all ease .3s",
  color: "#1c1c1c",
  backgroundColor: `#fff`,
  [theme.breakpoints.up("sm")]: {
    margin: ".5rem 0",
    width: "200px",
  },
  //   padding: "auto 3rem",
  //   display: "flex",

  // color: "#fff",
  // display: "flex",
  // background: `linear-gradient(148deg, ${[theme.palette.secondary.main]}, ${[
  //   theme.palette.tertiary.main,
  // ]}, ${[theme.palette.primary.main]})`,

  // "&:hover": {
  // background: "#fff",
  //   boxShadow: "none",
  //   width: "190px",

  //   background: ` ${[theme.palette.primary.main]}`,
  // },
}));
export const Button = ({ children }) => {
  return <Wrapper variant="contained">{children}</Wrapper>;
};
