import * as React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../utils/links";
import { InnerWrapper, Logo, LogoWrapper, Nav, Ul, Wrapper } from "./styles";
import {
  // Mail01Icon,
  TelegramIcon,
  TwitterIcon,
  WhatsappBusinessIcon,
} from "hugeicons-react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/logo/logo.png";
import { Button, IconButton } from "@mui/material";
// import Drawer from "./Drawer";
// import { useTheme } from "@mui/material/";

const Header = React.memo(() => {
  const [scrollHeight, setScrollHeight] = React.useState(window.scrollY);
  // const [menuOpen, setMenuOpen] = React.useState(false);
  const handleScroll = () => setScrollHeight(window.scrollY);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleMenuOpen = () => {
  //   setMenuOpen(!menuOpen);
  // };
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
          <Ul>
            <li>
              <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                <TelegramIcon
                  style={{ color: "#ccc", width: "1rem", height: "1rem" }}
                />
                {/* <span
                  style={{
                    width: "20px",
                    // height: "1px",
                    border: "1px solid #fff",
                    borderColor: `${[theme.palette.primary.main]}`,
                    marginTop: ".3rem",
                  }}
                ></span> */}
              </IconButton>
            </li>
            <li>
              <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                <TwitterIcon
                  style={{ color: "#ccc", width: "1rem", height: "1rem" }}
                />
                {/* <span
                  style={{
                    width: "20px",
                    // height: "1px",
                    border: "1px solid #fff",
                    borderColor: `${[theme.palette.primary.main]}`,
                    marginTop: ".3rem",
                  }}
                ></span> */}
              </IconButton>
            </li>
            <li>
              <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                <WhatsappBusinessIcon
                  style={{ color: "#ccc", width: "1rem", height: "1rem" }}
                />
                {/* <span
                  style={{
                    width: "20px",
                    // height: "1px",
                    border: "1px solid #fff",
                    borderColor: `${[theme.palette.primary.main]}`,
                    marginTop: ".3rem",
                  }}
                ></span> */}
              </IconButton>
            </li>
            <li>
              <Button
                variant="outlined"
                sx={{
                  color: "#ccc",
                  borderColor: "#ccc",
                  borderRadius: "25px",
                  fontWeight: 500,
                }}
              >
                Contact Us
              </Button>
            </li>
          </Ul>
          {/* <IconButton
            onClick={handleMenuOpen}
            sx={{
              display: { sm: "none", xs: "block" },
              float: "left",
              transition: "ease all .3s",
              transform: menuOpen ? "rotate(-45deg)" : "",
            }}
          >
            <MenuCircleIcon color="#fcfcfc" />
          </IconButton> */}
        </Nav>
      </InnerWrapper>
      {/* <Drawer menuOpen={menuOpen} setMenuOpen={handleMenuOpen} /> */}
    </Wrapper>
  );
});

export default Header;
