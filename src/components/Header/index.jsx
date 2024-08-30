import * as React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT,
  CONTACT,
  HERO,
  HOME,
  PORTFOLIO,
  SERVICES,
} from "../../utils/links";
import {
  InnerWrapper,
  Li,
  Logo,
  LogoWrapper,
  Nav,
  Ul,
  Wrapper,
} from "./styles";
import {
  Mail01Icon,
  MenuCircleIcon,
  TelegramIcon,
  WhatsappBusinessIcon,
} from "hugeicons-react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/logo/logo.png";
import { IconButton } from "@mui/material";
import Drawer from "./Drawer";
// import { useTheme } from "@mui/material";

const Header = React.memo(() => {
  const [scrollHeight, setScrollHeight] = React.useState(window.scrollY);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleScroll = () => setScrollHeight(window.scrollY);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  // const theme = useTheme();

  return (
    <Wrapper
      sx={{ position: scrollHeight > 180 ? "sticky" : "absolute", top: 0 }}
    >
      <InnerWrapper>
        <Link to={HOME}>
          <Stack direction="row">
            <LogoWrapper>
              <Logo src={logo} alt="vector logo" />
            </LogoWrapper>
            <Typography variant="h6">ectorWorks</Typography>
          </Stack>
        </Link>
        <Nav>
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              display: { sm: "none", xs: "block" },
              float: "left",
              transition: "ease all .3s",
              transform: menuOpen ? "rotate(-45deg)" : "",
            }}
          >
            <MenuCircleIcon color="#fcfcfc" />
          </IconButton>
          <Ul>
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
          </Ul>
        </Nav>
      </InnerWrapper>
      <Drawer menuOpen={menuOpen} setMenuOpen={handleMenuOpen} />
    </Wrapper>
  );
});

export default Header;
