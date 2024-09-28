import { styled } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";

// import Button from "@mui/material/Button";

export const Wrapper = styled("header")(({ theme }) => ({
  width: "100%",
  zIndex: 999,
  backdropFilter: "blur(10px)",
  background: "inherit",
  transition: "all ease .3s",
}));
export const InnerWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  padding: "1rem 0",
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
  display: "none",
  [theme.breakpoints.up("sm")]: {
    // width: "80%",
    display: "block",
  },
  [theme.breakpoints.up("md")]: {
    // width: "60%",
  },
}));

export const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyle: "none",
  gap: 2,
  alignItems: "center",
  justifyContent: "center",
}));
