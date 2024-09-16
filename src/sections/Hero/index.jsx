import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
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
import // ArrowDownDoubleIcon,
//  ArrowRight04Icon
"hugeicons-react";
import { Button } from "../../components/Button";
import { useTheme } from "@mui/material";

export const Hero = () => {
  const theme = useTheme();
  return (
    <Wrapper id="hero">
      <HeroContents>
        <HeroImage />
        <HeroText>
          {/* <TextGradient>
            <Typography variant="h6" fontWeight={600}>
              VectorWorks
            </Typography>
          </TextGradient> */}
          <Typography
            variant="h2"
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
            width={400}
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
        {/* <Link href="#about" color="inherit">
          <ArrowDownDoubleIcon size={35} />
        </Link> */}
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
