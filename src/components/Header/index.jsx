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
  Call02Icon,
  TelegramIcon,
  WhatsappBusinessIcon,
} from "hugeicons-react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/logo/logo.svg";
// import { useTheme } from "@mui/material";

const Header = React.memo(() => {
  const [scrollHeight, setScrollHeight] = React.useState(window.scrollY);
  const handleScroll = () => setScrollHeight(window.scrollY);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const theme = useTheme();

  return (
    <Wrapper
      sx={{ position: scrollHeight > 180 ? "fixed" : "absolute", top: 0 }}
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
            <Stack direction="row" spacing={1}>
              <a href="tel:+1234567890">
                <Li component="li" variant="body2">
                  <Call02Icon style={{ width: "20px" }} />
                </Li>
              </a>
              <a href="https://t.me/">
                <Li component="li" variant="body2">
                  <TelegramIcon style={{ width: "20px" }} />
                </Li>
              </a>
              <a href="https://wa.me/+234567890">
                <Li component="li" variant="body2">
                  <WhatsappBusinessIcon style={{ width: "20px" }} />
                </Li>
              </a>
            </Stack>
            {/* </a> */}
          </Ul>
        </Nav>
      </InnerWrapper>
    </Wrapper>
  );
});

export default Header;
