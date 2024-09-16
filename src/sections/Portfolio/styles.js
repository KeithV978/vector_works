import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
  [theme.breakpoints.up("sm")]: {},
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
  position: "relative",
  minHeight: "500px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  padding: "1rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    margin: "3rem auto",
    // minHeight: "700px",
  },
}));

export const ImageWrapper = styled("div")(({ theme, src }) => ({
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  backgroundColor: "#1c1c1c",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    width: "100px",
    height: "100px",
  },
}));

export const Image = styled("div")(({ theme, src }) => ({
  width: "55px",
  height: "55px",
  backgroundImage: `url('${src}')`,
  backgroundSize: "contain",
  backgroundPosition: "center",
}));
export const CardContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "450px",
  perspective: "800px",
  "&:hover > .card": {
    cursor: "pointer",
    transform: "rotateY(180deg)",
  },
  [theme.breakpoints.up("sm")]: {
    // maxWidth: "300px",
  },
}));
export const CardWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  transition: "all ease 1500ms",
  transformStyle: "preserve-3d",
}));

const Faces = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "2rem",
  boxShadow: "0 0 5px 2px rgba(50, 50, 50, .25)",
  position: "absolute",
  backfaceVisibility: "hidden",
  // backgroundColor: "#ccc",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Front = styled(Faces)(({ theme, bg }) => ({
  backgroundImage: `url('${bg}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#ccc",
  border: "1px solid #2e2e2e",
  overflow: "hidden",
  // backgroundColor: "#212121",
  // position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    zIndex: 2,
    // filter: "blur(5px)",
    // backgroundImage: "linear-gradient(45deg, #ddd, #ccc)",
    background: `linear-gradient(248deg, #09192c47, #290d198a, #01020199)`,
  },
}));
export const Back = styled(Faces)(({ theme }) => ({
  backgroundColor: "#1c1c1c",
  transform: "rotateY(180deg)",
  color: "#ccc",
  padding: "1rem",
}));
