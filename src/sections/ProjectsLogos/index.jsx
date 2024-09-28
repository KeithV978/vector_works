import { Slide, Slider, SlideTrack, Wrapper } from "./styles";
import Typography from "@mui/material/Typography";

const index = () => {
  return (
    <Wrapper>
      <Slider>
        <SlideTrack>
          {["dolanduck", "$high", "$wifbag", "$barklord", "EthBomb"].map(
            (item, index) => {
              return (
                <Slide key={index} className="slide">
                  {/* <img src={item} height="100" width="250" alt="" /> */}
                  <Typography variant="h4">{item}</Typography>
                </Slide>
              );
            }
          )}
        </SlideTrack>
        <SlideTrack>
          {["Dolanduck", "$HIGH", "$WIFBAG", "$BARKLORD", "ETHBOMB"].map(
            (item, index) => {
              return (
                <Slide key={index} className="slide">
                  {/* <img src={item} height="100" width="250" alt="" /> */}
                  <Typography variant="h4">{item}</Typography>
                </Slide>
              );
            }
          )}
        </SlideTrack>
      </Slider>
    </Wrapper>
  );
};
export default index;
