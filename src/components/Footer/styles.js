import { styled } from "@mui/material";
import logoW from "../../assets/images/logo/logoWhite.png";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "400px",
  position: "relative",
  // backgroundColor: "#212121",
  borderTop: "1px solid #414141",
  marginTop: "5rem",
}));
export const Logo = styled("div")(({ theme }) => ({
  backgroundImage: `url('${logoW}')`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  width: "20px",
  height: "20px",
  margin: "1rem auto",
  // backgroundRepeat: 'no-repeat',
}));
