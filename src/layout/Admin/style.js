import { styled } from "@mui/material";

export const Header = styled("header")(({ theme }) => ({
  // minHeight: "400px",
  position: "sticky",
  width: "100%",
  padding: "2rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  zIndex: 999,
  backdropFilter: "blur(10px)",
  background: "inherit",
}));
export const Body = styled("main")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const HeroWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "2rem 0",
  gap: 15,
  [theme.breakpoints.up("sm")]: {},
}));

export const Form = styled("form")(({ theme }) => ({}));
