import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
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
  width: "0%",
  // position: "relative",
  [theme.breakpoints.up("sm")]: {
    width: "80%",
  },
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));
export const Ul = styled("ul")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    margin: 0,
    listStyle: "none",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    flexDirection: "row",
  },
}));
export const Li = styled(Typography)(({ theme }) => ({
  listStyle: "none",
  transition: "all ease .3s",
  textTransform: "uppercase",
  // fontWeight: 600,
  letterSpacing: ".1rem",
  "&:hover": {
    color: `${[theme.palette.tertiary.main]}`,
  },
  "&:active": {
    color: `${[theme.palette.tertiary.main]}`,
  },
  [theme.breakpoints.up("sm")]: {
    position: "relative",
    flexDirection: "row",
  },
}));
