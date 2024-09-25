import React from "react";
import { Image, PlanSectionWrapper } from "./styles";
import planeImage from "../../assets/images/contact/plane.png";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  Mail01Icon,
  TelegramIcon,
  TwitterIcon,
  WhatsappBusinessIcon,
} from "hugeicons-react";

export const PlaneSection = () => {
  return (
    <PlanSectionWrapper>
      <Image src={planeImage} alt="paper airplane" />
      <div>
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: "tertiary.main" }}
          marginBottom={2}
        >
          Contact us for your web3 jobs today.
        </Typography>
        <Typography variant="body1">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make
        </Typography>
        <Stack direction="row" marginTop={1}>
          <IconButton
            sx={{ backgroundColor: "tertiary.main", margin: "0 .5rem" }}
          >
            <TwitterIcon color="#fff" size={16} />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "tertiary.main", margin: "0 .5rem" }}
          >
            <TelegramIcon color="#fff" size={16} />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "tertiary.main", margin: "0 .5rem" }}
          >
            <WhatsappBusinessIcon color="#fff" size={16} />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "tertiary.main", margin: "0 .5rem" }}
          >
            <Mail01Icon color="#fff" size={16} />
          </IconButton>
        </Stack>
      </div>
    </PlanSectionWrapper>
  );
};
