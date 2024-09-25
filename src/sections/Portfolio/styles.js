import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundCover from "../../assets/images/portfolio/card_bg.png";
const card_radius = "1rem";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  // minHeight: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // alignItems: "center",
  padding: "3rem 2rem",
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
    flexDirection: "row",
  },
}));

export const NumbersWrapper = styled("div")(({ theme }) => ({
  width: "100%",
}));
export const GradientNumber = styled("div")(({ gradient }) => ({
  width: "fit-content",
  background: gradient,
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
}));
export const Number = styled(Typography)(({ theme }) => ({
  // color: `${[theme.palette.primary.main]}`,
  width: "fit-content",
  fontWeight: 700,
  textAlign: "center",
}));
export const BottomText = styled(Typography)(({ theme }) => ({
  // color: `${[theme.palette.primary.main]}`,
  // fontWeight: 600,
}));

// Flipping Card Operation.
export const Body = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "1rem",
  flexWrap: "wrap",
  // whiteSpace: "nowrap",
  // position: "relative",
  [theme.breakpoints.up("sm")]: {
    // minHeight: "500px",
    margin: "3rem auto",
  },
}));

export const Card = styled("div")(({ theme }) => ({
  // width: "100%",
  // minWidth: "250px",
  width: "100%",
  perspective: "800px",
  "&:hover": {
    cursor: "pointer",
    transform: "rotateY(180deg)",
  },
  height: "100%",
  position: "relative",
  transition: "all ease 1000ms",
  transformStyle: "preserve-3d",
  [theme.breakpoints.up("sm")]: {
    height: "250px",
  },
}));

const Faces = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: card_radius,
  // boxShadow: "0 0 5px 2px rgba(50, 50, 50, .25)",
  position: "absolute",
  backfaceVisibility: "hidden",
  // backgroundColor: "#ccc",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Front = styled(Faces)(({ theme, bg }) => ({
  backgroundImage: `url('${backgroundCover}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#ccc",
  overflow: "hidden",
  // position: "relative",
  // "&:hover": {
  // },
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.3)",
  // borderBottom: `2px solid #ccc`,
  // backgroundColor: "#cccccc14",
}));
export const Back = styled(Faces)(({ theme, bg }) => ({
  backgroundColor: "#1c1c1c",
  transform: "rotateY(180deg)",
  color: "#ccc",
  padding: "1rem",
  overflowWrap: "break-word",
  wordBreak: "break-word",
  border: `1px solid #ccc`,
  // width: "min-content",
  // inlineSize: "min-content",
  [theme.breakpoints.up("sm")]: {
    padding: "2rem",
  },
}));
export const ImageWrapper = styled("div")(({ theme, src }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "3px solid #ccc",
  background: "#1c1c1c",
  // backdropFilter: "blur(100px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
  [theme.breakpoints.up("sm")]: {
    width: "7rem",
    height: "7rem",
  },
}));

export const Image = styled("div")(({ theme, src }) => ({
  width: "70%",
  height: "70%",
  backgroundImage: `url('${src}')`,
  backgroundSize: "contain",
  backgroundPosition: "center",
}));
export const CarouselWrapper = styled(Box)(({ theme, src }) => ({
  width: "100%",
  // minHeight: "200px",
  margin: "auto",
  border: "1px solid #1c1c1c",
  borderRadius: card_radius,
  // backgroundColor: "#1750d529",
  backgroundColor: "#cccccc14",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    height: "300px",
  },
}));
export const CarouselTexts = styled(Box)(({ theme }) => ({
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  width: "100%",
  // height: "100vh",
  // border: "1px solid red",
}));
