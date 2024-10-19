import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

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
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.6)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  paddingBottom: "2rem",
  paddingTop: "4rem",
  [theme.breakpoints.up("sm")]: {
    // height: "300px",
  },
}));
export const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "center",
  marginTop: "2rem",
  [theme.breakpoints.up("sm")]: {
    gap: "1.5rem",
    marginTop: "4rem",
    flexDirection: "row",
  },
}));
export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  width: "100%",
  minHeight: "400px",
  border: "1px solid #292929",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "360px",
    minHeight: "400px",
  },
}));

export const CardImg = styled("div")(({ theme, src }) => ({
  backgroundImage: `url('${src}')`,
  width: "100%",
  borderRadius: "25px",
  height: "50%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.2)",
}));
export const ProjectLogo = styled("div")(({ theme, img }) => ({
  backgroundImage: `url('${img}')`,
  width: "120px",
  height: "120px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  margin: "0 auto",
  borderRadius: "50%",
  border: "1px solid #ccc",
  backgroundColor: "#141414",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  marginBottom: "-10px",
  [theme.breakpoints.up("sm")]: {
    width: "120px",
    height: "120px",
  },
}));
