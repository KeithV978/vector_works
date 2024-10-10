import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../Projects/Hero";
import hbg from "../../assets/images/projects/e.jpg";
import { Wrapper } from "../Projects/styles";
import { Colorbar, TitleText } from "../../components/About/styles";
import {
  Call02Icon,
  NewTwitterIcon,
  TelegramIcon,
  WhatsappBusinessIcon,
} from "hugeicons-react";

const index = () => {
  return (
    <Wrapper>
      <Header />
      <Hero
        hbg={hbg}
        mainText={
          <Typography
            variant="h2"
            fontWeight={600}
            sx={{ color: "tertiary.main" }}
          >
            Who We Are?
          </Typography>
        }
        subText={
          <div>
            <Typography variant="body1">
              Web3 Solutions for Tomorrow Unlock the potential of blockchain,
              decentralized applications (dApps), and smart contracts with our
            </Typography>
            <IconButton>
              <NewTwitterIcon color="#fff" />
            </IconButton>
            <IconButton>
              <TelegramIcon color="#fff" />
            </IconButton>
            <IconButton>
              <WhatsappBusinessIcon color="#fff" />
            </IconButton>
            <IconButton>
              <Call02Icon color="#fff" />
            </IconButton>
          </div>
        }
      />
      <Container>
        <div
          style={{
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: { sm: "justify", xs: "justify" },
              lineHeight: "25px",
            }}
          >
            {/* <TitleText> */}
            {/* <PaintBrush04Icon color="inherit" width="50px" height="50px" /> */}
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <TitleText>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  sx={{
                    borderLeft: {
                      // sm: `5px solid ${[theme.palette.primary.main]}`,
                      // xs: "none",
                    },
                    // color: `${[theme.palette.tertiary.main]}`,
                    // paddingLeft: { sm: "2rem", xs: "" },
                    marginBottom: "1rem",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  We build{" "}
                </Typography>{" "}
              </TitleText>{" "}
              <Typography
                variant="h3"
                fontWeight={600}
                sx={{ color: "#fff", marginLeft: "1rem" }}
              >
                your visions
              </Typography>
            </Box>
            {/* </TitleText> */}
            <Colorbar sx={{ marginLeft: 0 }} /> Welcome to the Future of the
            Web: Web3 Solutions for Tomorrow Unlock the potential of blockchain,
            decentralized applications (dApps), and smart contracts with our
            cutting-edge Web3 services. Embrace the future of the internet
            today. Build secure, scalable, and decentralized applications on
            popular blockchain platforms like Ethereum, Binance Smart Chain, and
            Polkadot.
            <Colorbar sx={{ width: "10%" }} /> From strategic planning to
            execution, we guide businesses and startups towards adopting
            decentralized technologies. Ready to transform your business with
            blockchain and decentralized solutions? Contact us for a
            consultation and take the first step toward your Web3 journey.
          </Typography>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default index;
