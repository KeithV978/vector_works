import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import bg from "../../assets/images/services/background.png";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "700px",
  // backgroundImage: `url('${bg}')`,
  backgroundSize: "30%",
  backgroundRepeat: "repeat",
  backgroundPosition: "center",
  padding: "1rem",
  borderRadius: "30px",
}));
export const Cards = styled("div")(({ theme }) => ({
  // width: "100%",
  display: "flex",
  flexWrap: "wrap",
  // justifyContent: "space-evenly",
  gap: "1rem",
  margin: "2rem auto",
  [theme.breakpoints.up("sm")]: {
    // width: "fit-content",
  },
}));
export const Card = styled("div")(({ theme }) => ({
  backgroundColor: "#212121",
  border: "1px solid #4b4b4b",
  maxWidth: "380px",
  borderRadius: "10px",
  padding: "1.5rem",
}));
export const CardTitle = styled(Typography)(({ theme }) => ({
  // color: `${[theme.palette.primary.main]}`,
  color: "#fff",
  marginBottom: ".5rem",
}));
export const CardText = styled(Typography)(({ theme }) => ({
  color: "#ccc",
}));
export const CardImageWrapper = styled("div")(({ theme }) => ({
  borderRadius: "3px",
  padding: ".5rem",
  width: "fit-content",
  marginBottom: "2rem",
  position: "relative",
  "&:after": {
    content: "''",
    height: "100%",
    width: "100%",
    position: "absolute",
    // zIndex: -1,
    top: 0,
    left: 0,
    backgroundColor: "#1750d529",
    filter: "blur(5px)",
  },
}));
export const CardImage = styled("img")(({ theme }) => ({
  width: "30px",
}));
