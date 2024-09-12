import * as React from "react";
import Drawer from "@mui/material/Drawer";
// import { ABOUT, CONTACT, HERO, PORTFOLIO, SERVICES } from "../../utils/links";
// import { Li } from "./styles";
// import { Stack } from "@mui/material";
// import {
//   Mail01Icon,
//   TelegramIcon,
//   WhatsappBusinessIcon,
// } from "hugeicons-react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return <Drawer anchor="left" open={menuOpen} onClose={setMenuOpen}></Drawer>;
};

export default MobileMenu;
