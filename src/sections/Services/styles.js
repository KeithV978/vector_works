import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import bg from "../../assets/images/services/d.png";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "700px",
  backgroundSize: "30%",
  backgroundRepeat: "repeat",
  backgroundPosition: "center",
  paddingTop: "50px",
}));
export const Cards = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  margin: "2rem auto",
}));
export const Card = styled("div")(({ theme }) => ({
  backgroundColor: "#212121",
  border: "1px solid #4b4b4b",
  maxWidth: "380px",
  borderRadius: "10px",
  padding: "1.5rem",
  backgroundImage: `url(${bg})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  // backgroundPositionX: "-70px",
  // backgroundPositionY: "70px",
  backgroundPosition: "center",
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.76)",
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
    // borderRadius: "50%",
    top: 0,
    left: 0,
    backgroundColor: "#9417d51c",
    filter: "blur(2px)",
  },
}));
export const CardImage = styled("img")(() => ({
  width: "40px",
}));
