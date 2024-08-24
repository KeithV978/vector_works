import Typography from "@mui/material/Typography";
import AIRobot from "../../assets/images/hero/ai-robot.png";
import {
  BottomArrow,
  HeroButton,
  HeroContents,
  HeroImage,
  HeroText,
  Image,
  TextGradient,
  Wrapper,
} from "./styles";
import { ArrowDown04Icon, ArrowRight04Icon } from "hugeicons-react";

export const Hero = () => {
  return (
    <Wrapper id="hero">
      <HeroContents>
        <HeroImage>
          <Image src={AIRobot} alt="ai-robot" />
        </HeroImage>
        <HeroText>
          <TextGradient>
            <Typography variant="h6" fontWeight={600}>
              VectorWorks
            </Typography>
          </TextGradient>
          <Typography variant="h3" fontWeight={600} marginBottom="1rem">
            BRINGING YOUR WEB3 DREAMS TO LIFE.
          </Typography>
          <Typography variant="h6" width={400}>
            We are a leading web3 agency helping businesses thrive by providing
            state-of-the-art digital solutions.
          </Typography>

          <HeroButton>
            Learn More <ArrowRight04Icon />
          </HeroButton>
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
      >
        <ArrowDown04Icon size={40} />
      </BottomArrow>
    </Wrapper>
  );
};
