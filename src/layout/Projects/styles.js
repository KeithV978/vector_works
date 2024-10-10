import { styled } from "@mui/material";

export const Wrapper = styled("main")(({ theme }) => ({
  width: "100%",
  minHeight: "600px",
  // justifyContent: "space-between",
  paddingTop: "4rem",
  [theme.breakpoints.up("sm")]: {
    //   padding: "3rem 0",
    //   flexDirection: "row",
  },
}));
export const HeroWrapper = styled("div")(({ theme, hbg }) => ({
  backgroundImage: `url('${hbg}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  paddingBottom: "4rem",
  [theme.breakpoints.up("sm")]: {
    height: "400px",
  },
}));
