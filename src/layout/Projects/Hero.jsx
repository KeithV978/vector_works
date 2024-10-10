import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { HeroWrapper } from "./styles";

export const Hero = ({ hbg, mainText, subText }) => {
  return (
    <HeroWrapper hbg={hbg}>
      <Container>
        <Box
          sx={{
            width: 500,
          }}
        >
          {mainText}
          <br />
          {subText}
        </Box>
      </Container>
    </HeroWrapper>
  );
};
