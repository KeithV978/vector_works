import React from "react";
import {
  Card,
  CardImage,
  CardImageWrapper,
  Cards,
  CardText,
  CardTitle,
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
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          What We Can Do For You.
        </Typography>
        <Typography variant="body1" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Typography>
      </div>
      <div>
        <Cards>
          {[
            {
              title: "Smart Contract",
              text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              icon: sc,
            },
            {
              title: "DAPPs",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum sit amet, consectetur adipiscing elit, sed do",
              icon: dapps,
            },
            {
              title: "Graphics",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum, consectetur adipiscing elit, sed do",
              icon: graphics,
            },
            {
              title: "Web Design",
              text: "We build stylish, modern and useful web apps and sites. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              icon: web,
            },
            {
              title: "Telegram Bots",
              text: "We build very useful and highly functional telegram bots. amet, consectetur adipiscing elit, sed do",
              icon: web,
            },
            {
              title: "Blockchain Consulting",
              text: "We build stylish, modern and useful web apps and sites. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              icon: web,
            },
          ].map((item, index) => {
            return (
              <Card key={index}>
                <CardImageWrapper>
                  <CardImage src={item.icon} />
                </CardImageWrapper>
                <CardTitle variant="h6" fontWeight={700}>
                  {item.title}
                </CardTitle>
                <CardText variant="body1">{item.text}</CardText>
              </Card>
            );
          })}
        </Cards>
      </div>
    </Wrapper>
  );
};
