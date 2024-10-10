import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  // Circles,
  // HeroButton,
  HeroContents,
  HeroImage,
  HeroText,
  // TextGradient,
  Wrapper,
} from "./styles";
import { Button } from "../Button";
import { useTheme } from "@mui/material";

export const Hero = () => {
  const theme = useTheme();
  return (
    <Wrapper id="hero">
      <Container>
        <HeroContents>
          <HeroText>
            <Typography
              variant="h2"
              fontWeight={600}
              marginBottom="1rem"
              // maxWidth={500}
              // textAlign="center"
              // sx={{ margin: "initial auto" }}
            >
              {/* BRINGING YOUR WEB3 DREAMS TO LIFE.  */}
              <span style={{ color: `${[theme.palette.tertiary.main]}` }}>
                Bringing Your Web3
              </span>{" "}
              Dreams To Life.
              {/* <span style={{ color: `${[theme.palette.primary.main]}` }}>
            </span> */}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={300}
              // width={400}
              // sx={{ width: { sm: 400, xs: "100%" } }}
              // textAlign="center"
              margin="0 auto"
            >
              We are a leading web3 agency helping businesses thrive by
              providing state-of-the-art digital solutions.
            </Typography>
            {/* <div style={{ width: "fit-content", margin: "0 auto" }}> */}
            <Button bgColor={`${[theme.palette.tertiary.main]}`}>
              Get Started
            </Button>
            {/* </div> */}
          </HeroText>
          <HeroImage />
        </HeroContents>
      </Container>
    </Wrapper>
  );
};
