import { styled } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";

// import Button from "@mui/material/Button";

export const Wrapper = styled("header")(({ theme }) => ({
  width: "100%",
  padding: "1rem 0",
  zIndex: 999,
  backdropFilter: "blur(10px)",
  background: "inherit",
  transition: "all ease .3s",
  [theme.breakpoints.up("sm")]: {},
}));
export const InnerWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.up("sm")]: {},
}));
export const LogoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  width: "30px",
}));
export const Logo = styled("img")(({ theme }) => ({
  width: "100%",
  // [theme.breakpoints.up("sm")]: {},
}));
export const Nav = styled("nav")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    // width: "80%",
  },
  [theme.breakpoints.up("md")]: {
    // width: "60%",
  },
}));

export const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyle: "none",
  gap: 5,
  alignItems: "center",
  justifyContent: "center",
}));
