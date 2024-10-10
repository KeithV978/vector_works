import * as React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../utils/links";
import { InnerWrapper, Nav, Ul, Wrapper } from "./styles";
import {
  MenuCircleIcon,
  // Mail01Icon,
} from "hugeicons-react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import logo from "../../assets/images/logo/logo.png";
import { Button, IconButton } from "@mui/material";
// import { TextGradient } from "../../sections/Hero/styles";
import Drawer from "./Drawer";
// import { useTheme } from "@mui/material/";

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
      <Container>
        <InnerWrapper>
          <Link to={HOME}>
            {/* <TextGradient> */}
            <Stack direction="row">
              {/* <LogoWrapper>
                <Logo src={logo} alt="vector logo" /> 
              </LogoWrapper> */}
              <Typography variant="h6" fontWeight={700} color="#fff">
                Vectorworks
              </Typography>
            </Stack>
            {/* </TextGradient> */}
          </Link>
          <Nav>
            <Ul>
              <li>
                <Link style={{ color: "#fff" }} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff" }} to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff" }} to="/about">
                  About
                </Link>
              </li>

              <li>
                <Button
                  variant="contained"
                  sx={{
                    color: "#1c1c1c",
                    backgroundColor: "#ccc",
                    borderRadius: "25px",
                    fontWeight: 600,
                  }}
                >
                  Contact Us
                </Button>
              </li>
            </Ul>
          </Nav>
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
        </InnerWrapper>
        <Drawer menuOpen={menuOpen} setMenuOpen={handleMenuOpen} />
      </Container>
    </Wrapper>
  );
});

export default Header;
