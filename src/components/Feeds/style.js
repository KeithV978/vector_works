import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {},
}));

export const Symbol = styled(Typography)(({ theme }) => ({
  fontSize: ".8rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
}));
export const Price = styled(Typography)(({ theme }) => ({
  fontSize: ".6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: ".8rem",
  },
}));
export const Percentage = styled(Typography)(({ theme, fontcolor }) => ({
  fontSize: ".6rem",
  color: fontcolor,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.up("sm")]: {
    fontSize: ".7rem",
  },
}));

export const Contain = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {},
}));
// export const Bottom = styled("div")(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'row',
//   [theme.breakpoints.up("sm")]: {

//   },
// }));
