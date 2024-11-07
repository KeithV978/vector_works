import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
// import { ABOUT, CONTACT, HERO, PORTFOLIO, SERVICES } from "../../utils/links";
// import { Li } from "./styles";
// import { Stack } from "@mui/material";
// import {
//   Mail01Icon,
//   TelegramIcon,
//   WhatsappBusinessIcon,
// } from "hugeicons-react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <Drawer
      anchor="left"
      open={menuOpen}
      onClose={setMenuOpen}
      sx={{
        width: "70%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "70%",
        },
      }}
    >
      <Box
        role="presentation"
        sx={{ backgroundColor: "#000", height: "100%", width: "100%" }}
      >
        <ul
          style={{
            width: "100%",
            color: "#ccc",
            padding: "1rem",
            listStyle: "none",
          }}
        >
          <li>Role</li>
        </ul>
        role
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
