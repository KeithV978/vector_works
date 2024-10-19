import * as React from "react";
import { CardImg, ProjectLogo, StyledCard } from "./styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import { ViewIcon } from "hugeicons-react";

import CardImage from "../../assets/images/portfolio/card_bg.png";
import image from "../../assets/images/portfolio/moon-bot.png";

export const Cards = ({ item }) => {
  return (
    <StyledCard>
      <CardImg src={CardImage}>
        <ProjectLogo img={image} />
      </CardImg>
      <CardActionArea sx={{ width: "80%", margin: "1rem auto" }}>
        <Typography
          variant="h6"
          color="#ccc"
          textAlign="center"
          marginBottom={3}
          fontWeight={600}
        >
          Highonbase
        </Typography>
        <Typography variant="body2" color="#848383" textAlign="center">
          Highonbase is a memcoin with so so and so value iand having over 1
          billion in supply
        </Typography>
        <div
          style={{
            width: "fit-content",
            margin: "1rem auto",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "#ccc",
              borderRadius: "20px",
            }}
          >
            <ViewIcon color="#ccc" />
          </Button>
        </div>
      </CardActionArea>
    </StyledCard>
  );
};
