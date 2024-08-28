import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { ABOUT, CONTACT, HERO, PORTFOLIO, SERVICES } from "../../utils/links";
import { Li } from "./styles";
import { Stack } from "@mui/material";
import {
  Mail01Icon,
  TelegramIcon,
  WhatsappBusinessIcon,
} from "hugeicons-react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={setMenuOpen}>
      <ul>
        <a href={HERO}>
          <Li component="li" variant="body2">
            WELCOME
          </Li>
        </a>
        <a href={ABOUT}>
          <Li component="li" variant="body2">
            ABOUT US
          </Li>
        </a>
        <a href={SERVICES}>
          <Li component="li" variant="body2">
            SERVICES
          </Li>
        </a>
        <a href={PORTFOLIO}>
          <Li component="li" variant="body2">
            PORTFOLIO
          </Li>
        </a>
        <a href={CONTACT}>
          <Li component="li" variant="body2">
            CONTACT
          </Li>
        </a>
        {/* <a> */}
        <Stack direction="row" spacing={2}>
          <a href="tel:+1234567890">
            <Li component="li" variant="body2">
              <Mail01Icon
                style={{
                  width: "20px",
                  // color: "#1c1c1c",
                }}
              />
            </Li>
          </a>
          <a href="https://t.me/">
            <Li component="li" variant="body2">
              <TelegramIcon
                style={{
                  width: "20px",
                  // color: "#1c1c1c",
                }}
              />
            </Li>
          </a>
          <a href="https://wa.me/+234567890">
            <Li component="li" variant="body2">
              <WhatsappBusinessIcon
                style={{
                  width: "20px",
                  // color: "#1c1c1c",
                }}
              />
            </Li>
          </a>
        </Stack>
        {/* </a> */}
      </ul>
    </Drawer>
  );
};

export default MobileMenu;
