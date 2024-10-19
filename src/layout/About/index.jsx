import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../Projects/Hero";
import hbg from "../../assets/images/projects/b.jpg";
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
          <Typography variant="h2" fontWeight={700}>
            Who We Are?
          </Typography>
        }
        subText={
          <Stack
            direction="row"
            gap={2}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "25px",
              padding: ".3rem",
              width: "fit-content",
            }}
          >
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
          </Stack>
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
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <TitleText>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  sx={{
                    marginBottom: "1rem",
                    textAlign: "left",
                  }}
                >
                  We build your visions
                </Typography>{" "}
              </TitleText>
            </Box>
            <Colorbar sx={{ marginLeft: 0 }} /> Welcome to the Future of the
            Web: Web3 Solutions for Tomorrow Unlock the potential of blockchain,
            decentralized applications (dApps), and smart contracts with our
            cutting-edge Web3 services. Embrace the future of the internet
            today. Build secure, scalable, and decentralized applications on
            popular blockchain platforms like Ethereum, Binance Smart Chain, and
            Polkadot. From strategic planning to execution, we guide businesses
            and startups towards adopting decentralized technologies. Ready to
            transform your business with blockchain and decentralized solutions?
            Contact us for a consultation and take the first step toward your
            Web3 journey. From strategic planning to execution, we guide
            businesses and startups towards adopting decentralized technologies.
            Ready to transform your business with blockchain and decentralized
            solutions? Contact us for a consultation and take the first step
            toward your Web3 journey.
            <br /> From strategic planning to execution, we guide businesses and
            startups towards adopting decentralized technologies. Ready to
            transform your business with blockchain and decentralized solutions?
            Contact us for a consultation and take the first step toward your
            Web3 journey.
          </Typography>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default index;
