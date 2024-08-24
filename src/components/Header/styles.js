import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import Button from "@mui/material/Button";

export const Wrapper = styled("section")(({ theme }) => ({
  width: "100%",
  padding: "1rem 0",
  zIndex: 1000,
  backdropFilter: "blur(10px)",
  background: "inherit",
  transition: "all ease .3s",
  [theme.breakpoints.up("sm")]: {},
}));
export const InnerWrapper = styled(Container)(({ theme }) => ({
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
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
}));
export const Ul = styled("ul")(({ theme }) => ({
  margin: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.up("sm")]: {},
}));
export const Li = styled(Typography)(({ theme }) => ({
  transition: "all ease .3s",
  textTransform: "uppercase",
  "&:hover": {
    color: `${[theme.palette.tertiary.main]}`,
  },
  "&:active": {
    color: `${[theme.palette.tertiary.main]}`,
  },
}));
