import React from "react";
import {
  Back,
  Body,
  CardContainer,
  CardWrapper,
  Front,
  Image,
  ImageWrapper,
  Wrapper,
} from "./styles";

import Typography from "@mui/material/Typography";
// import { Heading } from "../../components/Heading";
// import { Button } from "../../components/Button";

// icons
import sc from "../../assets/icons/sc.png";
import dapps from "../../assets/icons/dapps.png";
import graphics from "../../assets/icons/graphics.png";
import web from "../../assets/icons/web_dev.png";
// import { useTheme } from "@mui/material";

// import { motion } from "framer-motion";
// import { ArrowUpRight01Icon } from "hugeicons-react";

export const Services = () => {
  // const theme = useTheme();
  return (
    <Wrapper id="services">
      <div>
        <Typography
          variant="h3"
          sx={{
            textAlign: { sm: "center", xs: "center" },
            paddingRight: ".5rem",
          }}
        >
          <span style={{ color: `#46d6ec` }}>What We Can </span>
          Do For You.
        </Typography>
        <Typography variant="h6" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Typography>
      </div>
      <Body>
        {/* Card 1 */}
        {[
          {
            image: sc,
            headText: "Smart Contracts",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            image: dapps,
            headText: "DAPPS",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            image: graphics,
            headText: "Graphics",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            image: web,
            headText: "Web Apps/Sites",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
        ].map((item, index) => {
          return (
            <CardContainer>
              <CardWrapper className="card">
                <Front className="front">
                  <ImageWrapper>
                    <Image src={item.image} />
                  </ImageWrapper>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    marginBottom="1rem"
                    color="#1c1c1c"
                  >
                    {item.headText}
                  </Typography>
                </Front>
                <Back className="back">
                  <Typography variant="h5" fontWeight={600} marginBottom="1rem">
                    {item.headText}
                  </Typography>
                  <Image src={item.image} />
                  <Typography variant="h6" marginTop="2rem">
                    {item.text}
                  </Typography>
                </Back>
              </CardWrapper>
            </CardContainer>
          );
        })}
      </Body>
    </Wrapper>
  );
};
