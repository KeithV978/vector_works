import { Image, PlanSectionWrapper } from "./styles";
import planeImage from "../../assets/images/contact/plane.png";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
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
      <Box sx={{ width: { sm: "70%", xs: "100%" } }}>
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: "tertiary.main" }}
          marginBottom={2}
        >
          Contact us for your web3 projects.
        </Typography>
        <Typography variant="body1">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make
        </Typography>
        <Typography
          variant="body1"
          marginBottom={2}
          marginTop={2}
          fontWeight={600}
        >
          vector@mail.com
        </Typography>
        <Stack direction="row" marginTop={1}>
          {[
            <TwitterIcon color="#fff" size={16} />,
            <TelegramIcon color="#fff" size={16} />,
            <WhatsappBusinessIcon color="#fff" size={16} />,
            <Mail01Icon color="#fff" size={16} />,
          ].map((item, index) => {
            return (
              <IconButton
                key={index}
                sx={{ backgroundColor: "tertiary.main", marginRight: "1rem" }}
              >
                {item}
              </IconButton>
            );
          })}
        </Stack>
      </Box>
    </PlanSectionWrapper>
  );
};
