import { styled } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import bg from "../../assets/images/services/background.png";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "700px",
  backgroundImage: `url('${bg}')`,
  backgroundSize: "30%",
  backgroundRepeat: "repeat",
  backgroundPosition: "center",
  padding: "1rem",
  borderRadius: "30px",
}));

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
    // "&::before": {
    // content: '""',
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // height: "40%",
    // width: "30%",
    // background: `linear-gradient(248deg, #46d6ec, #25322F)`,
    // zIndex: -1,
    // filter: "blur(55px)",
    // border: "5px solid #fff",
    // backgroundColor: `${[theme.palette.secondary.main]}`,
    // },
  },
}));

export const ImageWrapper = styled("div")(({ theme, src }) => ({
  width: "70px",
  height: "70px",
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
  perspective: "800px",
  "&:hover > .card": {
    cursor: "pointer",
    transform: "rotateY(180deg)",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "300px",
    height: "500px",
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
  backgroundColor: "#ccc",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Front = styled(Faces)(({ theme }) => ({
  backgroundImage: "linear-gradient(45deg, #ddd, #ccc)",
  // backgroundColor: "#ccc",
}));
export const Back = styled(Faces)(({ theme }) => ({
  backgroundColor: "#1c1c1c",
  transform: "rotateY(180deg)",
}));
