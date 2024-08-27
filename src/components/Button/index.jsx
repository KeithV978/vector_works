import React from "react";
import Btn from "@mui/material/Button";
import { styled, Typography } from "@mui/material";

const Wrapper = styled(Btn)(({ theme }) => ({
  minWidth: "150px",
  minHeight: "2rem",
  borderRadius: "20px",
  boxShadow: "8px 7px 17px 0px #1e1e1e69",
  transition: "all ease .3s",
  color: "#1c1c1c",
  backgroundColor: `#fff`,
  display: "flex",
  flexDirection: "column",
  overflowY: "hidden",
  // padding: "1rem 0 0",
  position: "relative",
  "& .before": {
    position: "absolute",
    top: 0,
    transition: "all ease .3s",
  },
  "&:hover .before": {
    marginTop: "-2rem",
  },

  [theme.breakpoints.up("sm")]: {
    margin: ".5rem 0",
    width: "200px",
  },
}));
export const Button = ({ children }) => {
  return (
    <Wrapper variant="contained">
      <span className="before">
        <Typography
          fontWeight={600}
          variant="body1"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", height: "2rem" }}
        >
          {children}
        </Typography>
        <Typography
          fontWeight={600}
          variant="body1"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", height: "2rem" }}
        >
          {children}
        </Typography>
      </span>
    </Wrapper>
  );
};
