import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  BottomArrow,
  Circles,
  // HeroButton,
  HeroContents,
  HeroImage,
  HeroText,
  // TextGradient,
  Wrapper,
} from "./styles";
import {
  ArrowDownDoubleIcon,
  //  ArrowRight04Icon
} from "hugeicons-react";
import { Button } from "../../components/Button";

export const Hero = () => {
  return (
    <Wrapper id="hero">
      <HeroContents>
        <HeroText>
          {/* <TextGradient>
            <Typography variant="h6" fontWeight={600}>
              VectorWorks
            </Typography>
          </TextGradient> */}
          <Typography variant="h2" fontWeight={600} marginBottom="1rem">
            {/* BRINGING YOUR WEB3 DREAMS TO LIFE.  */}
            Bringing Your Web3 Dreams To Life.
          </Typography>
          <Typography variant="h6" width={400}>
            We are a leading web3 agency helping businesses thrive by providing
            state-of-the-art digital solutions.
          </Typography>

          <Button>Get Started</Button>
        </HeroText>
        <HeroImage />
      </HeroContents>
      <BottomArrow
        // initial={{ marginTop: "-10px" }}
        animate={{ y: 20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        style={{ cursor: "pointer" }}
      >
        <Link href="#about" color="inherit">
          <ArrowDownDoubleIcon size={40} />
        </Link>
      </BottomArrow>
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
