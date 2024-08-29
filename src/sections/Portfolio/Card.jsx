import React from "react";
import Typography from "@mui/material/Typography";
import { EyeIcon } from "hugeicons-react";
import { CardImage, CardText, CardWrapper } from "./styles";
import { Button } from "../../components/Button";

export const ProjectCard = ({ data }) => {
  return (
    <CardWrapper>
      <CardImage
        sx={{
          transition: "ease all .3s",
          "&:hover + div.cont": {
            // display: "block",
            // opacity: 1,
            height: "100%",
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
        <a href={data.link}>
          <Button>
            See Live <EyeIcon style={{ width: "18px", marginLeft: ".5rem" }} />
          </Button>
        </a>
      </CardText>
    </CardWrapper>
  );
};
