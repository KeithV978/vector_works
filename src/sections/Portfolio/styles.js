import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  // minHeight: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const NumbersWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  // minHeight: "400px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "3rem 0",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    // minHeight: "300px",
  },
}));
export const NumberCase = styled(Box)(({ theme }) => ({
  minWidth: "fit-content",
  textAlign: "center",
  paddingLeft: ".5rem",
  [theme.breakpoints.up("sm")]: {
    // borderLeft: "3px solid #fff",
  },
}));
export const Number = styled(Typography)(({ theme }) => ({
  color: `${[theme.palette.primary.main]}`,
  fontWeight: 700,
  textAlign: "center",
}));

export const GradNumber = styled("div")(({ theme }) => ({
  background: `linear-gradient(50deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.secondary.main,
  ]}) 10%`,
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
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
  gap: "1rem",
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
  position: "relative",
  // backgroundColor: "#212121",
  border: "1px solid #2e2e2e",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
    // filter: "blur(5px)",
    // backgroundImage: "linear-gradient(45deg, #ddd, #ccc)",
    background: `linear-gradient(248deg, ${[
      theme.palette.secondary.main,
    ]}, #1D0835, #1D0835)`,
  },
}));
export const Back = styled(Faces)(({ theme }) => ({
  backgroundColor: "#1c1c1c",
  transform: "rotateY(180deg)",
  color: "#ccc",
  padding: "1rem",
}));
