import React from "react";
import Btn from "@mui/material/Button";
import { styled } from "@mui/material";

const Wrapper = styled(Btn)(({ theme }) => ({
  minWidth: "150px",
  //   padding: "auto 3rem",
  //   display: "flex",
  background: ` ${[theme.palette.primary.main]}`,

  // color: "#fff",
  borderRadius: "20px",
  boxShadow: "8px 7px 17px 0px #1e1e1e69",
  transition: "all ease .3s",
  [theme.breakpoints.up("sm")]: {
    margin: ".5rem 0",
    width: "200px",
  },
  // display: "flex",
  "&:hover": {
    // background: "#fff",
    boxShadow: "none",
    width: "190px",

    background: `linear-gradient(148deg, ${[theme.palette.secondary.main]}, ${[
      theme.palette.tertiary.main,
    ]}, ${[theme.palette.primary.main]})`,
    color: "#fff",
  },
}));
export const Button = ({ children }) => {
  return <Wrapper variant="contained">{children}</Wrapper>;
};
