import Typography from "@mui/material/Typography";
import {
  Circles,
  // HeroButton,
  HeroContents,
  HeroImage,
  HeroText,
  // TextGradient,
  Wrapper,
} from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "@mui/material";

export const Hero = () => {
  const theme = useTheme();
  return (
    <Wrapper id="hero">
      <HeroContents>
        <HeroImage />
        <HeroText>
          <Typography
            variant="h3"
            fontWeight={600}
            marginBottom="1rem"
            textAlign="center"
          >
            {/* BRINGING YOUR WEB3 DREAMS TO LIFE.  */}
            <span style={{ color: `${[theme.palette.primary.main]}` }}>
              Bringing{" "}
            </span>{" "}
            Your Web3 Dreams To{" "}
            <span style={{ color: `${[theme.palette.primary.main]}` }}>
              Life.
            </span>
          </Typography>
          <Typography
            variant="h6"
            fontWeight={300}
            // width={400}
            sx={{ width: { sm: 400, xs: "100%" } }}
            textAlign="center"
            margin="0 auto"
          >
            We are a leading web3 agency helping businesses thrive by providing
            state-of-the-art digital solutions.
          </Typography>
          <div style={{ width: "fit-content", margin: "0 auto" }}>
            <Button>Get Started</Button>
          </div>
        </HeroText>
      </HeroContents>

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
