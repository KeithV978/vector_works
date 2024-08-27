import React from "react";
import { CardImage, CardText, CardWrapper } from "./styles";
import { Typography } from "@mui/material";
import { HeroButton } from "../Hero/styles";
import { EyeIcon } from "hugeicons-react";

export const ProjectCard = ({ data }) => {
  return (
    <CardWrapper item xs={12} sm={3}>
      <CardImage
        sx={{
          transition: "ease all .3s",
          "&:hover + div.cont": {
            display: "block",
            opacity: 1,
          },
        }}
      >
        <img
          src={data.photo}
          alt={data.title}
          style={{ display: "inline-block", width: "inherit" }}
        />
      </CardImage>
      <Typography
        variant="body1"
        fontWeight={600}
        margin="1rem auto .5rem"
        textAlign="center"
      >
        {data.title}
      </Typography>
      <CardText className="cont">
        <Typography
          variant="body1"
          textAlign="center"
          sx={
            {
              // reduce texts to only 3 lines
            }
          }
        >
          {data.text}
        </Typography>
        <HeroButton
          sx={{
            margin: "auto",
            display: "flex",
            background: "none",
            color: "white",
            border: "1px solid #fff",
          }}
          href={data.link}
        >
          See Live <EyeIcon style={{ width: "18px", marginLeft: ".5rem" }} />
        </HeroButton>
      </CardText>
    </CardWrapper>
  );
};
