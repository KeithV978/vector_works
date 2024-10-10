import React from "react";
import {
  Colorbar,
  // ImageWrapper,
  TitleText,
  // TitleText,
  Wrapper,
} from "./styles";
// import { Heading } from "../../components/Heading";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Circles } from "../Hero/styles";
import { Link } from "react-router-dom";
// import phonelap from "../../assets/images/about/web3world.png";
// import { useTheme } from "@mui/material";
// import { PaintBrush04Icon } from "hugeicons-react";

const About = () => {
  // const theme = useTheme();
  return (
    <Wrapper id="about">
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "1rem", sm: "" },
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
          <Colorbar sx={{ marginLeft: 0 }} /> Welcome to the Future of the Web:
          Web3 Solutions for Tomorrow Unlock the potential of blockchain,
          decentralized applications (dApps), and smart contracts with our
          cutting-edge Web3 services. Embrace the future of the internet today.
          Build secure, scalable, and decentralized applications on popular
          blockchain platforms like Ethereum, Binance Smart Chain, and Polkadot.
          <Colorbar sx={{ width: "10%" }} /> From strategic planning to
          execution, we guide businesses and startups towards adopting
          decentralized technologies. Ready to transform your business with
          blockchain and decentralized solutions? Contact us for a consultation
          and take the first step toward your Web3 journey.
          <Link to="/about">Learn More</Link>
        </Typography>
        {/* <ImageWrapper>
          <img
            src={phonelap}
            alt="about us"
            style={{ display: "inline-block", width: "100%" }}
          />
        </ImageWrapper> */}
      </Stack>
      <Circles>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </Circles>
    </Wrapper>
  );
};

export default About;
