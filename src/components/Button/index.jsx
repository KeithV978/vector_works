import React from "react";
import Btn from "@mui/material/Button";
import { styled, Typography } from "@mui/material";

const Wrapper = styled(Btn)(({ theme }) => ({
  minWidth: "150px",
  minHeight: "2.6rem",
  borderRadius: "20px",
  boxShadow: "8px 7px 17px 0px #1e1e1e69",
  transition: "all ease .3s",
  color: "#fff",
  backgroundColor: `${[theme.palette.primary.main]}`,
  display: "flex",
  flexDirection: "column",
  overflowY: "hidden",
  // padding: "1rem 0 0",
  marginTop: "1.8rem",
  position: "relative",
  "& .action": {
    position: "absolute",
    top: 0,
    transition: "all ease .3s",
  },
  "&:hover .action": {
    marginTop: "-2.6rem",
  },
  "&:hover .before": {
    opacity: 0,
  },
  "&:hover .after": {
    opacity: 1,
  },
  "& .after": {
    opacity: 0,
  },

  margin: "1rem 0",
  [theme.breakpoints.up("sm")]: {
    margin: "1.5rem 0",
    width: "200px",
  },
}));
export const Button = ({ children, bgColor }) => {
  return (
    <Wrapper variant="contained" sx={{ backgroundColor: bgColor }}>
      <span className="action">
        <Typography
          fontWeight={600}
          variant="body1"
          color="inherit"
          className="before"
          sx={{ display: "flex", alignItems: "center", height: "2.6rem" }}
        >
          {children}
        </Typography>
        <Typography
          fontWeight={600}
          variant="body1"
          color="inherit"
          className="after"
          sx={{ display: "flex", alignItems: "center", height: "2.6rem" }}
        >
          {children}
        </Typography>
      </span>
    </Wrapper>
  );
};
